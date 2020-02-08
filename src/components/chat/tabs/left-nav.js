import React from "react";
import {useSelector} from "react-redux";
import avatarImage from "../../../images/avatar.jpg";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faComments} from "@fortawesome/free-solid-svg-icons/faComments";
import ContactsList from "../contacts-list";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ChatPanel from "../chat-panel";
import InnerMenu from "../../call/inner-menu";
import "./style.css";

const LeftNav = () => {
    const selectedContact = useSelector(state => state.selectedContact);

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-1 menu">
                    <div className="avatar">

                        <img alt="avatar" src={avatarImage}/>
                    </div>
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                         aria-orientation="vertical">

                        <a className="nav-link active" id="v-pills-call-tab" data-toggle="pill" href="#v-pills-call"
                           role="tab" aria-controls="v-pills-call" aria-selected="false">
                            <FontAwesomeIcon color="white" icon={faPhone}/>
                            <p>
                                تماس ها
                            </p>
                        </a>
                        <a className="nav-link" id="v-pills-chat-tab" data-toggle="pill" href="#v-pills-chat"
                           role="tab" aria-controls="v-pills-chat" aria-selected="true">
                            <FontAwesomeIcon color="white" icon={faComments}/>
                            <p>پیام ها</p>
                        </a>
                    </div>
                </div>
                <div className="col-11 tab-panel">

                    <div className="tab-content" id="v-pills-tabContent">

                        <div className="tab-pane fade show active" id="v-pills-call" role="tabpanel"
                             aria-labelledby="v-pills-call-tab">
                            <div className="col-12 inner-menu">
                                <InnerMenu/>
                            </div>

                        </div>
                        <div className="tab-pane fade " id="v-pills-chat" role="tabpanel"
                             aria-labelledby="v-pills-chat-tab">
                            <ContactsList/>
                            {
                                selectedContact !== '' ? <ChatPanel/> :
                                    <span className="default-text">Select a contact to start messaging...</span>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default LeftNav;
