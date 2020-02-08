import React, {useEffect, useState} from "react";
import avatarImage from "../../../images/avatar.jpg";
import {useDispatch, useSelector} from "react-redux";
import RosterStatusDetector from "../roster-status-detector";
import $ from 'jquery';
import "./style.css";

const ContactItem = (props) => {
    const dispatch = useDispatch();
    const [userStatus, setUserStatus] = useState({})
    const selectedContact = useSelector(state => state.selectedContact);
    const rosterStatus = useSelector(state => state.rosterStatus);

    const handleRosterClick = (contact) => {
        dispatch({contact, type: "SET_SELECTED_ROSTER"});

    };
    useEffect(() => {
        let items = document.getElementsByClassName("item")
        console.log("items", items);
        $.each(items, function (i,item) {
            if(item.id === selectedContact){
                console.log("yyy", item)
                console.log("selectedContact", selectedContact);
                item.style.backgroundColor = "white";
            }else {
                item.style.backgroundColor = "transparent";

            }
        })
    })
    /*----------find status for specific user------------------*/
    const findRosterStatus = () => {
        const item = rosterStatus.filter(i => i.id === props.item.jid)[0]
        setUserStatus(item);
    };
    /*--------------/find status for specific user------------------*/


    useEffect(() => {
        findRosterStatus()
    }, [rosterStatus]);


    return (
        <React.Fragment>
            <div
                onClick={() => handleRosterClick(props.item.jid)}
                className="row item"
                id={props.item.jid}
            >
                <div className="avatar">
                    {
                        userStatus !== undefined ? <RosterStatusDetector status={userStatus.status}/> :
                            <span className="offline"></span>
                    }
                    <img alt="avatar" src={avatarImage}/>
                </div>
                <div className="right-side">
                    <div className="extension">
                        <p>{props.item.jid}</p>
                    </div>

                    <div className="contact-name">
                        <p>{props.item.name}</p>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );

};


export default ContactItem;
