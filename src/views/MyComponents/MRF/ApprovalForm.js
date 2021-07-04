import React from 'react';
import { AppContent, AppSidebar, AppFooter, AppHeader, AppHeader2 } from '../../../components/index'
function ApprovalForm(props) {
    return (
        <div>
            {/* <AppSidebar /> */}
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeader2 />
                <div className="body flex-grow-1 px-3">
                    <h1>hello</h1>
                </div>
                <AppFooter />
            </div>
        </div>
    );
}
export default ApprovalForm;