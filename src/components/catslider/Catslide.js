import React from 'react'
import '../catslider/Catslide.css'
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import cart from '../../images/icons8-cart-50.png'
import heart from '../../images/icons8-heart-24.png'
import compare from '../../images/icons8-compare-24.png'
import view from '../../images/icons8-view-24.png'
import Tooltip from '@mui/material/Tooltip';



export default function Catslide() {
    return (
        <div className='products'>
            <div className='proimg'>
                <img src='https://5.imimg.com/data5/NO/OU/DI/SELLER-69094599/banana-chips-packaging-pouch-500x500.jpg'></img>
                <div className='overly'>
                    <ul>
                        <Tooltip title="Wishlist">
                            <li><a><img src={heart}></img></a></li>
                        </Tooltip>
                        <Tooltip title="Compare">
                            <li><a><img src={compare}></img></a></li>
                        </Tooltip>
                        <Tooltip title="View">
                            <li><a className='bnone'><img src={view}></img></a></li>
                        </Tooltip>
                    </ul>
                </div>
            </div>
            <div className='info'>
                <span className='cat'>Snack</span>
                <h4 className='title'><Link>This banana chips packaging pouch can be used to pack chips.</Link></h4>
                <div className='rate'>
                    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                    <span className='brand'>By<Link>NestFood</Link></span>
                </div>
                <div className='last'>
                    <div className='price'>
                        <span className='new'>$20.85</span>
                        <span className='old'>$28.32</span>
                    </div>
                    <div className='add'>
                        <button><img src={cart}></img>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
