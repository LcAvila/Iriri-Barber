import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import type { Store } from "@/lib/data";

interface StoresProps {
  stores: Store[];
}

export const Stores = ({ stores }: StoresProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="stores" ref={ref} className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Nossas Unidades</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Escolha a Unidade Mais <span className="text-primary">Próxima</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Duas unidades estrategicamente localizadas para melhor atendê-lo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {stores.map((store, index) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden shadow-dark hover:shadow-gold transition-all duration-300 hover:-translate-y-2">
                {/* Store Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={store.imageUrl} 
                    alt={`Fachada da ${store.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{store.name}</h3>
                    <p className="text-primary font-semibold flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {store.location}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Endereço</p>
                        <p className="text-sm text-muted-foreground">{store.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Telefone</p>
                        <a
                          href={`tel:${store.phone}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {store.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Horário</p>
                        <p className="text-sm text-muted-foreground">{store.hours}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/50 space-y-3">
                    <Button
                      className="w-full bg-gradient-gold text-background font-semibold hover:opacity-90 transition-opacity shadow-gold"
                      size="lg"
                      onClick={() => window.open(store.trinxUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Agendar
                    </Button>
                    
                    <Button
                      variant="outline"
                      className="w-full border-primary/50 text-foreground hover:bg-primary/10"
                      size="lg"
                      onClick={() => window.open(store.whatsapp, '_blank')}
                    >
                      WhatsApp: {store.phone}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
