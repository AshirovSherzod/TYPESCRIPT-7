import React from 'react'

import './footer.scss'
import Image from 'next/image'
import img from '../../../assets/footer.png'

const Footer = () => {
  return (
    <footer className='footer '>
      <hr />
      <div className="footer__wrapper container">
        <div className="footer__logo">
          {/* <Image width={100} height={100} alt='images' src={img}/> */}
          <p>Your natural candle made for your home and for your wellness.</p>
        </div>
        <div className="footer__links">
          <ul>
            <li>Discovery</li>
            <li>New Season</li>
            <li>Most Searched</li>
            <li>Most Selled</li>
          </ul>
          <ul>
            <li>Discovery</li>
            <li>New Season</li>
            <li>Most Searched</li>
            <li>Most Selled</li>
          </ul>
          <ul>
            <li>Discovery</li>
            <li>New Season</li>
            <li>Most Searched</li>
            <li>Most Selled</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer