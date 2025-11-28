import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIriri from "@/assets/logo-iriri.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const navHeight = isScrolled ? 90 : 130;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }, 100);
  };

  const navItems = [
    { name: "Início", id: "hero" },
    { name: "Quem Somos", id: "history" },
    { name: "Unidades", id: "stores" },
    { name: "Depoimentos", id: "testimonials" }
  ];

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/30 transition-all duration-300 ${isScrolled ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-start justify-between gap-2 py-1 min-h-10 text-[11px] sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                <a href="tel:+552138413883" className="hover:text-primary">Barra: (21) 3841-3883</a>
              </div>
              <div className="flex items-center gap-2 mt-1 sm:mt-0">
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                <a href="tel:+5521995149131" className="hover:text-primary">Madureira: (21) 99514-9131</a>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
              <span>Seg-Sáb: 10h–22h · Dom: 12h–21h</span>
            </div>
          </div>
        </div>
      </div>
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed ${isScrolled ? 'top-0' : 'top-10'} left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/30 shadow-lg shadow-black/10"
          : "bg-background/80 backdrop-blur-md"
      }`}
      aria-label="Navegação principal"
    >
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between h-20 lg:h-28">
          {/* Logo com efeito moderno */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 group"
          >
            <Link to="/" className="relative">
              <div className="absolute inset-0 bg-gradient-gold rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <img 
                src={logoIriri} 
                alt="Iriri Barbearia Club" 
                className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

          </motion.div>

          {/* Desktop Menu com design moderno */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex"
          >
            <ul className="flex items-center gap-1" role="menubar">
              {navItems.map((item, index) => (
                <li key={item.name} role="none">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  >
                    <button
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className="relative px-4 py-2 text-sm lg:text-base text-foreground/80 hover:text-foreground transition-all duration-300 group"
                      role="menuitem"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </button>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Área de CTA e Contato Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden lg:flex items-center gap-4"
          >
            <Button
              onClick={() => scrollToSection("stores")}
              className="bg-gradient-gold hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300 text-sm lg:text-base px-6 lg:px-8 font-semibold"
            >
              Agendar Agora
            </Button>
          </motion.div>

          {/* Mobile Menu Button moderno */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative p-3 rounded-lg hover:bg-accent/50 transition-all duration-300 group"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            <div className="absolute inset-0 bg-gradient-gold rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="relative">
              {isOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              )}
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu com design moderno */
        }
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
              id="mobile-menu"
            >
              <div className="bg-background/98 backdrop-blur-xl border-t border-border/30 shadow-xl">
                {/* Header do menu mobile */}
                <div className="px-6 py-4 border-b border-border/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Menu</h3>
                      <p className="text-sm text-muted-foreground">Navegue pelo site</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Phone className="w-3 h-3" />
                      <span>(21) 3841-3883</span>
                    </div>
                  </div>
                </div>

                {/* Items do menu */}
                <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
                  <ul>
                    {navItems.map((item, index) => (
                      <li key={item.name}>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          <button
                            type="button"
                            onClick={() => {
                              scrollToSection(item.id);
                              setIsOpen(false);
                            }}
                            className="flex items-center justify-between w-full px-6 py-4 text-foreground hover:bg-accent/30 transition-all duration-300 group border-b border-border/10"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-1 h-8 bg-gradient-gold rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                              <span className="font-medium">{item.name}</span>
                            </div>
                            <ChevronDown className="w-4 h-4 text-muted-foreground transform -rotate-90" />
                          </button>
                        </motion.div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Mobile */}
                <div className="p-6 border-t border-border/20 bg-accent/10">
                  <Button
                    onClick={() => {
                      scrollToSection("stores");
                      setIsOpen(false);
                    }}
                    className="w-full bg-gradient-gold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 text-base font-semibold py-4"
                    size="lg"
                  >
                    Agendar Agora
                  </Button>
                  <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      <span>(21) 3841-3883</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>09h-21h</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
    </>
  );
};
