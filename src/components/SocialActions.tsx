import { HeartHandshake, Users } from "lucide-react";

const SocialActions = () => {
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

        {/* Content Card */}
        <div className="max-w-4xl mx-auto technical-border p-8 md:p-12 bg-card/70 backdrop-blur-sm slide-in-bottom">
          <div className="flex items-center justify-center mb-6">
            <HeartHandshake className="w-12 h-12 text-primary" />
          </div>
          <p className="text-xl md:text-2xl font-body text-foreground/90 leading-relaxed text-center">
            A <span className="text-primary font-semibold" translate="no">AUTOMATECH</span> acredita que estar presente em uma região também significa cuidar das pessoas que fazem parte dela. Por isso, a empresa desenvolve ações solidárias nas comunidades próximas aos locais onde atua, oferecendo apoio direto por meio de doações e iniciativas alinhadas às necessidades de cada local.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialActions;