import React, { forwardRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import './Projects.css';
import 'swiper/swiper-bundle.css';
import { useInView } from 'react-intersection-observer';
import touristappImage from '../images/touristapp.png';
import vendorappImage from '../images/vendorapp.png';
import movieratingappImage from '../images/movieratingapp.png';
import ldcugamesImage from '../images/ldcugames.png';
import ldcutabImage from '../images/ldcutab.png';

const Projects = forwardRef((props, ref) => {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const swiperParams = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: true,
    navigation: true,
    modules: [EffectCoverflow, Pagination, Navigation],
  };

  const projects = [
    {
      title: "Tourist Spot Management System",
      tech: ["HTML", "Cascading Style Sheets", "JavaScript", "MySQL"],
      description: "A comprehensive system for managing tourist locations, bookings, and reviews. Features include user authentication, booking management, and review system.",
      image: touristappImage
    },
    {
      title: "Vendor App Management",
      tech: ["HTML", "Cascading Style Sheets", "JavaScript", "MySQL"],
      description: "Mobile application for vendors to manage their inventory and sales",
      image: vendorappImage
    },
    {
      title: "Movie Rating App",
      tech: ["React Native", "Cascading Style Sheets", "JavaScript", "HTML", "Firebase"],
      description: "Social platform for movie enthusiasts to rate and review films",
      image: movieratingappImage
    },
    {
      title: "LDCU Games Management System",
      tech: ["HTML", "Cascading Style Sheets", "JavaScript", "MySQL"],
      description: "System for managing sports events and tournament schedules",
      image: ldcugamesImage
    },
    {
      title: "LDCU Tabulation System",
      tech: ["HTML", "Cascading Style Sheets", "JavaScript", "MySQL"],
      description: "Digital scoring and tabulation system for competitions and events",
      image: ldcutabImage
    }
  ];

  const [activeProject, setActiveProject] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveProject(swiper.activeIndex);
  };

  return (
    <section ref={ref} id="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className={`projects-container ${inView ? 'slide-in' : ''}`} ref={inViewRef}>
        <div className="projects-gallery">
          <Swiper 
            {...swiperParams}
            onSlideChange={handleSlideChange}
          >
            {projects.map((project, index) => (
              <SwiperSlide
                key={index}
                className="project-card"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={`project-info ${activeProject >= 0 ? 'active' : ''}`}>
          <h3 className="project-info-title">
            {projects[activeProject]?.title}
          </h3>
          <p className="project-info-description">
            {projects[activeProject]?.description}
          </p>
          <div className="project-info-tech">
            <h4>Technologies Used:</h4>
            <div className="skill-items">
              {projects[activeProject]?.tech.map((tech, index) => (
                <span key={index} className="skill-item">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Projects;
