import React, { useState, useReducer } from 'react';
import { Link } from 'react-router-dom'
import './MRFform.css'
import { MDBDataTableV5 } from 'mdbreact';
import { CContainer, CRow, CCol, CBadge, CButton } from '@coreui/react'
import { AppFooter, AppHeader2 } from '../../../components/index'

function MRFform(props) {
    const [datatable, setDatatable] = useState({
        columns: [
            {
                label: '',
                field: 'showButton',
                width: 90,
            },
            {
                label: 'Position ID',
                field: 'position_id',
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                label: 'Position type',
                field: 'position_type',
                width: 150,
            },
            {
                label: 'Hierarchy Type',
                field: 'hierarchy_type',
                width: 150,
            },
            {
                label: 'Hierarchy Name',
                field: 'hierarchy_name',
                sort: 'asc',
                width: 150,
            },
            {
                label: 'Repoting Manager',
                field: 'repoting_manager',
                sort: 'asc',
                width: 150,
            },
            {
                label: 'Start date',
                field: 'startDate',
                sort: 'disabled',
                width: 150,
            },
            {
                label: 'End date',
                field: 'endDate',
                sort: 'disabled',
                width: 150,
            },
            {
                label: 'Diversity',
                field: 'diversity',
                sort: 'disabled',
                width: 150,
            },
            {
                label: 'Job Type',
                field: 'job_type',
                sort: 'disabled',
                width: 150,
            },
        ],
        rows: [
            {
                showButton: <CButton className="">Show</CButton>,
                position_id: 'System Architect',
                position_type: 'Edinburgh',
                hierarchy_type: '61',
                hierarchy_name: '61',
                repoting_manager: '61',
                startDate: '2011/04/25',
                endDate: '2011/04/25',
                diversity: '61',
                job_type: '$320',
            },
            {
                showButton: <CButton className="">Show</CButton>,
                position_id: 'System Architect',
                position_type: 'Edinburgh',
                hierarchy_type: '61',
                hierarchy_name: '61',
                repoting_manager: '61',
                startDate: '2011/04/25',
                endDate: '2011/04/25',
                diversity: '61',
                job_type: '$320',
            },
            {
                showButton: <CButton className="">Show</CButton>,
                position_id: 'System Architect',
                position_type: 'Edinburgh',
                hierarchy_type: '61',
                hierarchy_name: '61',
                repoting_manager: '61',
                startDate: '2011/04/25',
                endDate: '2011/04/25',
                diversity: '61',
                job_type: '$320',
            },
            {
                showButton: <CButton className="">Show</CButton>,
                position_id: 'System Architect',
                position_type: 'Edinburgh',
                hierarchy_type: '61',
                hierarchy_name: '61',
                repoting_manager: '61',
                startDate: '2011/04/25',
                endDate: '2011/04/25',
                diversity: '61',
                job_type: '$320',
            },
            {
                showButton: <CButton className="">Show</CButton>,
                position_id: 'System Architect',
                position_type: 'Edinburgh',
                hierarchy_type: '61',
                hierarchy_name: '61',
                repoting_manager: '61',
                startDate: '2011/04/25',
                endDate: '2011/04/25',
                diversity: '61',
                job_type: '$320',
            },
            {
                showButton: <CButton className="">Show</CButton>,
                position_id: 'System Architect',
                position_type: 'Edinburgh',
                hierarchy_type: '61',
                hierarchy_name: '61',
                repoting_manager: '61',
                startDate: '2011/04/25',
                endDate: '2011/04/25',
                diversity: '61',
                job_type: '$320',
            },

        ],
    });



    return (
        <div>
            {/* <AppSidebar /> */}
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeader2 />
                <div className="body flex-grow-1 px-3">
                    <CRow className="py-2 justify-content-between">
                        <CCol md={6} className="align-self-start align-items-center justify-content-center"><h2>CREATE | VIEW | DELETE - MRF</h2></CCol>
                        <CCol md={2} className="align-self-end align-items-center justify-content-center"><Link to="/CreateMRFPage"><CButton color="primary">+ CREATE NEW MRF</CButton></Link></CCol>
                    </CRow>
                    <hr />
                    <CContainer fluid className="justify-content-between">
                        <CRow>
                            <CCol md={2} className="filterbar align-self-start align-items-center justify-content-center">
                                FILTER BAR
                            </CCol>
                            <CCol md={10} className="mainContent align-self-end align-items-center justify-content-center">
                                <CContainer fluid >
                                    <MDBDataTableV5
                                        small
                                        hover
                                        striped
                                        fullPagination
                                        entriesOptions={[5, 20, 25]}
                                        entries={5}
                                        // bordered
                                        scrollX
                                        searchTop
                                        searchBottom={false}
                                        data={datatable}
                                    />;
                                </CContainer>
                            </CCol>
                        </CRow>
                    </CContainer>
                </div>
                <AppFooter />
            </div>
        </div>
    );
}
export default MRFform;