import React from 'react'
import styles from '../Benetifs/Benefit.module.scss'
import { useNextSanityImage } from 'next-sanity-image'
import client from '../../sanity'
import Image from 'next/image'


function Benefit({title, subtitle, icon}) {
    const imagemprops = useNextSanityImage(client, icon)
   

  return (
    <div className={styles.benefit}>
    <Image src={imagemprops.src} loader={imagemprops.loader} alt='im' width={56} height={56} />

    <div className={styles.content}>

        <h2>{title}</h2>
        <h3>{subtitle}</h3>

    </div>

</div>
  )
}

export default Benefit