import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { FetchProducts } from '../../redux/actions/productActions'
import { FiMinusSquare, FiPlusSquare } from 'react-icons/fi'
import { addToCart, deleteFromCart, updateQuantity } from '../../redux/actions/cartActions'


function ProductCard() {
    const dispatch = useDispatch()

    dispatch(FetchProducts)

    const products = useSelector(state => state.fetchedProducts.products)
    const cartItems = useSelector(state => state.cart.cartItems)

    function handleAdd(product) {
        if(!isExistInCart(product.id)) {
            product.quantity = 1
            dispatch(addToCart(product))
        }
    }

    function isExistInCart(id) {
        return cartItems.find(item => item.id === id)
    }

    function getQuantity(id) {
        const item = cartItems.find(item => item.id === id)
        return item.quantity
    }

    function handleCartQuantity(id) {
        dispatch(deleteFromCart(id))
    }

    return (
        <React.Fragment>
            <div className="flex flex-row flex-wrap mb-10 justify-center">
                {
                    products && products.length ? (
                        products.map(product => (
                            <div key={product.id} className="mb-20 mt-5">
                                <div className="flex flex-col border-2 border-b-0 bg-teal-500 border-red-400 rounded-t-lg w-64 h-full m-5 mb-0 mx-8 overflow-hidden">
                                    <img className="self-center w-56 h-56 mb-1 mt-3 rounded-lg transform hover:scale-105" 
                                    src={localStorage.getItem(product.id)? `data:image/jpg;base64,${localStorage.getItem(product.id)}`:product.image} 
                                    alt={product.description} />
                                    <div className="flex flex-col text-center p-3 pb-0 transform">
                                        <div className="font-medium mb-1">{product.title}</div>
                                        <div className="px-2 mx-auto">Price: $ {product.price}</div>
                                    </div>
                                </div>
                                { isExistInCart(product.id) ? (
                                    <div className="flex-1 flex justify-between text-sm border-2 border-t-0 border-red-400 bg-teal-500 p-2 w-64 mt-0 mx-8 rounded-b-lg">
                                        <div className="flex flex-row items-center justify-around bg-orange-300 w-full rounded-lg mx-8 p-2 font-semibold">
                                            <FiMinusSquare className="cursor-pointer" size={25} onClick={() => dispatch(updateQuantity(product.id, -1))}/>
                                                {getQuantity(product.id) < 1 ? handleCartQuantity(product.id) : (
                                                    <div className="px-5 text-lg font-bold">{getQuantity(product.id)}</div>
                                                )}
                                            <FiPlusSquare size={25} className="cursor-pointer" onClick={() => dispatch(updateQuantity(product.id, 1))}/>
                                        </div>
                                    </div> ) : (
                                    <div className="flex justify-center items-center border-2 border-t-0 border-red-400 bg-teal-500 p-2 w-64 mt-0 mx-8 rounded-b-lg">
                                        <button className="text-center bg-orange-300 w-full hover:bg-orange-400 rounded-lg mb-1 mx-8 p-2 font-semibold" 
                                        onClick={() => handleAdd(product)}> 
                                            Add to Cart
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="text-2xl text-center p-20">Loading...</div>
                    )
                }      
            </div>
        </React.Fragment>
    )
}
export default ProductCard