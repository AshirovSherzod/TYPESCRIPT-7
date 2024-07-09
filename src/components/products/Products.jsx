import React from 'react'
import { PRODUCTS_DATA } from '@/static'
import Image from 'next/image'
import img from '../../assets/image-1.png'
import './products.scss'
import Link from 'next/link'

const Products = ({ limit }) => {

    let product = PRODUCTS_DATA.slice(0, limit).map(el => (
        <div key={el.id} className="products__card">
            <Link href={`/details/${el.id}`}>
                <div className="products__card-img">
                    <Image width={100} height={100} alt='images' src={img} />
                </div>
            </Link>
            <div className="products__card-title">
                <h3>{el.title}</h3>
                <p>{el.price}</p>
            </div>
        </div>
    ))
    return (
        <section className='products container'>
            <h1>Products</h1>
            <p>Order it for you or for your beloved ones </p>
            <div className="products__cards ">
                {product}
            </div>
        </section>
    )
}

export default Products