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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Instalações Elétricas",
      description: "Executamos instalações prediais e industriais, incluindo lançamento de cabos de alta/baixa tensão e fibra óptica, seguindo rigorosamente as normas técnicas e de segurança.",
      accent: "primary",
      technicalPoints: [
        "Projeto e dimensionamento de infraestrutura elétrica (eletrocalhas, leitos, eletrodutos).",
        "Lançamento e conexão de cabos de força, controle e instrumentação.",
        "Instalação de redes de fibra óptica para comunicação de dados e automação.",
        "Montagem de quadros de distribuição de luz e força (QDLF).",
        "Execução de instalações em conformidade com as normas NBR 5410 e NR-10.",
        "Comissionamento, testes de isolação (megômetro) e emissão de laudos técnicos."
      ]
    },
    {
      icon: Cpu,
      title: "Automação Industrial",
      description: "Desenvolvemos soluções de automação para indústrias e geração de energia (turbo, diesel, solar), utilizando componentes de ponta para maximizar a produção sem paradas no processo.",
      accent: "accent",
      technicalPoints: [
        "Levantamento de requisitos e especificação de hardware (CLPs, IHMs, Inversores).",
        "Programação de Controladores Lógicos Programáveis (CLPs) em linguagens como Ladder, FBD e ST.",
        "Desenvolvimento de telas para Interfaces Homem-Máquina (IHMs) e sistemas SCADA.",
        "Integração de redes industriais (Profinet, Modbus, Ethernet/IP).",
        "Startup, comissionamento e otimização de malhas de controle (PID).",
        "Foco em aumento de OEE (Overall Equipment Effectiveness) e rastreabilidade de processos."
      ]
    },
    {
      icon: PanelTop,
      title: "Painéis Elétricos e QTA",
      description: "Somos especialistas na montagem e manutenção de painéis de controle, proteção e excitação para sistemas de geração. Fornecemos painéis de automação (QTA) para projetos de qualquer complexidade.",
      accent: "primary",
      technicalPoints: [
        "Projeto de painéis utilizando software CAD (AutoCAD Electrical, EPLAN).",
        "Montagem de Quadros de Comando e Controle de Motores (QCCMs) e gavetas extraíveis.",
        "Fabricação de Quadros de Transferência Automática (QTA) com lógica customizada.",
        "Ensaios de rotina em conformidade com a norma NBR IEC 61439.",
        "Retrofit e modernização de painéis existentes.",
        "Documentação completa, incluindo diagramas elétricos, layout e lista de materiais."
      ]
    },
    {
      icon: Sun,
      title: "Geração de Energia Solar",
      description: "Elaboramos e executamos projetos completos de usinas fotovoltaicas, desde a instalação de painéis e inversores até a interligação com a rede, garantindo máxima eficiência energética.",
      accent: "warning",
      technicalPoints: [
        "Estudo de viabilidade, análise de sombreamento e dimensionamento do sistema fotovoltaico.",
        "Elaboração de projeto executivo e homologação junto à concessionária de energia.",
        "Instalação de estruturas de fixação para diferentes tipos de telhado e solo.",
        "Instalação de módulos fotovoltaicos, inversores de frequência e string-boxes.",
        "Execução de infraestrutura de média tensão e subestações para grandes usinas.",
        "Monitoramento de performance e manutenção preventiva do sistema."
      ]
    },
    {
      icon: Gauge,
      title: "Medições Agrupadas",
      description: "Instalação e adequação de caixas de medição agrupadas para condomínios e empreendimentos, garantindo conformidade com as normas da concessionária local.",
      accent: "accent",
      technicalPoints: [
        "Projeto de centro de medição conforme padrão de entrada da concessionária.",
        "Análise de demanda e dimensionamento de barramentos e disjuntores gerais.",
        "Instalação de caixas de medição (Tipo N, Policarbonato) e ramais de entrada.",
        "Adequação de prumadas elétricas em edifícios existentes.",
        "Organização e identificação de circuitos para facilitar a manutenção.",
        "Acompanhamento da vistoria e ligação junto à concessionária."
      ]
    },
    {
      icon: Cable,
      title: "Redes Aéreas",
      description: "Construção e manutenção de redes de distribuição aérea de baixa e média tensão, incluindo postes, transformadores e ramais de ligação.",
      accent: "primary",
      technicalPoints: [
        "Projeto e construção de redes de distribuição primária (Média Tensão) e secundária (Baixa Tensão).",
        "Instalação de postes, cruzetas, isoladores e para-raios.",
        "Montagem de estruturas para transformadores e equipamentos de proteção (religadores, chaves).",
        "Lançamento de cabos de alumínio nus (CAA) e protegidos/multiplexados (CA).",
        "Manutenção preditiva com inspeção termográfica.",
        "Execução de ramais de ligação aéreos para consumidores."
      ]
    },
    {
      icon: FileText,
      title: "Projetos de Engenharia",
      description: "Elétrica, civil e mecânica. SPDA, iluminação, estudos de seletividade, correção de fator de potência, dimensionamento de subestações.",
      accent: "accent",
      technicalPoints: [
        "Elaboração de projetos de SPDA (Para-raios) com análise de risco e dimensionamento.",
        "Projetos luminotécnicos para ambientes internos e externos com foco em eficiência.",
        "Estudos de seletividade e coordenação da proteção para sistemas elétricos.",
        "Análise de faturas de energia e projeto para correção de fator de potência.",
        "Projeto e dimensionamento de subestações de média e alta tensão.",
        "Emissão de laudos técnicos e ART (Anotação de Responsabilidade Técnica)."
      ]
    },
    {
      icon: ClipboardCheck,
      title: "Estudos e Visitas Técnicas",
      description: "Realizamos visitas técnicas para análise e orçamento detalhado de instalações, manutenções e projetos, sem custos adicionais, conforme acordo entre as partes.",
      accent: "primary",
      technicalPoints: [
        "Diagnóstico técnico de instalações elétricas e de automação existentes.",
        "Levantamento de campo (survey) para coleta de dados para novos projetos.",
        "Análise de viabilidade técnica para implantação de novas tecnologias.",
        "Elaboração de escopo técnico detalhado para licitações e cotações.",
        "Desenvolvimento de propostas técnico-comerciais completas e detalhadas.",
        "Consultoria especializada para tomada de decisão em investimentos de engenharia."
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

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 slide-in-bottom">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Áreas de <span className="text-primary">Atuação</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-accent mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções técnicas especializadas para indústria, comércio e infraestrutura
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card 
                    className={`bg-card/50 backdrop-blur-sm border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 slide-in-bottom cursor-pointer print:break-inside-avoid ${getAccentColor(service.accent)}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 space-y-4 flex flex-col h-full">
                      <div className={`w-14 h-14 rounded-lg bg-gradient-to-br from-${service.accent}/20 to-${service.accent}/5 flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-7 h-7 ${getAccentColor(service.accent).split(' ')[0]}`} />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-heading font-semibold text-foreground mb-2" translate="no">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {service.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px] bg-card/80 backdrop-blur-lg border-primary/30">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-heading text-primary flex items-center gap-4">
                      <Icon className="w-7 h-7" />
                      <span translate="no">{service.title}</span>
                    </DialogTitle>
                    <DialogDescription className="pt-4 text-left">
                      <ul className="space-y-3">
                        {service.technicalPoints.map((point, pIndex) => (
                          <li key={pIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </DialogDescription>
                  </DialogHeader>
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