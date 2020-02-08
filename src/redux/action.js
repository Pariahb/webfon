export const changeLanguageStatus = status => ({
    type: 'LANGUAGE_STATUS',
    status
});
export const myStatus = status => ({
    type: 'MY_STATUS',
    status
});
export const showMainPage = status => ({
    type: 'SHOW_MAIN_PAGE',
    status
});
export const showCallPage = status => ({
    type: 'SHOW_CALL_PAGE',
    status
});
export const getContacts = status => ({
    type: 'GET_CONTACTS',
    status
});
export const changeRosterStatus = status => ({
    type: 'CHANGE_EACH_ROSTER_STATUS',
    status
});
export const pushRosterStatusItem = status => ({
    type: 'PUSH_ROSTER_STATUS_ITEM',
    status
});
export const setSelectedRoster = status => ({
    type: 'SET_SELECTED_ROSTER',
    status
});
export const checkRosterClicked = status => ({
    type: 'CHECK_ROSTER_CLICK',
    status
});
/*---------------Call App------------------*/
export const getDevicesData = status => ({
    type: 'GET_DEVICES_DATA',
    status
});
/*---------------Call App------------------*/
export const getUsersData = status => ({
    type: 'GET_USERS_DATA',
    status
});
export const getLoginData = status => ({
    type: 'GET_LOGIN_DATA',
    status
});
export const getCallFlowsData = status => ({
    type: 'GET_USER_CALLFLOWS_DATA',
    status
});
export const getCdrData = status => ({
    type: 'GET_CDRS_DATA',
    status
});
export const getTodayCdrData = status => ({
    type: 'GET_TODAY_CDRS_DATA',
    status
});
export const setLoadingStatus = status => ({
    type: 'SET_LOADING_STATUS',
    status
});
export const getNewMessage = status => ({
    type: 'GET_NEW_MESSAGE',
    status
});
export const pushHistoryMessages = status => ({
    type: 'PUSH_HISTORY_MESSAGES',
    status
});
export const fetchHistoryMessages = status => ({
    type: 'FETCH_HISTORY_MESSAGES',
    status
});
export const setCallType = status => ({
    type: 'SET_CALL_TYPE',
    status
});
export const showChangePassPage = status => ({
    type: 'SHOW_CHANGE_PASS_PAGE',
    status
});
export const messageAfterPassChanged = status => ({
    type: 'MSG_AFTER_PASS_CHANGE',
    status
});
export const saveOldPass = status => ({
    type: 'OLD_PASSWORD',
    status
});
export const changePassStatus = status => ({
    type: 'CHANGE_PASS_STATUS',
    status
});
export const setSelectedContactLog = status => ({
    type: 'SET_SELECTED_LOG_CONTACT',
    status
});
export const showLogDetailPage = status => ({
    type: 'SHOW_LOG_DETAIL_PAGE',
    status
});
export const getKazooContactList = status => ({
    type: 'GET_KAZOO_CONTACTS_LIST',
    status
});