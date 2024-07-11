"use client"
import { toggleHeart } from '@/lib/features/wishlist/wishlistSlice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

import './wishlist.scss'
import { BsCart, BsFillCartFill } from 'react-icons/bs'
import { addToCart } from '@/lib/features/cart/cartSlice'

const Wishlist = () => {

    const dispatch = useDispatch()
    let wishlist = useSelector(state => state.wishlist.value)
    let cart = useSelector(state => state.cart.value)


    let product = wishlist?.map(product => (
        <div key={product.id} className="wishlist__card">
            <Link href={`/details/${product.id}`}>
                <div className="wishlist__card-img">
                    <Image width={100} height={100} alt='images' src={product.images[0]} />
                </div>
            </Link>
            <div className="wishlist__card-title">
                <h3>{product.title}</h3>
                <p>{product.price}</p>
            </div>
            <div className="wishlist__card-btns">
                <button onClick={() => dispatch(toggleHeart(product))}>
                    {wishlist.some((el) => el.id === product.id) ? (
                        <FaHeart color="crimson" />
                    ) : (
                        <FaRegHeart />
                    )}
                </button>
                <button onClick={() => dispatch(addToCart(product))}>
                    {cart.some((el) => el.id === product.id) ? (
                        <BsFillCartFill color='green' />
                    ) : (
                        <BsCart />
                    )}
                </button>
            </div>
        </div>
    ))

    return (
        <main className='wishlist container'>
            {
                wishlist.length
                    ?
                    <div className="wishlist__cards">
                        {product}
                    </div>
                    :
                    <div className="wishlist__empty">
                        <Image width={400} height={400} alt='images' src={"https://cdn.vectorstock.com/i/500p/63/96/70s-groovy-comic-confused-man-character-vector-51186396.jpg"} />
                        <h1>Empty Wishlist</h1>
                    </div>
            }
        </main>
    )
}

export default Wishlist