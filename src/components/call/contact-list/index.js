import React from "react";
import styles from "./contact-list.module.css"
import {useSelector} from "react-redux";
import ContactItem from "../contact-item";
import LogItem from "../log-item";

const ContactList = () => {
    const contacts = useSelector(state => state.contactsList);


    // console.log("contacts data", data);
    let data = contacts.item !== undefined ? contacts.item[0].data.reduce((r, e) => {
        // get first letter of name of current element
        let group = e.name[0];
        // if there is no property in accumulator with this letter create it
        if (!r[group]) r[group] = {group, children: [e]};
        // if there is push current element to children array for that letter
        else r[group].children.push(e);
        // return accumulator
        return r;
    }, {}) : null;
    const _renderContacts = () => {
        return (
            <div className="contactBox">
                {
                    data !== undefined ? data !== null ? Object.values(data).map((item, i) => (
                        <div className={styles.categoryBox} key={i}>
                            <p className={styles.title}>{item.group}</p>
                            <div className={styles.category}>
                                {item.children.map((item, index) => (
                                <ContactItem item={item} key={index}/>
                            ))}
                            </div>

                        </div>
                    )) : null : null

                }
            </div>
        )
    };
    return (
        <React.Fragment>
            <p className={styles.tabTitle}>مخاطبین</p>

            {
                _renderContacts()

            }
        </React.Fragment>
    )
};
export default ContactList;