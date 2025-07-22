import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SpaceCompanionDemo from "./pages/SpaceCompanionDemo";
import MagicalPortalDemo from "./pages/MagicalPortalDemo";
import ArchPortalDemo from "./pages/ArchPortalDemo";
import GoldenArchDemo from "./pages/GoldenArchDemo";
import EtherealPortalDemo from "./pages/EtherealPortalDemo";
import ExactPortalDemo from "./pages/ExactPortalDemo";
import VerticalArchDemo from "./pages/VerticalArchDemo";
import MagicalPortalNewDemo from "./pages/MagicalPortalNewDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/space-companion" element={<SpaceCompanionDemo />} />
          <Route path="/magical-portal" element={<MagicalPortalDemo />} />
          <Route path="/arch-portal" element={<ArchPortalDemo />} />
          <Route path="/golden-arch" element={<GoldenArchDemo />} />
          <Route path="/ethereal-portal" element={<EtherealPortalDemo />} />
          <Route path="/exact-portal" element={<ExactPortalDemo />} />
          <Route path="/vertical-arch" element={<VerticalArchDemo />} />
          <Route
            path="/new-magical-portal"
            element={<MagicalPortalNewDemo />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
