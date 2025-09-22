import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardProvider } from "@/context/DashboardContext"; // <-- IMPORT
import Index from "@/pages/Index";
import Features from "@/pages/Features";
import Dashboard from "@/pages/Dashboard";
import ForTourists from "@/pages/ForTourists";
import ForAuthorities from "@/pages/ForAuthorities";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Signup from "@/pages/Signup";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <DashboardProvider> {/* <-- WRAP HERE */}
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<Features />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/for-tourists" element={<ForTourists />} />
            <Route path="/for-authorities" element={<ForAuthorities />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </DashboardProvider> {/* <-- AND HERE */}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

