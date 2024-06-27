import React, { useState } from 'react';
import '../header/header.css';
import logo from '../../images/logo.png';
import searchIcon from '../../images/icons8-search-50.png';
import Droper from '../droper/droper';
import compare from '../../images/icons8-replace-50.png';
import heart from '../../images/icons8-heart-24.png';
import cart from '../../images/icons8-cart-50.png';
import account from '../../images/icons8-account-30.png';
import tracking from '../../images/icons8-tracking-48.png';
import setting from '../../images/icons8-settings-50.png';
import signOut from '../../images/icons8-sign-out-32.png';
import downArrow from '../../images/icons8-expand-arrow-24 (1).png';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [dropdown, setDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [accdrop, setAccdrop] = useState(false);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleDropdown = (selectedValue) => {
        setDropdown(false);
        setSelectedCategory(selectedValue);
    };

    const showAccountDropdown = () => {
        setAccdrop(true);
    };


    const handleSearch = () => {
        navigate(`/your-search/${query}`);
    };

    const handleKeyPress = (e) => {
        if (e.key == 'Enter') {
            handleSearch()
        }
    }

    return (
        <div className='headerwrap'>
            <header className='fixedZ'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className='box'>
                            <div className='hsearch'>
                                <div onClick={() => setDropdown(!dropdown)} className='dropdown'>
                                    {selectedCategory}<img src={downArrow} alt="Dropdown" />
                                    {dropdown &&
                                        <Droper setDropdown={setDropdown} handleDropdown={handleDropdown} />
                                    }
                                </div>
                                <div className='search'>
                                    <input
                                        type='text'
                                        onChange={(e) => setQuery(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder='Search for items...'
                                    />
                                    <img src={searchIcon} alt="Search" onClick={handleSearch} />
                                </div>
                            </div>
                        </div>
                        <div className='tabs'>
                            <ul>
                                <li className='com'> <img src={compare} alt="Compare" /><span>Compare</span></li>
                                <li className='heart'> <img src={heart} alt="Wishlist" /><span>Wishlist</span></li>
                                <li className='cart'> <img src={cart} alt="Cart" /><span>Cart</span></li>
                                <li onMouseEnter={showAccountDropdown} className='acc'>
                                    <img src={account} alt="Account" /><span>Account</span>
                                    {accdrop &&
                                        <ul className='accdrop' onMouseLeave={() => setAccdrop(false)}>
                                            <li> <img src={account} alt="My Account" />My Account</li>
                                            <li className='track'>
                                                <img src={tracking} alt="Order Tracking" />Order Tracking
                                            </li>
                                            <li> <img src={heart} alt="Wishlist" />My Wishlist</li>
                                            <li> <img src={setting} alt="Settings" />Settings</li>
                                            <li> <img src={signOut} alt="Sign Out" />Sign Out</li>
                                        </ul>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
