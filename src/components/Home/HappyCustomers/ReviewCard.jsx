import React from 'react'
import './CustomerReview.css'

const ReviewCard = ({customerName, word}) => {
  return (
    <div className='app__views_card'>
        <p>{word}</p>
        <hr />
        <h>{customerName}</h>
    </div>
  )
}

export default ReviewCard
