import React from 'react';
import data from '../db';
import Header from '../components/header/header';
import Rating from '@mui/material/Rating';
import { Link, useLocation, useParams } from 'react-router-dom';
import cart from '../images/icons8-cart-50.png';

export default function Render() {
    const { query } = useParams()
    const filterData = data.filter((item) =>
        item.productName.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <Header />
            <h1>Your search result for "{query}"</h1>
            <br /><br />
            <div className='plzz'>
                {filterData.map((item, index) => (
                    <Link key={index} to={`/your-search/${item.idx}`}>
                        <div className='products'>
                            <div className='proimg'>
                                <img src={item.catImg} alt={item.productName} />
                                <div className='overly'></div>
                            </div>
                            <div className='info'>
                                <span className='cat'>{item.brand}</span>
                                <h4 className='title'><Link>{item.productName}</Link></h4>
                                <div className='rate'>
                                    <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
                                    <span className='brand'>By<Link>{item.brand}</Link></span>
                                </div>
                                <div className='last'>
                                    <div className='price'>
                                        <span className='new'>${item.price}</span>
                                        <span className='old'>${item.oldPrice}</span>
                                    </div>
                                    <div className='add'>
                                        <button><img src={cart} alt="Add to Cart" />Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
