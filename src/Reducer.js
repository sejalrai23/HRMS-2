export const initialState = {
    selectedMRF: {},
    positions: {},
    users: {},
    hierarchies: {},
    branchName: {},
    branchLocation: {},
    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGYwMDE4NzA1MzA4MDAwMTU5MzA0ZDQiLCJlbWFpbCI6InNlamFscmFpMjNAZ21haWwuY29tIiwiUm9sZSI6IlN1cGVyLUFkbWluIiwiaWF0IjoxNjI2MzUzOTA4LCJleHAiOjE2MjYzODk5MDh9.z0t2KEWMStBi0vvh_IzWDIaNH_r4ucqy_Ulhfid-z8M",
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