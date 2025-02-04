import React, { useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { addUserDetail } from '../../slice/card';

const userInitialState = {
  name: "",
  email: "",
  mobile: ""
}

function Order() {
  const [user, setuser] = useState(userInitialState);
  const totalPayableAmount = useSelector(state => state?.cardInfo?.price)
  const dispatch = useDispatch();

  const handleChangeUserDetails = (key, value)=>{
    setuser(prev=>({...prev, [key]:value}))
  }

  const handleFormSubmit = (event) =>{
    event.preventDefault();
    dispatch(addUserDetail(user));
  }

  return (
    <div className='order-page'>
      <div className='order-page_form_div'>
        <form className='order-page_form'>
          <input type='text' placeholder='Full Name' value={user?.name || ""} className='order-page_form_input' onChange={(e)=> handleChangeUserDetails('name',e.target.value)}/>
          <input type='email' placeholder='Email' value={user?.email || ""} className='order-page_form_input' onChange={(e)=> handleChangeUserDetails('email',e.target.value)}/>
          <input type='tel' placeholder='Phone Number' value={user?.mobile || ""} className='order-page_form_input' onChange={(e)=> handleChangeUserDetails('mobile',e.target.value)}/>
          <button type='submit' className='order-page_form_submit' onClick={(e)=>handleFormSubmit(e)}>Pay Now ₹ {totalPayableAmount}</button>
        </form>
      </div>
    </div>
  )
}

export default Order