import React, { forwardRef } from 'react';
import './About.css';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaLaptopCode, FaRocket } from 'react-icons/fa';

const About = forwardRef((props, ref) => {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  return (
    <section ref={ref} id="about-section">
      <h2 className="section-title">About Me</h2>
      <div className={`about-container ${inView ? 'slide-in' : ''}`} ref={inViewRef}>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Hello! I'm Harley, a passionate Full Stack Developer and Information Technology student
              based in Cagayan de Oro City, Philippines. I love turning complex problems into simple,
              beautiful, and intuitive solutions.
            </p>
            <div className="highlight-cards">
              <div className="highlight-card">
                <FaGraduationCap className="highlight-icon" />
                <h3>Education</h3>
                <p>Currently pursuing BS Information Technology at Liceo de Cagayan University</p>
              </div>
              <div className="highlight-card">
                <FaLaptopCode className="highlight-icon" />
                <h3>Experience</h3>
                <p>2+ years of development experience with modern web technologies</p>
              </div>
              <div className="highlight-card">
                <FaRocket className="highlight-icon" />
                <h3>Goals</h3>
                <p>Aspiring to create innovative solutions that make a positive impact</p>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Technologies Mastered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
