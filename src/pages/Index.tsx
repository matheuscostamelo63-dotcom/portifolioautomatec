import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Clients from "@/components/Clients";
import TechnicalDetails from "@/components/TechnicalDetails";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <TechnicalDetails />
      <Projects />
      <Clients />
      <Contact />
    </div>
  );
};

export default Index;