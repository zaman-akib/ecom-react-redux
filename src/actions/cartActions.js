import { ACTIONS } from "../actionTypes/CartActionTypes"

export const addToCart = item => {
    return {
        type: ACTIONS.ADD_TO_CART,
        payload: item,
    }
}

export const showHideCart = () => {
    return {
        type: ACTIONS.SHOW_HIDE_CART,
    }
}

export const deleteFromCart = id => {
    return {
        type: ACTIONS.DELETE_FROM_CART,
        payload: id
    }
}

export const updateQuantity = (id, value) => {
    return {
        type: ACTIONS.UPDATE_QUANTITY,
        payload: {id, value}
    }
}

export const clearCart = () => {
    return {
        type: ACTIONS.CLEAR_CART,
    }
}