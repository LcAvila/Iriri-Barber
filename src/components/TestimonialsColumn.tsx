import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/data";

interface TestimonialsColumnProps {
  testimonials: Testimonial[];
  className?: string;
  duration?: number;
}

export const TestimonialsColumn = ({
  testimonials,
  className,
  duration = 15,
}: TestimonialsColumnProps) => {
  return (
    <div className={cn("flex flex-col gap-6 py-4", className)}>
      <motion.div
        animate={{
          y: [0, -1000],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-6"
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 p-6 shadow-dark hover:shadow-gold transition-all duration-300 w-80"
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>

            <p className="text-foreground/90 mb-6 leading-relaxed line-clamp-4">
              "{testimonial.comment}"
            </p>

            <div className="pt-4 border-t border-border/50">
              <p className="font-semibold text-foreground">{testimonial.clientName}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {new Date(testimonial.date).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
