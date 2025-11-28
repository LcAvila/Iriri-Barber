import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const readCookie = (name: string) => {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? decodeURIComponent(match[2]) : null;
  };
  const setCookie = (name: string, value: string, days = 365) => {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/`;
  };
  useEffect(() => {
    const c = readCookie("iriri_cookie_consent");
    setVisible(!c);
  }, []);
  if (!visible) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="container px-4 py-4 mb-4 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Usamos cookies para melhorar sua experiência, lembrar preferências e analisar uso. Você pode aceitar ou rejeitar.
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              onClick={() => {
                setCookie("iriri_cookie_consent", "rejected");
                setVisible(false);
              }}
            >
              Rejeitar
            </Button>
            <Button
              className="bg-gradient-gold"
              onClick={() => {
                setCookie("iriri_cookie_consent", "accepted");
                setVisible(false);
              }}
            >
              Aceitar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
