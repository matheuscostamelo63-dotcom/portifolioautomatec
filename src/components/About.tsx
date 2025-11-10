import { CheckCircle2 } from "lucide-react";

const About = () => {
  const values = [
    "Comprometimento com qualidade e prazos",
    "Inovação tecnológica constante",
    "Eficiência técnica comprovada",
    "Equipe altamente qualificada",
    "Segurança em todas as etapas"
  ];

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 grid-pattern" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 slide-in-bottom">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Sobre a <span className="text-primary" translate="no">AUTOMATECH</span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-accent" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Description */}
            <div className="slide-in-left space-y-6 print:break-inside-avoid">
              <div className="technical-border p-6 bg-secondary/30 backdrop-blur-sm">
                <h3 className="text-2xl font-heading text-primary mb-4">Nossa História</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Fundada em <span className="text-accent font-semibold">2019</span>, a AUTOMATECH consolidou-se 
                  como referência em soluções de automação e engenharia eletromecânica, com crescimento 
                  expressivo e atuação em projetos de alta complexidade em todo território nacional.
                </p>
              </div>

              <div className="technical-border p-6 bg-secondary/30 backdrop-blur-sm">
                <h3 className="text-2xl font-heading text-primary mb-4">Nossa Missão</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Entregar soluções técnicas de excelência que transformam processos industriais, 
                  agregando valor através de tecnologia, qualidade e compromisso com resultados mensuráveis.
                </p>
              </div>
            </div>

            {/* Right Column - Values */}
            <div className="slide-in-right space-y-6 print:break-inside-avoid">
              <div className="technical-border p-6 bg-secondary/30 backdrop-blur-sm">
                <h3 className="text-2xl font-heading text-accent mb-6">Nossos Valores</h3>
                <ul className="space-y-4">
                  {values.map((value, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
                      <span className="text-foreground/90">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/30 rounded">
                <p className="text-lg font-body text-center text-foreground/90 italic">
                  "Transformando desafios técnicos em <span className="text-primary font-semibold">soluções eficientes</span> 
                  através de <span className="text-accent font-semibold">engenharia de excelência</span>"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;