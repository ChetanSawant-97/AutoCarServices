import React, { useState } from 'react'
import './Navbar.css';
import images from '../../../constants/images'
import LogIn from '../Forms/LogIn';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <nav className="navbar navbar-dark navbar-expand-lg app__navbar">
            <div className="container-fluid">
                <a className="navbar-brand" style={{width:"5%"}} href="#">
                    <img style={{width:"100%"}} src={images.logo2}  />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item hover-effect">
                            <a className="nav-link active text-light" aria-current="page" href="#">Insurance Claim</a>
                        </li>
                        <li className="nav-item hover-effect">
                            <a className="nav-link active text-light" aria-current="page" href="#">Blog</a>
                        </li>
                        <li className="nav-item hover-effect">
                            <a className="nav-link active text-light" aria-current="page" href="#">About Us</a>
                        </li>
                        <li className="nav-item hover-effect">
                            <a className="nav-link active text-light"  href="#">Contact Us</a>
                        </li>
                        <li className="nav-item hover-effect">
                            <a className="nav-link text-light" href="#">Lubricant</a>
                        </li>
                    </ul> 
                    <div className="d-flex app__nav__auth" role="search" >
                        <div className='d-flex w-100'>
                            <div className='app__nav__login hover-effect' onClick={()=>{setIsOpen(true)}}> <a className="nav-link text-light" href="#">LogIn</a></div>
                            <LogIn open={isOpen} onClose={()=>{setIsOpen()}}/>
                            <div className='app__nav__seperate'> </div>
                            <div className='app__nav__signup hover-effect'> <a className="nav-link text-light" href="#">Sign Up</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;
