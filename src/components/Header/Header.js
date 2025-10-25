import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <a href="#home">
              <h2>Italian Cafe</h2>
            </a>
          </div>
          
          <ul className={`${styles.navList} ${isMobileMenuOpen ? styles.navListOpen : ''}`}>
            <li><a href="#home" className={styles.navLink}>Home</a></li>
            <li><a href="#about" className={styles.navLink}>About</a></li>
            <li><a href="#menu" className={styles.navLink}>Menu</a></li>
            <li><a href="#reviews" className={styles.navLink}>Reviews</a></li>
            <li><a href="#gallery" className={styles.navLink}>Gallery</a></li>
            <li><a href="#contact" className={styles.navLink}>Contact</a></li>
          </ul>

          <button 
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
