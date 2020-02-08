import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

const LoadingSpinner = () => {
    return (
        <React.Fragment>
            <FontAwesomeIcon icon={faSpinner} color="white"/>
        </React.Fragment>
    )

};
export default LoadingSpinner;
