"use client"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { defaultCounter } from '@/lib/features/counter/counterSlice'
import { defaultWishlist } from '@/lib/features/wishlist/wishlistSlice'
import { defaultCart } from '@/lib/features/cart/cartSlice'

const DefaultValues = () => {
    const dispatch = useDispatch()
    useEffect(() => {   
        dispatch(defaultCounter(+localStorage.getItem("counter")))
        dispatch(defaultWishlist(JSON.parse(localStorage.getItem("wishlist")) || []))
        dispatch(defaultCart(JSON.parse(localStorage.getItem("cart")) || []))
    }, [])
    return null
}

export default DefaultValues     