import { 
  Zap, 
  Cpu, 
  PanelTop, 
  Sun, 
  FileText, 
  ClipboardCheck,
  Gauge,
  Cable,
  CheckCircle2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Instalações Elétricas",
      description: "Executamos instalações prediais e industriais, incluindo lançamento de cabos de alta/baixa tensão e fibra óptica, seguindo rigorosamente as normas técnicas e de segurança.",
      accent: "primary",
      technicalPoints: [
        "Lançamento de todos os tipos de cabos (predial e industrial) seguindo as Normas Brasileiras.",
        "Execução de instalações de alta e baixa tensão com base em Análise Preliminar de Risco (APR).",
        "Estruturação de redes com cabos de Fibra Óptica para qualquer tipo de ambiente."
      ]
    },
    {
      icon: Cpu,
      title: "Automação Industrial",
      description: "Desenvolvemos soluções de automação para indústrias e geração de energia (turbo, diesel, solar), utilizando componentes de ponta para maximizar a produção sem paradas no processo.",
      accent: "accent",
      technicalPoints: [
        "Soluções de automação para geração de energia (turbo, diesel, solar), serrarias e indústrias em geral.",
        "Análise de processos para desenvolver a solução ideal, aumentando a eficiência e maximizando a produção.",
        "Utilização de componentes de primeira linha, permitindo manutenções sem paralisar o processo industrial."
      ]
    },
    {
      icon: PanelTop,
      title: "Painéis Elétricos e QTA",
      description: "Somos especialistas na montagem e manutenção de painéis de controle, proteção e excitação para sistemas de geração. Fornecemos painéis de automação (QTA) para projetos de qualquer complexidade.",
      accent: "primary",
      technicalPoints: [
        "Especialização em montagem, controle, proteção e manutenção de sistemas de geração de energia.",
        "Desenvolvimento de projetos de Painéis de Proteção e Excitação customizados para cada gerador.",
        "Fornecimento de Painéis de Automação (QTA) para sistemas de qualquer complexidade."
      ]
    },
    {
      icon: Sun,
      title: "Geração de Energia Solar",
      description: "Elaboramos e executamos projetos completos de usinas fotovoltaicas, desde a instalação de painéis e inversores até a interligação com a rede, garantindo máxima eficiência energética.",
      accent: "warning",
      technicalPoints: [
        "Elaboração e execução de projetos completos de usinas fotovoltaicas, da instalação à interligação.",
        "Implementação de painéis, inversores, cabeamento e subestações para máxima eficiência.",
        "Garantia de conformidade com as normas técnicas para segurança e performance do sistema."
      ]
    },
    {
      icon: Gauge,
      title: "Medições Agrupadas",
      description: "Instalação e adequação de caixas de medição agrupadas para condomínios e empreendimentos, garantindo conformidade com as normas da concessionária local.",
      accent: "accent",
      technicalPoints: [
        "Adequação aos padrões e normas técnicas da concessionária de energia local.",
        "Projetos para condomínios residenciais, comerciais e empreendimentos.",
        "Organização e segurança do sistema de medição para múltiplas unidades."
      ]
    },
    {
      icon: Cable,
      title: "Redes Aéreas",
      description: "Construção e manutenção de redes de distribuição aérea de baixa e média tensão, incluindo postes, transformadores e ramais de ligação.",
      accent: "primary",
      technicalPoints: [
        "Construção e manutenção de redes de distribuição de baixa e média tensão.",
        "Instalação de postes, transformadores, e equipamentos de proteção.",
        "Execução de ramais de ligação para consumidores industriais e comerciais."
      ]
    },
    {
      icon: FileText,
      title: "Projetos de Engenharia",
      description: "Elétrica, civil e mecânica. SPDA, iluminação, estudos de seletividade, correção de fator de potência, dimensionamento de subestações.",
      accent: "accent",
      technicalPoints: [
        "Projetos elétricos, civis e mecânicos para diversas finalidades.",
        "Elaboração de estudos de SPDA, iluminação e seletividade de proteção.",
        "Dimensionamento de subestações e projetos para correção de fator de potência."
      ]
    },
    {
      icon: ClipboardCheck,
      title: "Estudos e Visitas Técnicas",
      description: "Realizamos visitas técnicas para análise e orçamento detalhado de instalações, manutenções e projetos, sem custos adicionais, conforme acordo entre as partes.",
      accent: "primary",
      technicalPoints: [
        "Realização de visitas técnicas para análise detalhada de instalações, manutenções e projetos.",
        "Fornecimento de orçamento discriminado e transparente.",
        "Serviço sem custos adicionais, conforme acordo prévio entre as partes."
      ]
    }
  ];

  const getAccentColor = (accent: string) => {
    switch(accent) {
      case 'accent': return 'text-accent border-accent/30 hover:border-accent/60';
      case 'warning': return 'text-warning border-warning/30 hover:border-warning/60';
      default: return 'text-primary border-primary/30 hover:border-primary/60';
    }
  };

  const getIconBgColor = (accent: string) => {
    switch(accent) {
      case 'accent': return `from-accent/20 to-accent/5`;
      case 'warning': return `from-warning/20 to-warning/5`;
      default: return `from-primary/20 to-primary/5`;
    }
  }

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
            Soluções técnicas especializadas para indústria, comércio e infraestrutura. Clique para ver os detalhes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card 
                    className={`bg-card/50 backdrop-blur-sm border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 slide-in-bottom cursor-pointer ${getAccentColor(service.accent)}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 space-y-4 flex flex-col h-full">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${getIconBgColor(service.accent)} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-7 h-7 ${getAccentColor(service.accent).split(' ')[0]}`} />
                      </div>

                      <div className="flex-grow">
                        {/* Title */}
                        <h3 className="text-xl font-heading font-semibold text-foreground mb-2" translate="no">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {service.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px] bg-card border-border">
                  <DialogHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${getIconBgColor(service.accent)} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-7 h-7 ${getAccentColor(service.accent).split(' ')[0]}`} />
                      </div>
                      <DialogTitle className="text-2xl font-heading text-foreground" translate="no">{service.title}</DialogTitle>
                    </div>
                    <DialogDescription className="text-muted-foreground text-base">
                      {service.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <h4 className="mb-4 text-lg font-heading text-accent">Detalhes Técnicos:</h4>
                    <ul className="space-y-3">
                      {service.technicalPoints.map((point, pIndex) => (
                        <li key={pIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;