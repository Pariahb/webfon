import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from 'axios';
import md5 from "md5"
import {getCookie} from "../../helper/functions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import styles from './login.module.css'
import './style.css';
import RecoveryPassword from "../recovey-password-form";
import Particles from "react-particles-js";

const KazooLogin = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [realm, setRealm] = useState('');
    const [loginButton, changeLoginButton] = useState('Sign in');
    const [devicesData, getDevicesData] = useState({item: []});
    const [extensionNumbers, getExtensionNumbers] = useState({item: []});
    const [accountData, getAccountdata] = useState({item: []});
    const [cdrData, getCdrData] = useState({item: []});
    const [kazooContactsData, getKazooContactsData] = useState({item: []});
    const [userData, getCurrentUserData] = useState({item: []});
    const successMsg = useSelector(state => state.successMessage);
    const changeStatus = useSelector(state => state.changeStatus);
    const dispatch = useDispatch();
    const moment = require('persian-date');
    const orgMoment = require('moment');

    //Show Or hide setShowDetailPage.
    const setShowDetailPage = (showLogDetailPage) => {
        dispatch({showLogDetailPage, type: 'SHOW_LOG_DETAIL_PAGE'})
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    };
    const getCallLog = () => {

        axios.get("http://77.104.116.187:8000/v2/accounts/" + getCookie("accID") + "/users/" + getCookie("owID") + "/cdrs/?page_size=150", {
            headers: {
                "X-Auth-Token": getCookie("monster_token")
            }
        })
            .then(response => {
                let cdrs = cdrData.item;
                cdrs.push(response.data)
                getCdrData({...cdrData, item: cdrs});
                console.log("dddddd", cdrData)
                checkSameDayObjects(cdrData.item[0].data);

            })
            .catch(error => {
                console.log(error)
            });
    };
    const onKazooConnect = () => {
        axios.put('http://77.104.116.187:8000/v2/user_auth', {
            data: {
                "account_name": realm,
                "credentials": md5(userName + ":" + password)
            }
        })
            .then(response => {

                console.log("response.data login ", response.data);
                setShowCallApp(true);
                let account_id = response.data.data.account_id;
                let auth_token = response.data.auth_token;
                let owner_id = response.data.data.owner_id;
                let account_data = accountData.item;
                account_data.push(response.data);
                getAccountdata({...accountData, item: response.data.data})
                setLoginDataToReducer(accountData);
                saveOldPassword(password);
                document.cookie = "monster_token=" + auth_token
                document.cookie = "accID=" + account_id;
                document.cookie = "owID=" + owner_id;
                console.log("accountData", accountData);
                getDevicesList();
                getExtensions();
                getCallLog();
                getUserData();
                getContacts();
                successPassChange(false)
                setShowDetailPage(false)
            })
            .catch(error => {
                console.log(error);
                setShowCallApp(false);
                if (error.response) {
                    document.getElementById("error-message").textContent = "متاسفانه خطایی رخ داده است"
                    let connectBtn = document.getElementById("connect");
                    console.log("connectBtn", connectBtn);

                    if (connectBtn.textContent === "Sign out") {
                        changeLoginButton("Sign in")
                    }
                }
            });

    };
    const getUserData = () => {

        axios.get("http://77.104.116.187:8000/v2/accounts/" + getCookie("accID") + "/users/" + getCookie("owID"), {
            headers: {
                "X-Auth-Token": getCookie("monster_token")
            }
        })
            .then(response => {

                let usersData = userData.item;
                usersData.push(response.data);
                getCurrentUserData({...usersData, item: usersData});
                setUsersDataToReducer(usersData);

            })
            .catch(error => {
                console.log(error);
            });

    };
    const getDevicesList = () => {

        axios.get("http://77.104.116.187:8000/v2/accounts/" + getCookie("accID") + "/users/" + getCookie("owID") + "/devices", {
            headers: {
                "X-Auth-Token": getCookie("monster_token")
            }
        })
            .then(response => {
                let devices = devicesData.item;
                devices.push(response.data);
                getDevicesData({...devicesData, item: devices});
                setDeviceDataToReducer(devicesData.item[0].data);
            })
            .catch(error => {
                console.log(error);
            });

    };
    const getExtensions = () => {

        axios.get("http://77.104.116.187:8000/v2/accounts/" + getCookie("accID") + "/callflows/?filter_owner_id=" + getCookie("owID"), {
            headers: {
                "X-Auth-Token": getCookie("monster_token")
            }
        })
            .then(response => {
                console.log("callflow", response.data)
                let callflows = extensionNumbers.item;
                callflows.push(response.data)
                getExtensionNumbers({...extensionNumbers, item: callflows});
                setUserCallFlows(extensionNumbers);
            })
            .catch(error => {
                console.log(error);

            });
    };
    const getContacts = () => {

        axios.get("http://77.104.116.187:8000/v2/accounts/" + getCookie("accID") + "/contact_list/", {
                headers: {
                    "X-Auth-Token": getCookie("monster_token")
                }
            }
        )
            .then(response => {
                console.log("contacts", response.data);
                let kazooContacts = kazooContactsData.item;
                kazooContacts.push(response.data);
                getKazooContactsData({...kazooContactsData, item: kazooContacts});
                setKazooContactsToReducer(kazooContactsData);
            })
            .catch(error => {
                console.log(error);
            });
    };
    const checkSameDayObjects = (array) => {
        let group = array.reduce((r, a) => {
            r[moment.unix(a.unix_timestamp).utc().format('YYYY/M/D')] =
                [...r[moment.unix(a.unix_timestamp).utc().format('YYYY/M/D')] || [], a];
            return r;
        }, {});
        setCdrsDataToReducer(group);

    };


    /*------set contacts to reducer-----------------*/
    const setKazooContactsToReducer = (contactsList) => {
        dispatch({contactsList, type: 'GET_KAZOO_CONTACTS_LIST'})
    };
    /*------set contacts to reducer-----------------*/
    /*------set CDRs per user data to reducer-----------------*/
    const setCdrsDataToReducer = (cdrsData) => {
        dispatch({cdrsData, type: 'GET_CDRS_DATA'})
    };
    /*------set CDRs per user data to reducer-----------------*/

    const saveOldPassword = (oldPassword) => {
        dispatch({oldPassword, type: 'OLD_PASSWORD'})
    };
    /*------set call flows per user data to reducer-----------------*/
    const setUserCallFlows = (callFlowsData) => {
        dispatch({callFlowsData, type: 'GET_USER_CALLFLOWS_DATA'})
    };
    /*------set call flows per user data to reducer-----------------*/
    /*------set devices data to reducer-----------------*/
    const setLoginDataToReducer = (loginData) => {
        dispatch({loginData, type: 'GET_LOGIN_DATA'})
    };
    /*------set devices data to reducer-----------------*/
    const setDeviceDataToReducer = (devicesData) => {
        dispatch({devicesData, type: 'GET_DEVICES_DATA'})
    };
    /*---------------------------------*/
    /*------set users data to reducer-----------------*/
    const setUsersDataToReducer = (userData) => {
        dispatch({userData, type: 'GET_USERS_DATA'})
    };
    /*---------------------------------*/
    //Show Or hide Main page.
    const setShowCallApp = (showPage) => {
        dispatch({showPage, type: 'SHOW_CALL_PAGE'})
    };
    /*---------------------------------*/
    //action for login form
    const handleChangeJID = (event) => {
        setUserName(event.target.value)
    };
    const handleChangePass = (event) => {
        // console.log("passValue", event.target.value)
        setPassword(event.target.value)

    };

    const successPassChange = (changeStatus) => {
        dispatch({changeStatus, type: "CHANGE_PASS_STATUS"});
    };
    const handleChangeAccName = (event) => {
        // console.log("passValue", event.target.value)
        setRealm(event.target.value)
    };
    const handleSubmit = (event) => {

        event.preventDefault();
        document.getElementById("error-message").textContent = ""

        if (userName === undefined || userName === "") {
            document.getElementById("error-message").textContent = "please type user name"

        } else if (password === undefined || password === "") {
            document.getElementById("error-message").textContent = "please type password"
        } else if (realm === undefined || realm === "")
            document.getElementById("error-message").textContent = "please type account name"

        else {

            if (loginButton === "Sign in") {
                changeLoginButton("Sign out");
                onKazooConnect();
            } else {
                changeLoginButton("Sign in")

            }
        }
    };
    /*-----------------------------------*/

    return (
        <React.Fragment>

            {changeStatus ? <div className={styles.successMsg}><FontAwesomeIcon color="green" icon={faCheckCircle}/>
                {successMsg}</div> : null}
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Sign In</h5>
                            <form className="form-signin">
                                <div className="form-label-group">
                                    <input
                                        className="form-control"
                                        size="col-sm-10"
                                        type="text"
                                        id="inputUserName"
                                        placeholder="User Name"
                                        onChange={handleChangeJID}
                                        value={userName}
                                        onKeyDown={handleKeyDown}
                                        required autoFocus
                                    />
                                    <label htmlFor="inputUserName">User Name</label>
                                </div>

                                <div className="form-label-group">
                                    <input
                                        className="form-control"
                                        id="inputPassword"
                                        size="col-sm-10"
                                        type="password"
                                        placeholder="Password"
                                        onChange={handleChangePass}
                                        value={password}
                                        onKeyDown={handleKeyDown}
                                        required
                                    />

                                    <label htmlFor="inputPassword">Password</label>
                                </div>
                                <div className="form-label-group">
                                    <input
                                        className="form-control"
                                        size="col-sm-10"
                                        type="text"
                                        id="inputRealm"
                                        placeholder="Realm"
                                        onChange={handleChangeAccName}
                                        value={realm}
                                        onKeyDown={handleKeyDown}
                                        required
                                    />

                                    <label htmlFor="inputRealm">Realm</label>
                                </div>

                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember
                                        password</label>
                                </div>


                                <button
                                    type="submit"
                                    className="btn btn-lg btn-primary btn-block text-uppercase"
                                    id="connect"
                                    value={loginButton}
                                    onClick={handleSubmit}
                                >{loginButton}</button>
                                <hr className="my-4"/>


                                <a>Forget Password</a>

                                {/*<button className="btn btn-lg btn-google btn-block text-uppercase"*/}
                                {/*        type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google*/}
                                {/*</button>*/}
                                {/*<button className="btn btn-lg btn-facebook btn-block text-uppercase"*/}
                                {/*        type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with*/}
                                {/*    Facebook*/}
                                {/*</button>*/}
                            </form>
                            <p id="error-message"></p>

                        </div>
                        {/*<RecoveryPassword/>*/}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};


export default KazooLogin;


