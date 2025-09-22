import Navigation from "@/components/Navigation";
import FeatureCard from "@/components/FeatureCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Smartphone,
  Brain,
  MapPin,
  Users,
  Globe,
  AlertTriangle,
  Eye,
  Lock,
  Database,
  Zap,
  CheckCircle,
} from "lucide-react";

const Features = () => {
  const coreFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Blockchain-Based Digital ID",
      description: "Secure, tamper-proof tourist identification with KYC integration, trip itinerary, and emergency contacts stored on blockchain.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Smart Mobile Application",
      description: "Auto-assigned safety scores, geo-fencing alerts, panic button with live location sharing, and optional family tracking.",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Anomaly Detection",
      description: "Machine learning algorithms detect sudden location drops, prolonged inactivity, route deviations, and distress behaviors.",
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Real-time Dashboards",
      description: "Live visualization of tourist clusters, heat maps of high-risk zones, alert history, and last known locations for authorities.",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "IoT Smart Wearables",
      description: "Smart bands and tags for high-risk areas with continuous health monitoring, location signals, and manual SOS features.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multilingual Platform",
      description: "Support for 10+ Indian languages and English with voice/text emergency access for elderly and disabled travelers.",
    },
  ];

  const technicalFeatures = [
    {
      icon: <Lock className="h-6 w-6" />,
      title: "End-to-End Encryption",
      description: "Military-grade encryption ensures all data transmission and storage meets highest security standards.",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Automated E-FIR Generation",
      description: "Instant electronic First Information Report generation for missing person cases with complete evidence logging.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Rapid Response System",
      description: "Sub-minute emergency response with automated alert dispatch to nearest police units and medical facilities.",
    },
  ];

  const benefitsList = [
    "Real-time safety monitoring and alerts",
    "Predictive risk assessment using AI",
    "Instant emergency response coordination",
    "Secure blockchain-based identity verification",
    "Multi-language accessibility support",
    "IoT integration for remote area monitoring",
    "Automated incident documentation",
    "Family and authority notification systems",
    "Privacy-compliant data handling",
    "24/7 monitoring and support",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive Safety Features
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how Secura's advanced technology stack ensures tourist safety through 
              AI-powered monitoring, blockchain security, and real-time response systems.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Core Platform Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {coreFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={index < 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Advanced Technical Capabilities
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {technicalFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                AI-Powered Safety Intelligence
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our advanced machine learning algorithms continuously analyze tourist behavior patterns, 
                location data, and environmental factors to predict and prevent potential safety incidents.
              </p>
              
              <div className="space-y-4">
                {benefitsList.map((benefit, index) => (
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
                  <Brain className="h-8 w-8 text-primary" />
                  Smart Detection System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Behavioral Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Real-time analysis of movement patterns, communication frequency, and activity levels.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Risk Assessment</h4>
                    <p className="text-sm text-muted-foreground">
                      Dynamic safety scoring based on location, time, weather, and historical incident data.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Predictive Alerts</h4>
                    <p className="text-sm text-muted-foreground">
                      Proactive notifications before potential incidents occur, not just reactive responses.
                    </p>
                  </div>
                  
                  <Button className="w-full bg-gradient-primary">
                    Learn More About AI Features
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Seamless System Integration
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Tourism Boards</h3>
                <p className="text-sm text-muted-foreground">
                  Direct integration with existing tourism management systems
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <AlertTriangle className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Emergency Services</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time connectivity with police, medical, and rescue teams
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Location Services</h3>
                <p className="text-sm text-muted-foreground">
                  GPS, cellular, and IoT device integration for precise tracking
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Globe className="h-12 w-12 text-warning mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Government Systems</h3>
                <p className="text-sm text-muted-foreground">
                  Secure connection to Aadhaar, passport, and official databases
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-hero p-12 text-center">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                Ready to Transform Tourist Safety?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Experience the power of AI-driven safety monitoring. Schedule a personalized 
                demo to see how Secura can protect your tourists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Schedule Demo
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View Pricing
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Features;