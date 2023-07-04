import React from 'react';
import '../style/Essentialcss/Technology.css';
import Techaccordion from './Techaccordion';
// import Accord from '../components/Accord';

function Webtechnology() {
    return (
        <>
            <div className='Tech_Body'>
                <div className='Tech_Width'>
                    <h4 className='Tech_Head'>Technology</h4>
                </div>
                <div className='Tech_defaultdiv'>
                    {/* <Accord /> */}
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Ajax'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Angular-js'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'C-sharp'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Cakephp'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Codeigniter'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Django'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Drupal'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Golang'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Java'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Java-script'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Joomla'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Laravel'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Net'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Nodejs'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Php'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Python'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Reactjs'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Ruby-on-rails'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Scala'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Sitecore'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Symfony'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Wordpress'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Yii'} />
                    <Techaccordion Tech_keyevent={''} Tech_Name={'Zend'} />
                </div>
            </div>
        </>
    )
}

export default Webtechnology;