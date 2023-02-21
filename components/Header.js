import React, { startTransition } from 'react'
import Navbar from './Navbar'
import styles from '@/styles/Header.module.css'
import Image from 'next/image'
import HeaderImage from '../assets/header_image.png'
import GrayBackground from '../assets/gray_background.png'
function Header() {
  return (
    <>

      <div className={styles.headerContainer}>
        <Image
          src={HeaderImage}
          className={styles.headerImage}
        />
        <Image
          src={GrayBackground}
          className={styles.grayBackground} />
        <div className={styles.headerContentDiv2}>
          <div className={styles.text1}>The perfect night out at Glassgow!</div>
          <div className={styles.text2}>18 Candeleriggs</div>
        </div>
      </div>
    </>
  )
}

export default Header