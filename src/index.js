import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "strophe.js/dist/strophe.js";
import "strophejs-plugin-rsm/lib/strophe.rsm.js";
import "strophejs-plugin-mam/lib/strophe.mam.js";
import "strophejs-plugin-pubsub/src/strophe.pubsub.js";
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css"
import "jssip"
import "persian-date"
import "moment-jalaali"
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/store";

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
