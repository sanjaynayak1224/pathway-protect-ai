import { createContext, useContext, useState, ReactNode } from 'react';
import { Shield, AlertTriangle, MapPin } from 'lucide-react';

// --- TYPE DEFINITIONS ---
export interface Geofence {
  id: number;
  name: string;
  risk: "High" | "Medium" | "Low";
  coords: [number, number][];
}

export interface Alert {
  id: number;
  type: string;
  message: string;
  time: string;
  status: "active" | "investigating" | "resolved";
}

export interface ActivityLog {
    id: number;
    action: string;
    description: string;
    time: string;
    icon: React.ElementType;
}

interface DashboardState {
  activeTourists: number;
  alerts: Alert[];
  geofences: Geofence[];
  recentActivity: ActivityLog[];
  addGeofence: (fence: Omit<Geofence, 'id'>) => void;
  updateGeofence: (fence: Geofence) => void;
  deleteGeofence: (id: number) => void;
  resolveAlert: (id: number) => void;
}

// --- INITIAL MOCK DATA ---
const initialAlerts: Alert[] = [
    { id: 1, type: "High Risk", message: "Tourist entered Restricted Area 7", time: "2m ago", status: "active" },
    { id: 2, type: "Location Drop", message: "Signal lost from tourist ID #TID-2847", time: "15m ago", status: "investigating" },
];

const initialGeofences: Geofence[] = [
    { id: 1, name: "Restricted Area 7", risk: "High", coords: [[27.7, 85.3], [27.7, 85.35], [27.75, 85.35], [27.75, 85.3]] },
];

const initialRecentActivity: ActivityLog[] = [
    { id: 1, action: "Emergency Response", description: "Medical team dispatched to coordinates 27.7172°N, 85.3240°E", time: "5 minutes ago", icon: AlertTriangle },
    { id: 2, action: "ID Verification", description: "New tourist ID generated at Tribhuvan Airport", time: "12 minutes ago", icon: Shield },
];


const DashboardContext = createContext<DashboardState | undefined>(undefined);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [activeTourists, setActiveTourists] = useState(2847);
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts);
  const [geofences, setGeofences] = useState<Geofence[]>(initialGeofences);
  const [recentActivity, setRecentActivity] = useState<ActivityLog[]>(initialRecentActivity);

  const logActivity = (action: string, description: string, icon: React.ElementType) => {
    const newActivity: ActivityLog = {
        id: Date.now(),
        action,
        description,
        icon,
        time: "Just now",
    };
    setRecentActivity(prev => [newActivity, ...prev].slice(0, 5)); // Keep the last 5 activities
  };

  const addGeofence = (fenceData: Omit<Geofence, 'id'>) => {
    const newFence: Geofence = { id: Date.now(), ...fenceData };
    setGeofences(prev => [...prev, newFence]);
    logActivity("Zone Created", `New '${newFence.risk}' risk geofence "${newFence.name}" was created.`, MapPin);
  };

  const updateGeofence = (updatedFence: Geofence) => {
    setGeofences(prev => prev.map(f => f.id === updatedFence.id ? updatedFence : f));
    logActivity("Zone Updated", `Geofence "${updatedFence.name}" updated to '${updatedFence.risk}' risk.`, MapPin);
  };

  const deleteGeofence = (id: number) => {
    const fenceName = geofences.find(f => f.id === id)?.name || 'Unknown Zone';
    setGeofences(prev => prev.filter(fence => fence.id !== id));
    logActivity("Zone Deleted", `Geofence "${fenceName}" was removed.`, MapPin);
  };
  
  const resolveAlert = (id: number) => {
      let resolvedAlertMessage = 'Alert resolved.';
      let resolvedAlertType = 'Info';

      setAlerts(prev =>
          prev.map(alert => {
              if (alert.id === id) {
                  resolvedAlertMessage = alert.message;
                  resolvedAlertType = alert.type;
                  return { ...alert, status: 'resolved' };
              }
              return alert;
          }),
      );
      logActivity("Alert Resolved", `'${resolvedAlertType}' alert resolved: "${resolvedAlertMessage}"`, Shield);
  };

  const value = {
    activeTourists,
    alerts,
    geofences,
    recentActivity,
    addGeofence,
    updateGeofence,
    deleteGeofence,
    resolveAlert,
  };

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

