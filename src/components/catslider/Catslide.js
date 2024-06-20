import React from 'react'
import '../catslider/Catslide.css'
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import cart from '../../images/icons8-cart-50.png'
import heart from '../../images/icons8-heart-24.png'
import compare from '../../images/icons8-compare-24.png'
import view from '../../images/icons8-view-24.png'
import Tooltip from '@mui/material/Tooltip';
import prodata from '../../db'



export default function Catslide({ category }) {


    const filterpro = prodata.filter((product) => (
        category === 'all' || product.cat_name == category
    ));


    return (
        <><div className='plzz'>
            {filterpro.map((v, i) => (
                <Link to={`/product/details/${v.idx}`}>
                    <div className='products'>
                        <div className='proimg'>
                            <img src={v.catImg}></img>
                            <div className='overly'>
                            </div>
                        </div>
                        <div className='info'>
                            <span className='cat'>{v.brand}</span>
                            <h4 className='title'><Link>{v.productName}</Link></h4>
                            <div className='rate'>
                                <Rating name="half-rating-read" defaultValue={v.rating} precision={0.5} readOnly />
                                <span className='brand'>By<Link>{v.brand}</Link></span>
                            </div>
                            <div className='last'>
                                <div className='price'>
                                    <span className='new'>${v.price}</span>
                                    <span className='old'>${v.oldPrice}</span>
                                </div>
                                <div className='add'>
                                    <button><img src={cart}></img>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
        </>
    )
}
