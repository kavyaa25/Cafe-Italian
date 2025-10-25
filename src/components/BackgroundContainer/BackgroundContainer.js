import React from 'react';
import styles from './BackgroundContainer.module.css';

const BackgroundContainer = ({ children }) => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.contentWrapper}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundContainer;
