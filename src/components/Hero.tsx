import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 z-0 grid-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="slide-in-bottom">
          {/* Logo/Brand */}
          <div className="mb-8">
            <img 
              src={logo} 
              alt="AUTOMATECH Logo" 
              className="w-48 md:w-64 lg:w-72 mx-auto mb-4 drop-shadow-[0_0_30px_rgba(96,165,250,0.3)]"
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-wider mb-2">
              <span className="text-primary" translate="no">AUTO</span>
              <span className="text-foreground" translate="no">MATECH</span>
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-light text-muted-foreground mb-4 max-w-3xl mx-auto">
            Soluções em Automação e Eletromecânica
          </p>

          {/* Main Description */}
          <h2 className="text-2xl md:text-4xl font-body font-light text-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Soluções inteligentes em{" "}
            <span className="text-primary font-medium">automação</span>,{" "}
            <span className="text-accent font-medium">energia</span> e{" "}
            <span className="text-primary font-medium">engenharia industrial</span>
          </h2>

          {/* Location */}
          <p className="text-muted-foreground text-lg">
            Castanhal – PA | Atuação Nacional
          </p>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default Hero;