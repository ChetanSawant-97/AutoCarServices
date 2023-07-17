    import React from 'react'
    import './EasyService.css'
    import images from '../../../constants/images'

    const EasyService = () => {
    return (
        <div className='d-flex app__easy_service'>
            <div className='app__easy_service_about labelWhite d-flex'>
                <h1 className=''>Service In 4 Easy Steps</h1>
                <p className=''>Find the best car service packages for your car. Select from a wide range of car repairs & services, from general service, car wash, accidental repair to custom repairs, cashless insurance claims, and much more.</p>
            </div>
            <div className='app__easy_service_info'>
            <div class="service_grid-item">
                <div className='service_grid-item-img'>
                    <img src={images.easyService1} alt="" />
                </div>
                <div className='service_grid-item-info labelWhite'>
                    <h4>Select Your Car</h4>
                    <p>Choose from our portfolio of cars.</p>
                </div>
            </div>
            <div class="service_grid-item">
                <div className='service_grid-item-img'>
                    <img src={images.easyService2} alt="" />
                </div>
                <div className='service_grid-item-info labelWhite'>
                    <h4>Free Pick-Up & Drop</h4>
                    <p>Once booked, sit back and relax.</p>
                </div>
            </div>
            <div class="service_grid-item">
                <div className='service_grid-item-img'>
                    <img src={images.easyService3} alt="" />
                </div>
                <div className='service_grid-item-info labelWhite'>
                    <h4>Live Tracking</h4>
                    <p> Get real-time status & updates.</p>
                </div>
            </div>
            <div class="service_grid-item">
                <div className='service_grid-item-img'>
                    <img src={images.easyService4} alt="" /></div>   
                <div className='service_grid-item-info labelWhite'>
                    <h4>30 Days Warranty</h4>
                    <p>Stay assured. 1-month warranty on all car services & repairs.</p>
                </div>
            </div>
            </div>
    </div>
    )
    }

    export default EasyService
