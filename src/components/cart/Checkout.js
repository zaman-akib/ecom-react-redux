import React from 'react'
import { Link } from 'react-router-dom'
import { showHideCart, clearCart } from '../../redux/actions/cartActions'
import { useSelector, useDispatch } from 'react-redux'
import { calcPrice } from '../../helper/helperMethods'
import { calcTotalPrice } from '../../helper/helperMethods'

function Checkout() {
    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()

    function handleContinue() {
        dispatch(clearCart())
        dispatch(showHideCart())
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-green-600 text-2xl underline m-6">
                Ordered Items
            </div>
            {
                cartItems.map(item => (
                    <div key={item.id} className="mt-5 flex flex-start w-11/12 sm:w-9/12 lg:w-1/2 md:w-9/12 p-2 border-2">
                        <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                            <li key={item.id} className="py-6 flex">
                                <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>

                                <div className=" ml-5 flex-1 flex flex-col font-medium">
                                    <p>{item.title}</p>
                                    <p>Unit Price: ${(item.price).toFixed(2)}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: ${calcPrice(item.quantity, item.price)}</p>
                                </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                ))
            }

            <div className="flex mt-5 flex-row text-xl font-medium text-gray-900">
                <p className="px-5">Total: </p>
                <p>${calcTotalPrice(cartItems)}</p>
            </div>
            <div className="text-orange-600 text-center text-4xl m-6">Thank You ! Your order has been placed</div>
            <div className="text-indigo-600 text-2xl text-center mb-10 font-medium hover:text-indigo-500" onClick={handleContinue}>
                <Link to='/'>
                    Continue Shopping<span aria-hidden="true"> &rarr;</span>
                </Link>
            </div>
        </div>
    )
}

export default Checkout
