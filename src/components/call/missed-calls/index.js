import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faBan} from "@fortawesome/free-solid-svg-icons";
import {myTime} from "../../helper/functions";

const MissedCall = (props) => {
    const callType = useSelector(state => state.callType);
    const cdrsData = useSelector(state => state.cdrsData);
    const jalali = require('moment-jalaali');

    return (
        <React.Fragment>
            {
                cdrsData === undefined ? null : cdrsData.filter(i => i.direction === "outbound" && i.hangup_cause === "NO_ANSWER").map((item, i) => {

                    return (

                        <div className="call-info" key={i}>
                            <div className="left-side">
                                 <span className="direction">
                                    {
                                        <FontAwesomeIcon color="red" icon={faBan}/>
                                    }
                               </span>
                                <div className="name">
                                    {item.caller_id_name + "(" + item.caller_id_number + ")"}
                                    <div className="duration">
                                        <span>Missed call, </span> {myTime(item.duration_seconds)}
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


export default MissedCall;
