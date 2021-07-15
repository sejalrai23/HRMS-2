import React from 'react';
import {
    CContainer,
    CRow,
    CCol
} from '@coreui/react'
import DashboardButtons from './DashboardButtons/DashboardButtons';
// import { AppContent, AppSidebar, AppFooter, AppHeader2 } from '../../../components/index'
import { AppContent, AppSidebar, AppFooter, AppHeader2 } from '../../components/index'

function MyDashboard(props) {
    return (
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <AppHeader2 />
            <div className="body flex-grow-1 px-3">
                <CContainer>
                    <CRow className="d-flex justify-content-around align-items-center">
                        <CCol><DashboardButtons image="https://img.icons8.com/material-outlined/24/000000/dashboard.png" path="/mydashboard" title="DASHBOARD" /></CCol>
                        <CCol><DashboardButtons image="https://img.icons8.com/ios/50/000000/add-user-male.png" path="/userManager" title="SEARCH / ADD CANDIDATE" /></CCol>
                        <CCol><DashboardButtons image="info" path="/mrf" title="MRF" /></CCol>
                        <CCol><DashboardButtons image="info" path="#" title="LAYOFFS" /></CCol>
                    </CRow>
                    <CRow>
                        <CCol><DashboardButtons image="info" path="#" title="SOURCING CHANNELS" /></CCol>
                        <CCol><DashboardButtons image="info" path="#" title="VENDORS" /></CCol>
                        <CCol><DashboardButtons image="info" path="#" title="WALK-INS/HIRING EVENTS" /></CCol>
                        <CCol><DashboardButtons image="info" path="#" title="ORG-CHART" /></CCol>
                    </CRow>
                    <CRow>
                        <CCol><DashboardButtons image="https://img.icons8.com/ios/50/000000/open-resume.png" path="#" title="PARSE RESUME THROUGH EXCEL" /></CCol>
                        <CCol><DashboardButtons image="info" path="#" title="PENDING JOININGS" /></CCol>
                        <CCol><DashboardButtons image="info" path="#" title="BATCHWISE JOININGS" /></CCol>
                        <CCol><DashboardButtons image="info" path="#" title="HIRING SOP's AND SLA's" /></CCol>
                    </CRow>
                    <CRow>
                        <CCol><DashboardButtons image="info" path="#" title="REMARKS" /></CCol>
                        <CCol><DashboardButtons image="info" path="/userManager" title="ADD/DELETE USER ACCOUNT" /></CCol>
                        <CCol><DashboardButtons image="info" path="/userManager" title="USER PROFILES" /></CCol>
                        <CCol><DashboardButtons image="info" path="#" title="PERFORMANCE" /></CCol>
                    </CRow>
                    <CRow className="justify-content-around align-items-center">
                        <CCol><DashboardButtons colors="info" path="#" title="BGV REPORTS" /></CCol>
                    </CRow>
                </CContainer >
            </div>
            {/* <AppFooter /> */}
        </div>
    );
}

export default MyDashboard;