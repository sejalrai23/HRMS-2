import React, { useState, useEffect } from 'react';
import "./BranchManager.css";
import {
    CButton, CCol, CForm, CFormControl, CModal, CModalBody, CModalHeader, CModalFooter, CModalTitle, CSpinner,
    CRow, CFormLabel, CContainer, CTable, CTableHead, CTableBody, CTableHeaderCell, CTableDataCell, CTableRow
} from '@coreui/react'
import { AiOutlineMinusCircle } from "react-icons/ai";
import endPoints from 'src/utils/EndPointApi';

function BranchManager(props) {
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpc2hhYmhAZ2Vla3NhdHdlYi5jb20iLCJSb2xlIjoiU3VwZXItQWRtaW4iLCJpYXQiOjE2MjU0MjA0MTEsImV4cCI6MTYyNTQ1NjQxMX0.lBPfeOFJKZYNWCH1eXlhimL3JMQDar2sidMizgBx43I'
    const [isLoading, setIsLoading] = useState()
    const [visible, setVisible] = useState(false)
    const [enteredBranchLocation, setEnteredBranchLocation] = useState()
    const [enteredBranchName, setEnteredBranchName] = useState()
    const [branches, setBranches] = useState()


    const BranchLocationChangeHandler = (event) => {
        setEnteredBranchLocation(event.target.value)
    }
    const BranchNameChangeHandler = (event) => {
        setEnteredBranchName(event.target.value)
    }


    const addBranchHandler = (event) => {
        console.log("in add branch handler")
        event.preventDefault()
        const newBranch = {
            location: enteredBranchLocation,
            name: enteredBranchName
        }
        postData(endPoints.addBranch, newBranch)
            .then(Data => {
                setBranches([...branches, Data])
            })
    }

    const deleteBranchHandler = (event) => {
        console.log("in delete branch handler")
        const delBranch = branches.filter(branch => branch._id === event.target.className.baseVal)
        removeData(endPoints.removeBranch, delBranch)
            .then(data => {
                console.log(data)
                if (data.Success === true) {
                    showData(endPoints.searchBranch)
                        .then(data => setBranches(data))
                }
            })
    }

    const postData = async (url, data) => {
        console.log("in post data")
        setIsLoading(true)
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(data)
        });
        const Data = await response.json();
        setIsLoading(false)
        console.log("post API CALLED DATA", Data)
        return Data
    }
    const showData = async (url) => {
        console.log("in show data")
        setIsLoading(true)
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        });
        const Data = await response.json();
        setIsLoading(false)
        console.log("show API CALLED DATA", Data)
        return Data
    }
    const removeData = async (url, data) => {
        console.log("in remove data")
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(data)
        });
        const Data = await response.json();
        setIsLoading(false)
        console.log("delete API CALLED DATA", Data)
        return Data
    }

    useEffect(() => {
        console.log("in use effect")
        showData(endPoints.searchBranch)
            .then(Data => {
                setBranches(Data)
            })
    }, [])

    return (
        <CContainer>
            <CRow className="justify-content-between">
                <CCol xs={10}>
                    <h2><b>Manage branches here</b></h2>
                    <CCol md={1} className="searchBar">
                        {isLoading === true && <CSpinner color="primary" />}
                    </CCol>
                </CCol>
                <CCol><CButton color="primary" onClick={() => setVisible(!visible)}>+ Add Branch</CButton></CCol>
            </CRow>
            <CContainer>
                <CTable small striped hover responsive="md" color="light">
                    <CTableHead color="primary">
                        <CTableRow>
                            <CTableHeaderCell scope="col">Branch Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Branch Location</CTableHeaderCell>
                            <CTableHeaderCell scope="col-xs"></CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {
                            branches?.map((branch, key) => {
                                return (
                                    <CTableRow key={branch.name} className="t_row">
                                        <CTableDataCell>{branch.name}</CTableDataCell>
                                        <CTableDataCell>{branch.location}</CTableDataCell>
                                        <CTableDataCell><button className="remove_button" onClick={deleteBranchHandler}><AiOutlineMinusCircle className={branch._id} /></button></CTableDataCell>
                                    </CTableRow>
                                )
                            })
                        }
                    </CTableBody>
                </CTable>
                <CModal alignment="center" visible={visible}>
                    <CModalHeader onDismiss={() => setVisible(false)}>
                        <CModalTitle>Add New Branch</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm onSubmit={addBranchHandler}>
                            <CRow className="mb-3">
                                <CFormLabel htmlFor="colFormLabel" className="col-sm-3 col-form-label">Branch Location:</CFormLabel>
                                <CCol sm="9">
                                    <CFormControl
                                        type="text"
                                        id="newBranch_location"
                                        placeholder=""
                                        onChange={BranchLocationChangeHandler}
                                    />
                                </CCol>
                            </CRow>
                            <CRow className="mb-3">

                                <CFormLabel htmlFor="colFormLabel" className="col-sm-3 col-form-label">Branch Name:</CFormLabel>
                                <CCol sm="9">
                                    <CFormControl
                                        type="text"
                                        id="newBranch_name"
                                        placeholder=""
                                        onChange={BranchNameChangeHandler}
                                    />
                                </CCol>
                            </CRow>
                            <CButton type="submit" onClick={() => {
                                setVisible(false);
                            }} >Add Branch</CButton>
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => setVisible(false)}>
                            Close
                        </CButton>
                    </CModalFooter>
                </CModal>
            </CContainer>
        </CContainer>
    );
}

export default BranchManager;