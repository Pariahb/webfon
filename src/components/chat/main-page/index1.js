// import React from "react";
// import LoginPage from "../login-page";
// import TabsSection from "../tabs";
// import Button from "../button";
// import RadioButton from "../radio-button";
// import StatusDetector from "../status-detector";
// import $ from "jquery";
//
// // import "./style.css";
//
// class MainPage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             connection: new window.Strophe.Connection(
//                 "http://77.104.116.225:5280/http-bind"
//             ),
//             strophe: window.Strophe,
//             $iq: window.$iq,
//             $pres: window.$pres,
//             showMainPage: false,
//             contacts: [],
//             contactStatus: "",
//             iq: null,
//             jid: "",
//             contactJID: ""
//         };
//
//         this.onConnect = this.onConnect.bind(this);
//         this.getRoster = this.getRoster.bind(this);
//         this.rosterReceived = this.rosterReceived.bind(this);
//         this.handleDisconnect = this.handleDisconnect.bind(this);
//         this.onPresence = this.onPresence.bind(this);
//         this.onSubscriptionRequest = this.onSubscriptionRequest.bind(this);
//     }
//
//
//     //strophe connection process
//     onConnect(status) {
//         console.log("window.Strophe.Status", this.state.strophe.Status);
//         if (status === this.state.strophe.Status.CONNECTING) {
//             console.log("Strophe is connecting.");
//         } else if (status === this.state.strophe.Status.CONNFAIL) {
//             console.log("Strophe failed to connect.");
//             // $("#connect").get(0).value = "connect";
//         } else if (status === this.state.strophe.Status.AUTHENTICATING) {
//             console.log("Strophe is AUTHENTICATING.");
//         } else if (status === this.state.strophe.Status.AUTHFAIL) {
//             console.log("Strophe is AUTHFAIL.");
//             // $("#connect").get(0).value = "connect";
//         } else if (status === this.state.strophe.Status.DISCONNECTING) {
//             console.log("Strophe is disconnecting.");
//         } else if (status === this.state.strophe.Status.DISCONNECTED) {
//             console.log("Strophe is disconnected.");
//             // $("#connect").get(0).value = "connect";
//         } else if (status === this.state.strophe.Status.CONNECTED) {
//             console.log("Strophe is connected.");
//             this.setState({
//                 showMainPage: true,
//                 jid: this.state.connection.jid
//             });
//             this.getRoster();
//             this.sendPriority();
//
//         }
//     }
//
//     /*-----------------Log Out Button action----------------=*/
//     handleDisconnect() {
//         this.state.connection.disconnect();
//         this.setState({
//             showMainPage: false
//         });
//     }
//
//     /*-----------------/Log Out Button action----------------=*/
//
//     /*-----------------Get Contacts List (step1)----------------=*/
//     // getRoster() {
//     //     this.setState({
//     //         contacts: [],
//     //         iq: this.state
//     //             .$iq({type: "get", id: "r1"})
//     //             .c("query", {xmlns: "jabber:iq:roster"})
//     //     });
//     //     this.state.connection.sendIQ(this.state.iq, this.rosterReceived);
//     // }
//
//     /*-----------------Get Contacts List (step1)----------------*/
//
//     /*-----------------Get priority ----------------*/
//     // sendPriority() {
//     //     // let priority = $("#priority").get(0).value;
//     //     //var selectedPriority = parseInt(priority.options[priority.selectedIndex].value);
//     //     this.state.connection.send(
//     //         this.state.$pres()
//     //             .c("priority")
//     //             .t("10")
//     //             .up()
//     //             .c("rap", {xmlns: "urn:xmpp:rap:0", ns: "urn:xmpp:jingle:apps:rtp:0", num: '5'})
//     //     );
//     //     this.state.connection.sendIQ(this.state.$iq({type: "get"})
//     //         .c("query", {xmlns: "http://jabber.org/protocol/disco#info"}))
//     // }
//
//     /*-----------------Get priority ----------------*/
//
//     /*-----------------Received contacts Time (step2)----------------*/
//     // rosterReceived(iq) {
//     //     let jid;
//     //     let rosterName;
//     //     let mycontacts = [];
//     //     $(iq)
//     //         .find("item")
//     //         .each(function () {
//     //             jid = $(this).attr("jid"); // The jabber_id of your contact
//     //             if ($(this).attr("name")) {
//     //                 rosterName = $(this).attr("name");
//     //             } else {
//     //                 rosterName = "";
//     //             }
//     //             // The jabber_id of your contact
//     //             // You can probably put them in a unordered list and and use their jids as ids.
//     //             mycontacts = mycontacts.concat({
//     //                 name: rosterName,
//     //                 jid: jid
//     //             });
//     //         });
//     //
//     //     this.setState({
//     //         contacts: mycontacts
//     //     });
//     //     console.log("mycontacts", this.state.contacts)
//     //     this.state.connection.send(window.$pres());
//     //
//     //     this.state.connection.addHandler(
//     //         this.onPresence,
//     //         null,
//     //         "presence",
//     //         null,
//     //         null,
//     //         null
//     //     );
//     // }
//
//     /*-----------------Received contacts (step2)----------------*/
//
//
//     /*----------response to subscription request-----------*/
//     onSubscriptionRequest(stanza) {
//         this.setState({
//             showPopUp: true
//         })
//         if (stanza.getAttribute("type") === "subscribe") {
//             // Send a 'subscribed' notification back to accept the incoming
//             // subscription request
//             this.state.connection.send(window.$pres({to: stanza.getAttribute("from"), type: "subscribed"}));
//         }
//         return true;
//     }
//
//     /*----------/response to subscription request-----------*/
//
//     /*----------get contact presence-----------*/
//     // onPresence(presence) {
//     //     let presence_type = $(presence).attr("type"); // unavailable, subscribed, etc...
//     //     let from = $(presence).attr("from"); // the jabber_id of the contact
//     //
//     //     if (!presence_type) presence_type = "online";
//     //     if (presence_type !== "error") {
//     //         if (presence_type === "unavailable") {
//     //             // Mark contact as offline
//     //             this.setState({
//     //                 contactStatus: "offline"
//     //             });
//     //             console.log("contact as offline");
//     //
//     //         } else {
//     //             let show = $(presence)
//     //                 .find("show")
//     //                 .text(); // this is what gives away, dnd, etc.
//     //             if (show === "online") {
//     //                 // Mark contact as online
//     //                 console.log("contact as online");
//     //                 this.setState({
//     //                     contactStatus: "online"
//     //                 });
//     //             } else if (show === "away") {
//     //                 // etc...
//     //                 this.setState({
//     //                     contactStatus: "away"
//     //                 });
//     //             } else if (show === "dnd") {
//     //                 // etc...
//     //                 this.setState({
//     //                     contactStatus: "dnd"
//     //                 });
//     //             } else if (show === "invisible") {
//     //                 // etc...
//     //                 this.setState({
//     //                     contactStatus: "invisible"
//     //                 });
//     //             }
//     //         }
//     //     }
//     //
//     //
//     //     return true; //The handler should return true if it is to be invoked again; returning false will remove the handler after it returns
//     // }
//
//     /*----------get contact presence-----------*/
//
//     render() {
//         localStorage.setItem("id", "");
//
//         return (
//             <React.Fragment>
//                 <div className="container">
//                     {this.state.showMainPage ? (
//                         <React.Fragment>
//                             <div className="mystatus">
//                                 <RadioButton connection={this.state.connection} pres={this.state.$pres}
//                                 />
//                             </div>
//                             <div className="user-info">
//                                 <Button
//                                     type="button"
//                                     value="logout"
//                                     className="btn btn-primary"
//                                     id="logout"
//                                     onClick={this.handleDisconnect}
//                                 />
//                                 <StatusDetector/>
//                                 <p className="current-user">{this.state.jid.split("@", 1)}</p>
//                             </div>
//                             <TabsSection
//                                 contacts={this.state.contacts}
//                             />
//                         </React.Fragment>
//                     ) : (
//                         <LoginPage
//                             onConnect={this.onConnect}
//                             connection={this.state.connection}
//                         />
//                     )}
//                 </div>
//             </React.Fragment>
//         );
//     }
// }
//
// export default MainPage;
