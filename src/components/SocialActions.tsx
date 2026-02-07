import { HeartHandshake } from "lucide-react";
import SocialActionsCarousel from "./SocialActionsCarousel";

const socialActionImages = [
  "/social-actions/social-action-1.jpg",
  "/social-actions/social-action-2.jpg",
  "/social-actions/social-action-3.jpg",
  // "/social-actions/social-action-4.jpg", // Removida
  "/social-actions/social-action-5.jpg",
  "/social-actions/social-action-6.jpg", // Esta é a 5ª imagem (índice 4)
  "/social-actions/social-action-7.jpg",
];

const SocialActions = () => {
  // A 5ª imagem está no índice 4
  const printImage = socialActionImages[4];

  return (
    <section id="social-actions" className="py-24 bg-background relative overflow-hidden">
      {/* Technical Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-bottom">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Ações <span className="text-accent">Solidárias</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-primary mb-6" />
        </div>

        {/* Content Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="slide-in-left space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <HeartHandshake className="w-10 h-10 text-primary flex-shrink-0" />
              <h3 className="text-2xl font-heading text-primary">Compromisso Social</h3>
            </div>
            <p className="text-lg font-body text-foreground/90 leading-relaxed">
              A <span className="text-primary font-semibold" translate="no">AUTOMATECH</span> acredita que estar presente em uma região também significa cuidar das pessoas que fazem parte dela. Por isso, a empresa desenvolve ações solidárias nas comunidades próximas aos locais onde atua, oferecendo apoio direto por meio de doações e iniciativas alinhadas às necessidades de cada local.
            </p>
          </div>

          {/* Carousel (Screen View) */}
          <div className="slide-in-right print:hidden">
            <SocialActionsCarousel images={socialActionImages} />
          </div>

          {/* Static Image (Print View) */}
          <div className="hidden print:block rounded-lg border border-border shadow-xl overflow-hidden">
            <img
              src={printImage}
              alt="Ação Solidária em Destaque para Impressão"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialActions;