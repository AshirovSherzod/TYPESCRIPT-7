"use client"
import axios from 'axios'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Details = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(res => setData(res.data))
      .catch(res => console.log(res))
  }, [])

  return (
    <main className='details container'>
      <div className="details__left">
        <Image width={100} height={100} alt='images' src={data?.images[0]}/>
      </div>
    </main>
  )
}

export default Details