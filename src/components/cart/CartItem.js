import { RiDeleteBin5Line } from 'react-icons/ri'
import { FiMinusSquare, FiPlusSquare } from 'react-icons/fi'
import { useDispatch } from "react-redux";
import { deleteFromCart, updateQuantity } from '../../redux/actions/cartActions'
import { calcPrice } from '../../helper/helperMethods'

const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    const {id, image, title, price, quantity} = item

    function handleDelete(id) {
        dispatch(deleteFromCart(id))
    }

    return (
        <div className="mt-5">
            <div className="flow-root">
            <ul className="-my-6 divide-y divide-gray-200">
                <li className="py-6 flex">
                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                        <img
                            src={image}
                            alt=""
                            className="w-full h-full object-center object-cover"
                        />
                    </div>

                    <div className="ml-4 flex-1 flex flex-col">
                        <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>{title}</p>
                                <p className="ml-4">${calcPrice(quantity, price)}</p>
                            </div>
                        </div>
                        <div className="flex-1 flex items-end justify-between text-sm">
                            <div className="flex flex-row">
                                <FiMinusSquare className="cursor-pointer" size={25} onClick={() => dispatch(updateQuantity(id, -1))}/>
                                {quantity === 0 ? handleDelete(id) : (
                                    <div className="px-5 text-lg font-bold">{quantity}</div>
                                )}
                                <FiPlusSquare size={25} className="cursor-pointer" onClick={() => dispatch(updateQuantity(id, 1))}/>
                            </div>
                            <div className="flex">
                            <RiDeleteBin5Line size={25} className="cursor-pointer"
                            onClick={() => handleDelete(id)}/>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default CartItem