import React from 'react'
import '../../components/footer/footer.css'
import icon1 from '../../images/icon-1.svg'
import icon2 from '../../images/icon-2.svg'
import icon3 from '../../images/icon-3.svg'
import icon4 from '../../images/icon-4.svg'
import icon5 from '../../images/icon-5.svg'
import foologo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import address from '../../images/icons8-location-24.png'
import call from '../../images/icons8-phone-50.png'
import mail from '../../images/icons8-send-24.png'
import time from '../../images/icons8-time-50.png'
import name from '../../components/name.json'
import Lottie from 'lottie-react'
import face from '../../images/icons8-facebook-30.png'
import insta from '../../images/icons8-instagram-50.png'
import twit from '../../images/icons8-twitter-30.png'
import you from '../../images/icons8-youtube-30.png'


export default function Footer() {
  return (
    <>
      <div className='footerbox'>
        <div className='foorow'>
          <div className='foocol'>
            <div className='fooflex'>
              <span><img src={icon1}></img></span>
              <div className='fooinfo'>
                <h4>Best prices & offer</h4>
                <p>Orders $50 or more</p>
              </div>
            </div>
          </div>
          <div className='foocol'>
            <div className='fooflex'>
              <span><img src={icon2}></img></span>
              <div className='fooinfo'>
                <h4>Free delivery</h4>
                <p>24/7 amazing services</p>
              </div>
            </div>
          </div>
          <div className='foocol'>
            <div className='fooflex'>
              <span><img src={icon3}></img></span>
              <div className='fooinfo'>
                <h4>Great daily deal</h4>
                <p>When you sign up</p>
              </div>
            </div>
          </div>
          <div className='foocol'>
            <div className='fooflex'>
              <span><img src={icon4}></img></span>
              <div className='fooinfo'>
                <h4>Wide assortment</h4>
                <p>Mega Discounts</p>
              </div>
            </div>
          </div>
          <div className='foocol'>
            <div className='fooflex'>
              <span><img src={icon5}></img></span>
              <div className='fooinfo'>
                <h4>Easy returns</h4>
                <p>Within 30 days</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <footer>
        <div className='lowfoo'>
          <div className='lowrow'>
            <div className='locol'>
              <Link to={'/'}>
                <img src={foologo}></img>
              </Link>
              <p>Awesome grocery store</p>
              <br /><br />
              <p> <img src={address}></img> <strong>Address:</strong> Uttarakhand,Haridwar 249404</p>
              <br />
              <p><img src={call}></img><strong>Call Us:</strong> XXXXXX7030</p>
              <br />
              <p><img src={mail}></img><strong>Email:</strong> Deenu@gmail.com</p>
              <br />
              <p><img src={time}></img><strong>Open:</strong> Mondey-Sunday</p>
            </div>
            <div className='lowrow2'>
              <div className='locol2'>
                <h3>Company</h3>
                <ul className='loul'>
                  <li><Link to='#'>About Us</Link></li>
                  <li><Link to='#'>Delivery Information</Link></li>
                  <li><Link to='#'>Privacy Policy</Link></li>
                  <li><Link to='#'>Terms & Conditions</Link></li>
                  <li><Link to='#'>Contact Us</Link></li>
                  <li><Link to='#'>Sport Center</Link></li>
                </ul>
              </div>
              <div className='locol2'>
                <h3>Account</h3>
                <ul className='loul'>
                  <li><Link to='#'>Sign In</Link></li>
                  <li><Link to='#'>View Cart</Link></li>
                  <li><Link to='#'>My Wishlist</Link></li>
                  <li><Link to='#'>Track My Order</Link></li>
                  <li><Link to='#'>Help Ticket</Link></li>
                  <li><Link to='#'>Shipping Details</Link></li>
                </ul>
              </div>
              <div className='locol2'>
                <h3>Corporate</h3>
                <ul className='loul'>
                  <li><Link to='#'>Become a Vendor</Link></li>
                  <li><Link to='#'>Affiliate Program</Link></li>
                  <li><Link to='#'>Farm Business</Link></li>
                  <li><Link to='#'>Farm Careers</Link></li>
                  <li><Link to='#'>Our Suppliers</Link></li>
                  <li><Link to='#'>Accessibility</Link></li>
                </ul>
              </div>
              <div className='locol2'>
                <h3>Popular</h3>
                <ul className='loul'>
                  <li><Link to='#'>Milk & Flavoured Milk</Link></li>
                  <li><Link to='#'>Butter and Margarine</Link></li>
                  <li><Link to='#'>Marmalades</Link></li>
                  <li><Link to='#'>Sour Cream and Dips</Link></li>
                  <li><Link to='#'>Tea & Kombucha</Link></li>
                  <li><Link to='#'>Cheese</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <hr/>
          <div className='anothefoo'>
            <div className='foopart'>
              <div className='name'>
                <h2>𝒯𝒽𝑒 𝒮𝓉𝑜𝓇𝓍</h2>
                <p>𝓜𝓪𝓭𝓮 𝓑𝔂 𝓓𝓮𝓮𝓷𝓾...</p>
              </div>
              <div className='folo'>
                <h3>Follow Us:</h3>
                <img src={face}></img>
                <img src={insta}></img>
                <img src={twit}></img>
                <img src={you}></img>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
