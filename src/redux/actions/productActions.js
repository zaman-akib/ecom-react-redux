import { useEffect } from 'react'
import axios from 'axios'
import { FETCH_PRODUCTS } from '../actionTypes/ProductActionTypes'
import { useSelector } from 'react-redux'
import imageToBase64 from 'image-to-base64/browser'

export const FetchProducts = (dispatch) => {
    const products = useSelector(state => state.fetchedProducts.products)

    useEffect(() => {
        if(products.length === 0){
            const fetchData = async () => {
                const res = await axios.get('https://fakestoreapi.com/products')
                    .then((responses) => {
                        const { data } = responses

                        data.map(d => {
                            return imageToBase64(d.image).then((result) => {
                                localStorage.setItem(d.id, result)
                            })
                        })

                        return responses
                    }
                )

                dispatch({
                    type: FETCH_PRODUCTS,
                    payload: res.data
                })
            }
            fetchData()
        }
            
        else if(products.length !== 0){
            dispatch({
                type: FETCH_PRODUCTS,
                payload: products
            })
        }
    })
}