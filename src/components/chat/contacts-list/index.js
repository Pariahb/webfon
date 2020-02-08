import React, {useEffect} from "react";
import ContactItem from "../contact-item";
import "./style.css";
import {useDispatch, useSelector} from "react-redux";
import $ from "jquery";

const ContactsList = () => {
    const dispatch = useDispatch();
    const $iq = useSelector(state => state.$iq);
    const showMainPage = useSelector(state => state.showMainPage);
    const connection = useSelector(state => state.connection);
    const contacts = useSelector(state => state.contacts);
    const rosterStatus = useSelector(state => state.rosterStatus);
    /*----------get contact presence-----------*/
    //use presences from xmpp server
    const checkRedux = (item) => {
        const finedItem = rosterStatus.filter(i => i.id === item.id)[0]
        if (finedItem) return true;
        else return false
    };
    const onPresence = (presence) => {

        $(presence).each(function () {

                let from = $(presence).attr("from"); // the jabber_id of the contact\+
                let rosterStatusItem = {
                    id: from.split("/", 1)[0],
                    status: "",
                    time: null
                };

                if (from !== connection.jid) {
                    let presence_type = $(presence).attr("type"); // unavailable, subscribed, etc...
                    if (!presence_type) {
                        let show = $(presence)
                            .find("show")
                            .text(); // this is what gives away, dnd, etc.
                        if (!show) {
                            if (presence_type === "unavailable") {
                                rosterStatusItem.status = "xa";
                                if (checkRedux(rosterStatusItem) === true) {
                                    dispatch({rosterStatusItem, type: "CHANGE_EACH_ROSTER_STATUS"});
                                } else {
                                    dispatch({rosterStatusItem, type: "PUSH_ROSTER_STATUS_ITEM"});
                                }
                            } else {
                                rosterStatusItem.status = "chat";
                                if (checkRedux(rosterStatusItem) === true) {
                                    dispatch({rosterStatusItem, type: "CHANGE_EACH_ROSTER_STATUS"});
                                } else {
                                    dispatch({rosterStatusItem, type: "PUSH_ROSTER_STATUS_ITEM"});
                                }

                            }
                        } else {
                            switch (show) {
                                case "chat" :
                                    rosterStatusItem.status = "chat";
                                    if (checkRedux(rosterStatusItem) === true) {
                                        dispatch({rosterStatusItem, type: "CHANGE_EACH_ROSTER_STATUS"});

                                    } else {
                                        dispatch({rosterStatusItem, type: "PUSH_ROSTER_STATUS_ITEM"});
                                    }
                                    break;
                                case "away" :
                                    rosterStatusItem.status = "away";

                                    if (checkRedux(rosterStatusItem) === true) {
                                        dispatch({rosterStatusItem, type: "CHANGE_EACH_ROSTER_STATUS"});
                                    } else {
                                        dispatch({rosterStatusItem, type: "PUSH_ROSTER_STATUS_ITEM"});
                                    }
                                    break;
                                case "dnd":
                                    rosterStatusItem.status = "dnd";
                                    if (checkRedux(rosterStatusItem) === true) {
                                        dispatch({rosterStatusItem, type: "CHANGE_EACH_ROSTER_STATUS"});
                                    } else {
                                        dispatch({rosterStatusItem, type: "PUSH_ROSTER_STATUS_ITEM"});
                                    }
                                    break;
                                case "xa":
                                    rosterStatusItem.status = "xa";
                                    if (checkRedux(rosterStatusItem) === true) {
                                        dispatch({rosterStatusItem, type: "CHANGE_EACH_ROSTER_STATUS"});

                                    } else {
                                        dispatch({rosterStatusItem, type: "PUSH_ROSTER_STATUS_ITEM"});

                                    }

                                    break;
                                default :
                                    rosterStatusItem.status = "chat";
                                    dispatch({rosterStatusItem, type: "CHANGE_EACH_ROSTER_STATUS"});

                            }
                        }

                    }
                }

            }
        );
        return true; //The handler should return true if it is to be invoked again; returning false will remove the handler after it returns
    };
    /*---------------------------------*/
    const getSearchResult = () => {
        connection.send($iq({
            type: "set",
            id: "search1",
            from: connection.jid,
            to: "vjud.ejabberd"
        }).c("query", {xmlns: "jabber:iq:search"}).c("x", {
            xmlns: "jabber:x:data",
            type: "submit"
        }).c("nick").t("salam").up().c("set",{xmlns: "http://jabber.org/protocol/rsm"}).up().c("max").t("10"))
    };
    /*---------------------------------*/
    useEffect(() => {
        connection.addHandler(
            onPresence,
            null,
            "presence",
            null,
            null,
            null
        );
    }, [showMainPage]);
    /*----------get contact presence-----------*/
    return (
        <React.Fragment>

            <div className="col-sm-4 contacts">
                {/*<div className="header">*/}
                {/*    <p>لیست پیام ها</p>*/}
                {/*</div>*/}
                {contacts.map((item, i) => {
                    // Return the element. Also pass key
                    return (

                        <ContactItem
                            key={i}
                            item={item}
                        />

                    );
                })}

            </div>
        </React.Fragment>
    );
}


export default ContactsList;
