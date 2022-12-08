import React from 'react'
import styles from '../Reviews/Reviews.module.scss'
import Review from './Review'

function Reviews({review}) {

  const reviewsArray = review.map((review) => (
    <Review key={review._id} name={review.name} review={review.reviews} image={review.image} 
    />
  )
)
 
  return (
    <section className={styles.reviews} id='reviews'>
        <div className={styles.heading}>
            <span>Depoimentos</span>
            <h2>Dos nossos clientes</h2>

        </div>

        <div className={styles.contente}>
        {reviewsArray}
        </div>
    </section>
  )
}

export default Reviews