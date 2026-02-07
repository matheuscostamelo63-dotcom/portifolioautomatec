import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Clients from "@/components/Clients";
import SocialActions from "@/components/SocialActions";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="print:break-before-page">
        <About />
      </div>
      <div className="print:break-before-page">
        <Services />
      </div>
      <div className="print:break-before-page">
        <Projects />
      </div>
      <div className="print:break-before-page">
        <Clients />
      </div>
      <div className="print:break-before-page">
        <SocialActions />
      </div>
      <div className="print:break-before-page">
        <Contact />
      </div>
    </div>
  );
};

export default Index;