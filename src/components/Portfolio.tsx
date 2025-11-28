import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors } from "lucide-react";
import type { PortfolioItem } from "@/lib/data";

interface PortfolioProps {
  items: PortfolioItem[];
}

export const Portfolio = ({ items }: PortfolioProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="portfolio" ref={ref} className="py-24 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

      <div className="container relative z-10 px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-primary/20 mb-4">
            <Scissors className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Nossa Galeria</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            NOSSO <span className="text-primary">PORTFÓLIO</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-3 max-w-2xl mx-auto">
            Seleção de cortes e barbas que representam nosso padrão de qualidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {items.slice(0, 8).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="overflow-hidden"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="aspect-square w-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-out"
              />
            </motion.div>
          ))}
        </div>

        
      </div>
      
    </section>
  );
};
