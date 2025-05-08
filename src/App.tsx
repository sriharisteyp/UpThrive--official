
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { UserDataProvider } from "@/contexts/UserDataContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Quiz from "./pages/Quiz";
import Careers from "./pages/Careers";
import CareerDetail from "./pages/CareerDetail";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
import PricingCard from "./pages/Pricing"
import NotFound from "./pages/NotFound";
import { Footer } from "./components/layout/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <UserDataProvider>
          <LanguageProvider>
            <ThemeProvider>
              <Toaster/>
              <Sonner />
              <BrowserRouter>
                <div className="flex flex-col min-h-screen">
                  <div className="flex-grow">
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/auth" element={<Auth />} />
                      <Route path="/quiz" element={<Quiz />} />
                      <Route path="/careers" element={<Careers />} />
                      <Route path="/careers/:careerId" element={<CareerDetail />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/about-us" element={<AboutUs />} />
                      <Route path="/pricing" element={<PricingCard />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </div>
                  <Footer />
                </div>
              </BrowserRouter>
            </ThemeProvider>
          </LanguageProvider>
        </UserDataProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
