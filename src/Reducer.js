export const initialState = {
    selectedMRF: "",
    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJhMWU5N2ViMWE4N2EwZWRjMjYzMjgiLCJlbWFpbCI6InJpc2hhYmhAZ2Vla3NhdHdlYi5jb20iLCJSb2xlIjoiU3VwZXItQWRtaW4iLCJpYXQiOjE2MjYxNTA3MDQsImV4cCI6MTYyNjE4NjcwNH0.PCR6nFb2hDdcgoX1DoOeAsJzsBI8eqTEgP6cP8WKZy4",
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
                selectedMRF: action.mrfID
            }
        default:
            return reducerState
    }
}
export default StateReducer;