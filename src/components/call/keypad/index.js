import React from "react";
import './style.css'

const KeyPad = () => {
    return (
        <React.Fragment>
            <div className="phone">
                <div className="row1">
                    <div className="col-md-12">
                        <input type="tel" name="name" id="telNumber" className="form-control tel" value=""/>
                        <div className="num-pad">
                            <div className="span4">
                                <div className="num">
                                    <div className="txt">
                                        1
                                    </div>
                                </div>
                            </div>
                            <div className="span4">
                                <div className="num">
                                    <div className="txt">
                                        2 <span className="small">
                                    <p>
                                        ABC</p>
                                </span>
                                    </div>
                                </div>
                            </div>
                            <div className="span4">
                                <div className="num">
                                    <div className="txt">
                                        3 <span className="small">
                                    <p>
                                        DEF</p>
                                </span>
                                    </div>
                                </div>
                            </div>
                            <div className="span4">
                                <div className="num">
                                    <div className="txt">
                                        4 <span className="small">
                                    <p>
                                        GHI</p>
                                </span>
                                    </div>
                                </div>
                            </div>
                            <div className="span4">
                                <div className="num">
                                    <div className="txt">
                                        5 <span className="small">
                                    <p>
                                        JKL</p>
                                </span>
                                    </div>
                                </div>
                            </div>
                            <div className="span4">
                                <div className="num">
                                    <div className="txt">
                                        6 <span className="small">
                                    <p>
                                        MNO</p>
                                </span>
                                    </div>
                                </div>
                            </div>
                            <div className="span4">
                                <div className="num">
                                    <div className="txt">
                                        7 <span className="small">
                                    <p>
                                        PQRS</p>
                                </span>
                                    </div>
                                </div>
                            </div>
                            <div className="span4">
                                <div className="num">
                                    <div className="txt">
                                        8 <span className="small">
                                    <p>
                                        TUV</p>
                                </span>
                                    </div>
                                </div>
                            </div>
                            <div className="span4">
                                <div className="num">
                                    <div className="txt">
                                        9 <span className="small">
                                    <p>
                                        WXYZ</p>
                                </span>
                                    </div>
                                </div>
                            </div>
                            <div className="span4">
                                <div className="num">
                                    <div className="txt">
                                        *
                                    </div>
                                </div>
                            </div>
                            <div className="span4">
                                <div className="num">
                                    <div className="txt">
                                        0 <span className="small">
                                    <p>
                                        +</p>
                                </span>
                                    </div>
                                </div>
                            </div>
                            <div className="span4">
                                <div className="num">
                                    <div className="txt">
                                        #
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix">
                        </div>
                        <a href="http://www.jquery2dotnet.com" className="btn btn-block flatbtn">CALL</a>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
};
export default KeyPad;
