import React from 'react'
import './style.css'
import { useSelector } from 'react-redux'

function CardItem({ cardDetail }) {

  return (
    <li className='addtocard-item'>
      <img src={cardDetail.thumbnail} alt={cardDetail.name} className='addtocard-item__thumbnail' />
      <span className='addtocard-item__title'>{cardDetail.name}</span>
    </li>
  )
}

export default CardItem