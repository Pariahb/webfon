(this.webpackJsonpwebfonv2=this.webpackJsonpwebfonv2||[]).push([[0],{100:function(e,t,n){e.exports=n(192)},105:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},175:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(19),A=n.n(r),o=(n(105),n(106),n(107),n(108),n(109),n(110),n(111),n(63),n(70),n(41),n(85)),l=n(86),s=n(98),i=n(87),u=n(99),b=n(6),m=n(1),E=n(9),d=n.n(E),f=function(){var e=Object(m.c)((function(e){return e.connection})),t=(Object(m.c)((function(e){return e.selectedContact})),Object(m.c)((function(e){return e.$pres}))),n=Object(m.c)((function(e){return e.$iq})),r=Object(m.c)((function(e){return e.strophe})),A=Object(a.useState)(""),o=Object(b.a)(A,2),l=o[0],s=o[1],i=Object(a.useState)(""),u=Object(b.a)(i,2),E=u[0],f=u[1],g=Object(a.useState)("connect"),p=Object(b.a)(g,2),O=p[0],S=p[1],j=Object(m.b)(),y=Object(a.useState)({item:[]}),h=Object(b.a)(y,2),w=(h[0],h[1],function(t){console.log("window.Strophe.Status",r.Status),t===r.Status.CONNECTING?console.log("Strophe is connecting."):t===r.Status.CONNFAIL?(console.log("Strophe failed to connect."),N(!1)):t===r.Status.AUTHENTICATING?console.log("Strophe is AUTHENTICATING."):t===r.Status.AUTHFAIL?(console.log("Strophe is AUTHFAIL."),N(!1)):t===r.Status.DISCONNECTING?console.log("Strophe is disconnecting."):t===r.Status.DISCONNECTED?(console.log("Strophe is disconnected."),N(!1)):t===r.Status.CONNECTED&&(console.log("Strophe is connected."),N(!0),v(),D(),console.log("jid",e.jid),e.send(n({from:e.jid,id:"v1",type:"get"}).c("vCard",{xmlns:"vcard-temp"})),e.send(n({from:e.jid,id:"enable1",type:"set"}).c("enable",{xmlns:"urn:xmpp:carbons:2"})),e.addHandler(T,null,"message",null,null,null))}),T=function(e){var t,n=e.getAttribute("from"),a=e.getAttribute("type"),c=e.getElementsByTagName("body");if("error"!==a){if("chat"===a){c[0].innerHTML,new Date;t={text:c[0].innerHTML,stamp:new Date,type:"rec"},j({newMessages:t,type:"PUSH_HISTORY_MESSAGES"})}return!0}alert("An error occured! ")},v=function(){var t=n({type:"get",id:"r1"}).c("query",{xmlns:"jabber:iq:roster"});e.sendIQ(t,C)},C=function(e){var t,n,a=[];d()(e).find("item").each((function(){t=d()(this).attr("jid"),n=d()(this).attr("name")?d()(this).attr("name"):"",a=a.concat({name:n,jid:t})})),M(a)},D=function(){e.send(t().c("priority").t("10").up().c("rap",{xmlns:"urn:xmpp:rap:3",ns:"urn:xmpp:jingle:apps:rtp:0",num:"5"})),e.sendIQ(n({type:"get"}).c("query",{xmlns:"http://jabber.org/protocol/disco#info"}))},N=function(e){j({showMainPage:e,type:"SHOW_MAIN_PAGE"})},M=function(e){j({contacts:e,type:"GET_CONTACTS"})},I=function(e){"Enter"===e.key&&H(e)},H=function(t){t.preventDefault(),void 0===l||""===l?alert("Blank JID"):void 0===E||""===E?alert("Empty pass, please type password"):"connect"===O?(S("disconnect"),e.connect(l,E,w)):(e.disconnect(),S("connect"))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("form",null,c.a.createElement("input",{label:"JID",className:"col-sm-2 col-form-label",size:"col-sm-10",type:"text",placeholder:"enter your JID...",onChange:function(e){s(e.target.value)},onKeyDown:I,value:l}),c.a.createElement("input",{label:"Password",className:"col-sm-2 col-form-label",size:"col-sm-10",type:"password",placeholder:"enter your password...",onChange:function(e){f(e.target.value)},onKeyDown:I,value:E}),c.a.createElement("button",{type:"submit",className:"btn btn-primary",id:"connect",value:O,onClick:H},O)))))},g=(n(141),n(49)),p=n(96),O=n(89),S=n.n(O),j=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"xa"===e.status?"offline":e.status}))},y=(n(142),function(e){var t=Object(m.b)(),n=Object(a.useState)({}),r=Object(b.a)(n,2),A=r[0],o=r[1],l=Object(m.c)((function(e){return e.selectedContact})),s=Object(m.c)((function(e){return e.rosterStatus}));Object(a.useEffect)((function(){var e=document.getElementsByClassName("item");console.log("items",e),d.a.each(e,(function(e,t){t.id===l?(console.log("yyy",t),console.log("selectedContact",l),t.style.backgroundColor="white"):t.style.backgroundColor="transparent"}))}));return Object(a.useEffect)((function(){!function(){var t=s.filter((function(t){return t.id===e.item.jid}))[0];o(t)}()}),[s]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{onClick:function(){return n=e.item.jid,void t({contact:n,type:"SET_SELECTED_ROSTER"});var n},className:"row item",id:e.item.jid},c.a.createElement("div",{className:"avatar"},void 0!==A?c.a.createElement(j,{status:A.status}):c.a.createElement("span",{className:"offline"}),c.a.createElement("img",{alt:"avatar",src:S.a})),c.a.createElement("div",{className:"right-side"},c.a.createElement("div",{className:"extension"},c.a.createElement("p",null,e.item.jid)),c.a.createElement("div",{className:"contact-name"},c.a.createElement("p",null,e.item.name)))))}),h=(n(143),function(){var e=Object(m.b)(),t=(Object(m.c)((function(e){return e.$iq})),Object(m.c)((function(e){return e.showMainPage}))),n=Object(m.c)((function(e){return e.connection})),r=Object(m.c)((function(e){return e.contacts})),A=Object(m.c)((function(e){return e.rosterStatus})),o=function(e){return!!A.filter((function(t){return t.id===e.id}))[0]},l=function(t){return d()(t).each((function(){var a=d()(t).attr("from"),c={id:a.split("/",1)[0],status:"",time:null};if(a!==n.jid){var r=d()(t).attr("type");if(!r){var A=d()(t).find("show").text();if(A)switch(A){case"chat":c.status="chat",!0===o(c)?e({rosterStatusItem:c,type:"CHANGE_EACH_ROSTER_STATUS"}):e({rosterStatusItem:c,type:"PUSH_ROSTER_STATUS_ITEM"});break;case"away":c.status="away",!0===o(c)?e({rosterStatusItem:c,type:"CHANGE_EACH_ROSTER_STATUS"}):e({rosterStatusItem:c,type:"PUSH_ROSTER_STATUS_ITEM"});break;case"dnd":c.status="dnd",!0===o(c)?e({rosterStatusItem:c,type:"CHANGE_EACH_ROSTER_STATUS"}):e({rosterStatusItem:c,type:"PUSH_ROSTER_STATUS_ITEM"});break;case"xa":c.status="xa",!0===o(c)?e({rosterStatusItem:c,type:"CHANGE_EACH_ROSTER_STATUS"}):e({rosterStatusItem:c,type:"PUSH_ROSTER_STATUS_ITEM"});break;default:c.status="chat",e({rosterStatusItem:c,type:"CHANGE_EACH_ROSTER_STATUS"})}else"unavailable"===r?(c.status="xa",!0===o(c)?e({rosterStatusItem:c,type:"CHANGE_EACH_ROSTER_STATUS"}):e({rosterStatusItem:c,type:"PUSH_ROSTER_STATUS_ITEM"})):(c.status="chat",!0===o(c)?e({rosterStatusItem:c,type:"CHANGE_EACH_ROSTER_STATUS"}):e({rosterStatusItem:c,type:"PUSH_ROSTER_STATUS_ITEM"}))}}})),!0};return Object(a.useEffect)((function(){n.addHandler(l,null,"presence",null,null,null)}),[t]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-sm-4 contacts"},r.map((function(e,t){return c.a.createElement(y,{key:t,item:e})}))))}),w=n(27),T=(n(144),function(e){return c.a.createElement(c.a.Fragment,null,void 0!==e.sentMsg?c.a.createElement("div",{className:"rec"===e.type?"rec-texts":"sent-texts"},c.a.createElement("div",{className:"rec"===e.type?"rec":"sent"},c.a.createElement("p",null,"rec"===e.type?null:c.a.createElement("strong",null,"me : "),e.sentMsg))):null)});n(145);function v(){var e=document.getElementsByClassName("all-messages");console.log("chatDiv",e),e[0].scrollTop=e[0].scrollHeight,console.log("helloooo")}var C=function(e){var t=Object(m.b)(),n=Object(m.c)((function(e){return e.$msg})),a=Object(m.c)((function(e){return e.selectedContact})),r=Object(m.c)((function(e){return e.connection})),A=function(e){"Enter"===e.key&&o(e)},o=function(c){c.preventDefault();var A,o=a,l=e.messageText.txt;if(void 0===l||""===l)alert("Empty Message, please type something");else{var s=n({to:o,from:r.jid,type:"chat",id:"message-1"}).c("body").t(l);r.send(s.tree()),A={to:o,message:l,time:new Date,type:"sent"};var i={text:l,stamp:new Date,type:"sent"},u=document.getElementById("msg-here");console.log(u),u.value="",t({newMessage:A.message,type:"GET_NEW_MESSAGE"}),t({newMessages:i,type:"PUSH_HISTORY_MESSAGES"})}};return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:"input-group mb-3"},c.a.createElement("input",{type:"text",id:"msg-here",className:"form-control",placeholder:"Message here...",rows:"4",value:e.messageText.txt,onChange:e.onInputChange,onKeyDown:A}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{type:"button",value:"send",className:"btn btn-outline-secondary",id:"sendButton",onClick:o,onKeyDown:A},"send"))))};function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=function(){var e=Object(m.c)((function(e){return e.selectedContact})),t=Object(m.c)((function(e){return e.chatLog})),n=Object(m.c)((function(e){return e.newMessage})),r=(Object(m.c)((function(e){return e.strophe})),Object(m.c)((function(e){return e.rosterStatus}))),A=Object(m.c)((function(e){return e.$iq})),o=Object(m.c)((function(e){return e.connection})),l=Object(a.useState)({item:[]}),s=Object(b.a)(l,2),i=(s[0],s[1],Object(a.useState)({txt:""})),u=Object(b.a)(i,2),E=u[0],f=u[1],g=Object(a.useState)({from:"",time:""}),p=Object(b.a)(g,2),O=p[0],S=p[1],j=Object(m.b)(),y=(Object(m.c)((function(e){return e.contacts})),Object(a.useState)("")),h=Object(b.a)(y,2),w=h[0],D=h[1],M=Object(a.useState)({item:[]}),I=Object(b.a)(M,2),H=I[0],_=I[1];Object(a.useEffect)((function(){R()}),[e]);var R=function(){var t,n,a=[],c=[];o.mam.query(o.jid.split("/",1)[0],{with:e,onMessage:function(r){return console.log("mam"),d()(r).each((function(){d()(this).find("forwarded message").attr("from").split("/",1)[0]===e?(n={text:d()(this).find("forwarded message body").text(),stamp:d()(this).find("delay").attr("stamp"),type:"rec"},(a=H.item).push(n),_(N({},H,{item:a}))):d()(this).find("forwarded message").attr("to").split("/",1)[0]===e&&(t={text:d()(this).find("forwarded message body").text(),stamp:d()(this).find("delay").attr("stamp"),type:"sent"},(c=H.item).push(t),_(N({},H,{item:c})))})),j({historyMessages:c,type:"FETCH_HISTORY_MESSAGES"}),!0},onComplete:function(e){v()}})};Object(a.useEffect)((function(){v()}),[t]);var x=function(e){var t,n=d()(e).attr("from"),a=d()(e).attr("type");return d()(e).find("query").each((function(){if("result"===a){var c=d()(e).find("query").attr("seconds");S(N({},O,{from:(t={from:n,time:c,type:a,errorMessage:null}).from,time:t.time,type:t.type,errorMessage:t.errorMessage}))}if("error"===a){var r=d()(e).find("text").text();S(N({},O,{from:(t={from:n,time:null,type:a,errorMessage:r}).from,time:t.time,type:t.type,errorMessage:t.errorMessage}))}})),!0},B=function(){var t=A({type:"get",from:o.jid,to:e,id:"last1"}).c("query",{xmlns:"jabber:iq:last"});o.sendIQ(t),o.addHandler(x,null,"iq",null,null,null)};Object(a.useEffect)((function(){B()}),[e]),Object(a.useEffect)((function(){B()}),[r]),Object(a.useEffect)((function(){console.log("*****************************************"),_(N({},H,{item:t}))}),[n]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"userInfo-bar"},c.a.createElement("p",{className:"userId"},e),c.a.createElement("p",null,"error"===O.type?"Last seen recently":"0"===O.time?"online":O.time<60?"last seen "+O.time+" seconds ago":Math.floor(O.time/60)<60?"last seen "+Math.floor(O.time/60)+" minutes ago":Math.floor(O.time/3600)<24?"last seen "+Math.floor(O.time/3600)+" hours ago":Math.floor(O.time/86400)<7?"last seen "+Math.floor(O.time/86400)+" days ago":"last seen over a week ago")),c.a.createElement("div",{className:"all-messages"},c.a.createElement("div",{className:"archive"},t.length>0?t.map((function(e,t){return c.a.createElement(T,{key:t,sentMsg:e.text,type:e.type})})):null)),c.a.createElement("div",{className:"textbox"},c.a.createElement(C,{messageText:E,onInputChange:function(e){f(N({},E,{txt:e.target.value})),D(N({},w,{txt:e.target.value}))}})))},I=(n(146),function(){var e=Object(m.c)((function(e){return e.contacts})),t=Object(m.c)((function(e){return e.selectedContact}));return c.a.createElement(c.a.Fragment,null,e.map((function(e,n){return e.jid===t?c.a.createElement("div",{key:n,className:"col-sm-8 chat-panel",id:e.jid},c.a.createElement(M,null)):null})))}),H=n(10),_=n(11),R=function(e){var t=Object(m.c)((function(e){return e.devicesData}));return c.a.createElement("table",{className:"table table-sm table-striped table-bordered table-hover"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Device Name"),c.a.createElement("th",null,"Enabled"))),c.a.createElement("tbody",null,void 0===t?null:t.map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,e.name),c.a.createElement("td",null,e.enabled?c.a.createElement(H.a,{color:"green",icon:_.d}):c.a.createElement(H.a,{color:"red",icon:_.g})))}))))},x=function(){var e=Object(m.c)((function(e){return e.callFlowsData}));return c.a.createElement("table",{className:"table table-sm table-striped table-bordered table-hover"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Extensions"))),c.a.createElement("tbody",null,void 0===e.item?null:e.item[0].data[0].numbers.map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,e))}))))},B=(n(29),function(e){Object(m.c)((function(e){return e.callType}));var t=Object(m.c)((function(e){return e.cdrsData})),a=n(41);return c.a.createElement(c.a.Fragment,null,void 0===t?null:t.filter((function(e){return"outbound"===e.direction})).map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,"inbound"===e.direction?c.a.createElement(H.a,{color:"green",icon:_.a}):"outbound"===e.direction?c.a.createElement(H.a,{color:"orange",icon:_.b}):c.a.createElement(H.a,{color:"red",icon:_.c})),c.a.createElement("td",null,a.unix(e.unix_timestamp).format("jYYYY/jM/jD, HH:mm:ss")),c.a.createElement("td",null,e.from),c.a.createElement("td",null,e.to),c.a.createElement("td",null,e.duration_seconds))})))}),P=function(e){Object(m.c)((function(e){return e.callType}));var t=Object(m.c)((function(e){return e.cdrsData})),a=n(41);return c.a.createElement(c.a.Fragment,null,void 0===t?null:t.filter((function(e){return"inbound"===e.direction})).map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,"inbound"===e.direction?c.a.createElement(H.a,{color:"green",icon:_.a}):"outbound"===e.direction?c.a.createElement(H.a,{color:"orange",icon:_.b}):c.a.createElement(H.a,{color:"red",icon:_.c})),c.a.createElement("td",null,a.unix(e.unix_timestamp).format("jYYYY/jM/jD, HH:mm:ss")),c.a.createElement("td",null,e.from),c.a.createElement("td",null,e.to),c.a.createElement("td",null,e.duration_seconds))})))},Q=function(e){Object(m.c)((function(e){return e.callType}));var t=Object(m.c)((function(e){return e.cdrsData})),a=n(41);return c.a.createElement(c.a.Fragment,null,void 0===t?null:t.filter((function(e){return"outbound"===e.direction&&"NO_ANSWER"===e.hangup_cause})).map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,c.a.createElement(H.a,{color:"red",icon:_.c})),c.a.createElement("td",null,a.unix(e.unix_timestamp).format("jYYYY/jM/jD, HH:mm:ss")),c.a.createElement("td",null,e.from),c.a.createElement("td",null,e.to),c.a.createElement("td",null,e.duration_seconds))})))};var q=function(){var e=Object(m.c)((function(e){return e.cdrsData})),t=Object(m.c)((function(e){return e.callType})),r=(n(70),n(71)),A=n(41),o=Object(a.useState)({item:[]}),l=Object(b.a)(o,2),s=(l[0],l[1],Object(a.useState)({item:[]})),i=Object(b.a)(s,2),u=(i[0],i[1],Object(m.b)()),E=r();console.log("today",E.startOf("day").unix());var d=function(e){u({callType:e,type:"SET_CALL_TYPE"}),console.log("type",e)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"filter-by-time"},c.a.createElement("button",{className:"btn-sm badge-light "},"Today"),c.a.createElement("button",{className:"btn-sm badge-light"},"This Week"),c.a.createElement("button",{className:"btn-sm badge-light"},"This Month")),c.a.createElement("div",{className:"filter-by-type"},c.a.createElement("button",{className:"btn-sm badge-light",onClick:function(){d("inbound")}},"Incoming Calls"),c.a.createElement("button",{className:"btn-sm badge-light",onClick:function(){d("missed")}},"Missed Calls"),c.a.createElement("button",{className:"btn-sm badge-light",onClick:function(){d("outbound")}},"Dialed Calls")),c.a.createElement("table",{className:"table table-sm table-striped table-bordered table-hover"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,c.a.createElement(H.a,{color:"green",icon:_.a}),c.a.createElement("br",null),c.a.createElement(H.a,{color:"orange",icon:_.b})),c.a.createElement("th",null,"Date/Time"),c.a.createElement("th",null,"From"),c.a.createElement("th",null,"To"),c.a.createElement("th",null,"Duration"))),c.a.createElement("tbody",null,"inbound"===t?c.a.createElement(B,null):"outbound"===t?c.a.createElement(P,null):"missed"===t?c.a.createElement(Q,null):void 0===e?null:e.map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,"inbound"===e.direction?c.a.createElement(H.a,{color:"green",icon:_.a}):"outbound"===e.direction?c.a.createElement(H.a,{color:"orange",icon:_.b}):c.a.createElement(H.a,{color:"red",icon:_.b})),c.a.createElement("td",null,A.unix(e.unix_timestamp).format("jYYYY/jM/jD, HH:mm:ss")),c.a.createElement("td",null,e.from),c.a.createElement("td",null,e.to),c.a.createElement("td",null,e.duration_seconds))})))))},U=(n(165),function(){var e=n(63);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"callControl"},c.a.createElement("div",{id:"to"},c.a.createElement("input",{id:"toField",type:"text",placeholder:"Enter number here"})),c.a.createElement("button",{onClick:function(){console.log("Registering to SIP"),console.log("JsSIP",e),e.debug.disable("JsSIP:*");var t=new e.WebSocketInterface("ws://77.104.116.187:5064");console.log("socket",t);var n={sockets:[t],uri:"sip:704@admin",authorization_user:"704",password:"704704",connection_recovery_min_interval:3,register:!0,display_name:"paria",realm:"admin"},a=new e.UA(n);a.start(),t.onconnect((function(){console.log("socket connected")})),t.ondisconnect((function(){console.log("socket connected")})),a.on("registered",(function(t){console.log("registered"),console.log("err",e.REASON_PHRASE)})),a.on("unregistered",(function(t){console.log("registered"),console.log("err",e.REASON_PHRASE)})),a.on("registrationFailed",(function(t){alert("registrationFailed"),console.log("err",e.REASON_PHRASE)})),a.on("connected",(function(e){console.log("connect"),a.call("sip:712@admin",c)})),a.on("connecting",(function(t){console.log("connecting"),console.log("err",e.REASON_PHRASE)})),a.on("disconnected",(function(t){console.log("disconnected"),console.log("err",e.REASON_PHRASE)}));var c={eventHandlers:{progress:function(e){console.log("call is in progress")},failed:function(e){console.log("call failed with cause: "+e.data.cause)},ended:function(e){console.log("call ended with cause: "+e.data.cause)},confirmed:function(e){console.log("call confirmed")}},mediaConstraints:{audio:!0,video:!0}}},id:"connectCall"},c.a.createElement(H.a,{className:"fap fa-phone",icon:_.e}))))}),G=(n(166),function(){var e=Object(m.c)((function(e){return e.loadingStatus})),t=(Object(m.c)((function(e){return e.showMainPage})),Object(a.useState)(!0)),n=Object(b.a)(t,2),r=n[0],A=n[1],o=Object(m.c)((function(e){return e.callFlowsData})),l=(Object(m.c)((function(e){return e.showCallPage})),Object(m.b)());Object(a.useEffect)((function(){A(!1),l({loadingStatus:r,type:"SET_LOADING_STATUS"})}),[o]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("button",{type:"button",className:"btn btn-primary",id:"connect",value:"Logout",onClick:function(){var e,t;e="monster_token",document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t=!1,console.log("showPage",t),l({showPage:t,type:"SHOW_CALL_PAGE"})}},"Log out From Kazoo"),c.a.createElement("div",null,c.a.createElement(U,null)),c.a.createElement("div",null,e?c.a.createElement("div",{className:"call-spinner"},c.a.createElement(H.a,{className:"fas fa-spinner fa-spin",icon:_.f})):c.a.createElement("div",{className:"info"},c.a.createElement(R,null),c.a.createElement(x,null),c.a.createElement(q,null)))))}),k=function(){var e=Object(m.c)((function(e){return e.selectedContact}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"tabs"},c.a.createElement(p.a,{defaultActiveKey:"Chat",disabled:!0},c.a.createElement(g.a,{eventKey:"Chat",className:"chat-tab",title:"\u067e\u06cc\u0627\u0645 \u0647\u0627"},c.a.createElement(h,null),""!==e?c.a.createElement(I,null):c.a.createElement("span",{className:"default-text"},"Select a contact to start messaging...")),c.a.createElement(g.a,{eventKey:"Call Log",title:"\u062a\u0645\u0627\u0633 \u0647\u0627",disabled:!0},c.a.createElement(G,null)),c.a.createElement(g.a,{eventKey:"Missed Calls",title:"\u0645\u062e\u0627\u0637\u0628\u06cc\u0646",disabled:!0}))))},F=function(){var e=Object(m.c)((function(e){return e.status})),t=Object(m.c)((function(e){return e.connection})),n=Object(a.useState)(""),r=Object(b.a)(n,2),A=r[0],o=r[1];return Object(a.useEffect)((function(){o(e)}),[e]),c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"xa"===A?"offline":A},t.jid.split("@",1)))},W=n(30),Y=(n(175),function(){var e=Object(m.c)((function(e){return e.$pres})),t=Object(m.c)((function(e){return e.connection})),n=Object(m.b)(),a=function(a){t.send(e().c("show").t(a)),n({s:a,type:"MY_STATUS"})};return c.a.createElement(c.a.Fragment,null,c.a.createElement(W.a,null,c.a.createElement(W.a.Toggle,{variant:"success",id:"dropdown"}),c.a.createElement(W.a.Menu,null,c.a.createElement(W.a.Item,{onClick:function(){return a("chat")}},"online"),c.a.createElement(W.a.Item,{onClick:function(){return a("away")}},"away"),c.a.createElement(W.a.Item,{onClick:function(){return a("dnd")}},"do not disturb"),c.a.createElement(W.a.Item,{onClick:function(){return a("xa")}},"Away for long time"))))});n(95);n(190);var K=function(){var e=Object(m.c)((function(e){return e.showMainPage})),t=Object(m.c)((function(e){return e.showCallPage})),n=Object(m.c)((function(e){return e.connection})),r=(Object(m.c)((function(e){return e.$pres})),Object(a.useState)(e)),A=Object(b.a)(r,2),o=A[0],l=A[1];return Object(a.useEffect)((function(){l(e)}),[e]),Object(a.useEffect)((function(){l(t)}),[t]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},o?c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("button",{type:"button",value:"logout",className:"btn-sm btn-danger logout",id:"logout",onClick:function(){n.disconnect()}},"Log out"),c.a.createElement("div",{className:"mystatus"},c.a.createElement(Y,null),c.a.createElement(F,null)),c.a.createElement(k,null)):c.a.createElement(f,null)))},L=n(44),V=n(97);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z={status:"chat",connection:new window.Strophe.Connection("http://77.104.116.225:5280/http-bind"),$pres:window.$pres,$iq:window.$iq,$msg:window.$msg,strophe:window.Strophe,showMainPage:!1,showCallPage:!1,contacts:[],rosterStatus:[],selectedContact:"",rosterClicked:!1,sendLastActivity:!1,devicesData:[],loginData:[],callFlowsData:[],cdrsData:[],loadingStatus:!0,newMessage:"",chatLog:[],callType:""},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MY_STATUS":return Z({},e,{status:t.s});case"SHOW_MAIN_PAGE":return Z({},e,{showMainPage:t.showMainPage});case"SHOW_CALL_PAGE":return Z({},e,{showCallPage:t.showPage});case"GET_CONTACTS":return Z({},e,{contacts:t.contacts});case"CHANGE_EACH_ROSTER_STATUS":return Z({},e,{rosterStatus:e.rosterStatus.map((function(e,n){return e.id===t.rosterStatusItem.id?Z({},e,{status:t.rosterStatusItem.status}):e}))});case"PUSH_ROSTER_STATUS_ITEM":var n=e.rosterStatus;return n.push(t.rosterStatusItem),Z({},e,{rosterStatus:n});case"SET_SELECTED_ROSTER":return Z({},e,{selectedContact:t.contact});case"CHECK_ROSTER_CLICK":return Z({},e,{rosterClicked:t.rosterClicked});case"GET_DEVICES_DATA":return Z({},e,{devicesData:t.devicesData});case"GET_LOGIN_DATA":return Z({},e,{loginData:t.loginData});case"GET_USER_CALLFLOWS_DATA":return Z({},e,{callFlowsData:t.callFlowsData});case"GET_CDRS_DATA":return Z({},e,{cdrsData:t.cdrsData});case"SET_CALL_TYPE":return Z({},e,{callType:t.callType});case"SET_LOADING_STATUS":return Z({},e,{loadingStatus:t.loadingStatus});case"GET_NEW_MESSAGE":return Z({},e,{newMessage:t.newMessage});case"FETCH_HISTORY_MESSAGES":return Z({},e,{chatLog:t.historyMessages});case"PUSH_HISTORY_MESSAGES":e.chatLog;e.chatLog.push(t.newMessages),console.log("historyArray");return Z({},e,{chatLog:[].concat(Object(V.a)(e.chatLog),[e.chatLog])});default:return e}},$=Object(L.b)(X),ee=(n(191),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(m.a,{store:$},c.a.createElement("div",{className:"App"},c.a.createElement(K,null)))}}]),t}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));A.a.render(c.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},89:function(e,t){e.exports="data:image/jpeg;base64,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bs/LieTyAsWfhMsQwUXoNluoYiPU4YGrk4wtATqJgtg/2YSOdXcsXyDE9ugH4L7r8EA36gMFwDVsNH8NAUmzkwPVDKvRiwQ+EGivkp0xIkaGDckuHHj2aqB6ukmvlCpYiivj4YkkqSpNTIBxURblWeWVCiQfp5/HRl46CglFkIWHpqcMZBB5QHcsREUomWBIKgoRAsMIY+uIs7zALljsylEzAJIAUIgWCtpe++GpUXafM0cIwouGBAAh4LwcFwrG1ZxROMOhwcpCnecyq8384OYRTgKEGz2i/wDi1VVVVVVVVUEQJCn6f//aAAwDAQACAAMAAAAQbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbarbsbbbbbbbbbbbbbbY7bbb7bbbbbbbbbbbbdbbbbbbbbbbbbbbbbbcbbbbbdbbbbbbbbbbbf7bbbbb/bbbbbbbbbbbjbbbbbbDbbbbbbbbbbcbbbbbbbbbbbbbbbbbb7bbbbbb7bbbbbbbbbbZbbbbbbfbbbbbbbbbbbjbbbbbbbbbbbbbbbbbYbbbbbbcbbbbbbbbbbbfbbbbbf7bbbbbbbbbbbDbbbbbDbbbbbbbbbbbbjbbbbbbbbbbbbbbbbbbHbbbjbbbbbbbbbbbbbb8/8AG22222222222223IW+/4G22222222223x222222zm22222222+O2222222/e2222222w22222222224222222x22222222223w222229222222222222422222222222222222322222G2222222222223G2222222222222222222222222222222222232222wAAAAAAAAAAAAAJ23/8QAHhEAAgMBAAIDAAAAAAAAAAAAAREAMEBQECAhYHD/2gAIAQMBAT8Q/bnH5ce50PYTxDYO6bhnNwzm4ZzxTcM5uHdNg1EVAbFQt6iiii3OOOP0cccel3PK8TwvM7idANh1DnnYKTsH0r49f//EABwRAAIDAQADAAAAAAAAAAAAAAERADBAUBBgcP/aAAgBAgEBPxD7covCii3KhbAKiNQsPdFxzi45xcc4uOcXHOLjoHFFh1A1E7HQ97jjjj3KKKKKKKKKKLSrllWJcdXDQR0RxBsNI2H0/wD/xAApEAEAAAUCBQUBAQEBAAAAAAABABEhMDFBUSBhcYGxQJGhwfBQ0RDx/9oACAEBAAE/EHP8Vz/Fc/xXP8Vz/Fc/xXN8+kZAq+xDFAOlZ7EiGKk2lHwRMrX/AFrCVRyX+kNhrRPqmfEKE28p7OH0Dm6oE2gZYWaaFIJAjUKqrzeNMZwGXSdHKDrFmGG85utWYkOs0tEhM19D7ICkMQwjdc3HJ5DUZwv0uPOc63TJ7rrm2gSQKtgqxq+aNhQe1x05oUaJUg1cpsKD3uObbhMkB0a/AvKrcjotPAuObfJQL3kF59KR9pLhzbcy2PzeEich7iXHNuVsn4V6QNp/YW45t0NpXvJPu9KtLnVo83HNtAE/9h5XnbK/oea45t9am0NKKqu7x7YuEpNAObGKOB3ll73HNyuDJzDXuiuGiZLaSSRyLos/Rdc3WUwyH8He0IlKiaoeLrm8pINUa/PZ5xOS0Rw9HDxAUYwmvYiQklchU7/pAAAEgoBec31SToTIQUG77q/MNUTqr5Ir/q94QwN2bwYYF94Se7NiTSOUy9Vq+gc3ME3BlibjBzflFC2dQPiHyyTXkjSnQPqF89hDwR/6aA8dxn5j76H1GALor4YXI3NYPZhIQW5n5pAiCMxwlS65tSsZ8ZLoKwuci6j2FIcmRuZexS4jPkip7YiTD/GGUAqOoqHutubDsuRBOw0ZFXQg/dnJNe76BIIgqJRIkAuKTGBM66mR2TRsuePS2UMvN2hValjoHI9IXbrGibJrEzaJyXnusOeKgk9fAQPGbNMvpj7lTCiJtFNAOgTU57nG54WVR/M0NYnarNPUPSXMMiRNaRKB30HLiOeBQJrIKrCgOieXqlT4U3HJD1yYDUanC54Fm0kl5D8PWOkqz/bR4XPAjjCPVq8+sm6dV8Tw4XP/AEzDvaz59Y5uWDszgQAw1O/A54GpnVOvX1gAAAAAAAADTWHQAo2lTg//2Q=="}},[[100,1,2]]]);
//# sourceMappingURL=main.a921896d.chunk.js.map