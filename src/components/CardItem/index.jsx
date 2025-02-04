import React from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { decrementClassCount, increamentClassCount, removeCard } from '../../slice/card';

function CardItem({ cardDetail }) {
  const dispatch = useDispatch();

  return (
    <li className='addtocard-item'>
      <div className='addtocard-item__img-div'>
        <img src={cardDetail.thumbnail} alt={cardDetail.name} className='addtocard-item__thumbnail' />
        <div className='addtocard-item__card-detail-div'>
          <span className='addtocard-item__title'>{cardDetail.name}</span>
          <span className='addtocard-item__price'>₹ {cardDetail.price}</span>
        </div>
      </div>

      <div className='addtocard-item__action-div'>
        <div className='addtocard-item__button-div'>
          <button
            type='button'
            className='addtocard-item__action-div-buttons'
            onClick={() => dispatch(increamentClassCount(cardDetail?.id))}
          >
            <IoMdAdd />
          </button>

          <span className='addtocard-item__title'> {cardDetail.count}</span>

          <button
            type='button'
            className='addtocard-item__action-div-buttons'
            onClick={() => dispatch(decrementClassCount(cardDetail?.id))}
          >
            <IoIosRemove />
          </button>

        </div>

        <MdDelete className='addtocard-item__action-div-delete' onClick={() => dispatch(removeCard(cardDetail?.id))} />
      </div>

    </li>
  )
}

export default CardItem