import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Therapists from "./pages/Therapists";
import TherapistProfile from "./pages/TherapistProfile";
import BookingFlow from "./pages/BookingFlow";
import Dashboard from "./pages/Dashboard";
import AITherapy from "./pages/AITherapy";
import Wellness from "./pages/Wellness";
import B2B from "./pages/B2B";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/therapists" element={<Therapists />} />
            <Route path="/therapist/:id" element={<TherapistProfile />} />
            <Route path="/book" element={<BookingFlow />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ai-therapy" element={<AITherapy />} />
            <Route path="/wellness" element={<Wellness />} />
            <Route path="/b2b" element={<B2B />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
