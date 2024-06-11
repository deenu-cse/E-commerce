import React from 'react'
import '../banners/banner.css'
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner3.jpg'
import banner4 from '../../images/banner4.jpg'

export default function Banner() {
  return (
    <div className='banner'>
      <div className='row'>
        <div className='bimg'>
          <img src={banner1}></img>
        </div>
        <div className='bimg'>
          <img src={banner2}></img>
        </div>
        <div className='bimg'>
          <img src={banner3}></img>
        </div>
      </div>
    </div>
  )
}
