import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Shield,
  MapPin,
  AlertCircle,
  Clock,
  Heart,
  Globe,
  Download,
  Star,
  CheckCircle,
} from "lucide-react";

const ForTourists = () => {
  const appFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Instant Safety Score",
      description: "Get real-time safety ratings for your current location and planned destinations.",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Smart Geo-Fencing",
      description: "Receive automatic alerts when approaching high-risk or restricted areas.",
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "One-Touch Panic Button",
      description: "Instantly alert emergency services and your contacts with your exact location.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Health Monitoring",
      description: "Optional health tracking with emergency medical information accessible to responders.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multi-Language Support",
      description: "Available in 10+ Indian languages plus English with voice assistance.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock safety monitoring with AI-powered anomaly detection.",
    },
  ];

  const safetyFeatures = [
    "Real-time location sharing with trusted contacts",
    "Automatic check-in reminders at safe locations",
    "Weather and environmental hazard alerts",
    "Local emergency service contact information",
    "Offline emergency protocols and maps",
    "Safe route recommendations and navigation",
    "Cultural sensitivity and local customs guidance",
    "Emergency phrase translations",
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Tourist from USA",
      rating: 5,
      comment: "Secura made me feel completely safe during my solo trip to the Himalayas. The app's alerts helped me avoid a dangerous area I didn't know about.",
    },
    {
      name: "Hiroshi Tanaka",
      location: "Tourist from Japan",
      rating: 5,
      comment: "The multilingual support was incredible. When I got lost, the panic button immediately connected me with local authorities who spoke my language.",
    },
    {
      name: "Emma Schmidt",
      location: "Tourist from Germany",
      rating: 5,
      comment: "My family back home could track my journey in real-time. It gave them peace of mind and me the confidence to explore freely.",
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
              Travel Safely, Explore Freely
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              The Secura mobile app provides intelligent safety monitoring, emergency assistance, 
              and peace of mind for tourists exploring new destinations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary">
                <Download className="h-5 w-5 mr-2" />
                Download App
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Smart Safety Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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

      {/* App Interface Preview */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Intuitive Mobile Experience
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our user-friendly mobile app puts safety at your fingertips with intelligent 
                features designed specifically for tourists exploring unfamiliar destinations.
              </p>
              
              <div className="space-y-4">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button className="bg-gradient-primary">
                  Learn More About Features
                </Button>
              </div>
            </div>
            
            <Card className="p-8 bg-gradient-card">
              <CardContent className="p-0">
                <div className="aspect-[9/16] bg-muted rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Mobile App Interface</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Interactive demo available in app stores
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Simple 3-Step Setup
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gradient-card">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Download & Register</h3>
                <p className="text-muted-foreground">
                  Download the Secura app and complete quick identity verification with your passport or Aadhaar
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 bg-gradient-card">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-secondary-foreground">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Set Your Preferences</h3>
                <p className="text-muted-foreground">
                  Add emergency contacts, set your itinerary, and customize your safety preferences
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 bg-gradient-card">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Travel with Confidence</h3>
                <p className="text-muted-foreground">
                  Enjoy your journey with real-time safety monitoring and instant emergency assistance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            What Tourists Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-hero p-12 text-center">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                Start Your Safe Journey Today
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Join thousands of tourists who trust Secura for their safety. 
                Download the app and travel with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="shadow-lg">
                  <Download className="h-5 w-5 mr-2" />
                  Download for iOS
                </Button>
                <Button size="lg" variant="secondary" className="shadow-lg">
                  <Download className="h-5 w-5 mr-2" />
                  Download for Android
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-foreground">10k+</p>
                  <p className="text-sm text-primary-foreground/80">Downloads</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-foreground">4.9</p>
                  <p className="text-sm text-primary-foreground/80">App Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-foreground">50+</p>
                  <p className="text-sm text-primary-foreground/80">Countries</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ForTourists;