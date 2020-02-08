import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown'
import "./style.css"
const DropDownMenu = () => {
    const $pres = useSelector(state => state.$pres);
    const connection = useSelector(state => state.connection);
    const dispatch = useDispatch();

    const setStatus = (s) => {
        connection.send($pres().c("show").t(s));
        dispatch({s, type: 'MY_STATUS'});
    };

    return (
        <React.Fragment>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown">

                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setStatus("chat")} >online</Dropdown.Item>
                    <Dropdown.Item onClick={() => setStatus("away")} >away</Dropdown.Item>
                    <Dropdown.Item onClick={() => setStatus("dnd")} >do not disturb</Dropdown.Item>
                    <Dropdown.Item onClick={() => setStatus("xa")} >Away for long time</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>


        </React.Fragment>
    );
}


export default DropDownMenu;


