import React, { useState } from 'react'
import Header from '../header/header'
import { Rating } from '@mui/material'
import '../../components/cart/Cart.css'
import up from '../../images/icons8-up-arrow-24.png'
import { useParams } from 'react-router-dom'
import cartdata from '../../db'



export default function Cart() {

    const { value } = useParams()
    const [invalue, setinvalue] = useState(1)

    const hndlin = (e) => {
        setinvalue(e)
    }

    const filtercart = cartdata.filter((item) => (
        item.idx.includes(value)
    ))

    return (
        <div>
            <Header />
            <h1>Your Cart</h1>
            <br />
            {filtercart.map((v, i) => (
                <div key={i} className='cartflex'>
                    <div className='cartsec'>
                        <div className='cartleft'>
                            <div className='cartimg'>
                                <input type='checkbox'></input>
                                <img src={v.catImg} />
                            </div>
                            <div>
                                <h3>{v.productName}</h3>
                                <Rating name="half-rating-read" defaultValue={v.rating} precision={0.5} readOnly />
                            </div>
                            <div className='cartright'>
                                <span>${v.price * invalue}</span>
                                <input type='number' value={invalue} onChange={(e) => hndlin(e.target.value)}>
                                </input>
                                <img src='https://img.icons8.com/?size=100&id=4B0kCMNiLlmW&format=png&color=000000' />
                            </div>

                        </div>
                    </div>
                    <div className='cartcal'>
                        <div className='amount'>
                            <h3>Your amount</h3>
                            <span>${v.price * invalue}</span>
                        </div>
                        <div className='amount'>
                            <h3>Tex charges</h3>
                            <span>$0.42</span>
                        </div>
                        <div className='amount'>
                            <h3>Delivery charges</h3>
                            <span>$1.32</span>
                        </div>
                        <br />
                        <div className='amount'>
                            <h3>Total amount</h3>
                            <span>${v.price * invalue + 1.74}</span>
                        </div>
                        <br />
                        <div className='cartbtn'>
                            <button>Make it yours</button>
                        </div>
                        <br />
                    </div>
                </div>
            ))}
        </div>
    )
}
