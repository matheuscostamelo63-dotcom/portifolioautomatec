import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

// Importar logos
import logoDenpasa from "@/assets/logo-denpasa.png";
import logoOleoplan from "@/assets/logo-oleoplan.png";
import logoVilaNova from "@/assets/logo-vila-nova.webp";

const clientLogos = [
  { src: logoDenpasa, alt: "Logo Denpasa" },
  { src: logoOleoplan, alt: "Logo Oleoplan" },
  { src: logoVilaNova, alt: "Logo Vila Nova Agroindustrial" },
  // Adicionar os logos novamente para garantir o efeito de loop contínuo
  { src: logoDenpasa, alt: "Logo Denpasa" },
  { src: logoOleoplan, alt: "Logo Oleoplan" },
  { src: logoVilaNova, alt: "Logo Vila Nova Agroindustrial" },
];

const Clients = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 3000, // Troca a cada 3 segundos
        stopOnInteraction: false,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
      }),
    ]
  );

  return (
    <section id="clients" className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 slide-in-bottom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            Nossos <span className="text-accent">Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Parceiros que confiam na excelência da AUTOMATECH
          </p>
        </div>

        {/* Carousel Container */}
        <div className="embla max-w-7xl mx-auto" ref={emblaRef}>
          <div className="embla__container flex">
            {clientLogos.map((logo, index) => (
              <div 
                className={cn(
                  "embla__slide flex-shrink-0 flex items-center justify-center",
                  "w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4" // Responsividade: 2, 3, 4 ou 5 logos visíveis
                )}
                key={index}
              >
                <div className="p-4 bg-card/50 border border-border rounded-lg h-24 w-full flex items-center justify-center transition-all duration-300 hover:bg-card/80 hover:border-primary/50">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="max-h-full max-w-full object-contain opacity-70 grayscale hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;