import React from 'react';
import './Navbar.css';

const Navbar = ({ refs }) => {
  const scrollToSection = (ref) => {
    if (ref.current)
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">Portfolio</div>
      <div className="nav-links">
        <button onClick={() => scrollToSection(refs.aboutRef)}>About</button>
        <button onClick={() => scrollToSection(refs.projectsRef)}>Projects</button>
        <button onClick={() => scrollToSection(refs.skillsRef)}>Skills</button>
        <button onClick={() => scrollToSection(refs.contactRef)}>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
