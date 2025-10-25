import React, { useState } from 'react';
import styles from './Reviews.module.css';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Anna Matthew',
      time: 'one day ago',
      rating: 5,
      text: 'Exotic dishes in an unforgettable meal experience! The food, service, and ambience are second to none. We will definitely be coming back! We booked months in advance for our anniversary dinner.',
      avatar: '👩'
    },
    {
      id: 2,
      name: 'Derrin Tom',
      time: 'one day ago',
      rating: 5,
      text: 'We booked private dining for our anniversary, and everything was perfect. The steak was first-rate, your risotto delicious, and the staff was amazing!',
      avatar: '👨'
    },
    {
      id: 3,
      name: 'Mary Elza',
      time: 'one day ago',
      rating: 5,
      text: 'Best steak I\'ve ever had! The quality of the meat was outstanding, and the Pasta fries were to die for. Highly recommend!',
      avatar: '👩‍🦰'
    },
    {
      id: 4,
      name: 'John Smith',
      time: 'two days ago',
      rating: 5,
      text: 'Amazing Italian cuisine! The authentic flavors and cozy atmosphere made our evening special. The tiramisu was absolutely divine!',
      avatar: '👨‍💼'
    },
    {
      id: 5,
      name: 'Sarah Johnson',
      time: 'three days ago',
      rating: 5,
      text: 'Outstanding service and incredible food! Every dish was a masterpiece. The wine selection perfectly complemented our meal.',
      avatar: '👩‍💻'
    },
    {
      id: 6,
      name: 'Michael Brown',
      time: 'four days ago',
      rating: 5,
      text: 'The best Italian restaurant in town! The homemade pasta is unbelievable, and the staff made us feel like family. Can\'t wait to return!',
      avatar: '👨‍🍳'
    }
  ];

  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + reviewsPerPage >= reviews.length ? 0 : prevIndex + reviewsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - reviewsPerPage < 0 ? reviews.length - reviewsPerPage : prevIndex - reviewsPerPage
    );
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + reviewsPerPage);

  return (
    <section id="reviews" className={`section-padding ${styles.reviews}`}>
      <div className="container">
        <div className={styles.reviewsHeader}>
          <span className={styles.sectionLabel}>REVIEWS</span>
          <h2 className={`${styles.sectionTitle} text-center`}>
            Hear Our Guests
          </h2>
        </div>

        <div className={styles.reviewsContent}>
          <div className={styles.reviewsGrid}>
            {visibleReviews.map((review, index) => (
              <div 
                key={review.id} 
                className={styles.reviewCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.reviewHeader}>
                  <div className={styles.avatarContainer}>
                    <span className={styles.avatar}>{review.avatar}</span>
                  </div>
                  <div className={styles.reviewerInfo}>
                    <h3 className={styles.reviewerName}>{review.name}</h3>
                    <span className={styles.reviewTime}>{review.time}</span>
                  </div>
                </div>

                <div className={styles.rating}>
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className={styles.star}>⭐</span>
                  ))}
                </div>

                <p className={styles.reviewText}>{review.text}</p>
              </div>
            ))}
          </div>

          <div className={styles.navigation}>
            <button 
              className={styles.navButton}
              onClick={prevSlide}
              aria-label="Previous reviews"
            >
              <span className={styles.arrow}>←</span>
            </button>
            <button 
              className={styles.navButton}
              onClick={nextSlide}
              aria-label="Next reviews"
            >
              <span className={styles.arrow}>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;



