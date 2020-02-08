import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const StatusDetector = () => {
    const status = useSelector(state => state.status)
    const connection = useSelector(state => state.connection)
    const [statusColor, setStatusColor] = useState('')

    const changeStatusColor = () => {
        setStatusColor(status)
    };
    useEffect(() => {
        changeStatusColor()
    }, [status]);

    return (
        <React.Fragment>
            <span className={statusColor === "xa" ? "offline" : statusColor}>{connection.jid.split("@", 1)}</span>
        </React.Fragment>
    );
}


export default StatusDetector;
