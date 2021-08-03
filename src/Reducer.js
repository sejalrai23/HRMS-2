export const initialState = {
    selectedMRF: {},
    positions: {},
    users: {},
    hierarchies: {},
    branchName: {},
    branchLocation: {},
    selectedApproval: "",


    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGZiZjlmZTg2OGM0YTAwMTU0ZmQwY2YiLCJlbWFpbCI6InNhbmthbHAxNzI4QGdtYWlsLmNvbSIsIlJvbGUiOiJTdXBlci1BZG1pbiIsImlhdCI6MTYyNzk3NjE5MywiZXhwIjoxNjI4MDEyMTkzfQ.9uEnpf3p91I0EBS0wl2xa1zQz_ArN2PP62AeyYF5kqw",




    userRole: "",
}

const StateReducer = (reducerState, action) => {
    console.log("state ::", reducerState)
    switch (action.type) {
        case "USER_LOGIN":
            console.log("user_login")
            return {
                ...reducerState,
                token: action.token,
                userRole: action.role
            }
        case "VIEW_MRF":
            console.log("view_mrf")
            return {
                ...reducerState,
                selectedMRF: action.mrf,
                positions: action.positions,
                users: action.users,
                hierarchies: action.hierarchies,
                branchName: action.branchName,
                branchLocation: action.branchLocation
            }
        case "CREATE_MRF":
            console.log("create_mrf")
            return {
                ...reducerState,
                positions: action.positions,
                users: action.users,
                hierarchies: action.hierarchies,
                branchName: action.branchName,
                branchLocation: action.branchLocation
            }
        case "VIEW_APPROVAL":
            console.log("view approval")
            return {
                ...reducerState,
                selectedApproval: action.approvalID,

            }
        default:
            return reducerState
    }
}
export default StateReducer;