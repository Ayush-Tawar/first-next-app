import React from 'react'
import styles from '@/styles/Navbar.module.css'
import Logo from '../assets/logo-navbar.png'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'
import {FiSearch} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navLogo}>
        <Image
          src={Logo}
          alt="Picture of the author"
          width={92.82}
          height={94}

        />
      </div>
      <div className={styles.navSearchBar}>
          <AiOutlineSearch className={styles.searchIcon}/>
        <input name='navSearchBar' placeholder='Search' className={styles.navSearchInputBar} />
      </div>
      <div className={styles.navPages}>
        <Link className={styles.linkComponent} href="/">
          <div>Home</div>
        </Link>
        <div>What's on</div>
        <div>Book Venue</div>
        <div>Menu</div>
        <Link className={styles.linkComponent} href="/gallery">
          <div>Gallery</div>
        </Link>
        <div>About us</div>
        <div>Contact us</div>
      </div>
      <div className={styles.mobileSearchContainer}>
        <div className={styles.searchIcon}><FiSearch/></div>
        <div className={styles.hamburgerMenu}> <GiHamburgerMenu/> </div>
      </div>
    </div>
  )
}

export default Navbar