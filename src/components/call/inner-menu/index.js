import React from "react";
import KeyPad from "../keypad";
import ContactList from "../contact-list";
import MainPage from "../main-page";
import './style.css'

const InnerMenu = () => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-3 sub-menu">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                         aria-orientation="vertical">
                        <a className="nav-link active" id="v-pills-calls-tab" data-toggle="pill" href="#v-pills-calls"
                           role="tab" aria-controls="v-pills-calls" aria-selected="false">تاریخچه تماس ها</a>
                        <a className="nav-link" id="v-pills-contacts-tab" data-toggle="pill"
                           href="#v-pills-contacts"
                           role="tab" aria-controls="v-pills-contacts" aria-selected="true">مخاطبین</a>
                        {/*<KeyPad/>*/}
                    </div>
                </div>
                <div className="col-9 scrollbar scrollbar-primary pt-3 flex-sm-nowrap">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade" id="v-pills-contacts" role="tabpanel"
                             aria-labelledby="v-pills-contacts-tab">
                            <ContactList/>
                        </div>
                        <div className="tab-pane fade force-overflow  show active" id="v-pills-calls" role="tabpanel"
                             aria-labelledby="v-pills-calls-tab">
                            <MainPage/>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default InnerMenu;
