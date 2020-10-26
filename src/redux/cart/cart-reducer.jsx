import CartActionTypes from '../cart/cart-types'

const INITIAL_STATE = {
    hidden: true
}

const CartReducer = (action, state = INITIAL_STATE) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden
            }
        default:
            return state
    }
}

export default CartReducer