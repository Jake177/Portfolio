import Layout from './components/Layout'
import Navbar from './components/Navbar'
import HeroSection from './components/Home'
import AboutSection from './components/AboutMe'
import ServicesSection from './components/ServicesSection'
import ProjectsSection, { CaseStudiesSection } from './components/Projects'
import SkillsSection from './components/Skills'
import ExperienceTimeline from './components/ExperienceTimeline'
import ContactSection from './components/Contact'
import Footer from './components/Footer'
import BackToTopButton from './components/NavigationCircles'

const App = () => (
  <Layout>
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <CaseStudiesSection />
      <SkillsSection />
      <ExperienceTimeline />
      <ContactSection />
    </main>
    <Footer />
    <BackToTopButton />
  </Layout>
)

export default App
