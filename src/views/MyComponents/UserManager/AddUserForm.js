import React, { useState, useReducer } from 'react';
import "./AddUserForm.css"
import endPoints from 'src/utils/EndPointApi';
import { AiOutlineMinusCircle } from "react-icons/ai";
import {
    CButton, CCol, CForm, CFormControl, CRow, CFormLabel, CFormSelect, CFormCheck, CContainer,
    CTable, CTableHead, CTableBody, CTableHeaderCell, CTableDataCell, CTableRow,
    CSpinner, CModal, CModalHeader, CModalFooter, CModalTitle, CModalBody
} from '@coreui/react'


const InitialFormState = {
    name: {
        fName: "Jai",
        lName: "Sanghi",
    },
    uType: "",
    uRole: "",
    hierarchy: {
        hType: "",
        hName: "",
    },
    jType: "",
    diversity: "",
    email: "",
    designation: "",
    location: "",
    BID: ""
}

const formReducer = (formState, action) => {
    switch (action.type) {
        case "FNAME_INPUT":
            return {
                ...formState,
                fName: action.val
            }
        case "LNAME_INPUT":
            return {
                ...formState,
                lName: action.val
            }
        case "SELECT_UTYPE":
            return {
                ...formState,
                uType: action.val
            }
        case "SELECT_UROLE":
            return {
                ...formState,
                uRole: action.val
            }
        case "HTYPE_INPUT":
            return {
                ...formState,
                hType: action.val
            }
        case "HNAME_INPUT":
            return {
                ...formState,
                hName: action.val
            }
        case "JTYPE_INPUT":
            return {
                ...formState,
                jType: action.val
            }
        case "DIVERSITY_INPUT":
            return {
                ...formState,
                diversity: action.val
            }
        case "EMAIL_INPUT":
            return {
                ...formState,
                email: action.val
            }
        case "DESIGNATION_INPUT":
            return {
                ...formState,
                designation: action.val
            }
        case "LOCATION_INPUT":
            return {
                ...formState,
                location: action.val
            }
        case "BID_INPUT":
            return {
                ...formState,
                BID: action.val
            }
        default: return formState
    }
}

function AddUserForm(props) {
    const [filterBy, setFilter] = useState("fName")
    const [searchedItem, setSearchedItem] = useState()
    const [visible, setVisible] = useState(false)
    const [isLoading, setIsLoading] = useState()
    // const [userList, setUserList] = useState()
    const [formState, dispatchForm] = useReducer(formReducer, InitialFormState)

    const userList = [
        {
            name: {
                fName: "Jai",
                lName: "Sanghi",
            },
            uType: "admin",
            uRole: "admin",
            hierarchy: {
                hType: "Department",
                hName: "IT",
            },
            designation: "Intern",
            jType: "Internship",
            diversity: "Male",
            email: "jaykumar9246@gmail.com",
            location: "hyderabad",
            BID: "blah"
        },
        {
            name: {
                fName: "Jay",
                lName: "Sanghi",
            },
            uType: "admin",
            uRole: "admin",
            hierarchy: {
                hType: "Department",
                hName: "IT2",
            },
            designation: "Intern",
            jType: "Internship",
            diversity: "Male",
            email: "jay2kumar9246@gmail.com",
            location: "hyderabad",
            BID: "blah"
        }
    ]

    const searchInputChangeHandler = (event) => {
        setSearchedItem(event.target.value)
    }
    const searchHandler = (event) => {
        console.log("search", filterBy)
        let list = userList.filter(user => user.name.fName.toUpperCase().includes(searchedItem.toUpperCase()))
        switch (filterBy) {
            case "name.fName":
                list = userList.filter(user => user.name.fName.toUpperCase().includes(searchedItem.toUpperCase()))
                // setUserList(list)
                console.log(list)
                break;
            case "uType":
                list = userList.filter(user => user.uType.toUpperCase().includes(searchedItem.toUpperCase()))
                // setUserList(list)
                console.log(list)
                break;
            case "uRole":
                list = userList.filter(user => user.uRole.toUpperCase().includes(searchedItem.toUpperCase()))
                // setUserList(list)
                console.log(list)
                break;
            case "jType":
                list = userList.filter(user => user.jType.toUpperCase().includes(searchedItem.toUpperCase()))
                // setUserList(list)
                console.log(list)
                break;
            case "hierarchy.hType":
                list = userList.filter(user => user.hierarchy.hType.toUpperCase().includes(searchedItem.toUpperCase()))
                // setUserList(list)
                console.log(list)
                break;
            case "hierarchy.hName":
                list = userList.filter(user => user.hierarchy.hName.toUpperCase().includes(searchedItem.toUpperCase()))
                // setUserList(list)
                console.log(list)
                break;
            case "diversity":
                list = userList.filter(user => user.diversity.toUpperCase().includes(searchedItem.toUpperCase()))
                // setUserList(list)
                console.log(list)
                break;
            case "location":
                list = userList.filter(user => user.location.toUpperCase().includes(searchedItem.toUpperCase()))
                // setUserList(list)
                console.log(list)
                break;
            case "email":
                list = userList.filter(user => user.email.toUpperCase().includes(searchedItem.toUpperCase()))
                // setUserList(list)
                console.log(list)
                break;
            case "BID":
                list = userList.filter(user => user.BID.toUpperCase().includes(searchedItem.toUpperCase()))
                // setUserList(list)
                console.log(list)
                break;
        }
    }
    const clearHandler = (event) => {
        setSearchedItem("")
        setFilter("")
    }
    const selectedFilterByHandler = (event) => {
        setFilter(event.target.value)
    }
    const fNameChangeHandler = (event) => {
        // dispatchForm({ type: "FNAME_INPUT", val: event.target.value })
        console.log(event.target.value)
        console.log(formState.fName)
    };
    const lNameChangeHandler = (event) => {
        dispatchForm({ type: "LNAME_INPUT", val: event.target.value })
        console.log(event.target.value)
    };
    const selectedUserTypeHandler = (event) => {
        dispatchForm({ type: "SELECT_UTYPE", val: event.target.value })
        console.log(event.target.value)
    }
    const selectedUserRoleHandler = (event) => {
        dispatchForm({ type: "SELECT_UROLE", val: event.target.value })
        console.log(event.target.value)
    }
    const hirearchyTypeChangeHandler = (event) => {
        dispatchForm({ type: "HTYPE_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const hiearchyNameChangeHandler = (event) => {
        dispatchForm({ type: "HNAME_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const choosenJobTypeHandler = (event) => {
        dispatchForm({ type: "JTYPE_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const diversityHandler = (event) => {
        dispatchForm({ type: "DIVERSITY_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const emailChangeHandler = (event) => {
        dispatchForm({ type: "EMAIL_INPUT", val: event.target.value })
        console.log(event.target.value)
    };
    const designationChangeHandler = (event) => {
        dispatchForm({ type: "DESIGNATION_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const locationChangeHandler = (event) => {
        dispatchForm({ type: "LOCATION_INPUT", val: event.target.value })
        console.log(event.target.value)
    };
    const branchIDHandler = (event) => {
        dispatchForm({ type: "BID_INPUT", val: event.target.value })
        console.log(event.target.value)
    };

    const formSubmitHandler = (event) => {
        event.preventDefault()
        const newEmp = {
            name: {
                fName: formState.fName,
                lName: formState.lName,
            },
            uType: formState.uType,
            uRole: formState.uRole,
            hierarchy: {
                hType: formState.hType,
                hName: formState.hName,
            },
            jType: formState.jType,
            diversity: formState.diversity,
            email: formState.email,
            designation: formState.designation,
            location: formState.location,
            BID: formState.BID
        }
        console.log(newEmp)
        // postData(endPoints.addUser, {})
        //     .then(data => setUserList(data))
        event.target.reset()
    }

    const deleteUserHandler = (event) => {
        console.log(event.target.className.baseVal)
        const delUser = userList.filter(user => user.email === event.target.className.baseVal)
        console.log(delUser)
        // postData(endPoints.removeUser, delUser)
        //     .then(Data => {
        //         setUserList(Data)
        //         console.log("delete called data", Data)
        //         console.log("delete called branches", userList)
        //     })
    }

    // useEffect(() => {
    //     postData(endPoints.searchUser, {})
    //         .then(data => setUserList(data))
    // }, [])

    async function postData(url, data) {
        setIsLoading(true)
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const Data = await response.json();
        setIsLoading(false)
        return Data
    }


    return (
        <CContainer>
            <CRow className="mb-3">
                {/* <CForm inline> */}
                <CFormLabel htmlFor="SearchBar" className="col-sm-1 col-form-label align-items-center">
                    <h4><b>Search:</b></h4>
                </CFormLabel>
                <CCol sm="2">
                    <CFormSelect id="searchBy" onChange={selectedFilterByHandler} value={filterBy} required>
                        <option>search by...</option>
                        <option value="name.fName">First Name</option>
                        <option value="uType">User Type</option>
                        <option value="uRole">User Role</option>
                        <option value="jType">Job Type</option>
                        <option value="hierarchy.hType">Hierarchy</option>
                        <option value="hierarchy.hName">Hierarchy name</option>
                        <option value="diversity">diversity</option>
                        <option value="email">email address</option>
                        <option value="location">Location</option>
                        <option value="BID">Branch Name</option>
                    </CFormSelect>
                </CCol>
                <CCol sm="5">
                    <CFormControl
                        // size="lg"
                        value={searchedItem}
                        type="text"
                        id="SearchBar"
                        placeholder="search field"
                        onChange={searchInputChangeHandler}
                        required
                    />
                </CCol>
                <CCol md={1} className="searchBar">
                    <CButton type="submit" color="success" onClick={searchHandler}>Search</CButton>
                </CCol>
                {/* </CForm> */}
                <CCol md={1} className="searchBar">
                    <CButton type="submit" onClick={clearHandler}>Clear</CButton>
                </CCol>
                {/* <CCol md={1} className="loadBar">
                    {isLoading === true && <CSpinner color="primary" />}
                </CCol> */}
                <CCol md={2} className="add">
                    <CButton color="primary" onClick={() => setVisible(!visible)}>+ Add Branch</CButton>
                </CCol>
            </CRow>
            <CTable striped hover responsive color="light">
                <CTableHead color="primary">
                    <CTableRow >
                        <CTableHeaderCell className="text-center" scope="col"></CTableHeaderCell>
                        <CTableHeaderCell className="text-center" scope="col">First Name</CTableHeaderCell>
                        <CTableHeaderCell className="text-center" scope="col">Last Name</CTableHeaderCell>
                        <CTableHeaderCell className="text-center" scope="col">User Type</CTableHeaderCell>
                        <CTableHeaderCell className="text-center" scope="col">User Role</CTableHeaderCell>
                        <CTableHeaderCell className="text-center" scope="col">Hierarchy Type</CTableHeaderCell>
                        <CTableHeaderCell className="text-center" scope="col">Hierarchy Name</CTableHeaderCell>
                        <CTableHeaderCell className="text-center" scope="col">Job Type</CTableHeaderCell>
                        <CTableHeaderCell className="text-center" scope="col">Diversity</CTableHeaderCell>
                        <CTableHeaderCell className="text-center" scope="col">Email Address</CTableHeaderCell>
                        <CTableHeaderCell className="text-center" scope="col">Designation</CTableHeaderCell>
                        <CTableHeaderCell className="text-center" scope="col">Location</CTableHeaderCell>
                        <CTableHeaderCell className="text-center" scope="col">Branch ID</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {
                        userList.map((user, key) => {
                            return (
                                <CTableRow key={user.email} className="t_row">
                                    <CTableHeaderCell className="text-center" ><button className="remove_button" onClick={deleteUserHandler}><AiOutlineMinusCircle className={user.email} /></button></CTableHeaderCell>
                                    <CTableDataCell className="text-center" scope="col">{user.name.fName}</CTableDataCell>
                                    <CTableDataCell className="text-center" scope="col">{user.name.lName}</CTableDataCell>
                                    <CTableDataCell className="text-center" scope="col">{user.uType}</CTableDataCell>
                                    <CTableDataCell className="text-center" scope="col">{user.uRole}</CTableDataCell>
                                    <CTableDataCell className="text-center" scope="col">{user.hierarchy.hType}</CTableDataCell>
                                    <CTableDataCell className="text-center" scope="col">{user.hierarchy.hName}</CTableDataCell>
                                    <CTableDataCell className="text-center" scope="col">{user.jType}</CTableDataCell>
                                    <CTableDataCell className="text-center" scope="col">{user.diversity}</CTableDataCell>
                                    <CTableDataCell className="text-center" scope="col">{user.email}</CTableDataCell>
                                    <CTableDataCell className="text-center" scope="col">{user.designation}</CTableDataCell>
                                    <CTableDataCell className="text-center" scope="col">{user.location}</CTableDataCell>
                                    <CTableDataCell className="text-center" scope="col">{user.BID}</CTableDataCell>
                                </CTableRow>
                            )
                        })
                    }
                </CTableBody>
            </CTable>
            <CModal size="lg" alignment="center" visible={visible} backdrop={true}>
                <CModalHeader onDismiss={() => setVisible(false)}>
                    <CModalTitle>Add New Branch</CModalTitle>
                </CModalHeader>
                <CModalBody className="bg-light">
                    <CForm onSubmit={formSubmitHandler}>
                        <CRow className="mb-3">
                            <CFormLabel htmlFor="f_name" className="col-sm-2 col-form-label">
                                First Name
                            </CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="text"
                                    id="f_name"
                                    // placeholder="First Name"
                                    onChange={fNameChangeHandler}
                                    required
                                />
                            </CCol>
                            <CFormLabel htmlFor="l_name" className="col-sm-2 col-form-label">
                                Last Name
                            </CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="text"
                                    id="l_name"
                                    // placeholder="Last Name"
                                    onChange={lNameChangeHandler}
                                    required
                                />
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CFormLabel className="col-sm-2 col-form-label" htmlFor="user_type">
                                User Type:
                            </CFormLabel>
                            <CCol sm="4">
                                <CFormSelect id="user_type" required onChange={selectedUserTypeHandler}>
                                    <option>Choose...</option>
                                    <option value="admin">admin</option>
                                    <option value="recruiter">recruiter</option>
                                    <option value="vendor">vendor</option>
                                    <option value="employee">employee</option>
                                    <option value="interviewer">interviewer</option>
                                </CFormSelect>
                            </CCol>
                            <CFormLabel className="col-sm-2 col-form-label" htmlFor="user_role">
                                User Role:
                            </CFormLabel>
                            <CCol sm="4">
                                <CFormSelect id="user_role" required onChange={selectedUserRoleHandler}>
                                    <option>Choose...</option>
                                    <option value="Super-Admin">Super-Admin</option>
                                    <option value="admin">admin</option>
                                    <option value="HR">HR</option>
                                    <option value="Interviewer">Interviewer</option>
                                    <option value="Vendor">Vendor</option>
                                    <option value="BCGVerification">BCGVerification</option>
                                    <option value="Campus">Campus</option>
                                    <option value="Employee">Employee</option>
                                </CFormSelect>
                            </CCol>
                        </CRow>
                        {/* <hr /> */}
                        {/* <CFormLabel><b><u>Hierarchy</u></b></CFormLabel> */}
                        <CRow className="mb-3">
                            <CFormLabel className="col-sm-2 col-form-label" htmlFor="hirearchy_type">
                                Hierarchy Type:
                            </CFormLabel>
                            <CCol sm="4">
                                <CFormSelect id="hirearchy_type" required onChange={selectedUserTypeHandler}>
                                    <option>Choose...</option>
                                    <option value="Department">Department</option>
                                    <option value="Sub-Department">Sub-Department</option>
                                    <option value="Team">Team</option>
                                    <option value="Management">Management</option>
                                </CFormSelect>
                            </CCol>
                            <CFormLabel htmlFor="h_name" className="col-sm-2 col-form-label">
                                Hierarchy Name
                            </CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="text"
                                    id="h_name"
                                    // placeholder=""
                                    onChange={hiearchyNameChangeHandler}
                                    required
                                />
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CFormLabel className="col-sm-2 col-form-label" htmlFor="job_type">Job Type : </CFormLabel>
                            <CCol className="align-items-end">
                                <CFormCheck
                                    inline
                                    type="radio"
                                    name="job_type"
                                    id="job_type1"
                                    value="Internship"
                                    label="Internship"
                                    onChange={choosenJobTypeHandler}
                                    required
                                />
                                <CFormCheck
                                    inline
                                    type="radio"
                                    name="job_type"
                                    id="job_type2"
                                    value="Full-Time"
                                    label="Full-Time"
                                    onChange={choosenJobTypeHandler}
                                    required
                                />
                                <CFormCheck
                                    inline
                                    type="radio"
                                    name="job_type"
                                    id="job_type3"
                                    value="Temporary"
                                    label="Temporary"
                                    onChange={choosenJobTypeHandler}
                                    required
                                />
                            </CCol>
                            <CFormLabel className="col-sm-2 col-form-label" htmlFor="diversity">Diversity : </CFormLabel>
                            <CCol className="align-items-end">
                                <CFormCheck
                                    inline
                                    type="radio"
                                    name="diversity"
                                    id="diversity1"
                                    value="Physically Challenged"
                                    label="Physically Challenged"
                                    onChange={diversityHandler}
                                    required
                                />
                                <CFormCheck
                                    inline
                                    type="radio"
                                    name="diversity"
                                    id="diversity2"
                                    value="Female"
                                    label="Female"
                                    onChange={diversityHandler}
                                    required
                                />
                                <CFormCheck
                                    inline
                                    type="radio"
                                    name="diversity"
                                    id="diversity3"
                                    value="Male"
                                    label="Male"
                                    onChange={diversityHandler}
                                    required
                                />
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CFormLabel htmlFor="colFormLabel" className="col-sm-2 col-form-label">
                                Email Address
                            </CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="email"
                                    id="colFormLabel"
                                    placeholder=""
                                    required
                                    onChange={emailChangeHandler}
                                />
                            </CCol>
                            <CFormLabel htmlFor="colFormLabel2" className="col-sm-2 col-form-label">
                                Designation
                            </CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="text"
                                    id="colFormLabel2"
                                    placeholder=""
                                    required
                                    onChange={designationChangeHandler}
                                />
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CFormLabel htmlFor="colFormLabel" className="col-sm-2 col-form-label">
                                Location
                            </CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="text"
                                    id="colFormLabel"
                                    placeholder=""
                                    required
                                    onChange={locationChangeHandler}
                                />
                            </CCol>
                            <CFormLabel htmlFor="colFormLabel2" className="col-sm-2 col-form-label">
                                Branch ID
                            </CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="text"
                                    id="colFormLabel2"
                                    placeholder=""
                                    required
                                    onChange={branchIDHandler}
                                />
                            </CCol>
                        </CRow>
                        <br />
                        <CCol className="d-flex align-items-center justify-content-center">
                            <CButton type="submit" color="primary" >Add Employee</CButton>
                        </CCol>
                    </CForm>
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>
                        Close
                    </CButton>
                </CModalFooter>
            </CModal>
            <CContainer className="form_container">

            </CContainer >
        </CContainer>
    );
}

export default AddUserForm;