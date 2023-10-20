import React from 'react'
import styles from './Background.module.css'; 

const Background = () => {
  return (
    <div className={styles.backgroundContainer}>
      <img
        className={styles.backgroundImage} // Use the CSS Module class
        src="/images/apollo14capsule.jpg"
        alt="Apollo 14 Capsule - Captured during a trip in Orlando"
      />
    </div>
        )
}

export default Background