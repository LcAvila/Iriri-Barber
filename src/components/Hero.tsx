import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Scissors, MapPin } from "lucide-react";
import { useCounter } from "@/hooks/useCounter";
import { useEffect } from "react";
import { AnimatedText } from "@/components/AnimatedText";

export const Hero = () => {
  const yearsCounter = useCounter(20, { duration: 2000 });
  const unitsCounter = useCounter(2, { duration: 1500 });
  const clientsCounter = useCounter(5, { duration: 2500 });
  

  useEffect(() => {
    const timer = setTimeout(() => {
      yearsCounter.start();
      setTimeout(() => unitsCounter.start(), 200);
      setTimeout(() => clientsCounter.start(), 400);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute -inset-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, hsl(var(--brand-gold) / 0.08) 0px, hsl(var(--brand-gold) / 0.08) 14px, transparent 14px, transparent 28px)",
          }}
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background/90" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-30 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full border border-primary/20 mb-8">
              <Scissors className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground/80">Desde 2003</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <AnimatedText 
              text="Iriri Barbearia Club"
              textClassName="font-bold leading-tight"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Experiência premium em cortes masculinos com duas unidades no Rio de Janeiro
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-gold text-background font-semibold hover:opacity-90 transition-opacity shadow-gold"
              onClick={() => document.getElementById('stores')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Ver Unidades
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Trabalhos
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20"
          >
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{yearsCounter.count}+</div>
                <div className="text-sm text-muted-foreground">Anos de Tradição</div>
              </div>
              <div className="text-center border-x border-border/50">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{unitsCounter.count}</div>
                <div className="text-sm text-muted-foreground">Unidades</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{clientsCounter.count}k+</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
