import React from 'react'
import styles from '../Cardapio/Item.module.scss'
import { useNextSanityImage } from 'next-sanity-image'
import client from '../../sanity'
import Image from 'next/image'


function Item({category, title , image}) {
  const imagem = useNextSanityImage(client, image)
  return (
    <div className={styles.item}>
    <Image src={imagem.src} loader={imagem.loader} width={200} height={200} alt='Imagem da Categoria'/>

    <h3>{category}</h3>
    <h4>{title}</h4>

    </div>

  )
}

export default Item