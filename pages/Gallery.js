import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Gallery.module.css'
import { GalleryImage } from '@/utils/GalleryImages'
function Gallery() {
  return (
    <div className={styles.superContainer}>
      <div className={styles.mainContainer}>
        {GalleryImage.map((item, index) => {
          return(
            <div className={styles.galleryContaienr}>
              {index == 0 || index == GalleryImage.length-1 ? (
                <Image 
                src={item.image}
                className={styles.imageComponent}
                />
              ) : 
              <div className={styles.fourContainer}>
                <Image
                  src={item.image}
                  className={styles.imageComponent2}
                />
              </div>
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery