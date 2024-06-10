import React, { useState } from 'react';
import '../droper/drop.css';
import category from './droperdata';

export default function Droper({ handledrop }) {
    const [input, setinput] = useState('');

    const handlehide = (e) => {
        e.stopPropagation();
    };

    const filterdata = category.filter((search) => (
        (input === '' || search.id.toLowerCase().includes(input.toLowerCase()))
    ));

    return (
        <div className='slectdrop'>
            <div className='dropsearch'>
                <input value={input} onClick={handlehide} type='text' placeholder='Search here...' onChange={(e) => setinput(e.target.value)} />
                <ul className='searchresult'>
                    {filterdata.map((v, i) => (
                        <li key={i} onClick={() => handledrop(v.id)} data-value={v.id}>{v.id}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
