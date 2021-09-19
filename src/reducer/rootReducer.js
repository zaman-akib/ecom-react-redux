import { combineReducers } from "redux";
import fetchProductReducer from "./fetchProductReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    fetchedProducts: fetchProductReducer,
    cart: cartReducer,
})

export default rootReducer