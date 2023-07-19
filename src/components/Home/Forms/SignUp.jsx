import React from 'react'
import './SignUp.css'
import { AiFillCloseCircle } from 'react-icons/ai/index.esm'
import  ReactDOM  from 'react-dom';
import images from '../../../constants/images';


const SignUp = ({open, onClose}) => {
  if (!open) return null;

  return ReactDOM.createPortal(
        <div>
            <div className='addOverlay'> </div>
            <div class="container sign__up_formdiv">
                <div className="d-flex justify-content-end">
                    <button className='closeFormButton' onClick={onClose}><AiFillCloseCircle className='closeButtonIcon' size={32} /></button>
                </div>
                
                <div className="container-fluid h-custom">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-md-6 col-sm-12 ">
                            <h1 className='h-25 labelWhite' >Register to enjoy our services</h1>
                            <img src={images.signUp} className="img-fluid" />
                        </div>
                        <div className="col-md-6 col-sm-12 d-flex justify-content-center">
                            <div style={{ backgroundColor: 'black' }} className="form_container rounded-4 m-4">
                                <form class="form">
                                    <p class="title">Register </p>
                                    <p class="message">Signup now and get full access to our app. </p>
                                        <div class="flex">
                                        <label>
                                            <input required="" placeholder="" type="text" class="input" />
                                            <span>Firstname</span>
                                        </label>

                                        <label>
                                            <input required="" placeholder="" type="text" class="input" />
                                            <span>Lastname</span>
                                        </label>
                                    </div>  
                                            
                                    <label>
                                        <input required="" placeholder="" type="email" class="input" />
                                        <span>Email</span>
                                    </label> 
                                        
                                    <label>
                                        <input required="" placeholder="" type="password" class="input" />
                                        <span>Password</span>
                                    </label>
                                    <label>
                                        <input required="" placeholder="" type="password" class="input" />
                                        <span>Confirm password</span>
                                    </label>
                                    <button class="submit">Submit</button>
                                    <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('signUpPortal')
  )
}

export default SignUp
