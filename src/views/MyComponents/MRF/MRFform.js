import React, { useState, useEffect, useReducer, createContext } from 'react';
import endPoints from 'src/utils/EndPointApi';
import { Link } from 'react-router-dom'
import './MRFform.css'
import { BsEyeFill } from "react-icons/bs";
import { MDBDataTableV5 } from 'mdbreact';
import {
    CContainer, CRow, CCol, CBadge, CButton, CModal, CModalHeader, CModalFooter, CModalTitle, CModalBody,
    CForm, CFormControl, CFormLabel, CFormSelect, CFormCheck, CInputGroup, CInputGroupText
} from '@coreui/react'
import { AppFooter, AppHeader2 } from '../../../components/index'
// import EditMRFPage from './EditMRFPage';
// import AuthContext from "../../../AuthContext"
import { useStateValue } from "../../../StateProvider"

export default function MRFform(props) {
    const [reducerState, dispatch] = useStateValue()
    const token = reducerState.token
    const [mrfList, setMRFList] = useState()

    const showButtonHandler = (event) => {
        console.log("event : ", event.target.id)
        console.log("reducerState::::::: ", reducerState)
        console.log("event id: ", event.target.id)
        dispatch({
            type: "VIEW_MRF",
            mrfID: event.target.id
        })
        // console.log(selectedMRF)
    }
    {/* <BsEyeFill className={item._id} id={item._id} /> */ }
    const tableRows = []
    {
        mrfList?.map(item => {
            // console.log("item:", item)
            tableRows.push({
                showButton: <Link to="/EditMrfPage"><CButton id={item._id} onClick={showButtonHandler}>Show MRF</CButton></Link>,
                position_id: item.designation.positionID.position,
                position_type: item.designation.positionType,
                hierarchy: item.hierarchyID.type + ": " + item.hierarchyID.name,
                repoting_manager: item.reportingManager.name.firstName + " " + item.reportingManager.name.lastName,
                startDate: item.startDate.toString().slice(0, 10),
                endDate: item.endDate.toString().slice(0, 10),
                diversity: item.diversity,
                job_type: item.jobType,
                job_location: item.branchID.name + ", " + item.branchID.location
            })
        })
    }

    const dataTable = {
        columns: [
            {
                label: '',
                field: 'showButton',
                width: 90,
            },
            {
                label: 'Position Name',
                field: 'position_id',
                width: 170,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                label: 'Type',
                field: 'position_type',
                width: 100,
            },
            {
                label: 'Hierarchy',
                field: 'hierarchy',
                width: 200,
            },
            {
                label: 'Repoting Manager',
                field: 'repoting_manager',
                sort: 'disabled',
                width: 200,
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
                width: 100,
            },
            {
                label: 'Job Type',
                field: 'job_type',
                sort: 'disabled',
                width: 150,
            },
            {
                label: 'Job Location',
                field: 'job_location',
                sort: 'disabled',
                width: 200,
            },

        ],
        rows: tableRows
    }

    async function postData(url, data) {
        // setIsLoading(true)
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(data)
        });
        const Data = await response.json();
        // setIsLoading(false)
        return Data
    }
    async function showData(url) {
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
        return Data
    }
    useEffect(() => {
        // console.log("in use effect")
        showData(endPoints.searchMrf)
            .then(Data => {
                // console.log("mrfList:", Data)
                setMRFList(Data)
            })
    }, [])
    console.log("reducerState::::::: ", reducerState)
    // console.log("selected MRF: ", viewMRF)
    return (
        // <SelectedMRF.Provider value={viewMRF}>
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
                                        // striped
                                        fullPagination
                                        entriesOptions={[5, 20, 25]}
                                        entries={5}
                                        // bordered
                                        scrollX
                                        searchTop
                                        searchBottom={false}
                                        data={dataTable}
                                    />;
                                </CContainer>
                            </CCol>
                        </CRow>
                    </CContainer>
                </div>
                <AppFooter />
            </div>
        </div >
        // </SelectedMRF.Provider >
    );
}