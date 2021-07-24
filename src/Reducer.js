export const initialState = {
    selectedMRF: {},
    positions: {},
    users: {},
    hierarchies: {},
    branchName: {},
    branchLocation: {},
    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY1NTIzYjljMmNhZjAwMTUxMDQyNTIiLCJlbWFpbCI6ImpheWt1bWFyOTI0NkBnbWFpbC5jb20iLCJSb2xlIjoiU3VwZXItQWRtaW4iLCJpYXQiOjE2MjcxMTQ4NjAsImV4cCI6MTYyNzE1MDg2MH0.yZovI5UpxcEAs6Z1HYpzffLdub5F-5Nsaz6nLP_FOaw",
}

const StateReducer = (reducerState, action) => {
    // console.log("abc")
    console.log("state ::", reducerState)
    // console.log("action: ", action)
    switch (action.type) {
        case "USER_LOGIN":
            // console.log("user_login")
            return {
                ...reducerState,
                token: action.token
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
        case "CREATE APPROVAL":
            console.log("create approval")
            return {

            }
        default:
            return reducerState
    }
}
export default StateReducer;