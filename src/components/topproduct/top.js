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
                        <img src={topimg}></img>
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
                        <img src={topimg}></img>
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
                        <img src={topimg}></img>
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
                        <img src={topimg}></img>
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
        </div>
    )
}
