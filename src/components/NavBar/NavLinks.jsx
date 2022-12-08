import React from 'react'
import styles from '../NavBar/NavLinks.module.scss'

function NavLinks({toggleMenu}) {
  return (
    <ul className={styles.list}>
    <li><a href="#about" onClick={toggleMenu}>Sobre nós</a></li>
    <li><a href="#reviews" onClick={toggleMenu}>Localização</a></li>
    <li><a href="#reviews" onClick={toggleMenu}>Depoimentos</a></li>
    <li><a href="#menu" onClick={toggleMenu}>Menu</a></li>
    
</ul>
  )
}

export default NavLinks