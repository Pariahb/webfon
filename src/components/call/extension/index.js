import React from "react";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";

const Extension = () => {
    const callFlowsData = useSelector(state => state.callFlowsData);
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Extentions
            </button>
            <div className="dropdown-menu" aria-labelledby="Devices">
                {
                    callFlowsData.item === undefined ? null
                        : (callFlowsData.item[0].data[0] !== undefined)
                        ? callFlowsData.item[0].data[0].numbers.map((item, i) => {

                            return (
                                <a key={i} className="dropdown-item" href="#">
                                    {item}</a>
                            )
                        }) : null
                }

            </div>
        </div>

    )

};


export default Extension;
