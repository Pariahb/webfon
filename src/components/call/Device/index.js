import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import "./style.css"

const Device = (props) => {
    const devicesData = useSelector(state => state.devicesData);

    return (
        <React.Fragment>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Devices
                </button>
                <div className="dropdown-menu" aria-labelledby="Devices">
                    {
                        devicesData === undefined ? null : devicesData.map((item, i) => {

                            return (
                                <a key={i} className="dropdown-item" href="#">
                                        <span>{item.enabled ? <FontAwesomeIcon color="green" icon={faCheck}/> :
                                            <FontAwesomeIcon color="red" icon={faTimes}/>}
                                    </span>
                                    {item.name}</a>


                            )

                        })
                    }

                </div>
            </div>
        </React.Fragment>
    )
};
export default Device;