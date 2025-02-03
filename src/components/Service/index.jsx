import React from 'react'
import './style.css'
import { serviceList } from '../../data/service'
import ServiceCard from '../ServiceCard'

function Service() {

  console.log("serviceList==>", serviceList)
  return (
    <div className='service-container'>
      <ul className='cards-container'>
        {
          serviceList.map((service) => (
            // <li key={service.id}>{service.name}</li>
            <ServiceCard key={service.id} card ={service}/>
          ))
        }
      </ul>

    </div>
  )
}

export default Service