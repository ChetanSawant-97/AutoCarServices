import React from 'react'
import {BsCurrencyRupee} from 'react-icons/bs/index.esm'

const ServiceRow = ({id, service, price}) => {
  return (
    <tr> 
      <td>{service}</td>
      <td>{price} <span /> <BsCurrencyRupee/></td> 
  </tr>
  )
}

export default ServiceRow
