import React from "react";
import {useSelector, useDispatch} from "react-redux";
import avatarImage from "../../../images/avatar.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";
import HistoryDetailLogs from "../history-detail-logs";
import styles from "./h_detail.module.css"

const CallHistoryDetail = () => {
    const cdrsData = useSelector(state => state.cdrsData);
    const selectedLogContact = useSelector(state => state.selectedLogContact);
    const dispatch = useDispatch();

    const renderLogs = (group) => {
        return (
            Object
                .keys(group)
                .map((key, index) => (
                    <div className={styles.group} key={index}>
                        {group[key].map((item, i) => (
                            (item.direction === "inbound" ?
                                item.to : item.from) === selectedLogContact ?
                                <HistoryDetailLogs key={i} item={item}/> : null
                        ))}
                    </div>
                ))
        );
    };
    const closeDetail = () => {
        setShowDetailLog(false)
    };
    const setShowDetailLog = (showLogDetailPage) => {
        dispatch({showLogDetailPage, type: 'SHOW_LOG_DETAIL_PAGE'})
    };
    return (
        <React.Fragment>
                <FontAwesomeIcon onClick={closeDetail} icon={faWindowClose} color="#fff"/>
                <div className={styles.image}>
                    <img alt="avatar" src={avatarImage}/>
                </div>
                <div>
                    {selectedLogContact}
                </div>
                <div>
                    {
                        renderLogs(cdrsData)
                    }
                </div>
        </React.Fragment>
    )
};


export default CallHistoryDetail;
