import React, {useEffect} from "react";
import MainPage from "./components/chat/main-page";
import {useSelector} from "react-redux";
import Particles from 'react-particles-js';
import "./App.css";


const App = () => {
    const direction = useSelector(state => state.languageStatus)

    return (

        <div className={`App ${direction === "Fa" ? "rtl" : "ltr"}`}>
            <MainPage/>

        </div>

    )
};

export default App;
