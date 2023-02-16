import React from 'react'
import styles from '@/styles/MainContent.module.css'
import EventCard from './EventCard'
import { EventCardList } from '@/utils/EventCardList'
import { useState } from 'react'
function MainContent() {
    return (
        <div className={styles.superContainer}>
            {EventCardList.map((item) => {
                return (
                    <EventCard />
                )
            })}
        </div>
    )
}

export default MainContent