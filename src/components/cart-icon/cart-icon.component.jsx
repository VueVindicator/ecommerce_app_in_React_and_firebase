import React from 'react'
import './cart-icon.component.styles.scss'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart-actions'
import {ReactComponent as ShoppingIcon } from '../../assets/shop-bag.svg'

const CartIcon = () => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon'></ShoppingIcon>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)