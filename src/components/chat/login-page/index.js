import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import $ from "jquery";

const LoginPage = () => {
    const connection = useSelector(state => state.connection);
    // const historyMessage = useSelector(state => state.history);
    const selectedContact = useSelector(state => state.selectedContact);

    const $pres = useSelector(state => state.$pres);
    const $iq = useSelector(state => state.$iq);
    const strophe = useSelector(state => state.strophe);
    const [jidValue, setJidValue] = useState('');
    const [passValue, setPassValue] = useState('');
    const [loginButton, changeLoginButton] = useState('connect');
    const dispatch = useDispatch();
    const [messageList, setMessageList] = useState({item: []});

    //strophe connection process
    const onConnect = (status) => {
        console.log("window.Strophe.Status", strophe.Status);
        if (status === strophe.Status.CONNECTING) {
            console.log("Strophe is connecting.");
        } else if (status === strophe.Status.CONNFAIL) {
            console.log("Strophe failed to connect.");
            setShowStatus(false)
        } else if (status === strophe.Status.AUTHENTICATING) {
            console.log("Strophe is AUTHENTICATING.");
        } else if (status === strophe.Status.AUTHFAIL) {
            console.log("Strophe is AUTHFAIL.");
            setShowStatus(false)
        } else if (status === strophe.Status.DISCONNECTING) {
            console.log("Strophe is disconnecting.");
        } else if (status === strophe.Status.DISCONNECTED) {
            console.log("Strophe is disconnected.");
            setShowStatus(false)
        } else if (status === strophe.Status.CONNECTED) {
            console.log("Strophe is connected.");
            setShowStatus(true)
            getRoster();
            sendPriority();

            console.log("jid", connection.jid)
            // connection.send($iq({type : "get", from: connection.jid , id: "profile1"}).c("profile",{xmlns: "urn:xmpp:tmp:profile"}))

            connection.send($iq({from: connection.jid, id: "v1", type: "get"}).c("vCard", {xmlns: "vcard-temp"}));
            connection.send($iq({
                from: connection.jid,
                id: "enable1",
                type: "set"
            }).c("enable", {xmlns: "urn:xmpp:carbons:2"}));

            connection.addHandler(onReceiveMessage, null, "message", null, null, null)

        }
    };
    const onReceiveMessage = (msg) => {
        let recMsg;
        let from = msg.getAttribute("from");
        let type = msg.getAttribute("type");
        let elems = msg.getElementsByTagName("body");
        if (type === "error") {
            alert("An error occured! ");
            return;
        }
        if (type === "chat") {
            let message = {
                from: from,
                message: elems[0].innerHTML,
                time: new Date(),
                type: "rec"
            };
            recMsg = {
                text: elems[0].innerHTML,
                stamp: new Date(),
                type: "rec"
            };
            dispatch({newMessages: recMsg, type: 'PUSH_HISTORY_MESSAGES'})

        }

        return true; //The handler should return true if it is to be invoked again; returning false will remove the handler after it returns
    };

    /*-----------------Get Contacts List (step1)----------------=*/
    //send xml to get contacts from xmpp server
    const getRoster = () => {
        const newIq = $iq({type: "get", id: "r1"})
            .c("query", {xmlns: "jabber:iq:roster"})
        connection.sendIQ(newIq, rosterReceived);
    };
    /*-----------------Get Contacts List (step1)----------------*/

    /*-----------------Received contacts (step2)----------------*/
    //how to use received rosters from xmpp server
    const rosterReceived = (iq) => {
        let contactJid,
            rosterName,
            myContacts = [];
        $(iq)
            .find("item")
            .each(function () {
                contactJid = $(this).attr("jid"); // The jabber_id of your contact
                if ($(this).attr("name")) {
                    rosterName = $(this).attr("name");
                } else {
                    rosterName = "";
                }
                // The jabber_id of your contact
                // You can probably put them in a unordered list and and use their jids as ids.
                myContacts = myContacts.concat({
                    name: rosterName,
                    jid: contactJid
                });
            });
        getContacts(myContacts);
    };

    /*-----------------/Received contacts (step2)----------------*/

    /*-----------------Set priority ----------------*/
    //set priority to specify the device
    const sendPriority = () => {
        connection.send(
            $pres()
                .c("priority")
                .t("10")
                .up()
                .c("rap", {xmlns: "urn:xmpp:rap:3", ns: "urn:xmpp:jingle:apps:rtp:0", num: '5'})
        );
        //send request for available features
        connection.sendIQ($iq({type: "get"})
            .c("query", {xmlns: "http://jabber.org/protocol/disco#info"}))
    };

    /*-----------------/Get priority ----------------*/
    /*---------------------------------*/
    //Show Or hide Main page.
    const setShowStatus = (showMainPage) => {
        dispatch({showMainPage, type: 'SHOW_MAIN_PAGE'})
    };
    /*---------------------------------*/


    /*---------------------------------*/
    //set received contacts from xmpp server to global state
    const getContacts = (contacts) => {
        dispatch({contacts, type: 'GET_CONTACTS'});
    };
    /*---------------------------------*/

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    };
    /*-----------------------------------*/
    //action for login form
    const handleChangeJID = (event) => {
        setJidValue(event.target.value)

    }
    const handleChangePass = (event) => {
        // console.log("passValue", event.target.value)
        setPassValue(event.target.value);
    };
    const handleSubmit = (event) => {

        event.preventDefault();
        if (jidValue === undefined || jidValue === "") {
            alert("Blank JID");
        } else if (passValue === undefined || passValue === "")
            alert("Empty pass, please type password");
        else {
            if (loginButton === "connect") {
                changeLoginButton("disconnect")
                connection.connect(
                    jidValue,
                    passValue,
                    onConnect
                );
            } else {
                connection.disconnect();
                changeLoginButton("connect")

            }
        }
    };
    /*-----------------------------------*/

    return (


        <React.Fragment>

            <div className="row">
                <div className="col">
                    <form>
                        <input
                            label="JID"
                            className="col-sm-2 col-form-label"
                            size="col-sm-10"
                            type="text"
                            placeholder="enter your JID..."
                            onChange={handleChangeJID}
                            onKeyDown={handleKeyDown}
                            value={jidValue}
                        />
                        <input
                            label="Password"
                            className="col-sm-2 col-form-label"
                            size="col-sm-10"
                            type="password"
                            placeholder="enter your password..."
                            onChange={handleChangePass}
                            onKeyDown={handleKeyDown}
                            value={passValue}
                        />

                        <button
                            type="submit"
                            className="btn btn-primary"
                            id="connect"
                            value={loginButton}
                            onClick={handleSubmit}
                        >{loginButton}</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}


export default LoginPage;
