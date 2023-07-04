import React from 'react';
// import '../style/componentscss/Aitab.css';
// import Technology from '../Essential/Technology';
import Searchtab from '../Essential/Searchtab';
import '../style/componentscss/Ecommerce.css';
import Techaccordion from '../Essential/Techaccordion';

function Ecommerce({ Ecommerce_Span }) {
    return (
        <>
            <div className='Ecommerce_Body'>
                <div className='Ecommerce_Search'>
                    <Searchtab />
                </div>
                <div>
                    <h5 className='Ecommerce_Head'>Find in <span className='Ecommerce_Span'>{Ecommerce_Span}</span></h5>
                </div>
                <div className='Ecommerce_Content'>
                    <div>
                        <h4 className='Ecommerce_heading'>Technology</h4>
                    </div>
                    <div className='Ecommerce_Comp'>
                        <Techaccordion Tech_keyevent={'0'} Tech_Name={'3dcart'} />
                        <Techaccordion Tech_keyevent={'1'} Tech_Name={'Bigcommerce'} />
                        <Techaccordion Tech_keyevent={'2'} Tech_Name={'Cs-cart'} />
                        <Techaccordion Tech_keyevent={'3'} Tech_Name={'Magneto'} />
                        <Techaccordion Tech_keyevent={'4'} Tech_Name={'Shopify'} />
                        <Techaccordion Tech_keyevent={'5'} Tech_Name={'Volusion'} />
                        <Techaccordion Tech_keyevent={'6'} Tech_Name={'Woocommerce'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ecommerce;