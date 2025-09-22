import { useState } from "react";
import { MapContainer, TileLayer, Polygon, Tooltip, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDashboard, Geofence } from "@/context/DashboardContext";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Edit, Trash2, PlusCircle, Search, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Coords { lat: number; lon: number; }
type GeofenceRisk = "High" | "Medium" | "Low";

const GeofenceManager = () => {
  const { geofences, addGeofence, updateGeofence, deleteGeofence } = useDashboard();
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingFence, setEditingFence] = useState<Geofence | null>(null);

  const [placeName, setPlaceName] = useState("");
  const [diameter, setDiameter] = useState(1000);
  const [risk, setRisk] = useState<GeofenceRisk>("Low");
  const [searchedCoords, setSearchedCoords] = useState<Coords | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const { toast } = useToast();

  const openDialogForEdit = (fence: Geofence) => {
    setEditingFence(fence);
    setPlaceName(fence.name);
    setRisk(fence.risk);
    // Note: Diameter and location are not editable after creation in this version for simplicity.
    // The framework is here to add that functionality if needed.
    setSearchedCoords(null); // Clear any previous search
    setIsDialogOpen(true);
  };

  const openDialogForAdd = () => {
    setEditingFence(null);
    setPlaceName("");
    setDiameter(1000);
    setRisk("Low");
    setSearchedCoords(null);
    setIsDialogOpen(true);
  };

  const handleSearchPlace = async () => {
    if (!placeName.trim()) {
        toast({ title: "Search Error", description: "Please enter a place name to search.", variant: "destructive" });
        return;
    }
    setIsSearching(true);
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(placeName)}`);
        const data = await response.json();
        if (data && data.length > 0) {
            const { lat, lon } = data[0];
            setSearchedCoords({ lat: parseFloat(lat), lon: parseFloat(lon) });
            toast({ title: "Location Found!", description: `Coordinates for ${data[0].display_name} have been fetched.` });
        } else {
            setSearchedCoords(null);
            toast({ title: "Not Found", description: `Could not find coordinates for "${placeName}".`, variant: "destructive" });
        }
    } catch (error) {
        setSearchedCoords(null);
        toast({ title: "API Error", description: "Failed to fetch coordinates. Please try again.", variant: "destructive" });
    } finally {
        setIsSearching(false);
    }
  };
  
  const createCirclePolygon = (center: Coords, radiusInMeters: number): [number, number][] => {
    const points = 64;
    const coords: [number, number][] = [];
    const earthRadius = 6378137; 
    const lat = center.lat * (Math.PI / 180);
    const lon = center.lon * (Math.PI / 180);
    for (let i = 0; i < points; i++) {
        const angle = (i / points) * (2 * Math.PI);
        const dx = radiusInMeters * Math.cos(angle);
        const dy = radiusInMeters * Math.sin(angle);
        const newLat = lat + (dy / earthRadius);
        const newLon = lon + (dx / (earthRadius * Math.cos(lat)));
        coords.push([newLat * (180 / Math.PI), newLon * (180 / Math.PI)]);
    }
    coords.push(coords[0]); // Close the circle
    return coords;
  };

  const handleSave = () => {
    if (editingFence) {
      // --- UPDATE LOGIC ---
      const updatedFence = { ...editingFence, name: placeName, risk };
      updateGeofence(updatedFence);
      toast({ title: "Success!", description: `Geofence "${placeName}" has been updated.` });
    } else {
      // --- ADD LOGIC ---
      if (!searchedCoords) {
        toast({ title: "Error", description: "Please search for a location first.", variant: "destructive" });
        return;
      }
      addGeofence({ name: placeName, risk: risk, coords: createCirclePolygon(searchedCoords, diameter / 2) });
      toast({ title: "Success!", description: `Geofence "${placeName}" created.` });
    }
    setIsDialogOpen(false);
  };

  const handleDeleteGeofence = (id: number, name: string) => {
    deleteGeofence(id);
    toast({ title: "Zone Removed", description: `"${name}" has been deleted.` });
  };

  const getRiskColor = (risk: GeofenceRisk) => {
    switch (risk) {
      case "High": return { path: { color: "hsl(var(--destructive))", fillColor: "hsl(var(--destructive))", fillOpacity: 0.2 }, badge: "destructive" as const };
      case "Medium": return { path: { color: "hsl(var(--warning))", fillColor: "hsl(var(--warning))", fillOpacity: 0.2 }, badge: "default" as const };
      case "Low": default: return { path: { color: "hsl(var(--success))", fillColor: "hsl(var(--success))", fillOpacity: 0.2 }, badge: "secondary" as const };
    }
  };

  return (
    <Card className="bg-gradient-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-secondary" />
            Geofence Management
          </div>
           <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={openDialogForAdd}><PlusCircle className="mr-2 h-4 w-4" /> Add New Zone</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader><DialogTitle>{editingFence ? 'Edit' : 'Add New'} Geofence Zone</DialogTitle></DialogHeader>
              <div className="grid gap-4 py-4">
                 <div className="space-y-2">
                  <Label htmlFor="place">Place Name</Label>
                  <div className="flex gap-2">
                    <Input id="place" value={placeName} onChange={(e) => setPlaceName(e.target.value)} placeholder="e.g., India Gate, New Delhi" />
                    {!editingFence && (
                      <Button onClick={handleSearchPlace} disabled={isSearching}>
                        {isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
                      </Button>
                    )}
                  </div>
                </div>
                 {searchedCoords && <p className="text-xs text-center text-success">Location found at {searchedCoords.lat.toFixed(4)}, {searchedCoords.lon.toFixed(4)}</p>}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="diameter">Diameter (meters)</Label>
                        <Input id="diameter" type="number" value={diameter} onChange={(e) => setDiameter(Number(e.target.value))} disabled={!!editingFence} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="risk">Risk Level</Label>
                        <Select onValueChange={(value: GeofenceRisk) => setRisk(value)} value={risk}>
                            <SelectTrigger><SelectValue placeholder="Select risk" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Low">Low</SelectItem>
                                <SelectItem value="Medium">Medium</SelectItem>
                                <SelectItem value="High">High</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
                <Button onClick={handleSave} disabled={isSearching || (!editingFence && !searchedCoords)}>Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid lg:grid-cols-2 gap-6">
        <div className="h-[450px] rounded-lg overflow-hidden border relative z-0">
          <MapContainer center={[27.7172, 85.3240]} zoom={11} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {geofences.map((fence) => (
              <Polygon key={fence.id} positions={fence.coords as any} pathOptions={getRiskColor(fence.risk).path}>
                <Tooltip sticky>{fence.name} - {fence.risk} Risk</Tooltip>
              </Polygon>
            ))}
            {searchedCoords && <CircleMarker center={[searchedCoords.lat, searchedCoords.lon]} radius={6} pathOptions={{ color: 'hsl(var(--primary))' }} />}
          </MapContainer>
        </div>
        <div className="max-h-[450px] overflow-y-auto">
          <Table>
            <TableHeader><TableRow><TableHead>Zone Name</TableHead><TableHead>Risk</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
            <TableBody>
              {geofences.map((fence) => (
                <TableRow key={fence.id}>
                  <TableCell className="font-medium">{fence.name}</TableCell>
                  <TableCell><Badge variant={getRiskColor(fence.risk).badge}>{fence.risk}</Badge></TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => openDialogForEdit(fence)}><Edit className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteGeofence(fence.id, fence.name)}><Trash2 className="h-4 w-4" /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default GeofenceManager;