import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParallaxBackground from './components/ParallaxBackground';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useRef } from 'react';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Navbar refs={{aboutRef, projectsRef, skillsRef, contactRef}} />
      <ParallaxBackground />
      <Hero />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Skills ref={skillsRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
