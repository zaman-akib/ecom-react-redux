import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import EcomApp from '../components/ecom-app/EcomApp'
import NotFound from '../components/not-found/NotFound'
import Checkout from '../components/cart/Checkout'
import { useSelector } from 'react-redux'

function RouteHandler() {
    const cartItems = useSelector(state => state.cart.cartItems)

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={EcomApp}/>
                <Route exact path='/checkout'>
                    {cartItems.length === 0 ? (
                        <Redirect to={{pathname: "/"}}/>
                    ) : (
                        <Checkout />
                    )}
                </Route>
                <Route exact path='*' component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default RouteHandler
