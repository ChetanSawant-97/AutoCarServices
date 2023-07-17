import React from 'react';
import './LogIn.css';
import images from '../../../constants/images';
import { BsFacebook, BsTwitter } from 'react-icons/bs/index.esm';
import { AiFillCloseCircle } from 'react-icons/ai/index.esm';
import { BiLogoGmail } from 'react-icons/bi/index.esm';
import  ReactDOM  from 'react-dom';

const LogIn = ({ open, onClose }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div>
        <div className='addOverlay'> </div>
        <div className="login__form_div">
            <section className="">
                <div className="d-flex justify-content-end">
                    <button className='closeButton' onClick={onClose}><AiFillCloseCircle size={32} /></button>
                </div>
                <div className="container-fluid h-custom">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-md-6 col-sm-12 ">
                        <h1 className='h-25'>Welcom Back ! Log In into Your Account</h1>
                        <img src={images.logo2} className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex justify-content-center">
                        <div style={{ backgroundColor: 'black' }} className="form_container rounded-4 m-4">
                            <form className="p-4">
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead labelWhite fw-normal mb-0 me-3">Sign in with</p>
                                <button type="button" className="btn btn-danger mx-1">
                                <BsFacebook />
                                </button>
                                <button type="button" className="btn btn-danger btn-floating mx-1">
                                <BsTwitter />
                                </button>
                                <button type="button" className="btn btn-danger btn-floating mx-1">
                                <BiLogoGmail />
                                </button>
                            </div>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="labelWhite text-center fw-bold mx-3 mb-0">Or</p>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="email" id="email" className="form-control form-control-lg" placeholder="Enter a valid email address" />
                                <label className="labelWhite form-label" htmlFor="form3Example3">Email address</label>
                            </div>

                            <div className="form-outline mb-3">
                                <input type="password" id="password" className="form-control form-control-lg" placeholder="Enter password" />
                                <label className="labelWhite form-label" htmlFor="form3Example4">Password</label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                <label className="labelWhite form-check-label" htmlFor="form2Example3">
                                    Remember me
                                </label>
                                </div>
                                <a href="#!">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-danger btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                                <p className="labelWhite small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                                <a href="#!" className="link-danger m-2">Register</a>
                                </p>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    </div>,
    document.getElementById('loginPortal')
  );
}

export default LogIn;
