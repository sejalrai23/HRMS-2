import React, { useContext } from 'react';
import PropTypes from "prop-types";
// import AuthContext from "../../../AuthContext"
import { useStateValue } from "../../../StateProvider"
// import { SelectedMRF } from "./MRFform"


function EditMRFPage(props) {
    const [reducerState, dispatch] = useStateValue()
    // const rtx = useContext(AuthContext)
    // const rtx2 = useContext(SelectedMRF)\
    console.log("reducer STATE: ", reducerState)
    console.log("selectedMRF: ", reducerState.selectedMRF)
    return (
        <div>
            <h1>fjkdfndjfnjkds</h1>
            <h1>fjkdfndjfnjkds</h1>
            <h1>{reducerState.selectedMRF}</h1>
        </div>
    );
}
EditMRFPage.propTypes = {
    ItemID: PropTypes.string
}
export default EditMRFPage;