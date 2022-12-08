import React from 'react'
import styles from '../Footer/Footer.module.scss'
import {FaInstagram, FaFacebook, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.top}>
                <div className={styles.main}>
                    <a href="" className={styles.jsm}>JS-MASSAS</a>
                    <h2>Algum texto sobreo oste</h2>

                    <ul>
                        <li>
                            <a href=""><FaInstagram size={40} /></a>
                        </li>
                        <li>
                            <a href=""><FaFacebook size={40}/></a>
                        </li>
                        <li>
                            <a href=""><FaLinkedin size={40}/></a>
                        </li>

                    </ul>
                </div>
                <div className={styles.links}>
                    <h2>Links</h2>
                    <ul>
                        <li><a href="">Link 1</a></li>
                        <li><a href="">Link 2</a></li>
                        <li><a href="">Link 3</a></li>
                    </ul>
                </div>
                <div className={styles.contato}>
                    <h2>Contato</h2>

                    <ul>
                        <li>Email:sdkskpsk@gmail.com</li>
                        <li>Telfone:11-985444432</li>
                    </ul>
                </div>
        </div>

        <div className={styles.botton}>
            <p>JS-Massas - Todos os direitos reservados</p>
        </div>

    </footer>
  )
}

export default Footer