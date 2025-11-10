import { useState } from "react";
import painel1 from "@/assets/painel-1.jpg";
import painel2 from "@/assets/painel-2.jpg";
import painel3 from "@/assets/painel-3.jpg";
import painel4 from "@/assets/painel-4.jpg";
import painel7 from "@/assets/painel-7.jpg";
import painel8 from "@/assets/painel-8.jpg";
import painel9 from "@/assets/painel-9.jpg"; // Nova imagem
import painel10 from "@/assets/painel-10.jpg"; // Nova imagem
import painel11 from "@/assets/painel-11.jpg"; // Nova imagem
import painel12 from "@/assets/painel-12.jpg"; // Nova imagem
import leitoCabo1 from "@/assets/leito-cabo-1.jpg";
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
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
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
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      image: painel1,
      images: [painel1, painel2, painel3, painel4, painel7, painel8, painel9, painel10, painel11, painel12], // Lista de imagens atualizada
      title: "Painéis de Controle e QTA",
      category: "Automação & Controle",
      location: "Indústria - Pará"
    },
    {
      image: leitoCabo2,
      images: [
        leitoCabo2, 
        leitoCabo3, 
        leitoCabo4, 
        leitoCabo5, 
        leitoCabo6, 
        leitoCabo7, 
        leitoCabo8, 
        leitoCabo9, 
        leitoCabo10,
        leitoCabo11, 
        leitoCabo12, 
        leitoCabo13, 
        leitoCabo14, 
        leitoCabo15, 
        leitoCabo16  
      ],
      title: "Leitos para Cabo",
      category: "Infraestrutura Elétrica",
      location: "Instalação Industrial"
    },
    {
      image: altaTensao1,
      images: [
        altaTensao1, 
        altaTensao2, 
        altaTensao3,
        altaTensao4, 
        altaTensao5, 
        altaTensao6, 
        altaTensao7, 
        altaTensao8, 
        altaTensao9, 
        altaTensao10, 
        altaTensao11, 
        altaTensao12, 
        altaTensao13, 
        altaTensao14, 
        altaTensao15, 
        altaTensao16  
      ],
      title: "Infraestrutura Elétrica de Alta Tensão",
      category: "Infraestrutura Elétrica",
      location: "Complexo Industrial"
    },
    {
      image: project4,
      title: "Automação de Linha de Produção",
      category: "Indústria 4.0",
      location: "Manufatura Avançada"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-5 grid-pattern" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-bottom">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Projetos <span className="text-accent">Realizados</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-primary mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Portfólio de execuções técnicas em automação, energia e infraestrutura
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
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
      {/* Image with Carousel */}
      <div className="aspect-[4/3] overflow-hidden bg-secondary relative">
        <img 
          src={currentImage} 
          alt={project.title}
          className="w-full h-full object-contain bg-secondary transition-transform duration-500 group-hover:scale-105"
        />

        {/* Carousel Navigation */}
        {hasMultipleImages && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-primary/90 text-foreground hover:text-primary-foreground transition-all shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-primary/90 text-foreground hover:text-primary-foreground transition-all shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            
            {/* Image Counter */}
            <div className="absolute bottom-2 right-2 z-20 bg-background/90 px-3 py-1.5 rounded-md text-xs font-semibold text-foreground border border-border">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </>
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-0">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary border border-primary/30 rounded-full">
            {project.category}
          </span>
        </div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
          {project.location}
        </p>
      </div>

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  );
};

export default Projects;