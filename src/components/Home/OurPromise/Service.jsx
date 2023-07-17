import React from 'react'
import images from '../../../constants/images'
const Service = () => {
  return (
    <div className='d-flex app__services_band'>
      <div className='w-40 app__services_band_info'>
        <h1>Personalize Your Experience</h1>
        <p>Get access to a comprehensive range of the best services. Customize for the perfect service experience with the help of our expert car mechanics and choose your right fit service from engine oil to replace, interior cleaning, coolant top-up, wheel alignment, and much more.</p>
      </div>
      <div className='w-60 app__services_band_img'>
        <img className='w-100' src={images.services} alt="" />
      </div>
    </div>
  )
}

export default Service
