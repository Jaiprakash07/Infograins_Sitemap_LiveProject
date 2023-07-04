import React from 'react';
import Searchtab from '../Essential/Searchtab';
import '../style/componentscss/Mobiletab.css';
import Technology from '../Essential/Technology';
import Countries from '../Essential/Countries';

function Mobiletab({Mobile_App}) {
    return (
        <>
            <div className='Mobiletab_Body'>
                <div className='Mobiletab_Head'>
                    <div className='Mobiletab_Search'>
                        <Searchtab />
                    </div>
                    <div className='Mobiletab_Tabnameheading'>
                        <h5 className='Mobiletab_Tabspan'>Find in <span className='Mobiletab_Nametab'>{Mobile_App}</span></h5>
                    </div>
                </div>
                <div>
                    <ul className='Mobiletab_Unorder'>
                        <li className='Mobiletab_List'>
                            <div><Technology /></div>
                        </li>
                        <li className='Mobiletab_List'>
                            <div><Countries /></div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Mobiletab;