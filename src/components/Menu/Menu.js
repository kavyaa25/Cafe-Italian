import React, { useState } from 'react';
import styles from './Menu.module.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const menuCategories = {
    appetizers: {
      title: 'Appetizers',
      items: [
        { name: 'Bruschetta Classica', description: 'Toasted bread with fresh tomatoes, basil, and garlic', price: '$12' },
        { name: 'Antipasto Platter', description: 'Selection of cured meats, cheeses, and olives', price: '$18' },
        { name: 'Calamari Fritti', description: 'Crispy fried squid with marinara sauce', price: '$16' }
      ]
    },
    pasta: {
      title: 'Pasta',
      items: [
        { name: 'Spaghetti Carbonara', description: 'Classic Roman pasta with eggs, cheese, and pancetta', price: '$22' },
        { name: 'Fettuccine Alfredo', description: 'Rich cream sauce with parmesan cheese', price: '$20' },
        { name: 'Penne Arrabbiata', description: 'Spicy tomato sauce with garlic and red peppers', price: '$19' }
      ]
    },
    mains: {
      title: 'Main Courses',
      items: [
        { name: 'Osso Buco', description: 'Braised veal shanks with risotto milanese', price: '$32' },
        { name: 'Saltimbocca', description: 'Veal with prosciutto and sage in white wine sauce', price: '$28' },
        { name: 'Branzino', description: 'Mediterranean sea bass with herbs and lemon', price: '$26' }
      ]
    },
    desserts: {
      title: 'Desserts',
      items: [
        { name: 'Tiramisu', description: 'Classic Italian dessert with coffee and mascarpone', price: '$8' },
        { name: 'Panna Cotta', description: 'Vanilla custard with berry compote', price: '$7' },
        { name: 'Cannoli', description: 'Crispy shells filled with sweet ricotta', price: '$6' }
      ]
    }
  };

  const menuImages = [
    '/images/menu1.webp',
    '/images/menu-2.webp',
    '/images/menu-3.webp',
    '/images/menu4.png',
    '/images/menu-5.png'
  ];

  return (
    <section id="menu" className={`section-padding ${styles.menu}`}>
      <div className="container">
        <div className={styles.menuHeader}>
          <h2 className={`${styles.sectionTitle} text-center fade-in`}>
            Our Menu
          </h2>
          <p className={`${styles.sectionSubtitle} text-center fade-in`}>
            Discover our authentic Italian dishes made with love and tradition
          </p>
        </div>

        <div className={styles.menuContent}>
          <div className={styles.menuNavigation}>
            {Object.keys(menuCategories).map((category) => (
              <button
                key={category}
                className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {menuCategories[category].title}
              </button>
            ))}
          </div>

          <div className={styles.menuGrid}>
            <div className={styles.menuItems}>
              <h3 className={styles.categoryTitle}>
                {menuCategories[activeCategory].title}
              </h3>
              <div className={styles.itemsList}>
                {menuCategories[activeCategory].items.map((item, index) => (
                  <div key={index} className={`${styles.menuItem} slide-in-left`}>
                    <div className={styles.itemInfo}>
                      <h4 className={styles.itemName}>{item.name}</h4>
                      <p className={styles.itemDescription}>{item.description}</p>
                    </div>
                    <div className={styles.itemPrice}>{item.price}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.menuImages}>
              <div className={styles.imageGrid}>
                {menuImages.map((image, index) => (
                  <div key={index} className={styles.imageWrapper}>
                    <img 
                      src={image} 
                      alt={`Menu item ${index + 1}`}
                      className={styles.menuImage}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
