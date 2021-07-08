
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { MDBDataTableV5 } from 'mdbreact';
import {
    CButton, CCol, CForm, CFormControl, CRow, CFormLabel, CFormSelect, CFormCheck, CContainer,

} from '@coreui/react';
import { AppContent, AppSidebar, AppFooter, AppHeader, AppHeader2 } from '../../../components/index';

function Approval(props) {


    const [q, setQ] = React.useState("");



    const [datatable, setDatatable] = React.useState({
        columns: [
            {
                label: 'position',
                field: 'position',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Heirarchy',
                field: 'heirarchy',
                sort: 'asc',
                width: 50
            },


            {
                label: 'Branch Name',
                field: 'branchname',
                sort: 'asc',
                width: 50
            },
            {
                label: 'Cooling Period',
                field: 'date',
                sort: 'asc',
                width: 50
            },
            {
                label: 'Verified',
                field: 'verificationstatus',
                sort: 'asc',
                width: 100
            },
            {
                label: 'TAT',
                field: 'tatdate',
                sort: 'asc',
                width: 50
            },
            {
                label: 'Approver',
                field: 'approverName',
                sort: 'asc',
                width: 100
            },
            {
                label: '',
                field: 'id',
                sort: 'asc',
                width: 100
            },
        ],
        rows: [
            {

                position: 'System Architect',
                heirarchy: 'dep-1',
                branchname: 'Dwarka',
                date: '2011/04/25',
                verificationstatus: 'true',
                tatdate: '2011/04/25',
                approverName: "sejal",

                id: <Link to="/approvalform"><CButton>
                    open
                </CButton>
                </Link>
            },
            {

                position: 'machine learning',
                heirarchy: 'dep-1',
                branchname: 'Dwarka',
                date: '2011/04/25',
                verificationstatus: 'true',
                tatdate: '2011/04/25',
                approverName: "sejal",

                id: <Link to="/approvalform"><CButton>
                    open
                </CButton>
                </Link>
            },
            {

                position: 'full stack',
                heirarchy: 'dep-1',
                branchname: 'Dwarka',
                date: '2011/04/25',
                verificationstatus: 'true',
                tatdate: '2011/04/25',
                approverName: "sejal",

                id: <Link to="/approvalform"><CButton>
                    open
                </CButton>
                </Link>
            },
            {

                position: 'web dev',
                heirarchy: 'dep-1',
                branchname: 'Dwarka',
                date: '2011/04/25',
                verificationstatus: 'true',
                tatdate: '2011/04/25',
                approverName: "sejal",

                id: <Link to="/approvalform"><CButton>
                    open
                </CButton>
                </Link>
            },
            {

                position: ' Architect',
                heirarchy: 'dep-1',
                branchname: 'Dwarka',
                date: '2011/04/25',
                verificationstatus: 'true',
                tatdate: '2011/04/25',
                approverName: "sejal",

                id: <Link to="/approvalform"><CButton>
                    open
                </CButton>
                </Link>
            },

        ],
    });

    console.log(typeof (datatable.rows));

    // function search(rows) {
    //     return rows.filter((row) => row.position.toLowerCase().indexOf(q) > -1);
    // }

    return (

        <>
            <div>
                {/* <AppSidebar /> */}
                <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                    <AppHeader2 />
                    <div className="body flex-grow-1 px-3">
                        <CRow className="py-2 justify-content-between">
                            <CCol md={6} className="align-self-start align-items-center justify-content-center"><h2>VIEW APPROVAL</h2></CCol>

                        </CRow>
                        <hr />
                        <CContainer fluid className="justify-content-between">
                            <CRow>
                                <CCol md={2} className="filterbar align-self-start align-items-center justify-content-center">
                                    FILTER BAR
                                    <hr />
                                    {/* <CCol>
                                        <CRow>
                                            <CFormCheck id="flexCheckChecked" label="By Position" defaultChecked />

                                        </CRow>
                                        <hr />
                                        <CRow>
                                            <CFormCheck id="flexCheckChecked" label="By Department" defaultChecked />

                                        </CRow>
                                        <hr />
                                        <CRow>
                                            <CFormCheck id="flexCheckChecked" label="By Sub Department" defaultChecked />

                                        </CRow>
                                        <hr />
                                        <CRow>
                                            <CFormCheck id="flexCheckChecked" label="By  Branch Location" defaultChecked />

                                        </CRow>
                                        <hr />
                                        <CRow>
                                            <CFormCheck id="flexCheckChecked" label="By Branch Name" defaultChecked />

                                        </CRow>
                                        <hr />
                                        <CRow>
                                            <CFormCheck id="flexCheckChecked" label="By Cooling period" defaultChecked />

                                        </CRow>
                                        <CRow>
                                            <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
                                        </CRow>

                                    </CCol> */}
                                </CCol>
                                <CCol md={10} className="mainContent align-self-end align-items-center justify-content-center">
                                    <CContainer fluid >
                                        <MDBDataTableV5
                                            hover
                                            entriesOptions={[5, 20, 25]}
                                            entries={5}
                                            pagesAmount={4}
                                            data={datatable}
                                            searchTop
                                            searchBottom={false}

                                        />
                                    </CContainer>
                                </CCol>
                            </CRow>
                        </CContainer>
                    </div>
                    <AppFooter />
                </div>
            </div>
        </>
    );
}
export default Approval;