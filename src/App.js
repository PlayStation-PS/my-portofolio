import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServiceSection from './components/ServiceSection';
import SkillSection from './components/SkillSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default App;
