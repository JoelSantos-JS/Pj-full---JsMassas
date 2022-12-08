import React from 'react'
import styles from '../Reviews/Review.module.scss'
import { useNextSanityImage } from 'next-sanity-image'
import client from '../../sanity'
import Image from 'next/image'


function Review({name , review , image}) {

  const imageProps = useNextSanityImage(client , image)


  return (
    <div className={styles.review}>
    <div className={styles.avatar}><Image src={imageProps.src} alt='reviewsUser' loader={imageProps.loader} layout='fill' objectFit='contain'/></div>
    <span>{name}</span>
    <p>{review}</p>
</div>

  )
}

export default Review