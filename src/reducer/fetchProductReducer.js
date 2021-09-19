import { FETCH_PRODUCTS } from '../actionTypes/ProductActionTypes'

const initialState = {
    products: []
}

const fetchProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                products: action.payload
            };
        default:
            return state;
    }
}

export default fetchProductReducer