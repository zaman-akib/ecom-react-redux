import { useEffect } from 'react'
import axios from 'axios'
import { FETCH_PRODUCTS } from '../actionTypes/ProductActionTypes'

export const FetchProducts = (dispatch) => {
    useEffect(() => {
        if(!localStorage.getItem('products')){
            const fetchData = async () => {
                const res = await axios.get('https://fakestoreapi.com/products')
                localStorage.setItem('products', JSON.stringify(res.data))

                dispatch({
                    type: FETCH_PRODUCTS,
                    payload: res.data
                })
            }
            fetchData()
        }
            
        else if(localStorage.getItem('products')){
            dispatch({
                type: FETCH_PRODUCTS,
                payload: JSON.parse(localStorage.getItem('products'))
            })
        }
    },[dispatch])
}