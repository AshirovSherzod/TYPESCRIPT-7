import React from 'react'

import './testimonials.scss'
import img from '../../assets/img.png'
import Image from 'next/image'

const Testimonials = () => {
    return (
        <section className='testimonials'>
            <div className="testimonials__wrapper container">
                <h1>Testimonials</h1>
                <p>Some quotes from our happy customers</p>
                <div className="testimonials__cards">
                    <div className="testimonials__card">
                        <Image width={100} height={100} alt='images' src={img} />
                        <h3>“I love it! No more air fresheners”</h3>
                        <p>Luisa</p>
                    </div>
                    <div className="testimonials__card">
                        <Image width={100} height={100} alt='images' src={img} />
                        <h3>“I love it! No more air fresheners”</h3>
                        <p>Luisa</p>
                    </div>
                    <div className="testimonials__card">
                        <Image width={100} height={100} alt='images' src={img} />
                        <h3>“I love it! No more air fresheners”</h3>
                        <p>Luisa</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials