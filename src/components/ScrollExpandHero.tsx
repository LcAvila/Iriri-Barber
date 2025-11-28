import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const ScrollExpandHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform values for expansion effect
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setIsExpanded(latest > 0.3);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} id="hero" className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-hero" />
        
        {/* Animated circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-10 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-10 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />

        {/* Expanding media container */}
        <motion.div
          style={{
            scale,
            borderRadius,
          }}
          className="relative w-full max-w-7xl mx-2 sm:mx-4 md:mx-8 aspect-video overflow-hidden shadow-2xl"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
          </div>

          {/* Content overlay */}
          <motion.div
            style={{ opacity: textOpacity }}
            className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full border border-primary/20 mb-6"
            >
              <span className="text-sm text-muted-foreground">Referência em Estilo</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground"
            >
              Barbearia <span className="text-primary">Elite</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-2xl px-4"
            >
              Experiência premium em cuidados masculinos. Cortes modernos, ambiente sofisticado.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto px-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("stores")}
                className="bg-gradient-gold hover:opacity-90 transition-opacity text-base md:text-lg px-6 md:px-8 w-full sm:w-auto"
              >
                Ver Unidades
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("portfolio")}
                className="border-primary/50 hover:bg-primary/10 text-base md:text-lg px-6 md:px-8 w-full sm:w-auto"
              >
                Ver Portfólio
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
                onClick={() => scrollToSection("history")}
              >
                <span className="text-xs md:text-sm">Role para explorar</span>
                <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats overlay when expanded */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-12 md:bottom-20 left-0 right-0 z-20"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              {[
                { value: "15+", label: "Anos de Experiência" },
                { value: "2", label: "Unidades" },
                { value: "10k+", label: "Clientes Satisfeitos" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 p-4 md:p-6 shadow-dark"
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 md:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
