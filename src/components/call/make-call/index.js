import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faSpinner} from "@fortawesome/free-solid-svg-icons";

import "./style.css"

const MakeCall = () => {
    let JsSIP = require('jssip');

    const register = () => {
        console.log('Registering to SIP');
        console.log('JsSIP',JsSIP);
        JsSIP.debug.disable('JsSIP:*');
        // const address = GLOBAL.jssip_server + ':' + GLOBAL.jssip_port
        let socket = new JsSIP.WebSocketInterface('wss://docker.nexfon.ir');
        console.log("socket",socket)
        const configuration = {
            sockets: [socket],
            uri: '704@admin',
            authorization_user: '704',
            password: '704704',
            connection_recovery_min_interval: 3,
            register: true,
            display_name: "paria",
            realm: "admin"
        };
        let ua = new JsSIP.UA(configuration);
        ua.start();
        // cb(ua)
        socket.onconnect(function (){
            console.log("socket connected");

        });
        socket.ondisconnect(function (){
            console.log("socket connected");

        });
        ua.on("registered", function (e) {
            console.log("registered");
            console.log("err",JsSIP.REASON_PHRASE)

        });
        ua.on("unregistered", function (e) {
            console.log("registered")
            console.log("err",JsSIP.REASON_PHRASE)
        });
        ua.on('registrationFailed', function (e) {
            alert("registrationFailed");
            console.log("err",JsSIP.REASON_PHRASE)

        });

        /*------WebSocket connection events-----*/

        ua.on('connected', function (e) {
            console.log("connect")
            ua.call('sip:712@admin', options);

        });
        ua.on('connecting', function (e) {
            console.log("connecting");
            console.log("err",JsSIP.REASON_PHRASE);

        });
        ua.on('disconnected', function (e) {
            console.log("disconnected");
            console.log("err",JsSIP.REASON_PHRASE);

        });
        /*------WebSocket connection events-----*/

        // Register callbacks to desired call events
        let eventHandlers = {
            'progress': function (e) {
                console.log('call is in progress');
            },
            'failed': function (e) {
                console.log('call failed with cause: ' + e.data.cause);
            },
            'ended': function (e) {
                console.log('call ended with cause: ' + e.data.cause);
            },
            'confirmed': function (e) {
                console.log('call confirmed');
            }
        };

        let options = {
            'eventHandlers': eventHandlers,
            'mediaConstraints': {'audio': true, 'video': true}
        };

    };

    // const socket = new JsSIP.WebSocketInterface('ws://77.104.116.187:7000/');
    // let configuration = {
    //     'uri': 'sip:704@admin', // FILL SIP URI HERE like sip:sip-user@your-domain.bwapp.bwsip.io
    //     'password': '704704', // FILL PASSWORD HERE,
    //     'sockets': [socket]
    // };
    // const ua = new JsSIP.UA(configuration);
    //
    // const incomingCallAudio = new window.Audio('http://code.bandwidth.com/media/incoming_alert.mp3');
    // incomingCallAudio.loop = true;
    // const remoteAudio = new window.Audio();
    // remoteAudio.autoplay = true;
    //
    // const callOptions = {
    //     mediaConstraints: {audio: true, video: false}
    // };
    // console.log('ua', ua);
    // // JsSIP.debug.enable('JsSIP:*'); // more detailed debug output
    // console.log(ua._status)
    /*------New incoming or outgoing call event-----*/

    // ua.on('newRTCSession', function (e) {
    //     console.log("newRTCSession")
    //
    // });
    /*------New incoming or outgoing call event-----*/


    /*------SIP registration events-----*/

    /*--------SIP registration events-----------*/

    // ua.start();
    // JsSIP.debug.enable('JsSIP:*'); // more detailed debug output

// Register callbacks to desired call events
//     const eventHandlers = {
//         'progress': function (e) {
//             console.log('call is in progress');
//         },
//         'failed': function (e) {
//             console.log('call failed with cause: ' + e.data.cause);
//         },
//         'ended': function (e) {
//             console.log('call ended with cause: ' + e.data.cause);
//         },
//         'confirmed': function (e) {
//             console.log('call confirmed');
//         }
//     };
//
//     let options = {
//         'eventHandlers': eventHandlers,
//         'mediaConstraints': {'audio': true, 'video': true}
//     };
//
//     const session = ua.call('712@admin', options);
//     console.log("sip", ua.status);

    // const onSipConnect = () => {
    //     JsSIP.debug.enable('JsSIP:*'); // more detailed debug output
    //     ua.on('registrationFailed', function (ev) {
    //         alert('Registering on SIP server failed with error: ' + ev.cause);
    //         configuration.uri = null;
    //         configuration.password = null;
    //     });
    //     ua.on('newRTCSession', function (ev) {
    //         let newSession = ev.session;
    //         console.log("newSession",newSession)
    //         if (session) { // hangup any existing call
    //             session.terminate();
    //         }
    //         let session = newSession;
    //         let completeSession = function () {
    //             session = null;
    //
    //         };
    //         session.on('ended', completeSession);
    //         session.on('failed', completeSession);
    //         // session.on('accepted',updateUI);
    //         session.on('confirmed', function () {
    //             var localStream = session.connection.getLocalStreams()[0];
    //             var dtmfSender = session.connection.createDTMFSender(localStream.getAudioTracks()[0])
    //             session.sendDTMF = function (tone) {
    //                 dtmfSender.insertDTMF(tone);
    //             };
    //         });
    //         session.on('addstream', function (e) {
    //             // incomingCallAudio.pause();
    //             remoteAudio.src = window.URL.createObjectURL(e.stream);
    //         });
    //         if (session.direction === 'incoming') {
    //             // incomingCallAudio.play();
    //         }
    //         // updateUI();
    //     });
    //     ua.start();
    // };
    return (

        <React.Fragment>
            <div id="callControl">
                <div id="to">
                    <input id="toField" type="text" placeholder="Enter number here"/>
                </div>
                <button onClick={register} id="connectCall">
                    <FontAwesomeIcon className="fap fa-phone"
                                     icon={faPhone}/>

                </button>
            </div>
        </React.Fragment>
    )
};

export default MakeCall;
