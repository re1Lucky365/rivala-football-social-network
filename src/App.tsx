import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppShell } from "./components/AppShell";
import Index from "./pages/Index.tsx";
import Placeholder from "./pages/Placeholder.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppShell />}>
            <Route path="/" element={<Index />} />
            <Route
              path="/live"
              element={
                <Placeholder
                  title="Live — bientôt"
                  description="Tous les matchs en direct, avec rooms de chat dédiées et refresh realtime."
                  sprint="Phase 3 (sync API-Football)"
                />
              }
            />
            <Route
              path="/picks"
              element={
                <Placeholder
                  title="Tes picks"
                  description="Historique, picks en cours, ROI virtuel et settlement automatique."
                  sprint="Phase 5 (Predictions + Wallet)"
                />
              }
            />
            <Route
              path="/tipsters"
              element={
                <Placeholder
                  title="Tipsters"
                  description="En vedette, vérifiés, top 7j, top 30j, par pays et par ligue."
                  sprint="Sprint S5"
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Placeholder
                  title="Profil"
                  description="Stats, badges, divisions, missions, paramètres et option tipster."
                  sprint="Phase 1 (Auth + Onboarding)"
                />
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
