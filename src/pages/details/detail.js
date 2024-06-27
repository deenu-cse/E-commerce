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
import { useNavigate, useParams } from 'react-router-dom'
import revdata from '../../reviewdata'
import { Link } from 'react-router-dom';
import cart from '../../images/icons8-cart-50.png'




export default function Detail() {

  const navigate = useNavigate()

  const showcart=(value)=>{
    navigate(`/your-cart/${value}`)
    console.log(value)
  }

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


  const changeinput = (name, value) => {
    setrev(() => ({
      ...rev,
      [name]: value
    }))
  }


  const [rev, setrev] = useState({
    review: "",
    username: "",
    rating: "1.5"
  })

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

  const sumbitrev = (e) => {
    e.preventDefault()
    console.log(rev)

    const newReview = {
      review: rev.review,
      userName: rev.username,
      rating: rev.rating,
      productId: prod[0].productId, 
      date: new Date().toLocaleString(),
      id: revdata.length + 1 
    };

    revdata.push(newReview);
    setrev({
      review: "",
      username: "",
      rating: "1.5"
    });

  }

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
                    <button onClick={(e)=>showcart(prod[0].idx)}>Add to cart</button>
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
                {revdata.map((v, i) =>
                  <div className='flexkr'>
                    <div className='rimg'>
                      <img src={r3} />
                    </div>
                    <div className='dinfo'>
                      <div className='xflex'>
                        <h5>{v.date}</h5>
                        <Rating name="half-rating-read" defaultValue={v.rating} precision={0.5} readOnly />
                      </div>
                      <p>{v.review}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        }

        <br />
        <form onSubmit={sumbitrev}>
          <h4>Add a review</h4>
          <div className='foclass'>
            <textarea onChange={(e) => changeinput(e.target.name, e.target.value)} placeholder='Write here...' name='review'></textarea>
          </div>
          <div className='inflex'>
            <div className='fcol1'>
              <input type='text' onChange={(e) => changeinput(e.target.name, e.target.value)} placeholder='Name...' name='username'></input>
            </div>
            <div className='fcol2'>
              <Rating name="rating" onChange={(e) => changeinput(e.target.name, e.target.value)} precision={0.5} />
            </div>
          </div>
          <button>Sumbit</button>
        </form>
      </div>

      <div className='some'>
        <h3>Related products</h3>
        <Sliderxy {...settings} className='lowerpro'>
          <div className='products'>
            <div className='proimg'>
              <img src='https://www.jiomart.com/images/product/original/490830947/tata-sampann-high-protein-unpolished-chilka-moong-500-g-product-images-o490830947-p490830947-0-202203150526.jpg'></img>
              <div className='overly'>
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
          <div className='products'>
            <div className='proimg'>
              <img src='https://5.imimg.com/data5/NO/OU/DI/SELLER-69094599/banana-chips-packaging-pouch-500x500.jpg'></img>
              <div className='overly'>
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
          <div className='products'>
            <div className='proimg'>
              <img src='https://www.jiomart.com/images/product/original/491019524/daawat-rozana-super-basmati-rice-5-kg-product-images-o491019524-p491019524-0-202203171025.jpg'></img>
              <div className='overly'>
              </div>
            </div>
            <div className='info'>
              <span className='cat'>Daawat</span>
              <h4 className='title'><Link>Daawat Rozana Super Basmati Broken Rice 5 kg</Link></h4>
              <div className='rate'>
                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                <span className='brand'>By<Link>Daawat</Link></span>
              </div>
              <div className='last'>
                <div className='price'>
                  <span className='new'>$100</span>
                  <span className='old'>$130</span>
                </div>
                <div className='add'>
                  <button><img src={cart}></img>Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='products'>
            <div className='proimg'>
              <img src='https://www.jiomart.com/images/product/original/494267984/tecno-pop-7-pro-64-gb-2-gb-black-smartphone-digital-o494267984-p605156024-0-202309292014.jpeg'></img>
              <div className='overly'>
              </div>
            </div>
            <div className='info'>
              <span className='cat'>Tecno</span>
              <h4 className='title'><Link>Tecno Pop 7 Pro 64 GB, 2 GB, Black, Smartphone</Link></h4>
              <div className='rate'>
                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                <span className='brand'>By<Link>Tecno</Link></span>
              </div>
              <div className='last'>
                <div className='price'>
                  <span className='new'>$5,555</span>
                  <span className='old'>$7,999</span>
                </div>
                <div className='add'>
                  <button><img src={cart}></img>Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='products'>
            <div className='proimg'>
              <img src='https://www.jiomart.com/images/product/original/rvqxs1lbdt/poco-m6-pro-5g-6gb-ram-128gb-rom-power-black-smartphone-product-images-orvqxs1lbdt-p604649284-0-202309191411.jpg'></img>
              <div className='overly'>
              </div>
            </div>
            <div className='info'>
              <span className='cat'>POCO</span>
              <h4 className='title'><Link>POCO M6 Pro 5G, 6GB RAM, 128GB ROM, Power Black, Smartphone</Link></h4>
              <div className='rate'>
                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                <span className='brand'>By<Link>POCO</Link></span>
              </div>
              <div className='last'>
                <div className='price'>
                  <span className='new'>$12,199</span>
                  <span className='old'>$16,999</span>
                </div>
                <div className='add'>
                  <button><img src={cart}></img>Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='products'>
            <div className='proimg'>
              <img src='https://www.jiomart.com/images/product/original/492796557/oneplus-108-cm-43-inch-full-hd-android-smart-led-tv-with-dolby-audio-surround-sound-technology-43y1s-edge-digital-o492796557-p591054038-0-202202221339.jpeg'></img>
              <div className='overly'>
              </div>
            </div>
            <div className='info'>
              <span className='cat'>One Plus</span>
              <h4 className='title'><Link>OnePlus 108 cm (43 inch) Full HD Android Smart LED TV with Dolby Audio Surround Sound Technology, 43Y1S Edge</Link></h4>
              <div className='rate'>
                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                <span className='brand'>By<Link>One Plus</Link></span>
              </div>
              <div className='last'>
                <div className='price'>
                  <span className='new'>$22,990</span>
                  <span className='old'>$33,999</span>
                </div>
                <div className='add'>
                  <button><img src={cart}></img>Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='products'>
            <div className='proimg'>
              <img src='https://frivery.in/wp-content/uploads/2021/11/Tata-Sampann-Urad-Dal-1Kg.png'></img>
              <div className='overly'>
              </div>
            </div>
            <div className='info'>
              <span className='cat'>Tata Sampann</span>
              <h4 className='title'><Link>This banana chips packaging pouch can be used to pack chips.</Link></h4>
              <div className='rate'>
                <Rating name="half-rating-read" defaultValue={4.2} precision={0.5} readOnly />
                <span className='brand'>By<Link>Tata Sampann</Link></span>
              </div>
              <div className='last'>
                <div className='price'>
                  <span className='new'>$699</span>
                  <span className='old'>$989</span>
                </div>
                <div className='add'>
                  <button><img src={cart}></img>Add</button>
                </div>
              </div>
            </div>
          </div>
        </Sliderxy>
      </div>

    </>
  )
}
