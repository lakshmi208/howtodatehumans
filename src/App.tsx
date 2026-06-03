import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import Pilot from "./pages/Pilot";
import Coaching from "./pages/Coaching";
import Speaking from "./pages/Speaking";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/pilot" element={<Pilot />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/admin" element={<Admin />} />

          {/* Redirects from retired routes — content folded into nav pages */}
          <Route path="/work-with-me" element={<Navigate to="/coaching" replace />} />
          <Route path="/research" element={<Navigate to="/events#listening" replace />} />
          <Route path="/originals" element={<Navigate to="/events#originals" replace />} />
          <Route path="/lakshmi" element={<Navigate to="/about#career" replace />} />
          <Route path="/gallery" element={<Navigate to="/events" replace />} />
          <Route path="/press" element={<Navigate to="/about#press" replace />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
