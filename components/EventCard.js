import React from 'react'
import styles from '@/styles/EventCard.module.css'
import { FaTicketAlt } from "react-icons/fa"
import { AiFillCalendar } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { MdWatchLater } from "react-icons/md"
import SoldOutBanner from '@/assets/soldoutNewBanner.png'
import CancelledBanner from '@/assets/cancelledNewBanner.png'
import Image from 'next/image'
function EventCard({ cardImage, eventDate, eventStatus, subHeading, mainHeading, ticketPrice, age, isSoldOut }) {
  return (
    <div className={styles.superContainer}>
      <div className={styles.imageContainer}>
        {!eventStatus.isPrivate ? (

          <div className={styles.eventStatusBanner}>
            {eventStatus.isSoldOut ? 
            <Image
            className={styles.bannerImage}
            src={SoldOutBanner}/> 
            : eventStatus.isCancelled ?  
            <Image
            className={styles.bannerImage}
            src={CancelledBanner}/>  : <></>}
          </div>
        ) : <></>}
        <Image className={styles.cardImage} src={cardImage}/>
      </div>
      <div className={styles.dateContainer}> <AiFillCalendar /> {eventDate}</div>
      <div className={styles.detailsContainer}>
        <h3 className={styles.mainHeading}>{mainHeading}</h3>
        <h4 className={styles.subHeading}>{subHeading}</h4>
        <div className={styles.cardTicketContent}> <span><FaTicketAlt className={styles.ticketIcon}/></span> Tickets {ticketPrice}</div>
        <div className={styles.ageTimeDivContainer}>
        <div className={styles.cardAgeContent}> <BsFillPersonFill /> Age: {age}</div>
        <div className={styles.cardTimeContent}> <MdWatchLater /> Show 8pm | Doors 6pm</div>
        </div>
        <div className={styles.cardButton}>
          <button className={eventStatus.isSoldOut ? styles.cardSoldOutButton : eventStatus.isCancelled ? styles.cardCancelledButton : styles.cardPrivateButton}>
            {eventStatus.isSoldOut ? "Sold Out" : eventStatus.isCancelled ? "Cancelled" : "Private Event"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventCard