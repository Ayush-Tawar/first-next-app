import React from 'react'
import styles from '@/styles/Footer.module.css'
import Image from 'next/image'
import FooterLogo from '@/assets/logo-navbar.png'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
function Footer() {
  return (
    <div className={styles.superContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.footerNavigationBar}>
          <div className={styles.footerLogo}>
            <Image
              src={FooterLogo}
            />
          </div>
          <div className={styles.footerPages}>
            <div>Home</div>
            <div>What's on</div>
            <div>Book Venue</div>
            <div>Menu</div>
            <div>Gallery</div>
          </div>
          <div className={styles.socialIcons}>
            <BsFacebook />
            <BsInstagram />
          </div>
        </div>
        <div>

          <div className={styles.footerSecondSection}>
            <div className={styles.footerOtherDetails}>

              <div className={styles.eventUpdateInput}>
                <h2>Get Event Updates</h2>
              </div>
              <div className={styles.inputBar}>
                <input placeholder='Enter your email here' className={styles.inputField}/>
                <button className={styles.submitButton}>Submit</button>
              </div>
            </div>
            <div className={styles.contactUsDiv}>
              <h2>Contact Us</h2>
              <div className={styles.email}>events@18candleriggs.com</div>
              <div className={styles.number}>0330 202 1818  </div>
            </div>
            <div className={styles.privacyDiv}>
              <h2>Privacy</h2>
              <div className={styles.termsConditions}>Terms & Conditions</div>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div className={styles.aboutUs}>About Us</div>
            </div>
          </div>
        </div>
        <div className={styles.lastSection}>
          <div> © 18 candleriggs 2022</div>
        </div>
      </div>
    </div>
  )
}

export default Footer