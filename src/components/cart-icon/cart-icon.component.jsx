import React from 'react'
import './cart-icon.component.styles.scss'
import {ReactComponent as ShoppingIcon } from '../../assets/shop-bag.svg'

const CartIcon = () => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon'></ShoppingIcon>
        <span className='item-count'>0</span>
    </div>
)

export default CartIcon