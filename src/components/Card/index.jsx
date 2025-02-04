import React from 'react'
import './style.css'
import { useSelector } from 'react-redux'
import CardItem from '../CardItem';

function Card() {
  const cardList = useSelector(state => state.cardInfo.cardList)
  const totalPrice = useSelector(state => state.cardInfo.price)
  return (
    <div className='addtocard'>

      {/* added cards  */}
      <ul className='addtocard__cards-container'>
        {
          cardList?.map((card) => (
            <CardItem cardDetail={card} key={card.id} />
          ))
        }
      </ul>

      {/* price container  */}
      <div>
        <div className='addtocard__price-container'>
          <span>Total Price</span>
          <span>₹ {totalPrice}</span>
        </div>

        <button type='button' className='addtocard__paynow'>Pay Now</button>
      </div>
    </div>
  )
}

export default Card