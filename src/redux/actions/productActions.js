import axios from 'axios'
import { FETCH_PRODUCTS } from '../actionTypes/ProductActionTypes'
import imageToBase64 from 'image-to-base64/browser'
import { useSelector } from 'react-redux'

export const useFetch = (url) => {
    const products = useSelector(state => state.fetchedProducts.products)

    return async function(dispatch) {
        if(products.length === 0){
            const res = await axios.get(url)
            const { data } = res

            data.map(d => {
                return imageToBase64(d.image).then((result) => {
                    localStorage.setItem(d.id, result)
                })
            })

            dispatch({
                type: FETCH_PRODUCTS,
                payload: data
            })
        }
        else{
            dispatch({
                type: FETCH_PRODUCTS,
                payload: products
            })
        }
    }
}