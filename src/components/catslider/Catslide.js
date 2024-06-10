import React from 'react'
import '../catslider/Catslide.css'
import Slider from "react-slick"
import carddata from './catdata'

export default function Catslide() {

    return (
        <>
            <div className='catslider'>
                <h2 className='cath2'>Featured Categories</h2>
                <div className='cards'>
                    {carddata.map((v,i)=>(
                    <div className='card'>
                        <img src={v.image}></img>
                        <div className='info'>
                        <p>{v.category}</p>
                        <h4 className='down'>{v.items}</h4>
                        </div>
                    </div>
                    ))
                    }
                <br/> <br/>  <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
                </div>
            </div>
        </>
    )
}
