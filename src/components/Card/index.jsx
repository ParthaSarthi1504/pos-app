import React from 'react'
import './style.css'
import { useSelector } from 'react-redux'
import CardItem from '../CardItem';

function Card() {
  const cardList = useSelector(state => state.cardInfo.cardList)
  const totalPrice = useSelector(state => state.cardInfo.price)
  return (
    <div className='addtocard'>
      <ul className='addtocard__cards-container'>
        {
          cardList?.map((card) => (
            <CardItem cardDetail={card} key={card.id} />
          ))
        }
      </ul>

      <div>
        <p>Total Price</p>
        <p>{totalPrice}</p>
      </div>
    </div>
  )
}

export default Card