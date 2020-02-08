import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {scrollToBottom} from "../../helper/functions";

const ChatInput = (props) => {
    const dispatch = useDispatch();
    const $msg = useSelector(state => state.$msg);
    const selectedContact = useSelector(state => state.selectedContact);
    const connection = useSelector(state => state.connection);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        let txtJID = selectedContact,
            txtMsg = props.messageText.txt,
            message,
            sents = [];

        if (txtMsg === undefined || txtMsg === "")
            alert("Empty Message, please type something");
        else {
            let reply = $msg({
                to: txtJID,
                from: connection.jid,
                type: "chat",
                id: "message-1"
            })
                .c("body")
                .t(txtMsg);
            connection.send(reply.tree());

            message = {
                to: txtJID,
                message: txtMsg,
                time: new Date(),
                type: "sent"
            };
            let newMsg = {
                text: txtMsg,
                stamp: new Date(),
                type: "sent"
            };
            const inputVal = document.getElementById("msg-here")
            console.log(inputVal);
            inputVal.value = '';
            const text = message.message;
            dispatch({newMessage: text, type: 'GET_NEW_MESSAGE'})
            dispatch({newMessages: newMsg, type: 'PUSH_HISTORY_MESSAGES'});
        }

    };

    return (
        <React.Fragment>
            <form className="input-group mb-3">
                <input
                    type="text"
                    id="msg-here"
                    className="form-control"
                    placeholder="Message here..."
                    rows="4"
                    value={props.messageText.txt}
                    onChange={props.onInputChange}
                    onKeyDown={handleKeyDown}

                />
                <div className="input-group-append">

                    <button
                        type="button"
                        value="send"
                        className="btn btn-outline-secondary"
                        id="sendButton"
                        onClick={handleSubmit}
                        onKeyDown={handleKeyDown}

                    >send
                    </button>
                </div>

            </form>
        </React.Fragment>
    )
};

export default ChatInput;
