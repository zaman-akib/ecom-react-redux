export function calcPrice(quantity, price) {
    return (quantity * price).toFixed(2)
}

export function calcTotalPrice(cartItems) {
    let total = 0

    cartItems.map(item => total += item.quantity * item.price)

    return total.toFixed(2)
}