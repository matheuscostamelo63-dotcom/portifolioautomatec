import { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, ImageOff } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";

// Definindo um placeholder para a imagem
const PLACEHOLDER_IMAGE = "placeholder";

const projects = [
  {
    image: PLACEHOLDER_IMAGE,
    images: [PLACEHOLDER_IMAGE],
    title: "Painéis de Controle e QTA",
    category: "Automação & Controle",
    location: "Indústria - Pará",
    technicalDetails: [
      "Montagem de quadros de comando com CLPs e IHMs.",
      "Integração de sistemas de supervisão (SCADA).",
      "Comissionamento e startup de painéis de automação.",
      "Quadros de Transferência Automática (QTA) para geradores.",
      "Lançamento de cabos (predial/industrial) para instalações de Alta e Baixa Tensão, seguindo normas e APR.",
      "Instalação e estruturação de redes com cabos de Fibra Óptica."
    ]
  },
  {
    image: PLACEHOLDER_IMAGE,
    images: [PLACEHOLDER_IMAGE],
    title: "Caminhamento para Cabos",
    category: "Infraestrutura Elétrica",
    location: "Instalação Industrial",
    technicalDetails: [
      "Instalação de leitos para sustentação e distribuição de cabos de alta, média e baixa tensão.",
      "Estrutura com longarinas perfil 'U' (100x19/100x45mm) e travessas perfil 'C' (38x38/19x38mm).",
      "Fornecimento em peças de 3000mm ou 6000mm com espaçamento de travessas de 200, 250 ou 500mm.",
      "Fabricação em Aço SAE 1010/1020, Aço Inox (304/316) ou Alumínio.",
      "Montagem em conformidade com a norma NBR 5410.",
      "Organização e identificação completa dos circuitos."
    ]
  },
  {
    image: PLACEHOLDER_IMAGE,
    images: [PLACEHOLDER_IMAGE],
    title: "Redes Aéreas",
    category: "Infraestrutura Elétrica",
    location: "Complexo Industrial",
    technicalDetails: [
      "Construção de redes de distribuição de média tensão (13.8kV).",
      "Instalação de transformadores e postes de concreto.",
      "Manutenção preventiva em redes de distribuição.",
      "Lançamento de cabos de alumínio multiplexados."
    ]
  },
  {
    image: PLACEHOLDER_IMAGE,
    images: [PLACEHOLDER_IMAGE],
    title: "Fabricação e Montagem Industrial",
    category: "Engenharia Eletromecânica",
    location: "Projetos Customizados",
    technicalDetails: [
      "Fabricação de estruturas metálicas e suportes.",
      "Montagem de tubulações e equipamentos industriais.",
      "Soldagem qualificada em diversos processos (TIG, MIG, Eletrodo).",
      "Alinhamento de máquinas e conjuntos mecânicos."
    ]
  },
  {
    image: PLACEHOLDER_IMAGE,
    images: [PLACEHOLDER_IMAGE],
    title: "Instalação e Medição de Sistemas de Aterramento Elétrico",
    category: "Segurança Elétrica",
    location: "Projetos de Engenharia",
    technicalDetails: [
      "Projeto técnico conforme características do solo e das cargas instaladas.",
      "Instalação de hastes, condutores e conexões com soldagem exotérmica.",
      "Interligação e equipotencialização de painéis, estruturas e equipamentos.",
      "Ensaios de resistência ôhmica do aterramento com terrômetro, para comprovar eficiência e conformidade.",
      "Emissão de laudo técnico e ART com os resultados das medições."
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-5 grid-pattern" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 slide-in-bottom">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Projetos <span className="text-accent">Realizados</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-primary mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Portfólio de execuções técnicas em automação, energia e infraestrutura
          </p>
        </div>

        {/* Interactive View for Screen */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto print:hidden">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="cursor-pointer">
                  <ProjectCard project={project} index={index} />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] bg-card/80 backdrop-blur-lg border-primary/30">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-heading text-primary">{project.title}</DialogTitle>
                  <DialogDescription className="text-muted-foreground">{project.category} - {project.location}</DialogDescription>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 py-4">
                  <ProjectCarousel images={project.images} title={project.title} />
                  <div>
                    <h4 className="text-lg font-heading text-accent mb-4">Detalhes Técnicos</h4>
                    <ul className="space-y-3">
                      {project.technicalDetails.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Static View for Printing */}
        <div className="hidden print:block">
          {projects.map((project, index) => (
            <div key={`print-${index}`} className="mb-12 print:break-inside-avoid">
              <h3 className="text-3xl font-heading font-bold text-foreground mb-2">{project.title}</h3>
              <p className="text-lg text-muted-foreground mb-6">{project.category} - {project.location}</p>
              
              <h4 className="text-xl font-heading text-accent mb-4">Detalhes Técnicos</h4>
              <ul className="space-y-2 mb-8">
                {project.technicalDetails.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{detail}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-xl font-heading text-accent mb-4">Galeria de Imagens (Removida)</h4>
              <div className="aspect-[4/3] flex items-center justify-center bg-secondary border border-border rounded text-muted-foreground">
                <ImageOff className="w-10 h-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCarousel = ({ images, title }: { images: string[]; title: string }) => {
  const hasMultipleImages = images && images.length > 1 && images[0] !== PLACEHOLDER_IMAGE;

  // Se for placeholder, renderiza o ícone
  if (images[0] === PLACEHOLDER_IMAGE) {
    return (
      <div className="aspect-[4/3] overflow-hidden bg-secondary relative rounded-lg flex items-center justify-center">
        <ImageOff className="w-12 h-12 text-muted-foreground/50" />
        <p className="absolute bottom-4 text-sm text-muted-foreground">Imagens removidas</p>
      </div>
    );
  }

  // Lógica original do carrossel (mantida, mas só será usada se o PLACEHOLDER_IMAGE for removido futuramente)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const previousImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const currentImage = images[currentImageIndex];

  return (
    <div className="aspect-[4/3] overflow-hidden bg-secondary relative rounded-lg">
      <img 
        src={currentImage} 
        alt={title}
        className="w-full h-full object-contain bg-secondary transition-opacity duration-300"
      />
      {hasMultipleImages && (
        <>
          <Button variant="ghost" size="icon" className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-primary/90 text-foreground hover:text-primary-foreground" onClick={(e) => { e.stopPropagation(); previousImage(); }}>
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-primary/90 text-foreground hover:text-primary-foreground" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            <ChevronRight className="h-6 w-6" />
          </Button>
          <div className="absolute bottom-2 right-2 z-20 bg-background/90 px-3 py-1.5 rounded-md text-xs font-semibold text-foreground border border-border">
            {currentImageIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const hasMultipleImages = project.images && project.images.length > 1 && project.images[0] !== PLACEHOLDER_IMAGE;

  // Se for placeholder, não precisamos de estado de índice ou botões de navegação
  const currentImage = project.image;

  return (
    <div 
      className="group relative overflow-hidden rounded-lg border-2 border-border hover:border-primary/50 transition-all duration-300 slide-in-bottom"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="aspect-[4/3] overflow-hidden bg-secondary relative flex items-center justify-center">
        {currentImage === PLACEHOLDER_IMAGE ? (
          <ImageOff className="w-12 h-12 text-muted-foreground/50" />
        ) : (
          <img 
            src={currentImage} 
            alt={project.title}
            className="w-full h-full object-contain bg-secondary transition-transform duration-500 group-hover:scale-105"
          />
        )}
        
        {/* Removemos os botões de navegação da ProjectCard, pois só há um placeholder */}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-0">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary border border-primary/30 rounded-full" translate="no">
            {project.category}
          </span>
        </div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors" translate="no">
          {project.title}
        </h3>
        <p className="text-muted-foreground flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
          {project.location}
        </p>
      </div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  );
};

export default Projects;