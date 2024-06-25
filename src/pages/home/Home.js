import React, { useState } from 'react'
import HomeSlider from './slider/Slider'
import Catslide from '../../components/catslider/Catslide'
import '../../App.css'
import Banner from '../../components/banners/banner'
import '../home/Home.css'
import banner4 from '../../images/banner4.jpg'
import Slider from "react-slick"
import slid1 from '../../images/slider-1.png'
import slid2 from '../../images/slider-2.png'
import Top from '../../components/topproduct/top'
import bg from '../../images/newsletter.png'
import newani from '../../components/news.json'
import Lottie from 'lottie-react'
import Footer from '../../components/footer/footer'
import name from '../../components/name.json'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import cart from '../../images/icons8-cart-50.png'
import Nav from '../../components/header/nav/nav'
import Header from '../../components/header/header'


export default function Home() {


  const [searched, setsearched] = React.useState('')
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

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
  return (
    <div>
      <Header />
      <Nav onSelectCategory={handleCategorySelect} />
      <HomeSlider />
      <Banner />
      <section>
        <div className='homeproduct'>
          <div className='homecon'>
            <div className='tabs'>
              <h2 className='hd'>Popular Products</h2>
              <ul className='list'>
                <li>
                  <a>All</a>
                </li>
                <li>
                  <a>Peat Foods</a>
                </li>
                <li>
                  <a>Meats</a>
                </li>
                <li>
                  <a>Vegetables</a>
                </li>
                <li>
                  <a>Fruits</a>
                </li>
              </ul>
            </div>
            <div className='xproduct'>
              <div className='items'>
                <Catslide category={selectedCategory} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <div className='homeproduct'>
        <div className='homecon'>
          <div className='tabs'>
            <h2 className='hd'>Daily Best Sells</h2>
            <ul className='list'>
              <li>
                <a>Featured</a>
              </li>
              <li>
                <a>Popular</a>
              </li>
              <li>
                <a>New added</a>
              </li>
            </ul>
          </div>
          <br></br>
          <div className='bflex'>
            <div className='xslide'>
              <Slider {...settings} className='lowerpro'>
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
              </Slider>
            </div>
          </div>
          <section className='topproducts' >
            <div className='doflex'>
              <div className='coloum'>
                <Top title="Top Selling" />
              </div>
              <div className='coloum'>
                <Top title="Trending Product" />
              </div>
              <div className='coloum'>
                <Top title="Recently Added" />
              </div>
              <div className='coloum'>
                <Top title="Top Rated" />
              </div>
            </div>
          </section>
          <section className='news'>
            <div className='box'>
              <div className='newsinfo'>
                <Lottie animationData={newani} />
              </div>
              <div className='newsimg'>
                <img src={bg}></img>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
