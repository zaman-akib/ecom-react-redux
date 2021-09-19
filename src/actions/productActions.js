import { useEffect } from 'react'
import axios from 'axios'
import { FETCH_PRODUCTS } from '../actionTypes/ProductActionTypes'

export const fetchProducts = async(dispatch) => {
    useEffect(()=>{
        if(!localStorage.getItem('products')){
            const res = await axios.get('https://fakestoreapi.com/products')
            localStorage.setItem('products', JSON.stringify(res.data))

            dispatch({
                type: FETCH_PRODUCTS,
                payload: res.data
            })
        }
            
        else if(localStorage.getItem('products')){
            setData(JSON.parse(localStorage.getItem('products')))
        }
    },[])
}