import React from "react";
import "./style.css";

const MessagePopUp = (props) => {
    return (
        <React.Fragment>
            {
                props.sentMsg !== undefined ?  <div className={props.type === "rec" ? "rec-texts" : "sent-texts"}>
                    <div className={props.type === "rec" ? "rec" : "sent"}>
                        <p>
                            {props.type === "rec" ? null : <strong>me : </strong>}
                            {props.sentMsg}
                        </p>
                    </div>
                </div> : null
            }
        </React.Fragment>
    );
}


export default MessagePopUp;
