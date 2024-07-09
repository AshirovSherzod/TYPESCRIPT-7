import Image from 'next/image'
import React from 'react'
import img from '../../assets/mockups.png'
import './fragrants.scss'

const Fragrants = () => {
    return (
        <section className='fragrants container'>
            <div className="fragrants__left">
                <div className="fragrants__left-title">
                    <h1>Clean and fragrant <br /> soy wax</h1>
                    <p>Made for your home and for your wellness</p>
                </div>
                <ul>
                    <li>Eco-sustainable:All recyclable materials, 0% CO2 emissions</li>
                    <li>Hyphoallergenic: 100% natural, human friendly ingredients </li>
                    <li>Handmade: All candles are craftly made with love.</li>
                    <li>Long burning: No more waste. Created for last long.</li>
                </ul>
                <button>Learn More</button>
            </div>
            <div className="fragrants__right">
                <Image width={200} height={200} alt='images' src={img}/>
            </div>
        </section>
    )
}

export default Fragrants