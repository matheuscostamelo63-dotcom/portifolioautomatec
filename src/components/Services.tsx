import { 
  Zap, 
  Cpu, 
  PanelTop, 
  Sun, 
  FileText, 
  ClipboardCheck,
  Gauge,
  Cable
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Instalações Elétricas",
      description: "Executamos instalações prediais e industriais, incluindo lançamento de cabos de alta/baixa tensão e fibra óptica, seguindo rigorosamente as normas técnicas e de segurança.",
      accent: "primary"
    },
    {
      icon: Cpu,
      title: "Automação Industrial",
      description: "Desenvolvemos soluções de automação para indústrias e geração de energia (turbo, diesel, solar), utilizando componentes de ponta para maximizar a produção sem paradas no processo.",
      accent: "accent"
    },
    {
      icon: PanelTop,
      title: "Painéis Elétricos e QTA",
      description: "Somos especialistas na montagem e manutenção de painéis de controle, proteção e excitação para sistemas de geração. Fornecemos painéis de automação (QTA) para projetos de qualquer complexidade.",
      accent: "primary"
    },
    {
      icon: Sun,
      title: "Geração de Energia Solar",
      description: "Elaboramos e executamos projetos completos de usinas fotovoltaicas, desde a instalação de painéis e inversores até a interligação com a rede, garantindo máxima eficiência energética.",
      accent: "warning"
    },
    {
      icon: Gauge,
      title: "Medições Agrupadas",
      description: "Instalação e adequação de caixas de medição agrupadas para condomínios e empreendimentos, garantindo conformidade com as normas da concessionária local.",
      accent: "accent"
    },
    {
      icon: Cable,
      title: "Redes Aéreas",
      description: "Construção e manutenção de redes de distribuição aérea de baixa e média tensão, incluindo postes, transformadores e ramais de ligação.",
      accent: "primary"
    },
    {
      icon: FileText,
      title: "Projetos de Engenharia",
      description: "Elétrica, civil e mecânica. SPDA, iluminação, estudos de seletividade, correção de fator de potência, dimensionamento de subestações.",
      accent: "accent"
    },
    {
      icon: ClipboardCheck,
      title: "Estudos e Visitas Técnicas",
      description: "Realizamos visitas técnicas para análise e orçamento detalhado de instalações, manutenções e projetos, sem custos adicionais, conforme acordo entre as partes.",
      accent: "primary"
    }
  ];

  const getAccentColor = (accent: string) => {
    switch(accent) {
      case 'accent': return 'text-accent border-accent/30 hover:border-accent/60';
      case 'warning': return 'text-warning border-warning/30 hover:border-warning/60';
      default: return 'text-primary border-primary/30 hover:border-primary/60';
    }
  };

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-bottom">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Áreas de <span className="text-primary">Atuação</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-accent mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções técnicas especializadas para indústria, comércio e infraestrutura
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className={`bg-card/50 backdrop-blur-sm border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 slide-in-bottom ${getAccentColor(service.accent)}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4 flex flex-col h-full">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br from-${service.accent}/20 to-${service.accent}/5 flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-7 h-7 ${getAccentColor(service.accent).split(' ')[0]}`} />
                  </div>

                  <div className="flex-grow">
                    {/* Title */}
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;