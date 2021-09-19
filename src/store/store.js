import { applyMiddleware, createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import rootReducer from "../reducer/rootReducer"

const enhancher = applyMiddleware(thunkMiddleware)

const store =  createStore(rootReducer, enhancher)

export default store