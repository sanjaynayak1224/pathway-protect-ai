import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import FeatureCard from "@/components/FeatureCard";
import heroImage from "@/assets/hero-image.jpg";
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
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Digital Tourist ID",
      description: "Blockchain-based secure identity verification with KYC integration and emergency contacts.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Safety App",
      description: "Real-time safety scoring, geo-fencing alerts, and panic button with live location sharing.",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Anomaly Detection",
      description: "Smart detection of unusual patterns, route deviations, and potential emergency situations.",
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Real-time Monitoring",
      description: "Live dashboards for authorities with tourist clusters, heat maps, and alert management.",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "IoT Integration",
      description: "Smart wearables for high-risk areas with continuous health and location monitoring.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multilingual Support",
      description: "Available in 10+ Indian languages with voice and text emergency access.",
    },
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Reliability" },
    { number: "24/7", label: "Emergency Response" },
    { number: "50+", label: "Tourist Destinations" },
    { number: "10+", label: "Language Support" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Smart Tourist
                <span className="text-primary"> Safety</span> 
                <br />Monitoring System
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Advanced AI, Blockchain, and IoT technologies ensuring tourist safety with 
                real-time monitoring, predictive alerts, and rapid emergency response.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-primary shadow-glow">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-sm text-muted-foreground">Blockchain Secured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Government Approved</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-warning" />
                  <span className="text-sm text-muted-foreground">99.9% Uptime</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-20 blur-3xl"></div>
              <img
                src={heroImage}
                alt="Tourist Safety Monitoring"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive Safety Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A complete ecosystem of cutting-edge technologies working together to ensure 
              tourist safety and provide peace of mind for travelers and authorities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={index < 2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How Secura Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple, secure, and seamless safety monitoring in three steps
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gradient-card">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Digital ID Registration</h3>
                <p className="text-muted-foreground">
                  Quick KYC verification at entry points creates your secure blockchain-based tourist ID
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 bg-gradient-card">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-secondary-foreground">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Real-time Monitoring</h3>
                <p className="text-muted-foreground">
                  AI continuously monitors your location, safety score, and travel patterns
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 bg-gradient-card">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Instant Response</h3>
                <p className="text-muted-foreground">
                  Emergency alerts trigger immediate response from nearest authorities and contacts
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Enhance Tourist Safety?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join the future of tourism safety management. Start protecting your visitors today 
            with our comprehensive monitoring and response system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-lg">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <Shield className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold">Secura</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Advanced tourist safety monitoring powered by AI, Blockchain, and IoT technologies.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Features</li>
                <li>Dashboard</li>
                <li>Mobile App</li>
                <li>IoT Integration</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>For Tourists</li>
                <li>For Authorities</li>
                <li>For Tourism Boards</li>
                <li>Enterprise</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Documentation</li>
                <li>Contact Us</li>
                <li>Help Center</li>
                <li>Status</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Secura. All rights reserved. Built for safer tourism experiences.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;