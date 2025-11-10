import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cable, Cpu, PanelTop, Sun, ClipboardCheck, CheckCircle2 } from "lucide-react";

const technicalData = [
  {
    icon: Cable,
    title: "Lançamento de Cabos e Infraestrutura",
    points: [
      "Lançamento de todos os tipos de cabos (predial e industrial) seguindo as Normas Brasileiras.",
      "Execução de instalações de alta e baixa tensão com base em Análise Preliminar de Risco (APR).",
      "Estruturação de redes com cabos de Fibra Óptica para qualquer tipo de ambiente."
    ]
  },
  {
    icon: Cpu,
    title: "Automação e Controle de Processos",
    points: [
      "Soluções de automação para geração de energia (turbo, diesel, solar), serrarias e indústrias em geral.",
      "Análise de processos para desenvolver a solução ideal, aumentando a eficiência e maximizando a produção.",
      "Utilização de componentes de primeira linha, permitindo manutenções sem paralisar o processo industrial."
    ]
  },
  {
    icon: PanelTop,
    title: "Montagem de Painéis e QTA",
    points: [
      "Especialização em montagem, controle, proteção e manutenção de sistemas de geração de energia.",
      "Desenvolvimento de projetos de Painéis de Proteção e Excitação customizados para cada gerador.",
      "Fornecimento de Painéis de Automação (QTA) para sistemas de qualquer complexidade."
    ]
  },
  {
    icon: Sun,
    title: "Projetos de Usinas Fotovoltaicas",
    points: [
      "Elaboração e execução de projetos completos de usinas fotovoltaicas, da instalação à interligação.",
      "Implementação de painéis, inversores, cabeamento e subestações para máxima eficiência.",
      "Garantia de conformidade com as normas técnicas para segurança e performance do sistema."
    ]
  },
  {
    icon: ClipboardCheck,
    title: "Análise e Orçamento Técnico",
    points: [
      "Realização de visitas técnicas para análise detalhada de instalações, manutenções e projetos.",
      "Fornecimento de orçamento discriminado e transparente.",
      "Serviço sem custos adicionais, conforme acordo prévio entre as partes."
    ]
  }
];

const TechnicalDetails = () => {
  return (
    <section id="technical-details" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-bottom">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Detalhes <span className="text-accent">Técnicos</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-primary mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa abordagem técnica para garantir a excelência em cada projeto.
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {technicalData.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 slide-in-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-heading text-foreground" translate="no">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {item.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalDetails;