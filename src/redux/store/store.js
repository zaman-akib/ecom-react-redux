import { applyMiddleware, createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import rootReducer from "../reducers/rootReducer"
import { persistStore, persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'

const enhancher = applyMiddleware(thunkMiddleware)

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

export let store =  createStore(persistedReducer, enhancher)
export let persistor =  persistStore(store)