"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ProductsWrapper = ({ data }) => {

    let product = data?.slice(0,8).map(el => (
        <div key={el.id} className="products__card">
            <Link href={`/details/${el.id}`}>
                <div className="products__card-img">
                    <Image width={100} height={100} alt='images' src={el.images[0]} />
                </div>
            </Link>
            <div className="products__card-title">
                <h3>{el.title}</h3>
                <p>{el.price}</p>
            </div>
        </div>
    ))
    return (
        <div className="products__cards ">
            {product}
        </div>
    )
}

export default ProductsWrapper