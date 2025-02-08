import React, { useEffect, useRef } from 'react';
import './Hero.css';
import useTypewriter from '../hooks/useTypewriter';
import { useInView } from 'react-intersection-observer';
import bgImage from '../images/bg.png';
import profileImage from '../images/me.jpg';

const Hero = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
    rootMargin: '-100px'
  });

  const typewriterText = useTypewriter(
    ['Full Stack Developer', 'Information Technology Student'],
    100,
    50,
    2000
  );

  return (
    <section className="hero" ref={sectionRef} style={{ display: 'flex', alignItems: 'center' }}>
      <div className={`hero-content ${inView ? 'slide-in' : ''}`}>
        <h1 className={`hero-title ${inView ? 'slide-in' : ''}`}>
          Hi, I'm <span className="highlight">Harley Busa</span>
        </h1>
        <p className={`hero-subtitle ${inView ? 'slide-in' : ''}`}>
          <span className="typewriter">{typewriterText}</span>
          <span className="cursor">|</span>
        </p>
        <div className={`hero-description ${inView ? 'slide-in' : ''}`}>
          Turning ideas into reality through elegant code and creative solutions
        </div>
        <button 
          className={`cta-button ${inView ? 'slide-in' : ''}`}
          onClick={() => document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' })}
        >
          View My Work
        </button>
      </div>
      <div className={`profile-image-container ${inView ? 'slide-in' : 'slide-out'}`}>
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      <div className="hero-background">
        <img src={bgImage} alt="background" />
      </div>
    </section>
  );
};

export default Hero;
