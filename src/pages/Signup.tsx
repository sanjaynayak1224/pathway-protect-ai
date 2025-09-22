import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Shield, Upload, User, Phone, MapPin, CreditCard, Globe, FileText, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      nationality: "",
      aadharNumber: "",
      passportNumber: "",
      address: "",
      emergencyContact: "",
      emergencyPhone: "",
      travelPurpose: "",
      language: ""
    }
  });

  const languages = [
    { value: "en", label: "English" },
    { value: "hi", label: "हिंदी (Hindi)" },
    { value: "bn", label: "বাংলা (Bengali)" },
    { value: "te", label: "తెలుగు (Telugu)" },
    { value: "ta", label: "தமிழ் (Tamil)" },
    { value: "gu", label: "ગુજરાતી (Gujarati)" },
    { value: "kn", label: "ಕನ್ನಡ (Kannada)" },
    { value: "ml", label: "മലയാളം (Malayalam)" },
    { value: "mr", label: "मराठी (Marathi)" },
    { value: "pa", label: "ਪੰਜਾਬੀ (Punjabi)" },
    { value: "as", label: "অসমীয়া (Assamese)" },
    { value: "or", label: "ଓଡ଼ିଆ (Odia)" }
  ];

  const countries = [
    "India", "United States", "United Kingdom", "Canada", "Australia", 
    "Germany", "France", "Japan", "China", "Singapore", "Other"
  ];

  const travelPurposes = [
    "Tourism", "Business", "Medical", "Education", "Family Visit", "Official Work", "Religious", "Other"
  ];

  const onSubmit = (data: any) => {
    console.log("KYC Data:", data);
    toast({
      title: "Registration Successful!",
      description: "Your KYC details have been submitted. Redirecting to login...",
    });
    
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="p-3 bg-gradient-primary rounded-lg shadow-glow">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">Secura</span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Tourist Registration</h1>
          <p className="text-muted-foreground">Complete your KYC verification for safe travel</p>
          
          {/* Progress Steps */}
          <div className="flex justify-center items-center space-x-4 mt-6">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNum 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  {step > stepNum ? <CheckCircle className="h-4 w-4" /> : stepNum}
                </div>
                {stepNum < 3 && (
                  <div className={`w-12 h-0.5 mx-2 ${
                    step > stepNum ? "bg-primary" : "bg-muted"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">
              {step === 1 && "Personal Information"}
              {step === 2 && "Identity Verification"}
              {step === 3 && "Travel Details & Preferences"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "Enter your basic personal details"}
              {step === 2 && "Provide identity documents for verification"}
              {step === 3 && "Complete your travel information"}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center space-x-2">
                            <User className="h-4 w-4" />
                            <span>Full Name *</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center space-x-2">
                              <Phone className="h-4 w-4" />
                              <span>Phone Number *</span>
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="+91 9876543210" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="nationality"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center space-x-2">
                            <Globe className="h-4 w-4" />
                            <span>Nationality *</span>
                          </FormLabel>
                          <FormControl>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your nationality" />
                              </SelectTrigger>
                              <SelectContent>
                                {countries.map((country) => (
                                  <SelectItem key={country} value={country}>
                                    {country}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4" />
                            <span>Address *</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your complete address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {/* Step 2: Identity Verification */}
                {step === 2 && (
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="aadharNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center space-x-2">
                            <CreditCard className="h-4 w-4" />
                            <span>Aadhaar Number *</span>
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="1234 5678 9012" 
                              maxLength={12}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="passportNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center space-x-2">
                            <FileText className="h-4 w-4" />
                            <span>Passport Number (if applicable)</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter passport number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">Upload Identity Documents</p>
                      <Button variant="outline" size="sm">
                        Choose Files
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2">
                        Upload clear photos of Aadhaar card and Passport (if applicable)
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="emergencyContact"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Emergency Contact Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Emergency contact person" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="emergencyPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Emergency Contact Phone *</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 9876543210" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Travel Details & Preferences */}
                {step === 3 && (
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="travelPurpose"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Purpose of Travel *</FormLabel>
                          <FormControl>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select travel purpose" />
                              </SelectTrigger>
                              <SelectContent>
                                {travelPurposes.map((purpose) => (
                                  <SelectItem key={purpose} value={purpose}>
                                    {purpose}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="language"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Language *</FormLabel>
                          <FormControl>
                            <Select onValueChange={(value) => {
                              field.onChange(value);
                              setSelectedLanguage(value);
                            }} value={field.value}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your preferred language" />
                              </SelectTrigger>
                              <SelectContent>
                                {languages.map((lang) => (
                                  <SelectItem key={lang.value} value={lang.value}>
                                    {lang.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h3 className="font-medium text-foreground mb-2">Terms & Conditions</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        By proceeding, you agree to share your location data for safety monitoring and 
                        emergency response. Your data will be handled as per our privacy policy.
                      </p>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="terms" className="rounded" />
                        <label htmlFor="terms" className="text-sm text-muted-foreground">
                          I agree to the terms and conditions *
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={prevStep}
                    disabled={step === 1}
                  >
                    Previous
                  </Button>
                  
                  {step < 3 ? (
                    <Button type="button" onClick={nextStep}>
                      Next Step
                    </Button>
                  ) : (
                    <Button type="submit" className="bg-gradient-primary">
                      Complete Registration
                    </Button>
                  )}
                </div>
              </form>
            </Form>

            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;