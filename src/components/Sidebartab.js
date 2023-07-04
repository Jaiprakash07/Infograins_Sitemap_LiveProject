import React from 'react';
import '../style/componentscss/Sidebartab.css';
import { Tab, Row, Col, Nav } from "react-bootstrap";


function Sidebartab() {
    console.log('sidde ')

    function Sideremove() {
        const Side_tab = document.querySelector('.Side_tab')
        Side_tab.classList.remove('Side_tabbar');

        const Tabs_Dark = document.querySelector('.Tabs_Dark')
        Tabs_Dark.classList.remove('Tabs_darker');
    }
    return (
        <>
            <div className='Side_tab'>
                <span className='Span_remove' onClick={Sideremove}>{"\u2715"}</span>
                <div className='Side_Style'>
                    {/* <Tab.Container id="left-tabs-example" className='Tabs_listbody' defaultActiveKey="first"> */}
                        {/* <Row className='Tabs_Row'> */}
                            <Col className='Tabs_Colone Tabset'>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item className='Tabss' onClick={Sideremove}>
                                        <Nav.Link eventKey="first" className='Tabs_lists'>Mobile App Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='Tabss' onClick={Sideremove}>
                                        <Nav.Link eventKey="second" className='Tabs_lists'>Web Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='Tabss' onClick={Sideremove}>
                                        <Nav.Link eventKey="third" className='Tabs_lists'>Ai Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='Tabss' onClick={Sideremove}>
                                        <Nav.Link eventKey="fourth" className='Tabs_lists'>Blockchain Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='Tabss' onClick={Sideremove}>
                                        <Nav.Link eventKey="fifth" className='Tabs_lists'>E-commerce Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='Tabss' onClick={Sideremove}>
                                        <Nav.Link eventKey="sixth" className='Tabs_lists'>Iot Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='Tabss' onClick={Sideremove}>
                                        <Nav.Link eventKey="seventh" className='Tabs_lists'>Software Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='Tabss' onClick={Sideremove}>
                                        <Nav.Link eventKey="eighth" className='Tabs_lists'>Cryptocurrency Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='Tabss' onClick={Sideremove}>
                                        <Nav.Link eventKey="ninth" className='Tabs_lists'>NFT Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='Tabss' onClick={Sideremove}>
                                        <Nav.Link eventKey="tenth" className='Tabs_lists'>Metaverse Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='Tabss' onClick={Sideremove}>
                                        <Nav.Link eventKey="eleventh" className='Tabs_lists'>Saleforce</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='Tabss' onClick={Sideremove}>
                                        <Nav.Link eventKey="twelfth" className='Tabs_lists'>Blog</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        {/* </Row> */}
                    {/* </Tab.Container> */}
                </div>
            </div>
        </>
    )
}

export default Sidebartab;