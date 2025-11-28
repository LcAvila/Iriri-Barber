import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Scissors, Shield, Star, Users } from "lucide-react";

const features = [
  {
    step: "1",
    title: "Profissionais Qualificados",
    content: "Nossa equipe é formada por barbeiros experientes e constantemente atualizados com as últimas tendências.",
    icon: Users,
    image: "/assets/Fotos/profissionais qualificados.jpg",
  },
  {
    step: "2",
    title: "Produtos Premium",
    content: "Utilizamos apenas produtos de alta qualidade, garantindo o melhor resultado e cuidado para seu cabelo e barba.",
    icon: Star,
    image: "/assets/Fotos/produtos premium.jpg",
  },
  {
    step: "3",
    title: "Ambiente Exclusivo",
    content: "Espaço moderno e confortável, pensado para proporcionar uma experiência relaxante e premium.",
    icon: Shield,
    image: "/assets/Fotos/ambiente exclusivo.jpg",
  },
  {
    step: "4",
    title: "Atendimento Personalizado",
    content: "Cada cliente é único. Oferecemos consultoria personalizada para encontrar o estilo perfeito para você.",
    icon: Scissors,
    image: "/assets/Fotos/atendimento personalizado.jpg",
  },
];

export const Features = () => {
  const [activeStep, setActiveStep] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
            <Scissors className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Nossos Diferenciais</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sua Jornada <span className="text-primary">Começa Aqui</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra por que somos referência em estilo e cuidados masculinos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto items-center">
          {/* Steps Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:space-y-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeStep === index;
              const isCompleted = activeStep > index;

              return (
                <motion.div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                >
                  <div
                    className={`p-6 rounded-lg border transition-all duration-300 ${
                      isActive
                        ? "bg-card/80 backdrop-blur-sm border-primary shadow-gold"
                        : "bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Step Indicator */}
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isCompleted
                            ? "bg-primary text-primary-foreground"
                            : isActive
                            ? "bg-gradient-gold text-primary-foreground"
                            : "bg-secondary/50 text-muted-foreground"
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="w-6 h-6" />
                        ) : (
                          <Icon className="w-6 h-6" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium text-primary">
                            Passo {feature.step}
                          </span>
                        </div>
                        <h3
                          className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                            isActive ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{feature.content}</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    {isActive && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 5, ease: "linear" }}
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold origin-left"
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-dark order-first lg:order-last"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeStep === index ? 1 : 0,
                  scale: activeStep === index ? 1 : 1.1,
                }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
