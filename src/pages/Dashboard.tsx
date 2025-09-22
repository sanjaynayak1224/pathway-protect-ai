import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  AlertTriangle,
  MapPin,
  Activity,
  Eye,
  Shield,
  Clock,
  TrendingUp,
  Bell,
  Filter,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Active Tourists",
      value: "2,847",
      change: "+12%",
      icon: Users,
      color: "text-primary",
    },
    {
      title: "Safety Alerts",
      value: "3",
      change: "-25%",
      icon: AlertTriangle,
      color: "text-warning",
    },
    {
      title: "Monitored Zones",
      value: "156",
      change: "+8%",
      icon: MapPin,
      color: "text-secondary",
    },
    {
      title: "Response Time",
      value: "2.3m",
      change: "-15%",
      icon: Clock,
      color: "text-success",
    },
  ];

  const alerts = [
    {
      id: 1,
      type: "High Risk",
      message: "Tourist entered restricted zone - Restricted Area 7",
      time: "2 minutes ago",
      status: "active",
    },
    {
      id: 2,
      type: "Location Drop",
      message: "Signal lost from tourist ID #TID-2847 in Forest Area",
      time: "15 minutes ago",
      status: "investigating",
    },
    {
      id: 3,
      type: "Route Deviation",
      message: "Tourist deviated from planned route by 5km",
      time: "1 hour ago",
      status: "resolved",
    },
  ];

  const recentActivity = [
    {
      action: "Emergency Response",
      description: "Medical team dispatched to coordinates 27.7172°N, 85.3240°E",
      time: "5 minutes ago",
      icon: AlertTriangle,
    },
    {
      action: "ID Verification",
      description: "New tourist ID generated at Tribhuvan Airport",
      time: "12 minutes ago",
      icon: Shield,
    },
    {
      action: "Zone Update",
      description: "High-risk zone boundaries updated for Everest Base Camp",
      time: "1 hour ago",
      icon: MapPin,
    },
    {
      action: "Safety Score",
      description: "Tourist safety score improved to 95/100",
      time: "2 hours ago",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Tourism Safety Dashboard
              </h1>
              <p className="text-muted-foreground mt-2">
                Real-time monitoring and analytics for tourist safety management
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                View Map
              </Button>
              <Button size="sm" className="bg-gradient-primary">
                <Bell className="h-4 w-4 mr-2" />
                Alerts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-success">{stat.change} from last week</p>
                    </div>
                    <div className={`p-3 rounded-lg bg-primary/10 ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Active Alerts */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  Active Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alerts.map((alert) => (
                    <div key={alert.id} className="p-4 border border-border rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge 
                              variant={alert.status === 'active' ? 'destructive' : 
                                      alert.status === 'investigating' ? 'default' : 'secondary'}
                            >
                              {alert.type}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{alert.time}</span>
                          </div>
                          <p className="text-sm text-foreground">{alert.message}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <activity.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">
                          {activity.action}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.description}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map View Preview */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-secondary" />
                Tourist Distribution Heat Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive map view would display here</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Real-time tourist locations, risk zones, and emergency services
                  </p>
                  <Button className="mt-4 bg-gradient-primary">
                    Open Full Map View
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Overview */}
      <section className="pb-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-center text-foreground mb-12">
            Dashboard Capabilities
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Tourist Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time location and status monitoring for all registered tourists
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <AlertTriangle className="h-8 w-8 text-warning mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Alert Management</h3>
                <p className="text-sm text-muted-foreground">
                  Automated incident detection and emergency response coordination
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <TrendingUp className="h-8 w-8 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive reports on tourist patterns and safety metrics
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Eye className="h-8 w-8 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Live Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  24/7 surveillance with AI-powered anomaly detection
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;