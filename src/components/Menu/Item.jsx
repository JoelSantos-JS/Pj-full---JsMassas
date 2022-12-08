import React from 'react'
import  styles from '../Menu/Item.module.scss'

function Item({price , ingredientes, recipe}) {
  return (
    <li className={styles.item}>
    <div className={styles.content}>
           <h3>{recipe}</h3>    
           <h4>{ingredientes}</h4>
       </div>   
 
       <div className={styles.divisor} />
                       <h5>R${price}</h5>
       

</li>
  )
}

export default Item