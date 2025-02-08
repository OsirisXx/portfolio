import React, { forwardRef } from 'react';
import './Skills.css';
import { useInView } from 'react-intersection-observer';

const Skills = forwardRef((props, ref) => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  return (
    <section ref={ref} id="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className={`skills-container ${inView ? 'slide-in' : ''}`} ref={sectionRef}>
        <div className="skill-grid">
          <div className="skill-card">
            <h3>Frontend Development</h3>
            <div className="skill-items">
              <div className="skill-item">
                <span className="skill-name">HTML</span>
                <div className="skill-level proficient">
                  <span className="level-text">Proficient</span>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">CSS</span>
                <div className="skill-level proficient">
                  <span className="level-text">Proficient</span>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">JavaScript</span>
                <div className="skill-level proficient">
                  <span className="level-text">Proficient</span>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">React</span>
                <div className="skill-level advanced">
                  <span className="level-text">Advanced</span>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">React Native</span>
                <div className="skill-level advanced">
                  <span className="level-text">Advanced</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skill-card">
            <h3>Backend Development</h3>
            <div className="skill-items">
              <div className="skill-item">
                <span className="skill-name">Node.js</span>
                <div className="skill-level advanced">
                  <span className="level-text">Advanced</span>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Express.js</span>
                <div className="skill-level proficient">
                  <span className="level-text">Proficient</span>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">MySQL</span>
                <div className="skill-level proficient">
                  <span className="level-text">Proficient</span>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Firebase</span>
                <div className="skill-level advanced">
                  <span className="level-text">Advanced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Skills;
