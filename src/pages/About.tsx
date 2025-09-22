import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Users,
  Target,
  Award,
  Globe,
  Heart,
  Zap,
  Lock,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety First",
      description: "Tourist safety is our unwavering priority in every feature we build and decision we make.",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Privacy Protected",
      description: "We ensure complete data privacy with end-to-end encryption and compliance with global standards.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Rapid Response",
      description: "Every second counts in emergencies. Our system is built for instant alert delivery and response.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Inclusive Access",
      description: "Technology should serve everyone. We provide multilingual support and accessibility features.",
    },
  ];

  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Chief Technology Officer",
      background: "Former AI researcher at IIT Delhi with 15+ years in safety technology",
    },
    {
      name: "Rajesh Kumar",
      role: "Head of Security",
      background: "Ex-cybersecurity expert from DRDO specializing in blockchain implementations",
    },
    {
      name: "Sarah Chen",
      role: "Product Director",
      background: "Tourism industry veteran with expertise in user experience and emergency response",
    },
    {
      name: "Dr. Amit Patel",
      role: "AI Research Lead",
      background: "Machine learning specialist focusing on predictive analytics and anomaly detection",
    },
  ];

  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Government Recognition",
      description: "Official approval from Ministry of Tourism and Home Affairs",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "10,000+ Tourists Protected",
      description: "Successfully monitoring tourists across 50+ destinations",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "99.9% Uptime",
      description: "Reliable 24/7 monitoring with redundant systems",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "100+ Lives Saved",
      description: "Rapid emergency response preventing serious incidents",
    },
  ];

  const timeline = [
    {
      year: "2023",
      title: "Company Founded",
      description: "Secura was established with a mission to revolutionize tourist safety using advanced technology.",
    },
    {
      year: "2024",
      title: "AI Platform Launch",
      description: "Released our first AI-powered monitoring system with blockchain-based identity verification.",
    },
    {
      year: "2024",
      title: "Government Partnership",
      description: "Partnered with Northeast tourism authorities for comprehensive safety implementation.",
    },
    {
      year: "2024",
      title: "National Expansion",
      description: "Expanded operations to 50+ tourist destinations across India with multilingual support.",
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
              Pioneering the Future of Tourist Safety
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Secura was born from a simple yet powerful vision: every tourist deserves to explore 
              the world safely, and every destination should have the tools to protect its visitors.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-gradient-card">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <Target className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To create a world where tourism thrives without compromising safety. We leverage 
                  cutting-edge AI, blockchain, and IoT technologies to provide comprehensive safety 
                  monitoring that protects tourists while respecting their privacy and freedom to explore.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 bg-gradient-card">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-secondary rounded-lg">
                    <Globe className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To become the global standard for tourist safety technology, empowering destinations 
                  worldwide with intelligent monitoring systems that prevent incidents before they occur 
                  and ensure rapid response when help is needed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Core Values
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary-foreground">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 bg-gradient-card">
                <CardContent className="p-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">
                      {achievement.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Meet Our Leadership Team
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-center mb-1">{member.name}</h3>
                  <p className="text-sm text-primary text-center mb-3">{member.role}</p>
                  <p className="text-xs text-muted-foreground text-center">{member.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Journey
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <span className="text-sm font-bold text-primary-foreground">{item.year}</span>
                    </div>
                  </div>
                  <Card className="flex-1 p-6">
                    <CardContent className="p-0">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-hero p-12 text-center">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                Join Us in Making Tourism Safer
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Whether you're a tourism authority, emergency service, or technology partner, 
                we invite you to be part of the safety revolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Partner With Us
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Contact Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;