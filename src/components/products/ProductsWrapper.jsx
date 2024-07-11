"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsCart, BsFillCartFill } from "react-icons/bs";
import { toggleHeart } from '@/lib/features/wishlist/wishlistSlice';
import { addToCart } from '@/lib/features/cart/cartSlice';


const ProductsWrapper = ({ data }) => {

    const dispatch = useDispatch()
    let wishlist = useSelector(state => state.wishlist.value)
    let cart = useSelector(state => state.cart.value)
    console.log(wishlist);

    let product = data?.slice(0, 8).map(product => (
        <div key={product.id} className="products__card">
            <Link href={`/details/${product.id}`}>
                <div className="products__card-img">
                    <Image width={100} height={100} alt='images' src={product.images[0]} />
                </div>
            </Link>
            <div className="products__card-title">
                <h3>{product.title}</h3>
                <p>{product.price}</p>
            </div>
            <div className="products__card-btns">
                <button onClick={() => dispatch(toggleHeart(product))}>
                    {wishlist.some((el) => el.id === product.id) ? (
                        <FaHeart color="crimson" />
                    ) : (
                        <FaRegHeart />
                    )}
                </button>
                <button onClick={()=> dispatch(addToCart(product))}>
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
        <div className="products__cards">
            {product}
        </div>
    )
}

export default ProductsWrapper