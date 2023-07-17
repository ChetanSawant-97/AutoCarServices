import React from 'react'
import './CheckPrice.css'
import images from '../../../constants/images'
import CarService from '../../../services/CarModelService/CarService'

const CheckPriceComp = () => {

const getCarBrands = () =>{
    console.log('getCarBrands');
}



  return (
    <div className='d-flex app__price__form'>
        <div className= 'd-flex app__price__div'>
            <form className='app__price__form_form'>
                <div className='check__form__header'>
                    <h1 className=''>A Simpler Way To Car Service</h1>
                </div>
                <div className='check__form__body'>
                    <div className="form-group form__row">
                        <select className="form-control" onClick={getCarBrands} placeholder="Select your brand">
                            <option>Select your brand</option>
                        </select>
                    </div>
                    <div className="form-group form__row">
                        <select className="form-control" placeholder="Select Model">
                            <option>Select Model</option>
                        </select>
                    </div>
                    <div className="form-group form__row">
                        <input type="password" class="form-control" id="inputPassword2" placeholder="Enter Mobile No" />
                    </div>
                    <div className='form__row'>
                        <button type="submit" class="btn btn__check_price mb-2">Confirm identity</button>
                    </div>
                </div>
            </form>
        </div>
        <div className='app__price__form_img'>
            <img src={images.home} alt="logo img" />
        </div>
    </div>
  )
}

export default CheckPriceComp
