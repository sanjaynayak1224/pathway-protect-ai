import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Shield, Eye, EyeOff, Lock, Mail, Globe, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      language: ""
    }
  });

  const languages = [
    { value: "en", label: "English", flag: "🇺🇸" },
    { value: "hi", label: "हिंदी (Hindi)", flag: "🇮🇳" },
    { value: "bn", label: "বাংলা (Bengali)", flag: "🇧🇩" },
    { value: "te", label: "తెలుగు (Telugu)", flag: "🇮🇳" },
    { value: "ta", label: "தமிழ் (Tamil)", flag: "🇮🇳" },
    { value: "gu", label: "ગુજરાતી (Gujarati)", flag: "🇮🇳" },
    { value: "kn", label: "ಕನ್ನಡ (Kannada)", flag: "🇮🇳" },
    { value: "ml", label: "മലയാളം (Malayalam)", flag: "🇮🇳" },
    { value: "mr", label: "मराठी (Marathi)", flag: "🇮🇳" },
    { value: "pa", label: "ਪੰਜਾਬੀ (Punjabi)", flag: "🇮🇳" },
    { value: "as", label: "অসমীয়া (Assamese)", flag: "🇮🇳" },
    { value: "or", label: "ଓଡ଼ିଆ (Odia)", flag: "🇮🇳" }
  ];

  const onSubmit = (data: any) => {
    console.log("Login Data:", data);
    
    // Simulate authentication
    if (data.email && data.password) {
      toast({
        title: "Login Successful!",
        description: "Redirecting to your dashboard...",
      });
      
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } else {
      toast({
        title: "Login Failed",
        description: "Please check your credentials and try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="p-3 bg-gradient-primary rounded-lg shadow-glow">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">Secura</span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground mt-2">Sign in to your tourist safety account</p>
        </div>

        <Card className="shadow-xl border-0 bg-card/90 backdrop-blur-sm">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Language Selection */}
            <div className="space-y-2">
              <Label className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>Preferred Language</span>
              </Label>
              <Select onValueChange={setSelectedLanguage} value={selectedLanguage}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      <div className="flex items-center space-x-2">
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>Email Address</span>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="Enter your email"
                          className="h-12"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center space-x-2">
                        <Lock className="h-4 w-4" />
                        <span>Password</span>
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="h-12 pr-10"
                            {...field} 
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-muted-foreground" />
                            ) : (
                              <Eye className="h-4 w-4 text-muted-foreground" />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="remember" 
                      className="rounded border-border"
                    />
                    <Label htmlFor="remember" className="text-sm text-muted-foreground">
                      Remember me
                    </Label>
                  </div>
                  <Link 
                    to="/forgot-password" 
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-gradient-primary text-lg font-medium"
                >
                  Sign In
                </Button>
              </form>
            </Form>

            {/* Security Notice */}
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Security Notice</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Your location will be monitored for safety purposes during your visit. 
                    Emergency services can be contacted instantly through the panic button.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-12">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="h-12">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary hover:underline font-medium">
                  Register here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Emergency Helpline: <span className="text-primary font-medium">100 | 112</span>
          </p>
          <p className="text-xs text-muted-foreground">
            Tourist Helpline: <span className="text-primary font-medium">1363</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;