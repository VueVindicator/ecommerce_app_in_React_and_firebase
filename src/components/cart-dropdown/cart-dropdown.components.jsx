import React from 'react'

import './cart-dropdown.styles.scss'
import CustomButton from '../button-component/button-component'

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            <CustomButton>Go to Checkout</CustomButton>
        </div>
    </div>
)

export default CartDropdown