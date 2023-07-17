import React from 'react'
import './OurPromise.css'
import images from '../../../constants/images'

const OurPromise = () => {
  return (
    <div className='d-flex app__promise'>
    <div className='app__promise_about  d-flex'>
        <h1 className='app__promise_heading'>Our Prmise</h1>
    </div>
    <div className='app__promise_info'>
    <div class="promise_grid-item">
        <div className='promise_grid-item-img'>
            <img src={images.genuineParts} alt="" />
        </div>
        <div className='promise_grid-item-info '>
            <h4>Select Your Car</h4>
            <p>Choose from our portfolio of cars.</p>
        </div>
    </div>
    <div class="promise_grid-item">
        <div className='promise_grid-item-img'>
            <img src={images.transperancy} alt="" />
        </div>
        <div className='promise_grid-item-info '>
            <h4>Free Pick-Up & Drop</h4>
            <p>Once booked, sit back and relax.</p>
        </div>
    </div>
    <div class="promise_grid-item">
        <div className='promise_grid-item-img'>
            <img src={images.hasselFree} alt="" />
        </div>
        <div className='promise_grid-item-info '>
            <h4>Live Tracking</h4>
            <p> Get real-time status & updates.</p>
        </div>
    </div>
    <div class="promise_grid-item">
        <div className='promise_grid-item-img'>
            <img src={images.honestprising} alt="" /></div>   
        <div className='promise_grid-item-info '>
            <h4>30 Days Warranty</h4>
            <p>Stay assured. 1-month warranty on all car services & repairs.</p>
        </div>
    </div>
    </div>
</div>
  )
}

export default OurPromise
