import React from 'react'

import './header.scss'
import Image from 'next/image'
import img from '../../../assets/logo.svg'
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <nav className='nav container'>
        <div className="nav__logo">
          <Image height={100} width={100} alt='images' src={img}/>
        </div>
        <div className="nav__links">
          <ul>
            <li>Discovery</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="nav__btns">
          <button><IoPersonOutline /></button>
          <button><FiShoppingCart /></button>
        </div>
      </nav>
    </header>
  )
}

export default Header