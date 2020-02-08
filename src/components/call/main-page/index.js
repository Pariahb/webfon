import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import Modal from "../../modal";
import MakeCall from "../make-call";
import Device from "../Device";
import CallHistoryDetail from "../call-history-detail";
import Extension from "../extension";
import GroupedLog from "../grouped-log";
import styles from "./call_page.module.css"

const MainPage = () => {
    const loading = useSelector(state => state.loadingStatus);
    const showMainPage = useSelector(state => state.showMainPage);
    const [loadingStatus, setLoadingStatus] = useState(true);
    const callFlowsData = useSelector(state => state.callFlowsData);
    const showLogDetailPage = useSelector(state => state.showLogDetailPage);
    const dispatch = useDispatch();


    const setChangePassStatus = (showChangePasswordPage) => {
        dispatch({showChangePasswordPage, type: 'SHOW_CHANGE_PASS_PAGE'})
    };
    const handleChangePassPage = () => {
        setShowCallApp(false);
        setChangePassStatus(true);

    };
    //Show Or hide Main page.
    const setShowCallApp = (showPage) => {
        dispatch({showPage, type: 'SHOW_CALL_PAGE'})
    };
    const delete_cookie = function (name) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };
    const handleSubmit = () => {
        delete_cookie("monster_token");
        setShowCallApp(false)
    };
    useEffect(() => {
        setLoadingStatus(false);
        dispatch({loadingStatus, type: "SET_LOADING_STATUS"});
    }, [callFlowsData]);

    return (

        <React.Fragment>
            <div className="col-sm-12">
                <p className={styles.tabTitle}>تاریخچه تماس ها</p>
                <div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        id="connect"
                        value="Logout"
                        onClick={handleSubmit}
                    >Log out From Kazoo
                    </button>
                    <button type="submit" className="btn btn-primary"
                            onClick={handleChangePassPage}>Change Password
                    </button>
                    <div>
                        <Device/>
                        <Extension/>
                    </div>
                </div>
                {/*<div><Modal/></div>*/}
                {/*<div><MakeCall/></div>*/}
                <div className={styles.history}>
                    <div className={styles.logs}>{
                        loading ?
                            <div className={styles.spinner}>
                                <FontAwesomeIcon className="fas fa-spinner fa-spin" icon={faSpinner}/>
                            </div> :
                            <div className={styles.groups}>
                                <GroupedLog/>
                            </div>
                    }</div>
                    <div className={styles.detail}>
                        {showLogDetailPage ? <CallHistoryDetail/> : null}

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};


export default MainPage;
