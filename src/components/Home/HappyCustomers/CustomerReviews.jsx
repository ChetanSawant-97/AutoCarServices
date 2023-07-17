import React, { useRef, useState } from 'react'
import data from '../../../constants/data'
import ReviewCard from './ReviewCard'
import './CustomerReview.css'
import {GrNext} from 'react-icons/gr/index.esm'
import {GrPrevious} from 'react-icons/gr/index.esm'

const CustomerReviews = () => {

  const fleetListRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScrollRight = () => {
    console.log('handleRight');
    if (fleetListRef.current) {
      const container = fleetListRef.current;
      console.log(container);
      container.scrollLeft += 250; 
      setScrollLeft(container.scrollLeft);
    }
  };

  const handleScrollLeft = () => {
    console.log('handleLeft');
    if (fleetListRef.current) {
      const container = fleetListRef.current;
      container.scrollLeft -= 250; 
      setScrollLeft(container.scrollLeft);
    }
  };

  return (
    <div className='app__reviews'>
      <div>
        <h1>Our Happy Customers</h1>
      </div>
      <div className="app__fleet_list-container">
        <div className="app__fleet-list">
        {data.reviews.map((review,index)=> <ReviewCard key={index} customerName={review.customerName} word={review.words} />)}
        </div>
      </div>
      <div className='app__reviews_buttons' ref={fleetListRef}>
        <div className='app__reviews_previos'>
          <button onClick={handleScrollLeft}> <GrPrevious/> </button>
        </div>
        <div className='app__reviews_next'>
          <button onClick={handleScrollRight}><GrNext/></button>
        </div>
      </div>
    </div>
  )
}

export default CustomerReviews
