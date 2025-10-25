import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={`section-padding ${styles.about}`}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.textSection}>
            <h2 className={`${styles.sectionTitle} slide-in-left`}>
              Our Story
            </h2>
            <p className={`${styles.description} slide-in-left`}>
              For over three decades, Italian Cafe has been serving authentic Italian cuisine 
              with passion and tradition. Our family recipes have been passed down through 
              generations, bringing you the true taste of Italy in every dish.
            </p>
            <p className={`${styles.description} slide-in-left`}>
              We believe in using only the finest ingredients, imported directly from Italy, 
              and preparing each meal with the same love and care that has made Italian 
              cuisine world-renowned.
            </p>
            <div className={`${styles.features} slide-in-left`}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🍝</div>
                <div>
                  <h4>Authentic Recipes</h4>
                  <p>Traditional family recipes passed down through generations</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🇮🇹</div>
                <div>
                  <h4>Italian Ingredients</h4>
                  <p>Premium ingredients imported directly from Italy</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>👨‍🍳</div>
                <div>
                  <h4>Expert Chefs</h4>
                  <p>Experienced chefs trained in traditional Italian techniques</p>
                </div>
              </div>
            </div>
            
            <div className={`${styles.additionalImage} slide-in-left`}>
              <img 
                src="/images/Our-Story2.jpg" 
                alt="Italian Cafe Story Continued"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <img 
                src="/images/Our-Story.jpg" 
                alt="Our Story - Italian Cafe Heritage"
                className={styles.aboutImage}
                loading="lazy"
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
