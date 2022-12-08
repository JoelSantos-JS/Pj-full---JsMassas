import React from 'react'
import styles from '../ImageText/Image.module.scss'
import client from '../../sanity'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'


function ImageText({about}) {
    const image = useNextSanityImage(client, about.image)


    

  return (
    <section className={styles.section} id='about'>
        <div className={styles.image}>
            <Image src={image.src} loader={image.loader} layout='fill' objectFit='contain' alt='about' />
        </div>
        
        <div className={styles.content}>
            <span>{about.top_title}</span>
            <h2>{about.title}</h2>
            <p>
                {about.text}
            </p>
            <a href="#" className='btn btn-primary'>{about.button} &rarr;</a>
        </div>
    </section>
  )
}

export default ImageText