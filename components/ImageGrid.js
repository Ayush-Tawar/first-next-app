import Image from 'next/image';
import styles from '@/styles/ImageGrid.module.css'
export default function ImageGrid({ images, imagetype }) {
    // Define a function to generate the image elements
    const generateImageElements = () => {
        // Create an array of image elements using the map function
        const imageElements = images.filter((item)=>{
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
          }).map((imageUrl, index) => {
            // Determine the size of the image element based on its position in the matrix
            const imageSize = index === 0 || index === 9 ? 600 : 300;

            // Return an Image component with the appropriate size and source
            return (
                <div key={index} className={styles.image} style={{ width: `${imageSize + 10}px`, height: `${imageSize + 5}px` }}>
                    <Image src={imageUrl.image} className={styles.image} width={imageSize} height={imageSize} />
                </div>
            );
        });
        console.log(imageElements);

        // Return the array of image elements
        return imageElements;
    };

    return (
        <>
        
        <div className={styles.image_grid}>
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
                    <div className={styles.image_grid}>{generateImageElements().slice(7, 9)}</div>
                </div>
                <div className={styles.large_image}>{generateImageElements()[9]}</div>
            </div>
           
        </div>
        </>
    );
}
