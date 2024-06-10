import React, { useEffect, useState } from 'react'
import '../nav/nav.css'
import down from '../../../images/icons8-expand-arrow-24 (1).png'
import downb from '../../../images/icons8-expand-arrow-24.png'
import all from '../../../images/icons8-border-all-48.png'
import { Link } from 'react-router-dom'
import phone from '../../../images/icons8-phone-50 (1).png'
import vegi from '../../../images/firstvegi.png'
import '../../../App.css'


export default function Nav() {
    const [pagedropdown, setpagedropdown] = useState(false)
    const [mega, setmega] = useState(false)


    return (
        <div className='nav'>
            <div className='containor'>
                <div className='flexme'>
                    <div className='allcat'>
                        <button><img src={all}></img>Browse All Categories<img src={down}></img></button>
                    </div>
                    <div className='shorticon'>
                        <nav>
                            <ul className='inline'>
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link>About</Link></li>
                                <li><Link>Shop</Link></li>
                                <li><Link>Vendors</Link></li>
                                <li onClick={() => setmega(!mega)}><Link>Mega Menu<img src={downb}></img></Link>
                                    {mega === true &&
                                        <div className=' mega'>
                                            <div className='main'>
                                                <div className='first'>
                                                    <h4>Fruit & Vegetables</h4>
                                                    <ul>
                                                        <li><Link>Meat & Poultry</Link></li>
                                                        <li><Link>Fresh Vegetables</Link></li>
                                                        <li><Link>Herbs & Seasonings</Link></li>
                                                        <li><Link>Cuts & Sprouts</Link></li>
                                                        <li><Link>Exotic Fruit & Veggies</Link></li>
                                                        <li><Link>Packaged Produce</Link></li>
                                                    </ul>
                                                </div>
                                                <div className='second'>
                                                    <h4>Breakfast & Dairy</h4>
                                                    <ul>
                                                        <li><Link>Meat & Poultry</Link></li>
                                                        <li><Link>Fresh Vegetables</Link></li>
                                                        <li><Link>Herbs & Seasonings</Link></li>
                                                        <li><Link>Cuts & Sprouts</Link></li>
                                                        <li><Link>Exotic Fruit & Veggies</Link></li>
                                                        <li><Link>Packaged Produce</Link></li>
                                                    </ul>
                                                </div>
                                                <div className='third'>
                                                    <h4>Fresh Sea Food</h4>
                                                    <ul>
                                                        <li><Link>Meat & Poultry</Link></li>
                                                        <li><Link>Fresh Vegetables</Link></li>
                                                        <li><Link>Herbs & Seasonings</Link></li>
                                                        <li><Link>Cuts & Sprouts</Link></li>
                                                        <li><Link>Exotic Fruit & Veggies</Link></li>
                                                        <li><Link>Packaged Produce</Link></li>
                                                    </ul>
                                                </div>
                                                <div className='ximg'>
                                                    <img src={vegi}></img>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </li>
                                <li><Link>Blog</Link></li>
                                <li onClick={() => setpagedropdown(!pagedropdown)}><Link>Pages <img src={downb}></img></Link>
                                    {pagedropdown === true &&
                                        <div className='pagedropdown'>
                                            <ul>
                                                <li><Link to={'/About'}>About Us</Link></li>
                                                <li><Link>Contact Us</Link></li>
                                                <li><Link>My Account</Link></li>
                                                <li><Link>Log In</Link></li>
                                                <li><Link>Register</Link></li>
                                                <li><Link>Forget Password</Link></li>
                                                <li><Link>Reset Password</Link></li>
                                                <li><Link>Privacy Policy</Link></li>
                                                <li><Link>Terms Of Service</Link></li>
                                                <li><Link>404 Page</Link></li>
                                            </ul>
                                        </div>
                                    }
                                </li>
                                <li><Link>Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='number'>
                        <div className='phimg'>
                            <img src={phone}></img>
                        </div>
                        <div className='phnum'>
                            <h2>637-883</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
