import React, { useState } from 'react';
import '../header/header.css';
import logo from '../../images/logo.png';
import search from '../../images/icons8-search-50.png';
import Droper from '../droper/droper';
import compare from '../../images/icons8-replace-50.png'
import heart from '../../images/icons8-heart-24.png'
import cart from '../../images/icons8-cart-50.png'
import account from '../../images/icons8-account-30.png'
import traking from '../../images/icons8-tracking-48.png'
import setting from '../../images/icons8-settings-50.png'
import sign from '../../images/icons8-sign-out-32.png'
import down from '../../images/icons8-expand-arrow-24 (1).png'
import Nav from './nav/nav';
import '../../App.css'


export default function Header() {
    const [dropdown, setdropdwon] = useState(false);
    const [changename, setchangename] = useState("All Categories");
    const [accdrop, setaccdrop] = useState(false);

    const handledrop = (selectedValue) => {
        setdropdwon(false);
        setchangename(selectedValue);
    }

    const showdrop = () => {
        setaccdrop(true);
    }



    return (
        <>
            <header>
                <div className='containor'>
                    <div className='row'>
                        <div className='col'>
                            <img src={logo} alt="Logo"></img>
                        </div>
                        <div className='box'>
                            <div className='hsearch'>
                                <div onClick={() => setdropdwon(!dropdown)} className='dropdown'>
                                    {changename}<img src={down}></img>
                                    {dropdown === true &&
                                        <Droper setdropdwon={setdropdwon} handledrop={handledrop} />
                                    }
                                </div>
                                <div className='search'>
                                    <input type='text' placeholder='Search for items...'></input>
                                    <img src={search} alt="Search"></img>
                                </div>
                            </div>
                        </div>
                        <div className='tabs'>
                            <ul>
                                <li className='com'> <img src={compare}></img><span>Compare</span></li>
                                <li className='heart'> <img src={heart}></img><span>Wishlist</span></li>
                                <li className='cart'> <img src={cart}></img><span>Cart</span></li>
                                <li onMouseEnter={showdrop} className='acc'> <img src={account}></img><span>Account</span>
                                    {accdrop === true &&
                                        <ul className='accdrop' onMouseLeave={() => setaccdrop(false)}>
                                            <li onClick={() => setaccdrop(false)}> <img src={account}></img>MY Account</li>
                                            <li onClick={() => setaccdrop(false)} className='track'> <img src={traking}></img>Order Traking</li>
                                            <li onClick={() => setaccdrop(false)}> <img src={heart}></img>MY Wishlist</li>
                                            <li onClick={() => setaccdrop(false)}> <img src={setting}></img>Setting</li>
                                            <li onClick={() => setaccdrop(false)}> <img src={sign}></img>Sign Out</li>
                                        </ul>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <Nav/>
        </>
    )
}
