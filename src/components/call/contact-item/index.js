import React from "react";
import avatarImage from "../../../images/avatar.jpg";
import styles from "./style.module.css"

const ContactItem = (props) => {

    return (
        <React.Fragment>
            <div className={styles.contactItem + " col-3"}>
                <img className={styles.avatar} alt="avatar" src={avatarImage}/>
                <div className={styles.right}>
                    <span className={styles.name}>{props.item.name}</span>
                    <span className={styles.number}>{props.item.internal_number}</span>
                    <span className={styles.jobTitle}></span>
                    <span>Call</span>
                </div>
            </div>
        </React.Fragment>
    )
};
export default ContactItem;
