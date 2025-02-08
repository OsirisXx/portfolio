import React, { useEffect, useState, useCallback } from 'react';
import './ParallaxBackground.css';

const generateStars = (count, className) => {
  return Array.from({ length: count }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 2
  }));
};

const ParallaxBackground = () => {
  const [offset, setOffset] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const smallStars = generateStars(50, 'small');
  const mediumStars = generateStars(30, 'medium');
  const largeStars = generateStars(15, 'large');

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setOffset(window.pageYOffset);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleMouseMove = useCallback((e) => {
    requestAnimationFrame(() => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div className="parallax-container">
      <div
        className="stars-container"
        style={{
          transform: `translate3d(${mousePosition.x * 0.2}px, ${
            offset * 0.1 + mousePosition.y * 0.2
          }px, 0) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`,
        }}
      >
        {smallStars.map((star, i) => (
          <div
            key={`small-${i}`}
            className="star small"
            style={{
              left: star.left,
              top: star.top,
              transform: `translate3d(${mousePosition.x * 0.3}px, ${
                offset * 0.15 + mousePosition.y * 0.3
              }px, ${star.delay * 100}px)`
            }}
          />
        ))}
      </div>
      <div
        className="stars-container"
        style={{
          transform: `translate3d(${mousePosition.x * 0.4}px, ${
            offset * 0.2 + mousePosition.y * 0.4
          }px, 0) rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg)`,
        }}
      >
        {mediumStars.map((star, i) => (
          <div
            key={`medium-${i}`}
            className="star medium"
            style={{
              left: star.left,
              top: star.top,
              transform: `translate3d(${mousePosition.x * 0.5}px, ${
                offset * 0.25 + mousePosition.y * 0.5
              }px, ${star.delay * 100}px)`
            }}
          />
        ))}
      </div>
      <div
        className="stars-container"
        style={{
          transform: `translate3d(${mousePosition.x * 0.6}px, ${
            offset * 0.3 + mousePosition.y * 0.6
          }px, 0) rotateX(${mousePosition.y * 0.03}deg) rotateY(${mousePosition.x * 0.03}deg)`,
        }}
      >
        {largeStars.map((star, i) => (
          <div
            key={`large-${i}`}
            className="star large"
            style={{
              left: star.left,
              top: star.top,
              transform: `translate3d(${mousePosition.x * 0.7}px, ${
                offset * 0.35 + mousePosition.y * 0.7
              }px, ${star.delay * 100}px)`
            }}
          />
        ))}
      </div>
      <div className="gradient-overlay" />
    </div>
  );
};

export default ParallaxBackground;
