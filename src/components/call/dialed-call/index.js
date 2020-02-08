import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faBan} from "@fortawesome/free-solid-svg-icons";
import {myTime} from "../../helper/functions";

const DialledCalls = (props) => {
    const callType = useSelector(state => state.callType);
    const cdrsData = useSelector(state => state.cdrsData);
    const jalali = require('moment-jalaali');

    return (
        <React.Fragment>
            {
                cdrsData === undefined ? null : cdrsData.filter(i => i.direction === "inbound").map((item, i) => {
                    console.log(item)

                    return (
                        <div className="call-info" key={i}>
                            <div className="left-side">
                                 <span className="direction">
                                    {
                                        <FontAwesomeIcon color="green" icon={faArrowLeft}/>
                                    }
                               </span>
                                <div className="name">
                                    {item.callee_id_name + "(" + item.callee_id_number + ")"}
                                    <div className="duration">
                                        <span>Outgoing call, </span> {myTime(item.duration_seconds)}
                                    </div>
                                </div>
                            </div>
                            <div className="date">

                                {
                                    jalali.unix(item.unix_timestamp).format('jYYYY/jM/jD, HH:mm:ss')
                                }

                            </div>

                        </div>
                    )

                })
            }

        </React.Fragment>
    );

};


export default DialledCalls;
