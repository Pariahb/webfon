import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import LogItem from "../log-item";

const GroupedLog = () => {
    const cdrsData = useSelector(state => state.cdrsData);
    const jalali = require('moment-jalaali');

    const _renderLogs = (group) => {
        let key;
        return Object
            .keys(group)
            .map((key, index) => (

                <div className="col-4 grouped" key={index}>
                    <p>{key}</p>
                    {
                        [group[key].reduce((mp, o) => {
                            if (JSON.stringify([o.direction === "outbound"])) {
                                key = JSON.stringify([o.direction, o.from]);
                            } else {
                                key = JSON.stringify([o.direction, o.to]);
                            }
                            if (!mp.has(key)) mp.set(key, {...o, count: 0});
                            mp.get(key).count++;
                            return mp;
                        }, new Map).entries()].map((item, i) => (
                            <div className="all" key={i}>
                                {Array.from(item, ([key, value]) =>
                                    <LogItem key={key} item={value}/>
                                )}
                            </div>
                        ))
                    }
                </div>
            ));
    };

    return (
        <React.Fragment>
            {
                _renderLogs(cdrsData)
            }
        </React.Fragment>
    );

};


export default GroupedLog;
