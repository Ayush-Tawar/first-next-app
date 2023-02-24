import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/Gallery.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { GalleryImage } from '@/utils/GalleryImages'
import { RxGrid } from 'react-icons/rx'
import { MdOutlineEventNote } from 'react-icons/md'
import { FaUtensils } from 'react-icons/fa'
import { GiGreekTemple } from 'react-icons/gi'
function Gallery() {
  const [imagetype, setImageType] = useState("allPhotos")
  return (
    <>
      <Navbar />
      <div className={styles.superContainer}>
        <div className={styles.topNavigationBar}>
          <div onClick={()=> setImageType("allPhotos")}  className={imagetype == "allPhotos" ? styles.navigationOption_borderLine : styles.navigationOption}><RxGrid /> All Photos</div>
          <div onClick={()=> setImageType("venue")} className={imagetype == "venue" ? styles.navigationOption_borderLine : styles.navigationOption}><GiGreekTemple />Venue</div>
          <div onClick={()=> setImageType("event")}  className={imagetype == "event" ? styles.navigationOption_borderLine : styles.navigationOption}> <MdOutlineEventNote />Events</div>
          <div onClick={()=> setImageType("food")}  className={imagetype == "food" ? styles.navigationOption_borderLine : styles.navigationOption}> <FaUtensils /> Food</div>
        </div>
        <div className={styles.borderLine}></div>
        <div className={styles.mainContainer}>
          {GalleryImage.filter((item)=>{
            if(imagetype == "allPhotos"){
               return item
            }else if(imagetype == "venue"){
              return item.imageType.includes(imagetype)
            }
            else if (imagetype == "food"){
              return item.imageType.includes(imagetype)
            }
            else if (imagetype == "event"){
              return item.imageType.includes(imagetype)
            }
          }).map((item, index) => {
            return (
              <div className={ styles.galleryContaienr}>
                {index == 0 || index == GalleryImage.length - 1 ? (
                  <Image
                    src={item.image}
                    className={styles.imageComponent}
                  />
                ):
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
      <Footer/>
    </>
  )
}

export default Gallery