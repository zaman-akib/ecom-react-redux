import { applyMiddleware, createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import cartReducer from "../reducer/cartReducer"

const enhancher = applyMiddleware(thunkMiddleware)

const store =  createStore(cartReducer, enhancher)

export default store