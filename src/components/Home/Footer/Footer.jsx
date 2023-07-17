import React from 'react'
import './Footer.css'
import {PiCopyrightLight} from 'react-icons/pi/index.esm'
import {BiLogoFacebook} from 'react-icons/bi/index.esm'
import {BsInstagram} from 'react-icons/bs/index.esm'
import {BsTwitter} from 'react-icons/bs/index.esm'
import {FaLinkedinIn} from 'react-icons/fa/index.esm'

const Footer = () => {
  return (
    <div className='app__footer'>
        <div className='app__footer_title w-100'>
            <h1 className=''><span>VC</span> VehicleCare</h1>
        </div>
        <div className='app__footer_socials w-100'>
            <div className='app__social_button'> <span><BiLogoFacebook/></span> Facebook</div>
            <div className='app__social_button'> <span><BsInstagram/></span> Instagram</div>
            <div className='app__social_button'> <span><BsTwitter/></span> Twitter</div>
            <div className='app__social_button'> <span><FaLinkedinIn/></span>  Linkedin</div>
        </div>
        <div className='app__footer_about '>
            <div className=''>
                <h6>Popular Services</h6>
                <ul className='no-decoration'>
                    <li><a className='text-decoration-none ' href="">All Service</a></li>
                    <li><a className='text-decoration-none ' href="">General Service</a></li>
                    <li><a className='text-decoration-none ' href="">Custom Repairs</a></li>
                    <li><a className='text-decoration-none ' href="">Car Cleaning</a></li>
                    <li><a className='text-decoration-none ' href="">AC/Heater Service</a></li>
                    <li><a className='text-decoration-none ' href="">Denting And Painting</a></li>
                </ul>
            </div>
            <div  className=''>
                <h6>Company</h6>
                <ul className='no-decoration'>
                    <li><a className='text-decoration-none ' href="">Faq</a></li>
                    <li><a className='text-decoration-none ' href="">Careers</a></li>
                    <li><a className='text-decoration-none ' href="">Contact Us</a></li>
                    <li><a className='text-decoration-none ' href="">Workshop</a></li>
                    <li><a className='text-decoration-none ' href="">Term & Conditions</a></li>
                    <li><a className='text-decoration-none ' href="">Privacy Policy</a></li>
                </ul>
            </div>
        </div>
        <div className='app__footer_copyright w-100'>
            <p> <PiCopyrightLight/> 2023 Copyright Houseneed Doorstep Services Private Limited. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer
