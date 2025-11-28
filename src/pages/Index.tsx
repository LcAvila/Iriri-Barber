import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { History } from "@/components/History";
import { Features } from "@/components/Features";
import { Portfolio } from "@/components/Portfolio";
import { Stores } from "@/components/Stores";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { barbershop, portfolioItems, testimonials } from "@/lib/data";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const navHeight = 130;
        const pos = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: pos - navHeight, behavior: 'smooth' });
      }
    }
  }, [location.hash]);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="conteudo-principal" className="pt-28 lg:pt-32">
        <Hero />
        <History history={barbershop.history} foundedYear={barbershop.foundedYear} />
        <Features />
        <Portfolio items={portfolioItems} />
        <Stores stores={barbershop.stores} />
        <Testimonials testimonials={testimonials} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
