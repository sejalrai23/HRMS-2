import React from 'react';
import { CRow, CContainer } from '@coreui/react'
import BranchManager from './views/MyComponents/BranchManager/BranchManager'
// import Hierarchy from './views/MyComponents/HierarchyManager/Hierarchy';
// import AddUserForm from './views/MyComponents/UserManager/AddUserForm';


function TryAnything(props) {
    return (
        <CContainer>
            <h1>Try anything here</h1>
            <hr />
            <CRow>
                {/* <Hierarchy /> */}
                {/* <AddUserForm /> */}
                <BranchManager />
            </CRow>
        </CContainer>
    );
}

export default TryAnything;