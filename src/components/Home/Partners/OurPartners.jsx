import React from 'react'
import './OurPartners.css'
import images from '../../../constants/images'
import data from '../../../constants/data'

const OurPartners = () => {
  return (
    <div className='d-flex w-100 app__partners' >
      <div className='w-50 app__partners_info'>
        <h1 className='labelWhite   '>Our Partners</h1>
        <div className='app__partners_grid'>
            {data.partnerImages.map((image,index)=> <div className='app__partners_grid_item' key={index}><img src={image.imgSrc} alt="" /></div> )}
        </div>
      </div>
      <div className='w-50 rightBanner'>
        <img className='w-100' src={images.zoomCarBanner} alt="" />
      </div>
    </div>
  )
}

export default OurPartners
