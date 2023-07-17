import React from 'react'
import './VehicleCareFeatures.css'
import images from '../../../constants/images'

const VehicleCareFeatures = () => {
  return (
    <div className='d-flex app__features'>
      <div className='app__features_about'>
        <h1 className=''>Vehicle Features</h1>
        <p className=''>Find the best car service packages for your car. Select from a wide range of car repairs & services, from general service, car wash, accidental repair to custom repairs, cashless insurance claims, and much more.</p>
      </div>
      <div className='app__features_info'>
        <div class="feature_grid-item">
            <div className='grid-item-img'>
              <img src={images.affordable} alt="" />
            </div>
            <div className='grid-item-info'>
              <h4>Reliable and Affordable</h4>
              <p>VehicleCare's expert car mechanics will meet your vehicle service needs at an affordable rate. Our affordable prices will satisfy any budget without compromising quality.</p>
            </div>
        </div>
        <div class="feature_grid-item">
            <div className='grid-item-img'>
              <img src={images.experience} alt="" />
            </div>
            <div className='grid-item-info'>
              <h4>Experienced and Trained</h4>
              <p>VehicleCare has been servicing cars since 2016, so we've seen it all! We are equipped to handle any situation whether it's a routine oil change or an emergency on the side of the road.</p>
            </div>
        </div>
        <div class="feature_grid-item">
            <div className='grid-item-img'>
              <img src={images.quality} alt="" />
            </div>
            <div className='grid-item-info'>
              <h4>Quality Repairs</h4>
              <p>We make sure our customers feel confident about their vehicles after we complete a repair or any other service on their vehicle.</p>
            </div>
        </div>
        <div class="feature_grid-item">
            <div className='grid-item-img'>
              <img src={images.customizable} alt="" /></div>   
            <div className='grid-item-info'>
              <h4>Customizable Scheduling</h4>
              <p>Search for a time slot near you and we'll give you a list of available time slots! No need to browse our schedule!</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default VehicleCareFeatures;
