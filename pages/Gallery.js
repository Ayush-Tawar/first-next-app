import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/Gallery.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImageGrid from '@/components/ImageGrid'
import { GalleryImage } from '@/utils/Galleryimages'
import { RxGrid } from 'react-icons/rx'
import { MdOutlineEventNote } from 'react-icons/md'
import { FaUtensils } from 'react-icons/fa'
import { GiGreekTemple } from 'react-icons/gi'
function Gallery() {
  const [imagetype, setImageType] = useState("allPhotos")

  console.log('thiai',GalleryImage[9].imageType)
  const imageChunks = [];

  for (let i = 0; i < GalleryImage.length; i +=10) {
    imageChunks.push(GalleryImage.slice(i, i + 10));
  }

  // Create an array of ImageGrid components based on the imageChunks array
  const imageGrids = imageChunks.map((imageChunk, index) => (
    <ImageGrid imagetype={imagetype} key={index} images={imageChunk} />
  ));
  // // Define a function to generate the image elements
  // const generateImageElements = () => {
  //   // Create an array of image elements using the map function
  //   const imageElements = GalleryImage.filter((item)=>{
  //     if(imagetype == "allPhotos"){
  //        return item
  //     }else if(imagetype == "venue"){
  //       return item.imageType.includes(imagetype)
  //     }
  //     else if (imagetype == "food"){
  //       return item.imageType.includes(imagetype)
  //     }
  //     else if (imagetype == "event"){
  //       return item.imageType.includes(imagetype)
  //     }
  //   }).map((imageUrl, index) => {
  //     // Determine the size of the image element based on its position in the matrix
  //     const imagesize = index === 0 || index === 9 ? 200 : 100;

  //     // Return an Image component with the appropriate size and source
  //     return (
  //       <div key={index} style={{ width: `${imagesize + 10}px`, height: `${imagesize + 10}px` }}>
  //         <Image  src={imageUrl.image} width={imagesize} height={imagesize} />
  //       </div>
  //     );
  //   });

  //   // Return the array of image elements
  //   return imageElements;
  // };
  return (
    <>
      <Navbar />
      <div className={styles.superContainer}>
        <div className={styles.topNavigationBar}>
          <div onClick={() => setImageType("allPhotos")} className={imagetype == "allPhotos" ? styles.navigationOption_borderLine : styles.navigationOption}><RxGrid /> All Photos</div>
          <div onClick={() => setImageType("venue")} className={imagetype == "venue" ? styles.navigationOption_borderLine : styles.navigationOption}><GiGreekTemple />Venue</div>
          <div onClick={() => setImageType("event")} className={imagetype == "event" ? styles.navigationOption_borderLine : styles.navigationOption}> <MdOutlineEventNote />Events</div>
          <div onClick={() => setImageType("food")} className={imagetype == "food" ? styles.navigationOption_borderLine : styles.navigationOption}> <FaUtensils /> Food</div>
        </div>
        <div className={styles.borderLine}></div>
        {/* <div className={styles.mainContainer}>
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
        </div> */}

        {/* <div className={styles.image_grid}>
          <div className={styles.image_row}>
            <div className={styles.large_image}>{generateImageElements()[0]}</div>
            <div className={styles.small_images}>
              <div className={styles.image_grid}>{generateImageElements().slice(1, 3)}</div>
              <div className={styles.image_grid}>{generateImageElements().slice(3, 5)}</div>
            </div>
          </div>
          <div className={styles.image_row}>
            <div className={styles.small_images}>
              <div className={styles.image_grid}>{generateImageElements().slice(5, 7)}</div>
              <div className={styles.image_grid}>{generateImageElements().slice(3, 5)}</div>
            </div>
            <div className={styles.large_image}>{generateImageElements()[0]}</div>
          </div>
        </div> */}

        <div>{imageGrids}</div>
      </div>
      <Footer />
    </>
  )
}

export default Gallery