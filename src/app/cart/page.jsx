"use client"
import { removeFromCart } from '@/lib/features/cart/cartSlice'
import Image from 'next/image'
import React from 'react'
import { IoClose } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'

import './cart.scss'

const Cart = () => {

  const dispatch = useDispatch()
  let cart = useSelector(state => state.cart.value)
  console.log(cart);

  let product = cart?.map(product => (
    <div className="cart__body-card" key={product.id}>
      <div className="cart__body-card__title">
        <button onClick={() => dispatch(removeFromCart(product.id))}><IoClose /></button>
        <Image width={200} height={200} alt='images' src={product.images[0]} />
        <h4>{product.title}</h4>
      </div>
      <p>{product.price}</p>
      <p>{product.price}</p>
    </div>
  ))

  return (
    <main className='cart container'>

      {
        cart.length
          ?
          <div className="cart__content">
            <div className="cart__head">
              <h3>Product</h3>
              <h3>Price</h3>
              <h3>Total</h3>
            </div>
            <div className="cart__body">
              {product}
            </div>
          </div>
          :
          <div className="cart__empty">
            <Image width={400} height={400} alt='images' src={"https://cdn.vectorstock.com/i/500p/63/96/70s-groovy-comic-confused-man-character-vector-51186396.jpg"} />
            <h1>Empty Cart</h1>
          </div>

      }
    </main>
  )
}

export default Cart