import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/images/Home.jpg',
    '/images/Coffee.jpg',
    '/images/Outlook.jpg',
    '/images/Food.webp'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.imageContainer}>
        <img 
          src={images[currentImage]} 
          alt="Italian Cafe Interior"
          className={styles.heroImage}
          loading="eager"
        />
        <div className={styles.imageOverlay}></div>
      </div>
      
      <div className={styles.heroContent}>
        <div className="container">
          <div className={styles.textContainer}>
            <h1 className={`${styles.heroTitle} fade-in`}>
              Authentic Italian Experience
            </h1>
            <p className={`${styles.heroSubtitle} fade-in`}>
              Discover the rich flavors and warm hospitality of traditional Italian cuisine
            </p>
            <div className={`${styles.heroButtons} fade-in`}>
              <a href="#menu" className="btn btn-primary">
                View Menu
              </a>
              <a href="#contact" className="btn btn-secondary">
                Reserve Table
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.imageIndicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${currentImage === index ? styles.active : ''}`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
