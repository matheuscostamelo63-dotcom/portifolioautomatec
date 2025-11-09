import { useState } from "react";
import painel1 from "@/assets/painel-1.jpg";
import painel2 from "@/assets/painel-2.jpg";
import painel3 from "@/assets/painel-3.jpg";
import painel4 from "@/assets/painel-4.jpg";
import painel7 from "@/assets/painel-7.jpg";
import painel8 from "@/assets/painel-8.jpg";
import leitoCabo1 from "@/assets/leito-cabo-1.jpg"; // Imagem renomeada
import leitoCabo2 from "@/assets/leito-cabo-2.jpg"; // Nova imagem adicionada
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      image: painel1,
      images: [painel1, painel2, painel3, painel4, painel7, painel8],
      title: "Painéis de Controle e QTA",
      category: "Automação & Controle",
      location: "Indústria - Pará"
    },
    {
      image: leitoCabo1,
      images: [leitoCabo1, leitoCabo2], // Novas imagens para Leitos para Cabo
      title: "Leitos para Cabo", // Título atualizado
      category: "Infraestrutura Elétrica", // Categoria atualizada
      location: "Instalação Industrial" // Localização atualizada
    },
    {
      image: project3,
      title: "Subestação de Energia",
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