import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Gallery.module.css'
import { GalleryImage } from '@/utils/GalleryImages'
import Navbar from '@/components/Navbar'
import { RxGrid } from 'react-icons/rx'
import { MdOutlineEventNote } from 'react-icons/md'
import { FaUtensils } from 'react-icons/fa'
import { GiGreekTemple } from 'react-icons/gi'
function Gallery() {
  return (
    <>
      <Navbar />
      <div className={styles.superContainer}>
        <div className={styles.topNavigationBar}>
          <div className={styles.navigationOption}><RxGrid /> All Photos</div>
          <div className={styles.navigationOption}><GiGreekTemple />Venue</div>
          <div className={styles.navigationOption}> <MdOutlineEventNote />Events</div>
          <div className={styles.navigationOption}> <FaUtensils /> Food</div>
        </div>
        <div className={styles.borderLine}></div>
        <div className={styles.mainContainer}>
          {GalleryImage.map((item, index) => {
            return (
              <div className={styles.galleryContaienr}>
                {index == 0 || index == GalleryImage.length - 1 ? (
                  <Image
                    src={item.image}
                    className={styles.imageComponent}
                  />
                ) :
                  <div className={styles.fourContainer}>
                    <Image
                      src={item.image}
                      className={styles.imageComponent2} j
                    />

                  </div>
                }
              </div>

            )
          })}
        </div>
      </div>
    </>
  )
}

export default Gallery