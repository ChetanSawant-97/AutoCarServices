import React from 'react'
import './FAQ.css'

const FAQ = () => {
  return (
    <div className='app__faq'>
      <div className='app__faq_header labelWhite'>
        <h1>Common Car Service Questions</h1>
      </div>
      <div className='app__faq_accordians'>
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item m-2">
                <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    How Many VehicleCare Car Service Stations Are There in India
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">We have more than 400 car workshops in PAN India offering all the aforementioned services.</div>
                </div>
            </div>
            <div class="accordion-item m-2">
                <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    What SOrt of Spare Parts and Engine Oil Are Used
                </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">We use only genuine spares sourced from OEM/OES across all our workshops. Further, all products used are authentic and top-rated.</div>
                </div>
            </div>
            <div class="accordion-item m-2">
                <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    What Makes VehicleCare Different from others
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">VehicleCare is unique for a number of reasons, but the most important one to us is that we care about our customers. At VehicleCare we’re committed to ensuring your car is in top condition at all times, which is why we always go above and beyond to deliver the best possible services at the most affordable prices. Moreover, VehicleCare is India’s first-ever reward-based auto service platform which means you will get rewards for loving your car.</div>
                </div>
            </div>
            <div class="accordion-item m-2">
                <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    How Can I Book My Car Service with VehicleCare
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">You can easily book service through our app/website. Just enter your car details, select service, and confirm the booking to schedule service on your preferred date & time. You can also call or WhatsApp us on - 9911020209 to get real-time reporting and close experience.</div>
                </div>
            </div>
            <div class="accordion-item m-2">
                <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Do You Offer A Warranty On My Car Service
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">VehicleCare is unique for a number of reasons, but the most important one to us is that we care about our customers. At VehicleCare we’re committed to ensuring your car is in top condition at all times, which is why we always go above and beyond to deliver the best possible services at the most affordable prices. Moreover, VehicleCare is India’s first-ever reward-based auto service platform which means you will get rewards for loving your car.</div>
                </div>
            </div>
            <div class="accordion-item m-2">
                <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Does VehicleCare Offer Car Service On EMI
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">VehicleCare is unique for a number of reasons, but the most important one to us is that we care about our customers. At VehicleCare we’re committed to ensuring your car is in top condition at all times, which is why we always go above and beyond to deliver the best possible services at the most affordable prices. Moreover, VehicleCare is India’s first-ever reward-based auto service platform which means you will get rewards for loving your car.</div>
                </div>
            </div>
            <div class="accordion-item m-2">
                <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    I am Looking For A Car Workshop Near Me, How Can I Find VehicleCare Car Service Center Nearby ?
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">VehicleCare is unique for a number of reasons, but the most important one to us is that we care about our customers. At VehicleCare we’re committed to ensuring your car is in top condition at all times, which is why we always go above and beyond to deliver the best possible services at the most affordable prices. Moreover, VehicleCare is India’s first-ever reward-based auto service platform which means you will get rewards for loving your car.</div>
                </div>
            </div>
            </div>
      </div>
    </div>
  )
}

export default FAQ
