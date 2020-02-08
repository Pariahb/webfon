import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faBan} from "@fortawesome/free-solid-svg-icons";
import {myTime} from "../../helper/functions";
import {useDispatch} from "react-redux";
import styles from "./h_detail_item.module.css"

const HistoryDetailLogs = (props) => {
    const jalali = require('moment-jalaali');
    const moment = require('persian-date');
    const orgMoment = require('moment');
    const dispatch = useDispatch();

    return (
        <React.Fragment>

            <div className={(props.item.direction === "inbound" ?
                props.item.to : props.item.from) + " " + styles.data} key={props.number}>

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
                <div className={styles.name}>
                    <div className={styles.date}>

                        {
                            jalali.unix(props.item.unix_timestamp).format('jYYYY/jM/jD')
                        }
                        {" , "}
                        {

                            jalali.unix(props.item.unix_timestamp).format('HH:mm:ss')
                        }


                    </div>

                    <div className={styles.duration}>

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

            </div>

        </React.Fragment>
    )
};


export default HistoryDetailLogs;
