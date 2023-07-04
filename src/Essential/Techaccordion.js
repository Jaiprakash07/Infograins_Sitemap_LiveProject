import React from "react";
import { Accordion } from 'react-bootstrap';
import '../style/Essentialcss/Techaccordion.css';
import Couname from "./Couname";
import Coustates from "./Coustates";
import Coucities from "./Coucities";

function Techaccordion({ Tech_keyevent, Tech_Name, Tech_Hideacc }) {
    return (
        <>
            <div className="Tech_tech">
                <Accordion>
                    <Accordion.Item eventKey={Tech_keyevent} className="Tech_Acc">
                        <Accordion.Header className="Tech_Acchead">{Tech_Name}</Accordion.Header>
                        <Accordion.Body className="Tech_Accbody">
                            <div className={`Tech_Accinside ${Tech_Hideacc}`}>
                                <div className="Tech_Colwidth">
                                    <div>
                                        <h5 className="Tech_Accinsidehead">Countries</h5>
                                    </div>
                                    <div className="Tech_Acccountries">
                                        <Couname Couname_color={'Color'} />
                                    </div>
                                </div>
                                <div className="Tech_Colwidth">
                                    <div>
                                        <h5 className="Tech_Accinsidehead">State</h5>
                                    </div>
                                    <div className="Tech_Accstates">
                                        <Coustates Coustates_color={'Color'} />
                                    </div>
                                </div>
                                <div className="Tech_Colwidth">
                                    <div>
                                        <h5 className="Tech_Accinsidehead">Citites</h5>
                                    </div>
                                    <div className="Tech_Acccities">
                                        <Coucities Coucities_color={'Color'} />
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}

export default Techaccordion;