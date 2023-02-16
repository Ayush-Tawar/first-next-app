import React from 'react'
import styles from '@/styles/EventCard.module.css'
function EventCard() {
  return (
    <div className={styles.superContainer}>
        <div className={styles.imageContainer}></div>
        <div className={styles.dateContainer}></div>
        <div className={styles.detailsContainer}></div>
    </div>
  )
}

export default EventCard