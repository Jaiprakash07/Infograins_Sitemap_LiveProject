import React from 'react';
import '../style/Essentialcss/Technology.css';
import Accord from '../components/Accord';

function Technology() {
    return (
        <>
            <div className='Tech_Body'>
                <div className='Tech_Width'>
                    <h4 className='Tech_Head'>Technology</h4>
                </div>
                <div className='Tech_defaultdiv'>
                    <Accord />
                </div>
            </div>
        </>
    )
}

export default Technology;