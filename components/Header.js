import React from 'react'
import Navbar from './Navbar'
import styles from'@/styles/Header.module.css'
import Image from 'next/image'
import HeaderImage from '../assets/header_image.png'
function Header() {
  return (
    <>
    <Navbar/>
    <div className={styles.headerContainer}>
      <div className={styles.headerContentDiv1}>
        <div className={styles.headerContentDiv2}>
          <div className={styles.text1}>The perfect night out at Glassgow!</div>
          <div className={styles.text2}>18 Candeleriggs</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header