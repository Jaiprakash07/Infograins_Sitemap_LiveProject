import React, { useRef } from 'react';
import '../style/Essentialcss/Tabs.css';
import Mobiletab from '../components/Mobiletab';
import Webtab from '../components/Webtab';
import { Tab, Row, Col, Nav } from "react-bootstrap";
import Aitab from '../components/Aitab';
import Ecommerce from '../components/Ecommerce';
import Blogtab from '../components/Blogtab';
import { FaBars } from 'react-icons/fa';
import Sidebartab from '../components/Sidebartab';

function Tabs() {
    const Forward_Tabs = useRef(null);

    function Tabssidebar() {
        const Side_tab = document.querySelector('.Side_tab')
        Side_tab.classList.add('Side_tabbar');

        const Tabs_Dark = document.querySelector('.Tabs_Dark')
        Tabs_Dark.classList.add('Tabs_darker');
    }
    return (
        <>
            <div className='Main_Tab'>
                <div className='Tabs_Body'>
                    <div className='Tabs_Bars'>
                        <span className='Tabs_Sidebar' onClick={Tabssidebar}><FaBars /></span>
                        {/* <div>
                            <Sidebartab />
                        </div>
                        <div ref={Forward_Tabs} className='Tabs_Dark'></div> */}
                    {/* </div> */}
                    {/* <div> */}
                        <h1 className='Tabs_Head'>Browse All Services</h1>
                    </div>
                    <div className='Tabs_Content'>
                        <Tab.Container id="left-tabs-example" className='Tabs_listbody' defaultActiveKey="first">
                            <Row className='Tabs_Row'>
                                <div className='Mobile_View'>
                                    <Sidebartab />
                                </div>
                                <div ref={Forward_Tabs} className='Tabs_Dark Mobile_View'></div>
                                <Col className='Tabs_Colone'>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item className='Tabss'>
                                            <Nav.Link eventKey="first" className='Tabs_lists'>Mobile App Development</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='Tabss'>
                                            <Nav.Link eventKey="second" className='Tabs_lists'>Web Development</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='Tabss'>
                                            <Nav.Link eventKey="third" className='Tabs_lists'>Ai Development</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='Tabss'>
                                            <Nav.Link eventKey="fourth" className='Tabs_lists'>Blockchain Development</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='Tabss'>
                                            <Nav.Link eventKey="fifth" className='Tabs_lists'>E-commerce Development</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='Tabss'>
                                            <Nav.Link eventKey="sixth" className='Tabs_lists'>Iot Development</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='Tabss'>
                                            <Nav.Link eventKey="seventh" className='Tabs_lists'>Software Development</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='Tabss'>
                                            <Nav.Link eventKey="eighth" className='Tabs_lists'>Cryptocurrency Development</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='Tabss'>
                                            <Nav.Link eventKey="ninth" className='Tabs_lists'>NFT Development</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='Tabss'>
                                            <Nav.Link eventKey="tenth" className='Tabs_lists'>Metaverse Development</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='Tabss'>
                                            <Nav.Link eventKey="eleventh" className='Tabs_lists'>Saleforce</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='Tabss'>
                                            <Nav.Link eventKey="twelfth" className='Tabs_lists'>Blog</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col className='Tabs_Coltwo'>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first"><Mobiletab Mobile_App={'Mobile App Development'} /></Tab.Pane>
                                        <Tab.Pane eventKey="second"><Webtab Mobile_App={'Web Development'} /></Tab.Pane>
                                        <Tab.Pane eventKey="third"><Aitab Ai_Span={'Ai development'} /></Tab.Pane>
                                        <Tab.Pane eventKey="fourth"><Aitab Ai_Span={'Blockchain Development'} /></Tab.Pane>
                                        <Tab.Pane eventKey="fifth"><Ecommerce Ecommerce_Span={'E-commerce Development'} /></Tab.Pane>
                                        <Tab.Pane eventKey="sixth"><Aitab Ai_Span={'Iot Development'} /></Tab.Pane>
                                        <Tab.Pane eventKey="seventh"><Aitab Ai_Span={'Software Development'} /></Tab.Pane>
                                        <Tab.Pane eventKey="eighth"><Aitab Ai_Span={'Cryptocurrency Development'} /></Tab.Pane>
                                        <Tab.Pane eventKey="ninth"><Aitab Ai_Span={'NFT Development'} /></Tab.Pane>
                                        <Tab.Pane eventKey="tenth"><Aitab Ai_Span={'Metaverse Development'} /></Tab.Pane>
                                        <Tab.Pane eventKey="eleventh"><Aitab Ai_Span={'Salesforce Development'} /></Tab.Pane>
                                        <Tab.Pane eventKey="twelfth"><Blogtab Blog_Span={'Blog Development'} /></Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tabs;