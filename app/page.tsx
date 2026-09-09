import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import StatsCounter from './components/sections/StatsCounter';
import AboutMe from './components/sections/AboutMe';
import TechSkills from './components/sections/TechSkills';
import SelectedWork from './components/sections/SelectedWork';
import ProjectGallery from './components/sections/ProjectGallery';
import ServicesProcess from './components/sections/ServicesProcess';
import Testimonials from './components/sections/Testimonials';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="relative z-10 flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsCounter />
        <AboutMe />
        <TechSkills />
        <SelectedWork />
        <ProjectGallery />
        <ServicesProcess />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
