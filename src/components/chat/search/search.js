import React, {useEffect, useState} from "react";
import MessagePopUp from "../message-popup";
import {useSelector} from "react-redux";


const Search = (props) => {
    const $iq = useSelector(state => state.$iq)
    const selectedContact = useSelector(state => state.selectedContact)
    const connection = useSelector(state => state.connection)

    const [filtered, setFiltered] = useState([]);
    const [searched, checkSearched] = useState(false)
    const handleChange = (e) => {

        // Variable to hold the original version of the list
        let currentList = [];
        // Variable to hold the filtered list before putting into state
        let newList = [];

        // If the search bar isn't empty
        if (e.target.value !== "") {
            // Assign the original list to currentList
            const searchQuery = $iq({
                type: "get",
                from: connection.jid,
                to: selectedContact,
                id: 'search1'
            }).c("query", {xmlns: "connection"});
            connection.send(searchQuery)
            checkSearched(true)
            currentList = props.items;
            console.log("currentList", currentList)
            // Use .filter() to determine which items should be displayed
            // based on the search terms
            newList = currentList.filter(item => {
                // change current item to lowercase
                const lc = item.text.toLowerCase();
                // change search term to lowercase
                const filter = e.target.value.toLowerCase();
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
                return lc.includes(filter);
            });
        } else {
            // If the search bar is empty, set newList to original task list
            newList = props.items;
        }
        // Set the filtered state based on what our rules added to newList
        setFiltered(newList);

    };
    useEffect(() => {
        let chatDiv = document.querySelector(".archive");
        chatDiv.scrollTo(0, chatDiv.scrollHeight);
    }, [filtered]);
    return (
        <React.Fragment>
            <div>

                <input type="text" className="input" onChange={handleChange} placeholder="Search..."/>
            </div>
            <div className="archive">

                <ul>
                    {searched ?

                        filtered.map((item, i) => <li key={i}>
                            <MessagePopUp
                                key={i}
                                sentMsg={item.text}
                                type={item.type}
                            />
                        </li>)
                        :
                        props.items.map((item, i) => {
                            return (
                                <MessagePopUp
                                    key={i}
                                    sentMsg={item.text}
                                    type={item.type}
                                />
                            );
                        })
                    }

                </ul>
            </div>

        </React.Fragment>
    )
}


export default Search;
