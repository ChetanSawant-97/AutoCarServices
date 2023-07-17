import React from 'react'
import './ServicesProvided.css'
import images from '../../../constants/images'

const ServicesProvided = () => {
  return (
    <div className='d-flex app__services'>
      <div className='app__services_about'>
        <h1 className='labelWhite'>Car Services We Provide</h1>
        <p className='labelWhite'>Find the best car service packages for your car. Select from a wide range of car repairs & services, from general service, car wash, accidental repair to custom repairs, cashless insurance claims, and much more.</p>
      </div>
      <div className='app__services_info'>
        <div class="grid-item">
            <img src={images.carWash} alt="" />
            <h6>Car Wash</h6>
        </div>
        <div class="grid-item">
            <img src={images.wheelCare} alt="" />
            <h6>Wheel care</h6>
        </div>
        <div class="grid-item">
            <img src={images.acRepair} alt="" />
            <h6>Car AC Repair</h6>
        </div>
        <div class="grid-item">
            <img src={images.batterySupport} alt="" />   
            <h6>Car Battery</h6>
        </div>
        <div class="grid-item">
            <img src={images.dentingPainting} alt="" />
            <h6>Denting & Penting</h6>
        </div>
        <div class="grid-item">
            <img src={images.customRepairs} alt="" />
            <h6>Custom Repairs</h6>
        </div>
        <div class="grid-item">
            <img src={images.periodicService} alt="" />
            <h6>Periodic Service</h6>
        </div>
        <div class="grid-item">
            <img src={images.insuranceClaim} alt="" />
            <h6>Insurance Claim</h6>
        </div>
      </div>
    </div>
  )
}

export default ServicesProvided
