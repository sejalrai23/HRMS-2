export const initialState = {
    selectedMRF: {},
    positions: {},
    users: {},
    hierarchies: {},
    branchName: {},
    branchLocation: {},
    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJhMWU5N2ViMWE4N2EwZWRjMjYzMjgiLCJlbWFpbCI6InJpc2hhYmhAZ2Vla3NhdHdlYi5jb20iLCJSb2xlIjoiU3VwZXItQWRtaW4iLCJpYXQiOjE2MjYyNTcwMDAsImV4cCI6MTYyNjI5MzAwMH0.yHiqJQPZ6620Q1fdOiv6yX3xP9BihDgyMEYgDo8Bfow",
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
        default:
            return reducerState
    }
}
export default StateReducer;