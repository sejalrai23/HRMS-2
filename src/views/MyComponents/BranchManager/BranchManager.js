import React, { useState, useEffect } from 'react';
import "./BranchManager.css";
import {
    CButton, CCol, CForm, CFormControl, CModal, CModalBody, CModalHeader, CModalFooter, CModalTitle,
    CRow, CFormLabel, CContainer, CTable, CTableHead, CTableBody, CTableHeaderCell, CTableDataCell, CTableRow
} from '@coreui/react'
import { AiOutlineMinusCircle } from "react-icons/ai";
import endPoints from 'src/utils/EndPointApi';

function BranchManager(props) {

    const [isLoading, setIsLoading] = useState()
    const [visible, setVisible] = useState(false)
    const [enteredBranchLocation, setEnteredBranchLocation] = useState()
    const [enteredBranchName, setEnteredBranchName] = useState()
    const [branches, setBranches] = useState()

    // const branches = [
    //     {
    //         id: 'AB1',
    //         name: "Branch 1"
    //     },
    //     {
    //         id: 'AB2',
    //         name: "Branch 2"
    //     },
    //     {
    //         id: 'AB3',
    //         name: "Branch 3"
    //     },
    //     {
    //         id: 'AB1',
    //         name: "Branch 1"
    //     },
    //     {
    //         id: 'AB2',
    //         name: "Branch 2"
    //     },
    //     {
    //         id: 'AB3',
    //         name: "Branch 3"
    //     },
    // ]
    const BranchLocationChangeHandler = (event) => {
        setEnteredBranchLocation(event.target.value)
    }
    const BranchNameChangeHandler = (event) => {
        setEnteredBranchName(event.target.value)
    }
    const addBranchHandler = (event) => {
        event.preventDefault()
        const newBranch = {
            location: enteredBranchLocation,
            name: enteredBranchName
        }
        console.log("new Branch: ", newBranch)
        postData(endPoints.addBranch, newBranch)
            .then(Data => {
                setIsLoading(true)
                setBranches([...branches, Data])
            })
    }

    const deleteBranchHandler = (event) => {
        console.log(event.target.className.baseVal)
        const delBranch = branches.filter(branch => branch._id === event.target.className.baseVal)
        console.log(delBranch)
        postData(endPoints.removeBranch, delBranch)
            .then(Data => {
                setBranches(Data)
                console.log("delete called data", Data)
                console.log("delete called branches", branches)
            })
    }

    const postData = async (url, data) => {
        setIsLoading(true)
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpc2hhYmhAZ2Vla3NhdHdlYi5jb20iLCJSb2xlIjoiU3VwZXItQWRtaW4iLCJpYXQiOjE2MjQ1NTI1NjEsImV4cCI6MTYyNDU4ODU2MX0.mWT66Vb1ibuIbXBjQrrjARETMNBLwmfqOueOsXOJPgE"
            },
            body: JSON.stringify(data)
        });
        const Data = await response.json();
        console.log("API CALLED DATA", Data)
        console.log(typeof (Data))
        return Data
    }

    useEffect(() => {
        postData(endPoints.searchBranch, {})
            .then(Data => {
                debugger
                setBranches(Data)
                setIsLoading(false)
            })
    }, [])

    useEffect(() => {
        setIsLoading(false)
    }, [branches])



    return isLoading ? <></> : (
        <CContainer>
            <CRow className="justify-content-between">
                <CCol xs={10}><h2><b>Manage branches here</b></h2></CCol>
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