import React, {useDebugValue, useEffect, useState} from "react";
import MessagePopUp from "../message-popup";
import "./style.css";
import $ from "jquery";
import {useDispatch, useSelector} from "react-redux";
import ChatInput from "../chat-input";
import {scrollToBottom} from "../../helper/functions";

const ChatBox = () => {
    const selectedContact = useSelector(state => state.selectedContact);
    const historyMessages = useSelector(state => state.chatLog);
    const newMessage = useSelector(state => state.newMessage);
    const strophe = useSelector(state => state.strophe);
    const rosterStatus = useSelector(state => state.rosterStatus);
    const $iq = useSelector(state => state.$iq);
    const connection = useSelector(state => state.connection);
    const [recMessages, setRecMessages] = useState({item: []});
    const [messageText, changeMessageText] = useState({txt: ''});
    const [lastActivity, setLastActivity] = useState({from: '', time: ''});
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);
    const [inputVal, clearInputVal] = useState('');

    const [messageList, setMessageList] = useState({item: []});


    useEffect(() => {
        getLog();
    }, [selectedContact]);

    const getLog = () => {
        let mySentMessages,
            myRecMessages,
            recHistory = [],
            sentHistory = [];

        connection.mam.query(connection.jid.split("/", 1)[0], {
            with: selectedContact,
            onMessage: function (message) {
                console.log("mam");
                $(message).each(function () {

                    if (
                        $(this)
                            .find("forwarded message")
                            .attr("from")
                            .split("/", 1)[0] === selectedContact
                    ) {
                        myRecMessages = {
                            text: $(this)
                                .find("forwarded message body")
                                .text(),
                            stamp: $(this)
                                .find("delay")
                                .attr("stamp"),
                            type: "rec"
                        };
                        recHistory = messageList.item;
                        recHistory.push(myRecMessages);
                        setMessageList({...messageList, item: recHistory});
                    } else if (
                        $(this)
                            .find("forwarded message")
                            .attr("to")
                            .split("/", 1)[0] === selectedContact
                    ) {
                        mySentMessages = {
                            text: $(this)
                                .find("forwarded message body")
                                .text(),
                            stamp: $(this)
                                .find("delay")
                                .attr("stamp"),
                            type: "sent"
                        };
                        sentHistory = messageList.item;
                        sentHistory.push(mySentMessages);
                        setMessageList({...messageList, item: sentHistory});
                    }


                });

                dispatch({historyMessages: sentHistory, type: "FETCH_HISTORY_MESSAGES"});

                return true;
            },
            onComplete: function (response) {
                scrollToBottom();

            }
        });
    };

    useEffect(() => {
        scrollToBottom();

    }, [historyMessages])


    /*----------------RECENT ACTIVITY------------------*/
    const onLastActivity = (iq) => {

        let from = $(iq).attr("from"); // the jabber_id of the contact\+
        let lastActivityObj;
        let errorType = $(iq).attr('type');
        $(iq).find("query").each(function () {

            if (errorType === "result") {
                let lastActivityTime = $(iq).find("query").attr('seconds');
                lastActivityObj = {
                    from: from,
                    time: lastActivityTime,
                    type: errorType,
                    errorMessage: null
                };
                setLastActivity({
                    ...lastActivity, from: lastActivityObj.from,
                    time: lastActivityObj.time,
                    type: lastActivityObj.type,
                    errorMessage: lastActivityObj.errorMessage
                });
            }
            if (errorType === "error") {
                let errorMessage = $(iq).find("text").text();
                lastActivityObj = {
                    from: from,
                    time: null,
                    type: errorType,
                    errorMessage: errorMessage
                };
                setLastActivity({
                    ...lastActivity,
                    from: lastActivityObj.from,
                    time: lastActivityObj.time,
                    type: lastActivityObj.type,
                    errorMessage: lastActivityObj.errorMessage
                });

            }

        });
        return true

    };
    const getLastActivity = () => {
        const iq = $iq({
            type: "get",
            from: connection.jid,
            to: selectedContact,
            id: "last1"
        }).c("query", {xmlns: "jabber:iq:last"});
        connection.sendIQ(iq);
        connection.addHandler(onLastActivity, null, "iq", null, null, null);
    };
    useEffect(() => {
        getLastActivity();
    }, [selectedContact]);

    useEffect(() => {
        getLastActivity();
    }, [rosterStatus]);

    useEffect(() => {
        console.log('*****************************************')
        setMessageList({
            ...messageList,
            item: historyMessages
        })

    }, [newMessage]);

    const onInputChange = (event) => {
        changeMessageText({
            ...messageText,
            txt: event.target.value
        })
        clearInputVal({
            ...inputVal,
            txt: event.target.value
        })
    };
    const onMessageSend = () => {
        clearInputVal({txt: ''})
    };
    const renderList = () => {
        return (
            historyMessages.length > 0 ? historyMessages.map((item, i) => {
                return (
                    <MessagePopUp
                        key={i}
                        sentMsg={item.text}
                        type={item.type}
                    />
                );
            }) : null
        )
    };
    return (
        <React.Fragment>
            <div className="userInfo-bar">
                <p className="userId">{selectedContact}</p>
                <p>{lastActivity.type === "error" ? "Last seen recently" : lastActivity.time === "0" ? "online"
                    : lastActivity.time < 60 ? "last seen " + lastActivity.time + " seconds ago"
                        : Math.floor(lastActivity.time / 60) < 60 ? "last seen " + Math.floor(lastActivity.time / 60) + " minutes ago"
                            : Math.floor(lastActivity.time / 3600) < 24 ? "last seen " + Math.floor(lastActivity.time / 3600) + " hours ago"
                                : Math.floor(lastActivity.time / 86400) < 7 ? "last seen " + Math.floor(lastActivity.time / 86400) + " days ago" : "last seen over a week ago"
                }</p>
            </div>

            {/*<div className="search-bar">*/}
            {/*    <Search items={historyMessages}/>*/}
            {/*</div>*/}

            <div className="all-messages">
                <div className="archive">

                    {
                        renderList()
                    }
                </div>

            </div>

            <div className="textbox">
                <ChatInput messageText={messageText} onInputChange={onInputChange}/>
            </div>
        </React.Fragment>
    );
}


export default ChatBox;
