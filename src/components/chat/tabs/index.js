import React from "react";
import "./style.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ContactsList from "../contacts-list";
import ChatPanel from "../chat-panel";
import {useSelector} from "react-redux";
import MainPage from "../../call/main-page";

const TabsSection = () => {
    const selectedContact = useSelector(state => state.selectedContact);

    return (
        <React.Fragment>
            <div className="tabs">
                <Tabs defaultActiveKey="Call Log" disabled={true}>
                    <Tab eventKey="Chat" className="chat-tab" title="پیام ها"  disabled={true}>

                        <ContactsList/>
                        {
                            selectedContact !== ''  ? <ChatPanel/> : <span className="default-text">Select a contact to start messaging...</span>
                        }

                    </Tab>
                    <Tab eventKey="Call Log" title="تماس ها"  >
                        <MainPage/>
                    </Tab>

                    <Tab eventKey="Missed Calls" title="مخاطبین" disabled={true}></Tab>
                </Tabs>
            </div>
        </React.Fragment>
    )
}


export default TabsSection;
