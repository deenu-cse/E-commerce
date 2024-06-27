import React from 'react'
import '../../components/topproduct/top.css'
import topimg from '../../images/thumbnail-1.jpg'
import topimg2 from '../../images/thumbnail-2.jpg'
import topimg3 from '../../images/thumbnail-3.jpg'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';



export default function Top(props) {
    return (
        <div className='box'>
            <h3 className='line'>{props.title}</h3>
            <div className='topitems'>
                <div className='topimg'>
                    <Link>
                        <img src='https://s7d5.scene7.com/is/image/CentralMarket/000901921-1?hei=124&wid=124&$large$&DefaultImage=1111111111'></img>
                    </Link>
                </div>
                <div className='topinfo'>
                    <Link to=''><h4>Nestle Orignal Coffee-Mate Coffee Creamer</h4></Link>
                    <Rating className='star' name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                    <div className='prices'>
                        <span className='news'>$20.85</span>
                        <span className='olds'>$28.32</span>
                    </div>
                </div>
            </div>
            <div className='topitems'>
                <div className='topimg'>
                    <Link>
                        <img src='https://homecrop.in/wp-content/uploads/2022/05/carrot-01.jpg'></img>
                    </Link>
                </div>
                <div className='topinfo'>
                    <Link to=''><h4>Buy Carrot Orange 500 g Online </h4></Link>
                    <Rating className='star' name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                    <div className='prices'>
                        <span className='news'>$26.85</span>
                        <span className='olds'>$38.32</span>
                    </div>
                </div>
            </div>
            <div className='topitems'>
                <div className='topimg'>
                    <Link>
                        <img src='https://shrayati.com/cdn/shop/products/05-ShrayatiTissueNapkins-1Ply-28x30cm_3_JPG.jpg?v=1634985654'></img>
                    </Link>
                </div>
                <div className='topinfo'>
                    <Link to=''><h4>Shrayati Tissue Paper Napkins</h4></Link>
                    <Rating className='star' name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                    <div className='prices'>
                        <span className='news'>$17.5</span>
                        <span className='olds'>$28.2</span>
                    </div>
                </div>
            </div>
            <div className='topitems'>
                <div className='topimg'>
                    <Link >
                        <img src='https://www.bigbasket.com/media/uploads/p/l/241600_7-tata-salt-iodized.jpg'></img>
                    </Link>
                </div>
                <div className='topinfo'>
                    <Link to=''><h4>Tata Salt Vacuum Evaporated Iodised Salt</h4></Link>
                    <Rating className='star' name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                    <div className='prices'>
                        <span className='news'>$7.95</span>
                        <span className='olds'>$14.32</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
