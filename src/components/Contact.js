import React, { forwardRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './Contact.css';
import { FaFacebook, FaEnvelope } from 'react-icons/fa';

const Contact = forwardRef((props, ref) => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  return (
    <section ref={ref}>
      <h2 className="section-title">Contact Me</h2>
      <div className={`contact-content ${inView ? 'slide-in' : ''}`}>
        <p style={{color: '#ffffff', fontSize: '1.2rem'}}>Let's connect! You can reach me through:</p>
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:hbusa82663@liceo.edu.ph">
              hbusa82663@liceo.edu.ph
            </a>
          </div>
          <div className="contact-item">
            <FaFacebook className="contact-icon" />
            <a href="https://facebook.com/harley.silfavan" target="_blank" rel="noopener noreferrer">
              Harley Silfavan Busa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
