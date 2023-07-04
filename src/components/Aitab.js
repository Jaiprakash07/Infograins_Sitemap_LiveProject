import React from 'react';
import Countries from '../Essential/Countries';
import '../style/componentscss/Aitab.css';

function Aitab({Ai_Span}) {
    return (
        <>
        <div className='Ai_Body'>
            <div>
                <h5 className='Ai_Head'>Find in <span className='Ai_Span'>{Ai_Span}</span></h5>
            </div>
            <div>
                <div className='Ai_Content'>
                    <Countries />
                </div>
            </div>
        </div>
        </>
    )
}

export default Aitab;