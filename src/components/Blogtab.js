import React from 'react';
import '../style/componentscss/Blogtab.css';
import Bloglist from '../Essential/Bloglist';

function Blogtab({ Blog_Span }) {
    return (
        <>
            <div className='Blogtab_Body'>
                <div className='Blogtab_Tabnameheading'>
                    <h5 className='Blogtab_Tabspan'>Find in <span className='Blogtab_Nametab'>{Blog_Span}</span></h5>
                </div>
                <div className='Blogtab_Content'>
                    <div className='Blog_Firstwidth'>
                        <h4 className='Blogtab_heading'>Blogs</h4>
                    </div>
                    <div className='Blog_Width'>
                        <div className='Blogtab_Comp'><Bloglist /></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Blogtab;