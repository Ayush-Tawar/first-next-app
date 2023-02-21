import React from 'react'
import styles from '@/styles/MainContent.module.css'
import EventCard from './EventCard'
import { EventCardList } from '@/utils/EventCardList'
import { useState } from 'react'
import { TfiArrowRight } from "react-icons/tfi"
function MainContent() {
    const [eventCardList, setEventCardlist] = useState(6)

    function renderMoreEventCards(){
        setEventCardlist(eventCardList + 6)
    }
    return (
        <div className={styles.superContainer}>

            <div className={styles.headingContainer}>
                <div className={styles.headingContainerContent}>
                    <div className={styles.heading}>What's On At Glasgow's Coolest Event Space.</div>
                </div>
                <div className={styles.viewAllSection}>
                    <div className={styles.viewAllButton}>view all </div> <TfiArrowRight />
                </div>
            </div>
            <div className={styles.cardContainer}>
                {EventCardList.slice(0, eventCardList).map((item) => {
                    return (
                        <EventCard
                            cardImage={item.image}
                            eventDate={item.date}
                            subHeading={item.subHeading}
                            mainHeading={item.main_heading}
                            ticketPrice={item.ticketPrice}
                            age={item.age}
                            eventStatus={item.eventStatus}
                            isSoldOut={item.isSoldOut}
                        />
                    )
                })}
            </div>
            <button onClick={renderMoreEventCards} className={styles.moreEvents}>
                More Events
            </button>
        </div>
    )
}

export default MainContent