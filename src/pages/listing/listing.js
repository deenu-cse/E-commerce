import React from 'react'
import '../../App.css'
import Sidebar from '../../components/sidebar/sidebar'
import Catslide from '../../components/catslider/Catslide'

export default function Listing() {
  return (
    <div className='listpage'>
      <div className='listcon'>
        <div className='brandcon'>
          <h1>Snack</h1>
        </div>


        <div className='leftside'>
          <div className='rowside'>
            <div className='colside'>
              <Sidebar />
            </div>
              
          </div>
        </div>
      </div>
    </div>
  )
}
