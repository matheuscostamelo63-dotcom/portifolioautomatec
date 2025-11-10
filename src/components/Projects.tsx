import { useState } from "react";
import painel1 from "@/assets/painel-1.jpg";
import painel2 from "@/assets/painel-2.jpg";
import painel3 from "@/assets/painel-3.jpg";
import painel4 from "@/assets/painel-4.jpg";
import painel7 from "@/assets/painel-7.jpg";
import painel8 from "@/assets/painel-8.jpg";
import painel9 from "@/assets/painel-9.jpg";
import painel10 from "@/assets/painel-10.jpg";
import painel11 from "@/assets/painel-11.jpg";
import painel12 from "@/assets/painel-12.jpg";
import leitoCabo2 from "@/assets/leito-cabo-2.jpg";
import leitoCabo3 from "@/assets/leito-cabo-3.jpg";
import leitoCabo4 from "@/assets/leito-cabo-4.jpg";
import leitoCabo5 from "@/assets/leito-cabo-5.jpg";
import leitoCabo6 from "@/assets/leito-cabo-6.jpg";
import leitoCabo7 from "@/assets/leito-cabo-7.jpg";
import leitoCabo8 from "@/assets/leito-cabo-8.jpg";
import leitoCabo9 from "@/assets/leito-cabo-9.jpg";
import leitoCabo10 from "@/assets/leito-cabo-10.jpg";
import leitoCabo11 from "@/assets/leito-cabo-11.jpg";
import leitoCabo12 from "@/assets/leito-cabo-12.jpg";
import leitoCabo13 from "@/assets/leito-cabo-13.jpg";
import leitoCabo14 from "@/assets/leito-cabo-14.jpg";
import leitoCabo15 from "@/assets/leito-cabo-15.jpg";
import leitoCabo16 from "@/assets/leito-cabo-16.jpg";
import altaTensao1 from "@/assets/alta-tensao-1.jpg";
import altaTensao2 from "@/assets/alta-tensao-2.jpg";
import altaTensao3 from "@/assets/alta-tensao-3.jpg";
import altaTensao4 from "@/assets/alta-tensao-4.jpg";
import altaTensao5 from "@/assets/alta-tensao-5.jpg";
import altaTensao6 from "@/assets/alta-tensao-6.jpg";
import altaTensao7 from "@/assets/alta-tensao-7.jpg";
import altaTensao8 from "@/assets/alta-tensao-8.jpg";
import altaTensao9 from "@/assets/alta-tensao-9.jpg";
import altaTensao10 from "@/assets/alta-tensao-10.jpg";
import altaTensao11 from "@/assets/alta-tensao-11.jpg";
import altaTensao12 from "@/assets/alta-tensao-12.jpg";
import altaTensao13 from "@/assets/alta-tensao-13.jpg";
import altaTensao14 from "@/assets/alta-tensao-14.jpg";
import altaTensao15 from "@/assets/alta-tensao-15.jpg";
import altaTensao16 from "@/assets/alta-tensao-16.jpg";
import fabricacao1 from "@/assets/fabricacao-1.jpg";
import fabricacao2 from "@/assets/fabricacao-2.jpg";
import fabricacao3 from "@/assets/fabricacao-3.jpg";
import fabricacao4 from "@/assets/fabricacao-4.jpg";
import fabricacao5 from "@/assets/fabricacao-5.jpg";
import fabricacao6 from "@/assets/fabricacao-6.jpg";
import fabricacao7 from "@/assets/fabricacao-7.jpg";
import fabricacao8 from "@/assets/fabricacao-8.jpg";
import fabricacao9 from "@/assets/fabricacao-9.jpg";
import fabricacao10 from "@/assets/fabricacao-10.jpg";
import fabricacao11 from "@/assets/fabricacao-11.jpg";
import fabricacao12 from "@/assets/fabricacao-12.jpg";
import fabricacao13 from "@/assets/fabricacao-13.jpg";
import fabricacao14 from "@/assets/fabricacao-14.jpg";
import fabricacao15 from "@/assets/fabricacao-15.jpg";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";

const projects = [
  {
    image: painel1,
    images: [painel1, painel2, painel3, painel4, painel7, painel8, painel9, painel10, painel11, painel12],
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
    image: leitoCabo2,
    images: [
      leitoCabo2, leitoCabo3, leitoCabo4, leitoCabo5, leitoCabo6, leitoCabo7, leitoCabo8, 
      leitoCabo9, leitoCabo10, leitoCabo11, leitoCabo12, leitoCabo13, leitoCabo14, leitoCabo15, leitoCabo16  
    ],
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
    image: altaTensao1,
    images: [
      altaTensao1, altaTensao2, altaTensao3, altaTensao4, altaTensao5, altaTensao6, altaTensao7, 
      altaTensao8, altaTensao9, altaTensao10, altaTensao11, altaTensao12, altaTensao13, altaTensao14, altaTensao15, altaTensao16  
    ],
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
    image: fabricacao1,
    images: [
      fabricacao1, fabricacao2, fabricacao3, fabricacao4, fabricacao5, fabricacao6, fabricacao7, 
      fabricacao8, fabricacao9, fabricacao10, fabricacao11, fabricacao12, fabricacao13, fabricacao14, fabricacao15  
    ],
    title: "Fabricação e Montagem Industrial",
    category: "Engenharia Eletromecânica",
    location: "Projetos Customizados",
    technicalDetails: [
      "Fabricação de estruturas metálicas e suportes.",
      "Montagem de tubulações e equipamentos industriais.",
      "Soldagem qualificada em diversos processos (TIG, MIG, Eletrodo).",
      "Alinhamento de máquinas e conjuntos mecânicos."
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

              <h4 className="text-xl font-heading text-accent mb-4">Galeria de Imagens</h4>
              <div className="grid grid-cols-2 gap-4">
                {project.images.slice(0, 4).map((image, imgIndex) => (
                  <div key={imgIndex} className="aspect-[4/3] overflow-hidden border border-border rounded">
                    <img src={image} alt={`${project.title} - Imagem ${imgIndex + 1}`} className="w-full h-full object-contain bg-secondary" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCarousel = ({ images, title }: { images: string[]; title: string }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasMultipleImages = images && images.length > 1;

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasMultipleImages = project.images && project.images.length > 1;

  const nextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const previousImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  const currentImage = project.images ? project.images[currentImageIndex] : project.image;

  return (
    <div 
      className="group relative overflow-hidden rounded-lg border-2 border-border hover:border-primary/50 transition-all duration-300 slide-in-bottom"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="aspect-[4/3] overflow-hidden bg-secondary relative">
        <img 
          src={currentImage} 
          alt={project.title}
          className="w-full h-full object-contain bg-secondary transition-transform duration-500 group-hover:scale-105"
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
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </>
        )}
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