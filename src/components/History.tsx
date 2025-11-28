import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, TrendingUp, Heart, Scissors } from "lucide-react";
import { Button } from "./ui/button";

interface HistoryProps {
  history: string;
  foundedYear: number;
}

export const History = ({ history, foundedYear }: HistoryProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const milestones = [
    {
      year: foundedYear,
      title: "Início da Jornada",
      description: "Nasce a Iriri Barbearia Club, unindo experiência, estilo e atitude no Rio de Janeiro.",
      icon: Award,
    },
    {
      year: 2019,
      title: "Presença nos Shoppings",
      description: "Iriri consolida presença em grandes shoppings do Rio, como Barra Shopping e Madureira Shopping.",
      icon: TrendingUp,
    },
    {
      year: 2022,
      title: "Referência na Região",
      description: "A marca se fortalece como referência em barbearia e cuidados masculinos na cidade.",
      icon: Award,
    },
    {
      year: 2024,
      title: "20+ Anos de Tradição",
      description: "Mais de duas décadas entregando corte, resenha e experiência premium para os clientes.",
      icon: Users,
    },
  ];

  const paragraphs = history.split('\n\n');

  return (
    <section ref={ref} id="history" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full flex justify-center"
            >
              <div className="relative w-full max-w-[300px] sm:max-w-[340px] md:max-w-[360px] group">
                <div className="absolute -top-2 -left-2 w-8 h-8">
                  <div className="absolute top-0 left-0 w-8 h-[2px] bg-gradient-gold"></div>
                  <div className="absolute top-0 left-0 h-8 w-[2px] bg-gradient-gold"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8">
                  <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-gradient-gold"></div>
                  <div className="absolute bottom-0 right-0 h-8 w-[2px] bg-gradient-gold"></div>
                </div>
                <img
                  src="/assets/Fotos/iriri 1.jpg"
                  alt="Iriri Barbearia Club"
                  className="w-full h-auto rounded-xl object-cover ring-1 ring-border/40 shadow-dark group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:self-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-primary/20 mb-4">
                <Scissors className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Sobre nossa barbearia</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Seu <span className="text-primary">NOVO</span> Estilo Perfeito
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 max-w-xl">
                {paragraphs[0]}
              </p>
              {paragraphs[1] && (
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  {paragraphs[1]}
                </p>
              )}
              <Button
                variant="outline"
                className="border-primary/60 text-primary hover:bg-primary/10"
                onClick={() => document.getElementById('history-timeline')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Saiba Mais
              </Button>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="relative" id="history-timeline">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50 md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left pl-8 md:pl-0`}>
                    <div className="bg-card/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-border/50 shadow-dark hover:shadow-gold transition-shadow">
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                        <milestone.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                        <span className="text-xl md:text-2xl font-bold text-primary">{milestone.year}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-foreground">{milestone.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-gold" />

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
