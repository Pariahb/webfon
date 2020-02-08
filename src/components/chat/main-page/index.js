import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import LoginPage from "../login-page";
import TabsSection from "../tabs";
import StatusDetector from "../status-detector";
import DropDownMenu from "../drop-down-menu";
import KazooLogin from "../../call/login";
import ChangePassword from "../../call/change-password-form";
import LeftNav from "../tabs/left-nav";
import "./style.css"

const MainPage = () => {
    const showChangePassPage = useSelector(state => state.showChangePasswordPage);
    const showMainPage = useSelector(state => state.showMainPage);
    const showCallPage = useSelector(state => state.showCallPage);
    const connection = useSelector(state => state.connection);
    const [showPage, setShowPage] = useState(showMainPage);
    const dispatch = useDispatch();

    /*-----------------Log Out Button action----------------=*/
    const handleDisconnect = () => {
        connection.disconnect();
    };

    /*-----------------/Log Out Button action----------------*/

    useEffect(() => {
        setShowPage(showMainPage)
    }, [showMainPage]);


    useEffect(() => {
        setShowPage(showCallPage);
    }, [showCallPage]);

    const changeLang = (languageStatus) => {
        dispatch({languageStatus, type: "LANGUAGE_STATUS"})
    };
    /*----------response to subscription request-----------*/
    // const onSubscriptionRequest = (stanza) => {
    //     this.setState({
    //         showPopUp: true
    //     })
    //     if (stanza.getAttribute("type") === "subscribe") {
    //         // Send a 'subscribed' notification back to accept the incoming
    //         // subscription request
    //         connection.send($pres({to: stanza.getAttribute("from"), type: "subscribed"}));
    //     }
    //     return true;
    // }

    /*----------/response to subscription request-----------*/
    const changeLanguage = (e) => {
        let lang = e.target.textContent;
        console.log("lang", lang)
        changeLang(lang)
    };

    return (
        <React.Fragment>
            <div className="container">
                <div>
                    <button onClick={changeLanguage} type="button">Fa</button>
                    <button onClick={changeLanguage}  type="button">En</button>
                </div>

                {showPage ? <div className="col-sm-12 main-page">
                        {/*<button*/}
                        {/*    type="button"*/}
                        {/*    value="logout"*/}
                        {/*    className="btn-sm btn-danger logout"*/}
                        {/*    id="logout"*/}
                        {/*    onClick={handleDisconnect}*/}
                        {/*>Log out*/}
                        {/*</button>*/}
                        {/*<div className="mystatus">*/}
                        {/*    <DropDownMenu/>*/}
                        {/*    <StatusDetector/>*/}
                        {/*</div>*/}
                        {/*<TabsSection/>*/}
                        <LeftNav/>

                    </div> :
                    showChangePassPage ? <ChangePassword/> : <KazooLogin/>
                }

            </div>
        </React.Fragment>
    );

}


export default MainPage;
