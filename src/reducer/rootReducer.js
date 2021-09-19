import { combineReducers } from "redux";
import fetchProductReducer from "./fetchProductReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    products: fetchProductReducer,
    cart: cartReducer
})