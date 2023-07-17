import React from 'react';
import './PriceList.css';
import ServiceRow from './ServiceRow';
import { servicePrice } from '../../../constants/data';
 // should log the array

const PriceList = () => {
  console.log(typeof servicePrice);
  
  return (
    <div className='app__price'>
      <div className='app__price_header'>
        <h1>Car Service Price List</h1>
      </div>
      <div className='app__price_table'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Service</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
              {servicePrice.map((service,index)=><ServiceRow key={index} service={service.service} price={service.price} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceList;
