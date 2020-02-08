import React from "react";
import ChatBox from "../chat-box";
import "./style.css";
import {useSelector} from "react-redux";

const ChatPanel = () => {
    const contacts = useSelector(state => state.contacts);
    const selectedContact = useSelector(state => state.selectedContact);
    return (
        <React.Fragment>
            {contacts.map((item, i) => {
                return item.jid === selectedContact ? (
                    <div key={i} className="col-sm-8 chat-panel" id={item.jid}>
                        <ChatBox/>
                    </div>
                ) : null;
            })}
        </React.Fragment>
    );
}


export default ChatPanel;
