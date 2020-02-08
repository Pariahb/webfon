import React from "react";

const RegisterDevice = () => {
    return (

        <React.Fragment>
            <button type="text">Register Device</button>
            <input type="email" className="form-control" aria-describedby="deviceName"
                   placeholder="Enter Your Sip username"/>
            <input type="password" className="form-control"  aria-describedby="passWord"
                   placeholder="Enter Your Sip pasword"/>
        </React.Fragment>
    )
};

export default RegisterDevice;
