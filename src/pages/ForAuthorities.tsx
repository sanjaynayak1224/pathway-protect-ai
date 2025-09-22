import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Users,
  Brain,
  AlertTriangle,
  Eye,
  Database,
  Clock,
  TrendingUp,
  FileText,
  Radio,
  CheckCircle,
  Zap,
} from "lucide-react";

const ForAuthorities = () => {
  const authorityFeatures = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Real-time Monitoring Dashboard",
      description: "Comprehensive view of all tourists with live location tracking, safety scores, and status updates.",
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Instant Alert System",
      description: "Immediate notifications for emergencies, missing persons, and high-risk situations with automated response protocols.",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered Analytics",
      description: "Predictive insights on tourist behavior patterns, risk assessment, and anomaly detection.",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Digital Identity Verification",
      description: "Secure access to tourist IDs, KYC information, travel itineraries, and emergency contacts.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Automated E-FIR Generation",
      description: "Instant electronic FIR creation for missing person cases with complete digital evidence logging.",
    },
    {
      icon: <Radio className="h-6 w-6" />,
      title: "Multi-Agency Coordination",
      description: "Seamless communication between police, medical teams, rescue services, and tourism boards.",
    },
  ];

  const benefits = [
    "Reduce emergency response time by up to 70%",
    "Automate routine safety monitoring tasks",
    "Access comprehensive tourist behavior analytics",
    "Streamline inter-agency communication",
    "Generate detailed incident reports instantly",
    "Proactively identify potential safety risks",
    "Coordinate with international emergency services",
    "Maintain secure, tamper-proof digital records",
  ];

  const capabilities = [
    {
      title: "Tourist Tracking",
      description: "Real-time location monitoring with geofencing and route verification",
      icon: Users,
      stats: "2,847 Active Tourists",
    },
    {
      title: "Risk Assessment",
      description: "AI-driven risk scoring based on location, behavior, and environmental factors",
      icon: Brain,
      stats: "95% Accuracy Rate",
    },
    {
      title: "Emergency Response",
      description: "Automated dispatch system with nearest resource allocation",
      icon: Zap,
      stats: "2.3 Min Avg Response",
    },
    {
      title: "Data Analytics",
      description: "Comprehensive reporting and predictive analytics for safety planning",
      icon: TrendingUp,
      stats: "156 Zones Monitored",
    },
  ];

  const agencies = [
    {
      name: "Tourism Police",
      role: "Primary response and tourist assistance",
      features: ["Real-time alerts", "Mobile dispatch", "Tourist interaction logs"],
    },
    {
      name: "Emergency Medical",
      role: "Health emergency response and coordination",
      features: ["Medical history access", "Location routing", "Ambulance dispatch"],
    },
    {
      name: "Local Administration",
      role: "Policy oversight and resource allocation",
      features: ["Analytics dashboard", "Incident reports", "Budget optimization"],
    },
    {
      name: "Tourism Board",
      role: "Tourism promotion and safety assurance",
      features: ["Safety statistics", "Tourist satisfaction", "Marketing insights"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Empowering Authorities with Smart Safety
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Advanced monitoring and response tools for law enforcement, emergency services, 
              and tourism authorities to ensure tourist safety and rapid incident response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary">
                Request Demo
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Professional-Grade Monitoring Tools
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authorityFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <div className="text-primary-foreground">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Dashboard */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Command Center Capabilities
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <capability.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{capability.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    {capability.stats}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Transform Your Safety Operations
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Secura's advanced platform revolutionizes how authorities monitor, respond to, 
                and prevent tourist safety incidents with cutting-edge AI and real-time coordination.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="p-8 bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-primary" />
                  Authority Dashboard Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <p className="text-2xl font-bold text-primary">2,847</p>
                      <p className="text-sm text-muted-foreground">Active Tourists</p>
                    </div>
                    <div className="p-4 bg-success/10 rounded-lg">
                      <p className="text-2xl font-bold text-success">98.7%</p>
                      <p className="text-sm text-muted-foreground">Safety Score</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-warning/10 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-warning" />
                      <span className="text-sm font-medium">3 Active Alerts</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      2 geo-fence violations, 1 missed check-in
                    </p>
                  </div>
                  
                  <Button className="w-full bg-gradient-primary">
                    Access Full Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Multi-Agency Coordination */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Multi-Agency Coordination
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {agencies.map((agency, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-primary" />
                    {agency.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{agency.role}</p>
                  <div className="space-y-2">
                    {agency.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-hero p-12 text-center">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                Ready to Implement Advanced Safety Monitoring?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Join leading tourism authorities who trust Secura for comprehensive safety management. 
                Schedule a personalized demonstration today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="shadow-lg">
                  Schedule Demo
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Contact Sales
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-foreground">50+</p>
                  <p className="text-sm text-primary-foreground/80">Deployments</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-foreground">99.9%</p>
                  <p className="text-sm text-primary-foreground/80">Uptime</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-foreground">24/7</p>
                  <p className="text-sm text-primary-foreground/80">Support</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ForAuthorities;