import React from 'react'
import NavBar from '../navbar/NavBar';
import ProductCard from '../product-card/ProductCard'
import Cart from '../cart/Cart'

function EcomApp() {
  return (
    <div className="font-trebuchet">
      <NavBar />
      <Cart />
      <ProductCard />
    </div>
  )
}

export default EcomApp;
