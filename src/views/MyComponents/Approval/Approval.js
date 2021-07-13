
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../MRF/MRFform.css'
import { MDBDataTableV5 } from 'mdbreact';
import { CContainer, CRow, CCol, CBadge, CButton } from '@coreui/react'
import { AppFooter, AppHeader2 } from '../../../components/index';
import endPoints from "../../../utils/EndPointApi";




function Approval(props) {
    const [approvalMatrix, setApprovalMatrix] = useState([]);

    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJhMWU5N2ViMWE4N2EwZWRjMjYzMjgiLCJlbWFpbCI6InJpc2hhYmhAZ2Vla3NhdHdlYi5jb20iLCJSb2xlIjoiU3VwZXItQWRtaW4iLCJpYXQiOjE2MjU5MTEyMjcsImV4cCI6MTYyNTk0NzIyN30.mu3O8gn5iIyPq7UM2jtqclnrMu80C9Pi1L68R5G9Oec";


    const DataRows = []
    {
        approvalMatrix?.map(data => {
            // console.log(data)
            for (var i = 0; i < data.approversID.length; i++) {
                DataRows.push({
                    position: data.position, heirarchy: data.hierarchyID.name, branchname: data.branchID.name, cooling: data.coolingPeriod,
                    verificationstatus: data.verified, tatdate: data.tat,
                    // approverName: data.approversID[i]._id.name.firstName + "" + data.approversID[i]._id.name.lastName
                })
            }
        })
    }


    async function showApprovalMatrix(url) {
        // console.log("in show users")
        // setIsLoading(true)
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        });
        const Data = await response.json();
        // setIsLoading(false)
        // console.log(Data2);
        return Data
    }

    useEffect(() => {

        showApprovalMatrix(endPoints.showApprovalMatrix).then(Data => {
            setApprovalMatrix(Data)

        });

    }, [])
    // console.log(approvalMatrix);

    // console.log(DataRows)

    const rows = [
        {
            position: "data.position",
            heirarchy: "data.hierarchyID.name",
            branchname: "data.branchID.name",
            cooling: "data.coolingPeriod",
            verificationstatus: "data.verified",
            tatdate: "data.tat",
            approverName: "data.approversID[i]._id.name.firstName ",
        },
        {
            position: "data.position",
            heirarchy: "data.hierarchyID.name",
            branchname: "data.branchID.name",
            cooling: "data.coolingPeriod",
            verificationstatus: "data.verified",
            tatdate: "data.tat",
            approverName: "data.approversID[i]._id.name.firstName ",
        }
    ];



    const [datatable, setDatatable] = useState({
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
                field: 'cooling',
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
            // {
            //     label: '',
            //     field: 'id',
            //     sort: 'asc',
            //     width: 100
            // },
        ],


        rows: DataRows
        // [
        //     {

        //         position: 'System Architect',
        //         heirarchy: 'dep-1',
        //         branchname: 'Dwarka',
        //         date: '2011/04/25',
        //         verificationstatus: 'true',
        //         tatdate: '2011/04/25',
        //         approverName: "sejal",

        //         id: <Link to="/approvalform"><CButton>
        //             open
        //         </CButton>
        //         </Link>
        //     },
        //     {

        //         position: 'machine learning',
        //         heirarchy: 'dep-1',
        //         branchname: 'Dwarka',
        //         date: '2011/04/25',
        //         verificationstatus: 'true',
        //         tatdate: '2011/04/25',
        //         approverName: "sejal",

        //         id: <Link to="/approvalform"><CButton>
        //             open
        //         </CButton>
        //         </Link>
        //     },
        //     {

        //         position: 'full stack',
        //         heirarchy: 'dep-1',
        //         branchname: 'Dwarka',
        //         date: '2011/04/25',
        //         verificationstatus: 'true',
        //         tatdate: '2011/04/25',
        //         approverName: "sejal",

        //         id: <Link to="/approvalform"><CButton>
        //             open
        //         </CButton>
        //         </Link>
        //     },
        //     {

        //         position: 'web dev',
        //         heirarchy: 'dep-1',
        //         branchname: 'Dwarka',
        //         date: '2011/04/25',
        //         verificationstatus: 'true',
        //         tatdate: '2011/04/25',
        //         approverName: "sejal",

        //         id: <Link to="/approvalform"><CButton>
        //             open
        //         </CButton>
        //         </Link>
        //     },
        //     {

        //         position: ' Architect',
        //         heirarchy: 'dep-1',
        //         branchname: 'Dwarka',
        //         date: '2011/04/25',
        //         verificationstatus: 'true',
        //         tatdate: '2011/04/25',
        //         approverName: "sejal",

        //         id: <Link to="/approvalform"><CButton>
        //             open
        //         </CButton>
        //         </Link>
        //     },

        // ],
    });

    console.log(typeof (rows))


    console.log(typeof (DataRows))
    return (
        <div>
            {/* <AppSidebar /> */}
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeader2 />
                <div className="body flex-grow-1 px-3">
                    <CRow className="py-2 justify-content-between">
                        <CCol md={6} className="align-self-start align-items-center justify-content-center"><h2>CREATE | VIEW | DELETE - APPROVAL</h2></CCol>
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
export default Approval;