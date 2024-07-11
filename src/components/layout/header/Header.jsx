import React from 'react'

import './header.scss'
import Image from 'next/image'
import img from '../../../assets/logo.svg'
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className='nav container'>
        <div className="nav__logo">
          <Link href={"/"}>
            <Image height={100} width={100} alt='images' src={img} />
          </Link>
        </div>
        <div className="nav__links">
          <ul>
            <Link href={"/wishlist"}>Wishlist</Link>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="nav__btns">
          <button><IoPersonOutline /></button>
          <Link href={"/cart"}>
            <button><FiShoppingCart /></button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header