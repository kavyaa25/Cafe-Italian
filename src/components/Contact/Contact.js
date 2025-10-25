import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <section id="contact" className={`section-padding ${styles.contact}`}>
      <div className="container">
        <div className={styles.contactHeader}>
          <h2 className={`${styles.sectionTitle} text-center fade-in`}>
            Contact Us
          </h2>
          <p className={`${styles.sectionSubtitle} text-center fade-in`}>
            Reserve your table or get in touch with us
          </p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={`${styles.infoCard} slide-in-left`}>
              <div className={styles.infoIcon}>📍</div>
              <h3>Address</h3>
              <p>123 Italian Street<br />Little Italy, NY 10013</p>
            </div>

            <div className={`${styles.infoCard} slide-in-left`}>
              <div className={styles.infoIcon}>📞</div>
              <h3>Phone</h3>
              <p>(555) 123-4567<br />Reservations: (555) 123-4568</p>
            </div>

            <div className={`${styles.infoCard} slide-in-left`}>
              <div className={styles.infoIcon}>✉️</div>
              <h3>Email</h3>
              <p>info@italiancafe.com<br />reservations@italiancafe.com</p>
            </div>

            <div className={`${styles.infoCard} slide-in-left`}>
              <div className={styles.infoIcon}>🕒</div>
              <h3>Hours</h3>
              <p>
                Mon-Thu: 11:00 AM - 10:00 PM<br />
                Fri-Sat: 11:00 AM - 11:00 PM<br />
                Sun: 12:00 PM - 9:00 PM
              </p>
            </div>
          </div>

          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit} className={`${styles.form} slide-in-right`}>
              <h3 className={styles.formTitle}>Make a Reservation</h3>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="guests">Number of Guests *</label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                  >
                    <option value="">Select guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6+ Guests</option>
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="date">Preferred Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="time">Preferred Time *</label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                  >
                    <option value="">Select time</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Special Requests</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Any special dietary requirements or occasion details..."
                  className={styles.formTextarea}
                />
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary ${styles.submitButton} ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Make Reservation'}
              </button>

              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  ✅ Thank you! Your reservation request has been submitted. We'll contact you soon to confirm.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
