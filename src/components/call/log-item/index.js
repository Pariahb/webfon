import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faBan} from "@fortawesome/free-solid-svg-icons";
import {myTime} from "../../helper/functions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import logAvatar from "../../../images/avatar.jpg";
import styles from "./log_item.module.css"

const LogItem = (props) => {
    const jalali = require('moment-jalaali');
    const moment = require('persian-date');
    const orgMoment = require('moment');
    const dispatch = useDispatch();

    const handleContactClick = (selectedLogContact) => {
        dispatch({selectedLogContact, type: "SET_SELECTED_LOG_CONTACT"});
        setShowDetailPage(true);
    };
    //Show Or hide setShowDetailPage.
    const setShowDetailPage = (showLogDetailPage) => {
        dispatch({showLogDetailPage, type: 'SHOW_LOG_DETAIL_PAGE'})
    };
    return (
        <React.Fragment>

            <div key={props.id} onClick={() => handleContactClick((props.item.direction === "inbound" ?
                props.item.to : props.item.from))} className={styles.data}>

                    <div>
                        <img className={styles.image} src={logAvatar} alt="avatar"/>

                    </div>
                    <div className={styles.name}>
                        {
                            props.item.direction === "inbound" ?
                                props.item.callee_id_name !== "" ? props.item.callee_id_name : props.item.to
                                : props.item.direction === "outbound" && props.item.hangup_cause !== "NO_ANSWER" ?
                                props.item.caller_id_name !== "" ? props.item.caller_id_name : props.item.from :
                                props.item.direction === "outbound" && props.item.hangup_cause === "NO_ANSWER" ?
                                    props.item.caller_id_name !== "" ? props.item.caller_id_name : props.item.from
                                    : null
                        }

                        ({props.item.count})

                        <div className={styles.duration}>
                         <span className={styles.direction}>
                            {
                                props.item.direction === "inbound" ?
                                    <FontAwesomeIcon color="orange" icon={faArrowRight}/> :
                                    props.item.direction === "outbound" && props.item.hangup_cause !== "NO_ANSWER" ?
                                        <FontAwesomeIcon color="green" icon={faArrowLeft}/> :
                                        props.item.direction === "outbound" && props.item.hangup_cause === "NO_ANSWER" ?
                                            <FontAwesomeIcon color="red" icon={faBan}/> : null
                            }
                        </span>
                            {
                                props.item.direction === "inbound" ?
                                    <span>Outgoing call, </span>
                                    :
                                    props.item.direction === "outbound" && props.item.hangup_cause !== "NO_ANSWER" ?
                                        <span>Incoming call, </span>
                                        :
                                        props.item.direction === "outbound" && props.item.hangup_cause === "NO_ANSWER" ?
                                            <span>Missed call, </span>
                                            : null

                            }
                            {myTime(props.item.duration_seconds)}
                        </div>
                    </div>

                {/*<div className="date">*/}

                {/*    {*/}
                {/*        jalali.unix(props.item.unix_timestamp).format('HH:mm:ss')*/}
                {/*    }*/}

                {/*</div>*/}
            </div>

        </React.Fragment>
    )
};


export default LogItem;
