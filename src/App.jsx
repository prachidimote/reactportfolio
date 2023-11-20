// import Navbar from "./components/Navbar"
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';
// import Test from "./Test"
import Navbar from './components/Navbar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
const App = () => {
  return (
     <div>
      <ParticlesBackground />
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type="services" />
      </section>
      <section>
      <Services></Services>
    </section>
    <section id='Portfolio'><Parallax type="portfolio" /></section>
    <Skills></Skills>
    <section id='Contact'>
      <Contact></Contact>
    </section>
      {/* <Test /> */}
    </div>
    
  )
}

export default App