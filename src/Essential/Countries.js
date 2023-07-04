import React from "react";
import '../style/Essentialcss/Countries.css';
import Couname from "./Couname";
import Coustates from "./Coustates";
import Coucities from "./Coucities";

function Countries() {
    return (
        <>
            <div className="Countries_Body">
                <div className="Countries_Coun">
                    <div className="Countries_Headwidth">
                        <h4 className="Countries_Head">Countries</h4>
                    </div>
                    <div className="Countries_Content">
                        <div className="nn"><Couname Couname_color={'null'}/></div>
                    </div>
                </div>
                <div className="Countries_States">
                    <div className="Countries_Headwidth">
                        <h4 className="Countries_Head">States</h4>
                    </div>
                    <div className="Countries_Content">
                        <div className="nn"><Coustates /></div>
                    </div>
                </div>
                <div className="Countries_Cities">
                    <div className="Countries_Headwidth">
                        <h4 className="Countries_Head">Cities</h4>
                    </div>
                    <div className="Countries_Content">
                        <div className="nn"><Coucities /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Countries;