export const initialState = {
    selectedMRF: {},
    positions: {},
    users: {},
    hierarchies: {},
    branchName: {},
    branchLocation: {},


    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY1NTIzYjljMmNhZjAwMTUxMDQyNTIiLCJlbWFpbCI6ImpheWt1bWFyOTI0NkBnbWFpbC5jb20iLCJSb2xlIjoiU3VwZXItQWRtaW4iLCJpYXQiOjE2Mjc3MTMyODMsImV4cCI6MTYyNzc0OTI4M30.ed9d-niVvoSlzlNGhbrAElFuMcR79VkcmqSi7W0vJZs",
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
        case "CREATE APPROVAL":
            console.log("create approval")
            return {

            }
        default:
            return reducerState
    }
}
export default StateReducer;