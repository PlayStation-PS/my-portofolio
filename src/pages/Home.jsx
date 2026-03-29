import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import SkillSection from '../components/SkillSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';

const Home = () => {
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
    )
}

export default Home