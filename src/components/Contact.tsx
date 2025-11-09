import { Mail, Globe, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "E-mail",
      value: "adm@automatech.eng.br",
      link: "mailto:adm@automatech.eng.br"
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.automatech.eng.br",
      link: "https://www.automatech.eng.br"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(91) 99243-8491",
      link: "tel:+5591992438491"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Castanhal – PA",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Technical Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-bottom">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-accent mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Informações institucionais para consultas técnicas e parcerias
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <div className="technical-border p-6 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold mb-1">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              </div>
            );

            return (
              <div 
                key={index}
                className="slide-in-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.link ? (
                  <a href={item.link} className="block h-full" target={item.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-8 slide-in-bottom">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
              <h3 className="text-2xl font-heading font-bold">
                <span className="text-primary">AUTO</span>
                <span className="text-foreground">MATECH</span>
              </h3>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
            </div>
            <p className="text-muted-foreground">
              Soluções em Automação e Eletromecânica
            </p>
            <p className="text-sm text-muted-foreground/70">
              © {new Date().getFullYear()} AUTOMATECH. Excelência em Engenharia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
