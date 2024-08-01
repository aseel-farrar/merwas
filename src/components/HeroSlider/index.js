import React, { useState, useEffect } from 'react';
import styles from './HeroSlider.module.scss';

const images = [
  {
    src: '/images/slide1.jpg',
    alt: 'Slide 1',
  },
  // Add more slides
];

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); 

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className={styles.heroSlider}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          style={{ backgroundImage: `url(${image.src})` }}
        >
          <div className={styles.overlay}>
            <div className={styles.text}>
              Welcome to The <span>OurWebsite</span> Your Platform for Launching
              Towards Technological Success!
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroSlider;
