import React from 'react'
import NavBar from '../navbar/NavBar';
import ProductCard from '../product-card/ProductCard'
import Cart from '../cart/Cart'
import { Provider } from 'react-redux'
import store from '../../store/store'
import RouteHandler from '../../router/RouteHandler'

function EcomApp() {
  return (
    <Provider store={store}>
      <RouteHandler>
        <div className="font-trebuchet">
          <NavBar />
          <Cart />
          <ProductCard />
        </div>
      </RouteHandler>
    </Provider>
  )
}

export default EcomApp;
