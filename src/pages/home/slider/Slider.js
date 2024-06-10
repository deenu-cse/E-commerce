import React from 'react'
import '../slider/slider.css'
import Slider from "react-slick"
import slid1 from '../../../images/slider-1.png'
import slid2 from '../../../images/slider-2.png'



export default function HomeSlider() {
    var settings = {
        dots: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };
    return (
        <div className='homeslider'>
            <div className='slidecontainor'>
                <Slider {...settings} className='mainslide'>
                    <div className='item'>
                        <img src={slid1}></img>
                        <div className='info'>
                            <h2>
                                Don't miss amazing <br />
                                grocery deals
                            </h2>
                            <p>Sign up for the daily newsletter</p>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={slid2}></img>
                        <div className='info'>
                            <h2>
                               Fresh Vegetables <br />
                                Big discount
                            </h2>
                            <p>Save up to 50% off on your first order</p>
                        </div>
                    </div>
                </Slider>
                <div className='msg'>
                    <input type='email' placeholder='Your email...'></input>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}
