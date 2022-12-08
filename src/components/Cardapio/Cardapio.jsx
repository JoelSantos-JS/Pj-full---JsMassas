import React from 'react'
import styles from '../Cardapio/Cardapio.module.scss'
import Item from './Item'

function Cardapio({cardapio}) {
    
    const {category: category1 , title: title1 , image: image1} = cardapio[0]
    const {category: category2 , title: title2 , image: image2} = cardapio[1]
    const {category: category3 , title: title3 , image: image3} = cardapio[2]
    const {category: category4 , title: title4 , image: image4} = cardapio[3]


  return (
    <section className={styles['cardapio-wrapper']}>
        <div className={styles.cardapio}>
            <h2 className='gold'>No Cardapio</h2>

            <div className={styles.items}>
               <Item category={category1} title={title1} image={image1} />
               <Item category={category2} title={title2} image={image2} />
               <Item category={category3} title={title3} image={image3} />
               <Item category={category4} title={title4} image={image4} />
               
            </div>

        </div>

    </section>
  )
}

export default Cardapio