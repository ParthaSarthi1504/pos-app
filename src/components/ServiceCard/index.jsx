import React from 'react'
import './style.css'
import { useDispatch } from 'react-redux'
import { addToCard } from '../../slice/card';

function ServiceCard({card}) {
  const dispatch = useDispatch();

  return (
    <li className='card-item'>
      <img src={card.thumbnail} alt={card.name} className='card-item__thumbnail'/>
      <span className='card-item__title'>{card.name}</span>
      <span className='card-item__price'>₹ {card.price}</span>
      <button className='card-item__button' onClick={()=> dispatch(addToCard(card))}>+</button>
    </li>
  )
}

export default ServiceCard