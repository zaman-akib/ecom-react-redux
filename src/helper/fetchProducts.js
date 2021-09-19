import { useState, useEffect } from 'react'
import axios from 'axios'

function GetProducts() {
    const [data, setData] = useState([])

    useEffect(()=>{
        if(!localStorage.getItem('products')){
            const fetchData = async() => {
                try {
                    const res = await axios.get('https://fakestoreapi.com/products')
                    localStorage.setItem('products', JSON.stringify(res.data))
                    setData(res.data)
                    } catch(err) {
                        // error handling code
                    } 
            }
            fetchData()
        }
            
        else if(localStorage.getItem('products')){
            setData(JSON.parse(localStorage.getItem('products')))
        }
    },[])

    return data
}

export default GetProducts