import React from 'react'
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
import Patti from '../../components/patti.json'
import Footer from '../../components/footer/footer'
import name from '../../components/name.json'


export default function Home() {
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
                <Catslide />
              </div>
              <div className='items'>
                <Catslide />
              </div>
              <div className='items'>
                <Catslide />
              </div>
              <div className='items'>
                <Catslide />
              </div>
              <div className='items'>
                <Catslide />
              </div>
              <div className='items'>
                <Catslide />
              </div>
              <div className='items'>
                <Catslide />
              </div>
              <div className='items'>
                <Catslide />
              </div>
              <div className='items'>
                <Catslide />
              </div>
              <div className='items'>
                <Catslide />
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
                <Catslide />
                <Catslide />
                <Catslide />
                <Catslide />
                <Catslide />
                <Catslide />
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
          <Footer />
        </div>
      </div>
    </div>
  )
}
