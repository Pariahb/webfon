import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, ButtonGroup} from 'reactstrap';
import './style.css'

const RadioButtonList = () => {
    const status = useSelector(state => state.status);
    const $pres = useSelector(state => state.$pres);
    const connection = useSelector(state => state.connection);
    const dispatch = useDispatch();

    const setStatus = (s) => {
        connection.send($pres().c("show").t(s));
        dispatch({s, type: 'MY_STATUS'});
    };


    return (
        <div>
            <ButtonGroup>
                <Button color="primary" onClick={() => setStatus("chat")} active={status === "chat"}>Available for
                    chat</Button>
                <Button color="primary" onClick={() => setStatus("away")} active={status === "away"}>Away</Button>
                <Button color="primary" onClick={() => setStatus("dnd")} active={status === "dnd"}>Do Not
                    Disturb</Button>
                <Button color="primary" onClick={() => setStatus("xa")}
                        active={status === "xa"}>Away for long time</Button>
            </ButtonGroup>
        </div>
    );
}

export default RadioButtonList;
