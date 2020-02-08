import React from "react";

const RosterStatusDetector = (props) => {

    return (
        <React.Fragment>
            <span className={props.status === "xa" ? "offline" : props.status}></span>
        </React.Fragment>
    );
}


export default RosterStatusDetector;
