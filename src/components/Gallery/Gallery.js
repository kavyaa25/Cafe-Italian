import React, { useState } from 'react';
import styles from './Gallery.module.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      src: '/images/Cafe Specials-1.webp',
      alt: 'Italian Cafe Specials',
      category: 'Specials'
    },
    {
      src: '/images/Cafe Specials-2.webp',
      alt: 'Italian Cafe Specials',
      category: 'Specials'
    },
    {
      src: '/images/Cafe Specials-3.webp',
      alt: 'Italian Cafe Specials',
      category: 'Specials'
    },
    {
      src: '/images/Coffee.jpg',
      alt: 'Italian Coffee',
      category: 'Beverages'
    },
    {
      src: '/images/Drinks.webp',
      alt: 'Italian Drinks',
      category: 'Beverages'
    },
    {
      src: '/images/Food.webp',
      alt: 'Italian Food',
      category: 'Specials'
    },
    {
      src: '/images/cafe.jpg',
      alt: 'Cafe Atmosphere',
      category: 'Atmosphere'
    },
    {
      src: '/images/Outlook.jpg',
      alt: 'Cafe Outlook',
      category: 'Atmosphere'
    },
    {
      src: '/images/private-group-dinning.webp',
      alt: 'Private Group Dining',
      category: 'Atmosphere'
    },
    {
      src: '/images/Cafe Atmosphere.webp',
      alt: 'Cozy Cafe Interior',
      category: 'Atmosphere'
    },
    {
      src: '/images/Follow-us1.webp',
      alt: 'Cafe Interior',
      category: 'Atmosphere'
    },
    {
      src: '/images/Follow-us2.webp',
      alt: 'Cafe Interior',
      category: 'Atmosphere'
    },
    {
      src: '/images/Follow-us4.webp',
      alt: 'Cafe Interior',
      category: 'Atmosphere'
    },
    {
      src: '/images/Follow-us5.webp',
      alt: 'Cafe Interior',
      category: 'Atmosphere'
    },
    {
      src: '/images/Follow-us6.webp',
      alt: 'Cafe Interior',
      category: 'Atmosphere'
    }
  ];

  const categories = ['All', 'Specials', 'Beverages', 'Atmosphere'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className={`section-padding ${styles.gallery}`}>
      <div className="container">
        <div className={styles.galleryHeader}>
          <h2 className={`${styles.sectionTitle} text-center fade-in`}>
            Gallery
          </h2>
          <p className={`${styles.sectionSubtitle} text-center fade-in`}>
            Take a visual journey through our authentic Italian experience
          </p>
        </div>

        <div className={styles.galleryContent}>
          <div className={styles.categoryFilter}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filterButton} ${activeCategory === category ? styles.active : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className={styles.imageGrid}>
            {filteredImages.map((image, index) => (
              <div 
                key={index} 
                className={`${styles.imageItem} fade-in`}
                onClick={() => openModal(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className={styles.galleryImage}
                  loading="lazy"
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.imageInfo}>
                    <span className={styles.imageCategory}>{image.category}</span>
                    <div className={styles.zoomIcon}>🔍</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className={styles.modalImage}
            />
            <div className={styles.modalInfo}>
              <h3>{selectedImage.alt}</h3>
              <p>{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;