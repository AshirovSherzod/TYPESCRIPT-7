"use client"
import React, { useEffect, useState } from 'react'
import './products.scss'
import ProductsWrapper from './ProductsWrapper'
import axios from 'axios'

const Products = ({ limit }) => {
    
    const [data, setData] = useState(null)

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then(res => setData(res.data.products))
            .catch(res => console.log(res))
    }, [])



    return (
        <section className='products container'>
            <h1>Products</h1>
            <p>Order it for you or for your beloved ones </p>
            <ProductsWrapper data={data} />
        </section>
    )
}

export default Products