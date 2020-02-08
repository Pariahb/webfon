import React, {useState} from "react";
import axios from "axios";
import {getCookie} from "../../helper/functions";
import "./style.css"
import md5 from "md5";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleLeft} from "@fortawesome/free-solid-svg-icons";

const ChangePassword = () => {
    const userData = useSelector(state => state.userData);
    const successMessage = useSelector(state => state.successMessage);
    const [successMsg, setSuccessMsg] = useState(false);
    const [password, setPassword] = useState('');
    const [newPass, confirmPassword] = useState('');
    const dispatch = useDispatch();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }

    };
    const handleSubmit = (event) => {
        let error = document.getElementById("error-message");
        error.textContent = "";
        event.preventDefault();
        if (newPass === undefined || newPass === "") {
            error.textContent = "please enter new password";
        } else if (password === undefined || password === "")
            error.textContent = "please enter new password";
        else if (password === newPass) {
            // changeLoginButton("Sign in")
            axios.post("http://5.160.200.76:8000/v2/accounts/" + getCookie("accID") + "/users/" + getCookie("owID"),
                {
                    data: {
                        "username": userData[0].data.username,
                        "first_name": userData[0].data.first_name,
                        "last_name": userData[0].data.last_name,
                        "password": password,
                        "confirm_password": newPass
                    }
                }, {
                    headers: {
                        "X-Auth-Token": getCookie("monster_token")
                    }
                }
            )
                .then(response => {
                    setSuccessMessage("رمز عبور شما با موفقیت تغییر یافت. لطفا مجدد وارد شوید.");
                    successPassChange(true);
                    setChangePassStatus(false);
                })
                .catch(error => {
                    console.log(error);
                    error.textContent = "متاسفانه خطایی رخ داده است";

                });
        } else {
            error.textContent = "رمز عبور جدید با هم همخوانی ندارند";
        }
    };
    const setSuccessMessage = (successMessage) => {
        dispatch({successMessage, type: "MSG_AFTER_PASS_CHANGE"});
    };
    const successPassChange = (changeStatus) => {
        dispatch({changeStatus, type: "CHANGE_PASS_STATUS"});
    };

    const handleChangePass = (event) => {
        // console.log("passValue", event.target.value)
        setPassword(event.target.value)

    };
    const handleConfirmPass = (event) => {
        // console.log("passValue", event.target.value)
        confirmPassword(event.target.value)

    };
    const setChangePassStatus = (showChangePasswordPage) => {
        dispatch({showChangePasswordPage, type: 'SHOW_CHANGE_PASS_PAGE'})
    };

    const goBack = () => {
        setChangePassStatus(false)
    };
    return (
        <React.Fragment>
            <div>
                <FontAwesomeIcon color="white" onClick={goBack} icon={faArrowCircleLeft}/>
            </div>
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-change my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Change Your Password</h5>

                            <form className="form-change">

                                <div className="form-label-group">
                                    <input
                                        className="form-control"
                                        size="col-sm-10"
                                        type="password"
                                        id="inputNewPass"
                                        placeholder="New password"
                                        onChange={handleChangePass}
                                        onKeyDown={handleKeyDown}
                                        required
                                    />
                                    <label htmlFor="inputNewPass">New password</label>
                                </div>
                                <div className="form-label-group">
                                    <input
                                        className="form-control"
                                        size="col-sm-10"
                                        type="password"
                                        id="inputConfirm"
                                        placeholder="Confirm password"
                                        onChange={handleConfirmPass}
                                        onKeyDown={handleKeyDown}
                                        required
                                    />
                                    <label htmlFor="inputConfirm">Re-type New Password</label>

                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-lg btn-primary btn-block text-uppercase"
                                    id="changePass"
                                    onClick={handleSubmit}
                                >Change Password
                                </button>

                            </form>
                        </div>
                        <p id="error-message"></p>

                    </div>

                </div>
            </div>
        </React.Fragment>
    );

}


export default ChangePassword;
