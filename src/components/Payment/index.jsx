import React from 'react'

const Payment = () => {
    return (
        <div>
            <form>
                <label>Card Holder Name</label>
                <input type='text' />
                <label>Card Holder Name</label>
                <input
                    placeholder="Valid Card Number"
                    name="cardNumber"
                    maxLength="19"
                />
            </form>
        </div>
    )
}

export default Payment