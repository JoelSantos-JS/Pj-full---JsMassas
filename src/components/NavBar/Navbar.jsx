import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from'../NavBar/Navbar.module.scss'
import NavLinks from './NavLinks'
import {GiHamburgerMenu} from 'react-icons/gi'

function Navbar() {
    const [isNavbarShow, setIsNavbatShow] = useState(false)
    const [isClick , setIsClick] = useState(false)


    useEffect(() => {
        const setNavbarHandler = () => {
            if(window.scrollY >= 600) return setIsNavbatShow(true)

            return setIsNavbatShow(false)
        }

        document.addEventListener('scroll' , setNavbarHandler)

        return () => {
            document.removeEventListener('scroll' , setNavbarHandler)
        }
    }, [])

    const toggleMenuHandle = () => {
        setIsClick(!isClick)
    }

  return (
    <section className={`${styles['navbar-wrapper']} ${isNavbarShow && styles.active}`}>

        <div className={styles.navbar}>

            <a href="" className={styles.jsm}>JS-MASSAS</a>

            <nav className={styles.links}>
                 <NavLinks toggleMenu={null}/>
            </nav>


            <GiHamburgerMenu className={styles.icon} onClick={toggleMenuHandle}/>
            <nav className={`${styles.burguer} ${isClick && styles.active}`}>
                <NavLinks toggleMenu={toggleMenuHandle}/>

            </nav>
            <div className={`${styles.background} ${isClick && styles.active}`} />
        </div>
    </section>
  )
}

export default Navbar