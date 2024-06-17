import React from 'react'
import '../../components/sidebar/sidebar.css'
import c1 from '../../images/category-1.svg'
import c2 from '../../images/category-2.svg'
import c3 from '../../images/category-3.svg'
import c4 from '../../images/category-4.svg'
import c5 from '../../images/category-5.svg'
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import limg from '../../images/banner-11.png'
import Lottie from 'lottie-react'
import wow from '../patti.json'
import Catslide from '../catslider/Catslide'



export default function Sidebar() {
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
            <div className='sidebar'>
                <div className='forflex'>
                    <div className='sidecard'>
                        <h3>Category</h3>
                        <div className='sideitem'>
                            <div className='carditem'>
                                <span><img src={c1}></img></span>
                                <h3>Milks & Dairies</h3>
                                <span className='round'>30</span>
                            </div>
                        </div>
                        <div className='sideitem'>
                            <div className='carditem'>
                                <span><img src={c2}></img></span>
                                <h3>Clothing</h3>
                                <span className='round'>30</span>
                            </div>
                        </div>
                        <div className='sideitem'>
                            <div className='carditem'>
                                <span><img src={c3}></img></span>
                                <h3>Pet Foods</h3>
                                <span className='round'>30</span>
                            </div>
                        </div>
                        <div className='sideitem'>
                            <div className='carditem'>
                                <span><img src={c4}></img></span>
                                <h3>Baking material</h3>
                                <span className='round'>30</span>
                            </div>
                        </div>
                        <div className='sideitem'>
                            <div className='carditem'>
                                <span><img src={c5}></img></span>
                                <h3>Fresh Fruit</h3>
                                <span className='round'>30</span>
                            </div>
                        </div>
                    </div>

                    <div className='sidecard'>
                        <h3>Fill by price</h3>
                        <Slider
                            min={0}
                            step={1}
                            max={1000}
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            color='success'
                        />

                        <div className='pflex'>
                            <span>From: <strong>${value[0]}</strong></span>
                            <span>Top: <strong>${value[1]}</strong></span>
                        </div>
                        <div className='filter'>
                            <h4>Colour</h4>
                            <ul>
                                <li> <Checkbox {...label} color='success' />Red (56)</li>
                                <li><Checkbox {...label} color='success' />Green (78)</li>
                                <li><Checkbox {...label} color='success' />Blue (54)</li>
                            </ul>
                        </div>
                        <div className='fbtn'>
                            <button>Fillter</button>
                        </div>
                    </div>
                    <br />
                    <div className='limg'>

                        <Lottie className='plz' animationData={wow}>
                        </Lottie>
                        <img src={limg}></img>
                    </div>
                </div>


                <div className='hoja'>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                    <div className='sahi'>
                        <Catslide />
                    </div>
                </div>
            </div>
        </>
    )
}
