import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Italian Cafe</h3>
            <p className={styles.footerDescription}>
              Authentic Italian cuisine served with passion and tradition. 
              Experience the true taste of Italy in the heart of the city.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                📘
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                📷
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                🐦
              </a>
              <a href="#" className={styles.socialLink} aria-label="Yelp">
                ⭐
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Contact Info</h4>
            <div className={styles.contactInfo}>
              <p>📍 123 Italian Street<br />Little Italy, NY 10013</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@italiancafe.com</p>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Hours</h4>
            <div className={styles.hours}>
              <p>Mon-Thu: 11:00 AM - 10:00 PM</p>
              <p>Fri-Sat: 11:00 AM - 11:00 PM</p>
              <p>Sun: 12:00 PM - 9:00 PM</p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p className={styles.copyright}>
              © 2024 Italian Cafe. All rights reserved.
            </p>
            <div className={styles.footerBottomLinks}>
              <a href="#" className={styles.bottomLink}>Privacy Policy</a>
              <a href="#" className={styles.bottomLink}>Terms of Service</a>
              <a href="#" className={styles.bottomLink}>Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
