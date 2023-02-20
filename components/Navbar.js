import React from 'react'
import styles from '@/styles/Navbar.module.css'
import Logo from '../assets/logo-navbar.png'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'
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
        <Link href="/">
        <AiOutlineSearch />
        </Link>
        <input name='navSearchBar' placeholder='Search' className={styles.navSearchInputBar} />
      </div>
      <div className={styles.navPages}>
        <div>Home</div>
        <div>What's on</div>
        <div>Book Venue</div>
        <div>Menu</div>
        <Link className={styles.linkComponent} href="/gallery">
          <div>Gallery</div>
        </Link>
        <div>About us</div>
        <div>Contact us</div>
      </div>
    </div>
  )
}

export default Navbar