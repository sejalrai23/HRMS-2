import React from 'react';
import {
    CContainer,
    CRow,
    CCol
} from '@coreui/react'
import DashboardButtons from './DashboardButtons/DashboardButtons';

function MyDashboard(props) {
    return (
        <CContainer>
            <CRow className="d-flex justify-content-around align-items-center">
                <CCol><DashboardButtons colors="info" path="/mydashboard" title="DASHBOARD" /></CCol>
                <CCol><DashboardButtons colors="info" path="/userManager" title="SEARCH / ADD CANDIDATE" /></CCol>
                <CCol><DashboardButtons colors="info" path="/mrf" title="MRF" /></CCol>
                <CCol><DashboardButtons colors="info" path="#" title="LAYOFFS" /></CCol>
            </CRow>
            <CRow>
                <CCol><DashboardButtons colors="info" path="#" title="SOURCING CHANNELS" /></CCol>
                <CCol><DashboardButtons colors="info" path="#" title="VENDORS" /></CCol>
                <CCol><DashboardButtons colors="info" path="#" title="WALK-INS/HIRING EVENTS" /></CCol>
                <CCol><DashboardButtons colors="info" path="#" title="ORG-CHART" /></CCol>
            </CRow>
            <CRow>
                <CCol><DashboardButtons colors="info" path="#" title="PARSE RESUME THROUGH EXCEL" /></CCol>
                <CCol><DashboardButtons colors="info" path="#" title="PENDING JOININGS" /></CCol>
                <CCol><DashboardButtons colors="info" path="#" title="BATCHWISE JOININGS" /></CCol>
                <CCol><DashboardButtons colors="info" path="#" title="HIRING SOP's AND SLA's" /></CCol>
            </CRow>
            <CRow>
                <CCol><DashboardButtons colors="info" path="#" title="REMARKS" /></CCol>
                <CCol><DashboardButtons colors="info" path="/userManager" title="ADD/DELETE USER ACCOUNT" /></CCol>
                <CCol><DashboardButtons colors="info" path="/userManager" title="USER PROFILES" /></CCol>
                <CCol><DashboardButtons colors="info" path="#" title="PERFORMANCE" /></CCol>
            </CRow>
            <CRow className="justify-content-around align-items-center">
                <CCol><DashboardButtons colors="info" path="#" title="BGV REPORTS" /></CCol>
            </CRow>

        </CContainer >
    );
}

export default MyDashboard;