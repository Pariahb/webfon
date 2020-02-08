const initialState = {
    status: "chat",
    connection: new window.Strophe.Connection(
        "http://77.104.116.225:5280/http-bind"
    ),
    $pres: window.$pres,
    $iq: window.$iq,
    $msg: window.$msg,
    strophe: window.Strophe,
    showMainPage: false,
    showCallPage: false,
    showChangePasswordPage: false,
    contacts: [],
    rosterStatus: [],
    selectedContact: '',
    rosterClicked: false,
    sendLastActivity: false,
    devicesData: [],
    loginData: [],
    callFlowsData: [],
    cdrsData: [],
    userData: [],
    loadingStatus: true,
    newMessage: '',
    chatLog: [],
    callType: "",
    successMessage: "",
    oldPass: "",
    changeStatus: false,
    selectedLogContact: '',
    showLogDetailPage : false,
    contactsList: [],
    languageStatus: "",

};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LANGUAGE_STATUS': {
            return {
                ...state,
                languageStatus: action.languageStatus
            };
        }
        case 'MY_STATUS': {
            return {
                ...state,
                status: action.s
            };
        }
        case 'SHOW_MAIN_PAGE': {
            return {
                ...state,
                showMainPage: action.showMainPage
            };
        }
        case 'SHOW_LOG_DETAIL_PAGE': {
            return {
                ...state,
                showLogDetailPage: action.showLogDetailPage
            };
        }
        case 'SHOW_CHANGE_PASS_PAGE': {
            return {
                ...state,
                showChangePasswordPage: action.showChangePasswordPage
            };
        }
        case 'SHOW_CALL_PAGE': {

            return {
                ...state,
                showCallPage: action.showPage
            };
        }
        case 'GET_CONTACTS': {
            return {
                ...state,
                contacts: action.contacts
            };
        }
        case 'CHANGE_EACH_ROSTER_STATUS': {

            return {
                ...state,
                rosterStatus: state.rosterStatus.map(
                    (content, i) => content.id === action.rosterStatusItem.id ? {
                            ...content,
                            status: action.rosterStatusItem.status
                        }
                        : content
                )
            }

        }
        case 'PUSH_ROSTER_STATUS_ITEM': {
            let rostersArray = state.rosterStatus;
            rostersArray.push(action.rosterStatusItem)
            return {
                ...state,
                rosterStatus: rostersArray
            }
        }
        case 'SET_SELECTED_ROSTER': {
            return {
                ...state,
                selectedContact: action.contact
            };
        }
        case 'CHECK_ROSTER_CLICK': {

            return {
                ...state,
                rosterClicked: action.rosterClicked
            };
        }
        case 'GET_DEVICES_DATA': {
            return {
                ...state,
                devicesData: action.devicesData
            }
        }
        case 'GET_USERS_DATA': {
            return {
                ...state,
                userData: action.userData
            }
        }
        case 'GET_LOGIN_DATA': {
            return {
                ...state,
                loginData: action.loginData
            }
        }
        case 'GET_USER_CALLFLOWS_DATA': {
            return {
                ...state,
                callFlowsData: action.callFlowsData
            }
        }
        case 'GET_CDRS_DATA': {

            return {
                ...state,
                cdrsData: action.cdrsData
            }
        }
        case 'GET_TODAY_CDRS_DATA': {
            return {
                ...state,
                todayCdrs: action.todayCdrs
            }
        }
        case 'SET_CALL_TYPE': {
            return {
                ...state,
                callType: action.callType
            }
        }
        case 'SET_LOADING_STATUS': {
            return {
                ...state,
                loadingStatus: action.loadingStatus
            }
        }
        case 'OLD_PASSWORD': {
            return {
                ...state,
                oldPass: action.oldPass
            }
        }
        case 'GET_NEW_MESSAGE': {
            return {
                ...state,
                newMessage: action.newMessage
            }
        }
        case 'FETCH_HISTORY_MESSAGES': {

            return {
                ...state,
                chatLog: action.historyMessages
            }

        }
        case 'MSG_AFTER_PASS_CHANGE': {
            return {
                ...state,
                successMessage: action.successMessage
            }

        }
        case 'CHANGE_PASS_STATUS': {
            return {
                ...state,
                changeStatus: action.changeStatus
            }

        }
        case 'PUSH_HISTORY_MESSAGES': {
            let historyArray = state.chatLog;
            state.chatLog.push(action.newMessages);
            return {
                ...state,
                chatLog: [...state.chatLog, state.chatLog]
            }
        }
        case 'SET_SELECTED_LOG_CONTACT': {

            return {
                ...state,
                selectedLogContact: action.selectedLogContact
            };
        }
        case 'GET_KAZOO_CONTACTS_LIST': {

            return {
                ...state,
                contactsList: action.contactsList
            };
        }
        default:
            return state;
    }
};
export default reducer;