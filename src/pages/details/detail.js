import React, { useState } from 'react'
import c1 from '../../images/category-1.svg'
import c2 from '../../images/category-2.svg'
import c3 from '../../images/category-3.svg'
import c4 from '../../images/category-4.svg'
import c5 from '../../images/category-5.svg'
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import limg from '../../images/banner-11.png'
import Lottie from 'lottie-react'
import wow from '../../components/patti.json'
import Rating from '@mui/material/Rating';
import '../details/detail.css'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Sliderx from 'react-slick';
import Catslide from '../../components/catslider/Catslide'
import up from '../../images/icons8-up-arrow-24.png'
import down from '../../images/icons8-expand-arrow-24.png'
import r1 from '../../images/user-1.png'
import r2 from '../../images/user-2.png'
import r3 from '../../images/user-4.jpg'
import Sliderxy from "react-slick"
import prodata from '../../db'
import { useParams } from 'react-router-dom'


export default function Detail() {

  let { idx } = useParams()
  let prod = prodata.filter(proda =>
    proda.productName === idx
  )

  var settings = {
    dots: false,
    fade: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 877,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 656,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const [inputvalue, setinputvalue] = useState(1)
  const [rate, setrate] = useState(prod[0].price)
  const [active, setactive] = useState(0)
  const [cimg, setcimg] = useState(prod[0]?.productImages[0])

  const himg = (index) => {
    setcimg(prod[0]?.productImages[index]);
    console.log(index)
  };

  

  const plus = () => {
    setinputvalue(prevInputValue => prevInputValue + 1);
    setrate(prevRate => prevRate + parseFloat(prod[0].price));
  };

  const min = () => {
    if (inputvalue !== 1) {
      setinputvalue(prevInputValue => prevInputValue - 1);
      setrate(prevRate => prevRate - parseFloat(prod[0].price));
    }
  };



  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  function valuetext(value) {
    return `${value}°C`;
  }

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (even, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className='dright'>
        <div className='drow'>
          <div className='dcol1'>
            <div className='d2row'>
              <div className='przoom'>
                <InnerImageZoom zoomType='hover' className='zoom' src={cimg} />
                <div className='conimg'>
                  <div className='moreimg'>
                  {prod[0].productImages.map((image, index) => (
                      <img
                        key={index}
                        onClick={() => himg(index)}
                        src={image}
                        alt={`Thumbnail ${index}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className='prinfo'>
                <h1>{prod[0].productName}</h1>
                <div className='drate'>
                  <Rating name="half-rating-read" defaultValue={prod[0].rating} precision={0.5} readOnly />
                  <span className='rev'>(32 Reviews)</span>
                </div>
                <div className='rsec'>
                  <span className='rang'>${prod[0].price}</span>
                  <span className='brang'>${prod[0].oldPrice}</span>
                </div>
                <p>{prod[0].description}</p>


                <div className='addmore'>
                  <div className='addsec'>
                    <input type='number' value={inputvalue}></input>
                    <span className='plus' ><img src={up} onClick={plus} /></span>
                    <span className='min' onClick={min}><img src={down} /></span>
                  </div>
                  <div className='addbtn'>
                    <button>Add to cart</button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='dcard'>
        <div className='dtab'>
          <ul>
            <li>
              <button onClick={() => setactive(0)}>Description</button>
            </li>
            <li>
              <button onClick={() => setactive(1)}>Reviews</button>
            </li>
          </ul>
        </div>

        <br />
        {
          active === 0 &&
          <div className='dtabcon'>
            <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.</p>
            <p>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p>

            <br />
            <hr />
            <h2>Packaging & Delivery</h2>
            <p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.</p>
            <p>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</p>

            <br />
            <h2>Suggested Use</h2>
            <p>Refrigeration not necessary.</p>
            <p>Stir before serving</p>

            <br />
            <h2>Warnings</h2>
            <p>Oil separation occurs naturally. May contain pieces of shell.</p>
          </div>
        }
        {
          active === 1 &&
          <div className='rtab'>
            <div className='rowtab'>
              <h3>Customer questions & answers</h3>
              <div className='dcard usercard'>
                <div className='flexkr'>
                  <div className='rimg'>
                    <img src={r1} />
                  </div>
                  <div className='dinfo'>
                    <div className='xflex'>
                      <h5>December 4, 2022 at 3:12 pm</h5>
                      <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?</p>
                  </div>
                </div>
                <div className='flexkr'>
                  <div className='rimg'>
                    <img src={r2} />
                  </div>
                  <div className='dinfo'>
                    <div className='xflex'>
                      <h5>December 4, 2022 at 3:12 pm</h5>
                      <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?</p>
                  </div>
                </div>
                <div className='flexkr'>
                  <div className='rimg'>
                    <img src={r3} />
                  </div>
                  <div className='dinfo'>
                    <div className='xflex'>
                      <h5>December 4, 2022 at 3:12 pm</h5>
                      <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        }

        <br />
        <form>
          <h4>Add a review</h4>
          <div className='foclass'>
            <textarea placeholder='Write here...'></textarea>
          </div>
          <div className='inflex'>
            <div className='fcol1'>
              <input type='text' placeholder='Name...'></input>
            </div>
            <div className='fcol2'>
              <input placeholder='Email...' type='email'></input>
            </div>
          </div>
          <button>Sumbit</button>
        </form>
      </div>

      <div className='some'>
        <h3>Related products</h3>
        <Sliderxy {...settings} className='lowerpro'>

        </Sliderxy>
      </div>

    </>
  )
}
