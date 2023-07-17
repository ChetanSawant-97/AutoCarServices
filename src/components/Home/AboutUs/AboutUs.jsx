import React from 'react'
import './AboutUs.css'
import images from '../../../constants/images'

const AboutUs = () => {
  return (
    <div className='d-flex app__aboutus'>
        <div className='d-flex app__aboutus_div'>
            <div className='app__aboutus_info'>
                <h1>VehicleCare - Multi-Brand Car Workshop</h1>
                <hr />
                <p>VehicleCare is an AI-Based multi-brand car service company working towards simplifying car repairs through clever and cost-effective solutions. We offer everything from scheduled services like oil changes, tire rotations, car ac service, or windshield replacements to doorstep car service & emergency roadside assistance.</p>
            </div>
            <div className='w-50'>
                <div className='app__about_img_div'>
                    <img className='w-100' src={images.aboutus} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
