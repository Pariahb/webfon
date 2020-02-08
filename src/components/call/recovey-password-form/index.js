import React, {useState} from "react";
import axios from "axios";
import {getCookie} from "../../helper/functions";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleLeft} from "@fortawesome/free-solid-svg-icons";

const RecoveryPassword = () => {
    const successMessage = useSelector(state => state.successMessage);
    const dispatch = useDispatch();
    const [realm, setRealm] = useState('');
    const [email, setEmail] = useState('');


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }

    };
    const handleSubmit = (event) => {
        let error = document.getElementById("recovery-error-message");
        error.textContent = "";
        event.preventDefault();
        if (email === undefined || email === "") {
            error.textContent = "please enter email address";
        } else if (realm === undefined || realm === "")
            error.textContent = "please enter realm";
        else {
            // changeLoginButton("Sign in")
            axios.put("http://77.104.116.187:8000/v2/user_auth/recovery",
                {
                    data: {
                        "account_realm": realm,
                        "username": email,
                        "ui_url": "http://77.104.116.187"
                    }
                }, {
                    headers: {
                        "X-Auth-Token": getCookie("monster_token")
                    }
                }
            )
                .then(response => {
                    console.log("yes");
                })
                .catch(error => {
                    console.log(error);
                    error.textContent = "متاسفانه خطایی رخ داده است";

                });
        }
    };


    const handleChangeRealm = (event) => {
        setRealm(event.target.value)

    };
    const handleChangeEmail = (event) => {
        setEmail(event.target.value)

    };

    return (
        <React.Fragment>

            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-change my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Recover Your Password</h5>

                            <form className="form-change">
                                <div className="form-label-group">
                                    <input
                                        className="form-control"
                                        size="col-sm-10"
                                        type="text"
                                        id="inputAccountName"
                                        placeholder="Realm"
                                        onChange={handleChangeRealm}
                                        value={realm}
                                        onKeyDown={handleKeyDown}
                                        required autoFocus
                                    />
                                    <label htmlFor="inputAccountName">Realm</label>
                                </div>

                                <div className="form-label-group">
                                    <input
                                        className="form-control"
                                        id="inputEmail"
                                        size="col-sm-10"
                                        type="text"
                                        placeholder="Email"
                                        onChange={handleChangeEmail}
                                        value={email}
                                        onKeyDown={handleKeyDown}
                                        required
                                    />

                                    <label htmlFor="inputEmail">Email</label>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-lg btn-primary btn-block text-uppercase"
                                    id="changePass"
                                    onClick={handleSubmit}
                                >recover
                                </button>

                            </form>
                        </div>
                        <p id="recovery-error-message"></p>

                    </div>

                </div>
            </div>
        </React.Fragment>
    );

}


export default RecoveryPassword;
