import React from 'react'
import styles from '../Menu/Menu.module.scss'
import Item from './Item'

function Menu({menu}) {
    const menudesc = menu.map((item) => (
        
       <Item key={item._id} recipe={item.recipe} ingredientes={item.ingredients} price={item.price} />
    ))


  return (
    <section className={styles['menu-wrapper']} id='menu'>
            <div className={styles.menu}>
                    <h2 className='gold'>Menu</h2>

                    <ul className={styles.list}>
                        {menudesc}
                    </ul>
            </div>

    </section>
  )
}

export default Menu