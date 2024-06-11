import React from 'react'
import HomeSlider from './slider/Slider'
import Catslide from '../../components/catslider/Catslide'
import '../../App.css'
import Banner from '../../components/banners/banner'
import '../home/Home.css'

export default function Home() {
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
                  <a>Coffas & Teas</a>
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
    </div>
  )
}
