import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Shield,
  Users,
  Building,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      details: "support@secura.com",
      description: "24/7 technical support and general inquiries",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Emergency Hotline",
      details: "+91-11-2345-6789",
      description: "Round-the-clock emergency assistance",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Headquarters",
      details: "New Delhi, India",
      description: "123 Technology Hub, Cyber City, Gurgaon",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM IST",
      description: "Emergency support available 24/7",
    },
  ];

  const departments = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Technical Support",
      email: "tech@secura.com",
      description: "Platform issues, integration support, API documentation",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Partnership & Sales",
      email: "partnerships@secura.com",
      description: "Government partnerships, enterprise solutions, custom implementations",
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Tourism Authorities",
      email: "authorities@secura.com",
      description: "Authority onboarding, training, compliance, and regulatory support",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Media & Press",
      email: "media@secura.com",
      description: "Press releases, interviews, marketing materials, case studies",
    },
  ];

  const offices = [
    {
      city: "New Delhi",
      address: "123 Technology Hub, Cyber City, Gurgaon, Haryana 122002",
      phone: "+91-11-2345-6789",
      type: "Headquarters",
    },
    {
      city: "Mumbai",
      address: "456 Business Center, Bandra-Kurla Complex, Mumbai 400051",
      phone: "+91-22-9876-5432",
      type: "Regional Office",
    },
    {
      city: "Bengaluru",
      address: "789 Tech Park, Electronic City, Bengaluru, Karnataka 560100",
      phone: "+91-80-1234-5678",
      type: "Development Center",
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
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're a tourism authority, emergency service, or have questions about our platform, 
              we're here to help. Reach out to our team for support, partnerships, or demonstrations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 bg-gradient-card">
                <CardContent className="p-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary-foreground">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-lg font-medium text-primary mb-1">{info.details}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Departments */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>
                  
                  <div>
                    <Label htmlFor="organization">Organization</Label>
                    <Input id="organization" placeholder="Your organization or department" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-primary">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Department Contacts */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Department Contacts
              </h2>
              
              {departments.map((dept, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <div className="text-primary">
                          {dept.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{dept.title}</h3>
                        <p className="text-primary font-medium mb-2">{dept.email}</p>
                        <p className="text-sm text-muted-foreground">{dept.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Offices
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="p-6 bg-gradient-card">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">{office.city}</h3>
                      <span className="text-sm text-primary">{office.type}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{office.address}</p>
                  <p className="text-sm font-medium text-foreground">{office.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-hero p-12 text-center">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                Emergency Support Available 24/7
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                For urgent technical issues or emergency situations affecting tourist safety, 
                our dedicated support team is always available.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="shadow-lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Emergency Line
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Mail className="h-5 w-5 mr-2" />
                  Emergency Email
                </Button>
              </div>
              
              <p className="text-primary-foreground/80 text-sm">
                Emergency Line: +91-11-2345-6789 | Available 24/7 for critical situations
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">How quickly can Secura be deployed?</h3>
                <p className="text-sm text-muted-foreground">
                  Depending on your requirements, basic deployment can be completed in 2-4 weeks, 
                  including training and integration with existing systems.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">What kind of training do you provide?</h3>
                <p className="text-sm text-muted-foreground">
                  We offer comprehensive training programs for authorities, including hands-on workshops, 
                  documentation, and ongoing technical support.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">Is the platform compliant with data regulations?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, Secura is fully compliant with Indian data protection laws and international 
                  standards including GDPR for international tourists.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">Can Secura integrate with existing systems?</h3>
                <p className="text-sm text-muted-foreground">
                  Absolutely. Our platform is designed to integrate seamlessly with existing tourism 
                  management systems, emergency services, and government databases.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;