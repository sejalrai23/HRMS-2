import React, { useState, useReducer, useEffect } from 'react';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import "./AddUserForm.css"
import endPoints from 'src/utils/EndPointApi';
import { AiOutlineMinusCircle } from "react-icons/ai";
import {
    CButton, CCol, CForm, CFormControl, CRow, CFormLabel, CFormSelect, CFormCheck, CContainer,
    CTable, CTableHead, CTableBody, CTableHeaderCell, CTableDataCell, CTableRow,
    CSpinner, CModal, CModalHeader, CModalFooter, CModalTitle, CModalBody
} from '@coreui/react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated'


const InitialFormState = {
    fName: "",
    lName: "",
    uType: "",
    uRole: "",
    hType: "",
    hName: "",
    jType: "",
    diversity: "",
    email: "",
    designation: "",
    location: "",
    BID: ""
}

const formReducer = (formState, action) => {
    console.log("formstate", formState.hType)
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
    const [userList, setUserList] = useState()
    const [hierarchyList, setHierarchyList] = useState()
    const [branchList, setBranchList] = useState()
    const [formState, dispatchForm] = useReducer(formReducer, InitialFormState)

    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJhMWU5N2ViMWE4N2EwZWRjMjYzMjgiLCJlbWFpbCI6InJpc2hhYmhAZ2Vla3NhdHdlYi5jb20iLCJSb2xlIjoiU3VwZXItQWRtaW4iLCJpYXQiOjE2MjU2OTA4MDMsImV4cCI6MTYyNTcyNjgwM30.pjh7vt1uRzrj9SyGU_v-7NmbPiSRvwnZizYX61iBG6E";


    const branchNameOptions = []
    {
        branchList?.map(branch => {
            branchNameOptions.push({ label: branch.name, value: branch._id, location: branch.location })
        })
    }
    console.log("branchNameOptions", branchNameOptions)

    const branchLocationOptions = []
    {
        branchList?.map(branch => {
            branchLocationOptions.push({ label: branch.location, value: branch.location })
        })
    }
    console.log("branchLocationOptions", branchLocationOptions)

    const hierarchyNameOptions = []
    {
        hierarchyList?.map(hierarchy => {
            hierarchyNameOptions.push({ label: hierarchy.name, value: hierarchy._id, type: hierarchy.type })
        })
    }
    console.log("hierarchyNameOptions", hierarchyNameOptions)


    const clearHandler = (event) => {
        console.log("search cleared")
        setSearchedItem("")
        setFilter("")
        showData(endPoints.searchUser)
            .then(Data => {
                console.log("user:", Data)
                setUserList(Data)
            })
    }
    const searchInputChangeHandler = (event) => {
        setSearchedItem(event.target.value)
        console.log("setSearchedItem", event.target.value)
    }
    const selectedFilterByHandler = (event) => {
        setFilter(event.target.value)
        console.log("setFilter", event.target.value)
    }
    const searchFormHandler = (event) => {
        event.preventDefault()
        console.log("searching by : ", filterBy, searchedItem, userList)
        let list = userList.filter(user => user.name.firstName.toUpperCase().includes(searchedItem.toUpperCase()))
        switch (filterBy) {
            case "name.fName":
                list = userList.filter(user => user.name.firstName.toUpperCase().includes(searchedItem.toUpperCase()))
                setUserList(list)
                // console.log(list)
                break;
            case "uType":
                list = userList.filter(user => user.userType.toUpperCase().includes(searchedItem.toUpperCase()))
                setUserList(list)
                // console.log(list)
                break;
            case "uRole":
                list = userList.filter(user => user.userRole.toUpperCase().includes(searchedItem.toUpperCase()))
                setUserList(list)
                // console.log(list)
                break;
            case "jType":
                list = userList.filter(user => user.jobType.toUpperCase().includes(searchedItem.toUpperCase()))
                setUserList(list)
                // console.log(list)
                break;
            case "hierarchy.hType":
                list = userList.filter(user => user.hierarchyID.type.toUpperCase().includes(searchedItem.toUpperCase()))
                setUserList(list)
                // console.log(list)
                break;
            case "hierarchy.hName":
                list = userList.filter(user => user.hierarchyID.name.toUpperCase().includes(searchedItem.toUpperCase()))
                setUserList(list)
                // console.log(list)
                break;
            case "diversity":
                list = userList.filter(user => user.diversity.toUpperCase().includes(searchedItem.toUpperCase()))
                setUserList(list)
                // console.log(list)
                break;
            case "location":
                list = userList.filter(user => user.branchID.location.toUpperCase().includes(searchedItem.toUpperCase()))
                setUserList(list)
                // console.log(list)
                break;
            case "email":
                list = userList.filter(user => user.email.toUpperCase().includes(searchedItem.toUpperCase()))
                setUserList(list)
                // console.log(list)
                break;
            case "BID":
                list = userList.filter(user => user.branchID.name.toUpperCase().includes(searchedItem.toUpperCase()))
                setUserList(list)
                console.log(list)
                break;
        }
    }


    const fNameChangeHandler = (event) => {
        dispatchForm({ type: "FNAME_INPUT", val: event.target.value })
        console.log(event.target.value)
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
        dispatchForm({ type: "HNAME_INPUT", val: event.value })
        console.log(event.value)
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
        console.log(event, event.value)
        dispatchForm({ type: "LOCATION_INPUT", val: event.value })
    };
    const branchIDHandler = (event) => {
        dispatchForm({ type: "BID_INPUT", val: event.value })
        console.log(event.value)
    };


    const formSubmitHandler = (event) => {
        event.preventDefault()
        const newEmp = {
            name: {
                firstName: formState.fName,
                lastName: formState.lName,
            },
            userType: formState.uType,
            userRole: formState.uRole,
            hierarchyID: formState.hName,
            // hierarchy: {
            //     type: formState.hType,
            //     name: formState.hName,
            // },
            gender: "male",
            designation: formState.designation,
            jobType: formState.jType,
            diversity: formState.diversity,
            email: formState.email,
            location: formState.location,
            branchID: formState.BID
        }
        console.log(newEmp)
        postData(endPoints.addUser, newEmp)
            .then(data => {
                console.log(data)
                if (data.Success === true) {
                    showData(endPoints.searchUser)
                        .then(data => setUserList(data))
                }
            })
        event.target.reset()
    }


    const deleteUserHandler = (event) => {
        console.log(event.target.className.baseVal)
        const delUser = userList.filter(user => user.email === event.target.className.baseVal)
        console.log(delUser)
        removeData(endPoints.removeUser, delUser)
            .then(data => {
                console.log(data)
                if (data.Success === true) {
                    showData(endPoints.searchUser)
                        .then(data => setUserList(data))
                }
            })
    }



    async function postData(url, data) {
        console.log("in post data")
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
        console.log("in show data")
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
    async function removeData(url, data) {
        console.log("in remove data")
        // setIsLoading(true)
        const response = await fetch(url, {
            method: 'DELETE',
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
    useEffect(() => {
        console.log("in use effect")
        showData(endPoints.searchUser)
            .then(Data => {
                console.log("user:", Data)
                setUserList(Data)
            })
        showData(endPoints.searchHierarchy)
            .then(Data => {
                console.log("hierarchy:", Data)
                setHierarchyList(Data)
            })
        showData(endPoints.searchBranch)
            .then(Data => {
                console.log("branch:", Data)
                setBranchList(Data)
            })
    }, [])


    return (
        <CContainer>
            {console.log("hello")}
            <CRow className="mb-3">
                <CForm onSubmit={searchFormHandler}>
                    <CRow>
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
                                <option value="diversity">Diversity</option>
                                <option value="email">Email address</option>
                                <option value="location">Branch Location</option>
                                <option value="BID">Branch Name</option>
                            </CFormSelect>
                        </CCol>
                        <CCol sm="5">
                            <CFormControl
                                value={searchedItem}
                                type="text"
                                id="SearchBar"
                                placeholder="search field"
                                onChange={searchInputChangeHandler}
                                required
                            />
                        </CCol>
                        <CCol md={1} className="searchBar">
                            <CButton type="submit" color="success">Search</CButton>
                        </CCol>
                        <CCol md={1} className="searchBar">
                            <CButton type="reset" onClick={clearHandler}>Clear</CButton>
                        </CCol>
                        <CCol md={2} className="add">
                            <CButton color="primary" onClick={() => setVisible(!visible)}>+ Add User</CButton>
                        </CCol>
                    </CRow>
                </CForm>
                {/* <CCol md={1} className="loadBar">
                    {isLoading === true && <CSpinner color="primary" />}
                </CCol> */}
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
                        <CTableHeaderCell className="text-center" scope="col">Branch Location</CTableHeaderCell>
                        <CTableHeaderCell className="text-center" scope="col">Branch Name</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {
                        userList?.map((user, key) => {
                            console.log("user", user)
                            return (
                                <CTableRow key={user.email} className="t_row">
                                    <CTableHeaderCell className="text-center" ><button className="remove_button" onClick={deleteUserHandler}><AiOutlineMinusCircle className={user.email} /></button></CTableHeaderCell>
                                    <CTableDataCell className="text-center" scope="col">{user.name.firstName}</CTableDataCell>
                                    <CTableDataCell className="text-center" scope="col">{user.name.lastName}</CTableDataCell>
                                    <CTableDataCell className="text-center" scope="col">{user.userType}</CTableDataCell>
                                    <CTableDataCell className="text-center" scope="col">{user.userRole}</CTableDataCell>
                                    <CTableDataCell className="text-center" scope="col">{user.hierarchyID.type}</CTableDataCell>
                                    <CTableDataCell className="text-center" scope="col">{user.hierarchyID.name}</CTableDataCell>
                                    <CTableDataCell className="text-center" scope="col">{user.jobType}</CTableDataCell>
                                    <CTableDataCell className="text-center" scope="col">{user.diversity}</CTableDataCell>
                                    <CTableDataCell className="text-center" scope="col">{user.email}</CTableDataCell>
                                    <CTableDataCell className="text-center" scope="col">{user.designation}</CTableDataCell>
                                    <CTableDataCell className="text-center" scope="col">{user.branchID.location}</CTableDataCell>
                                    <CTableDataCell className="text-center" scope="col">{user.branchID.name}</CTableDataCell>
                                </CTableRow>
                            )
                        })
                    }
                </CTableBody>
            </CTable>
            <CModal size="xl" alignment="center" visible={visible} backdrop={true}>
                <CModalHeader onDismiss={() => setVisible(false)}>
                    <CModalTitle>Add New Employee</CModalTitle>
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
                        <CRow className="mb-3">
                            <CFormLabel className="col-sm-2 col-form-label" htmlFor="hirearchy_type">
                                Hierarchy Type
                            </CFormLabel>
                            <CCol sm="4">
                                <CFormSelect id="hirearchy_type" required onChange={hirearchyTypeChangeHandler}>
                                    <option>Choose...</option>
                                    <option value="Department">Department</option>
                                    <option value="Sub-Department">Sub-Department</option>
                                    <option value="Team">Team</option>
                                    <option value="Management">Management</option>
                                </CFormSelect>
                            </CCol>
                            <CFormLabel className="col-sm-2 col-form-label" htmlFor="h_name">
                                Hierarchy Name
                            </CFormLabel>
                            <CCol sm="4">
                                <Select
                                    options={hierarchyNameOptions.filter(hierarchy => hierarchy.type == formState.hType)}
                                    isSearchable
                                    // isClearable
                                    onChange={hiearchyNameChangeHandler}
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

                            <CFormLabel htmlFor="email" className="col-sm-2 col-form-label">Email Address</CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="email"
                                    id="email"
                                    placeholder=""
                                    required
                                    onChange={emailChangeHandler}
                                />
                            </CCol>

                            <CFormLabel htmlFor="designation" className="col-sm-2 col-form-label">Designation</CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="text"
                                    id="designation"
                                    placeholder=""
                                    required
                                    onChange={designationChangeHandler}
                                />
                            </CCol>

                        </CRow>
                        <CRow className="mb-3">

                            <CFormLabel htmlFor="location" className="col-sm-2 col-form-label">Branch Location</CFormLabel>
                            <CCol sm="4">
                                <Select
                                    options={branchLocationOptions}
                                    isSearchable
                                    // isClearable
                                    onChange={locationChangeHandler}
                                />
                            </CCol>

                            <CFormLabel className="col-sm-2 col-form-label" htmlFor="branchID">Branch Name</CFormLabel>
                            <CCol sm="4">
                                <Select
                                    options={branchNameOptions.filter(branch => branch.location == formState.location)}
                                    isSearchable
                                    // isClearable
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
                    <CButton color="secondary" onClick={() => setVisible(false)}>Close</CButton>
                </CModalFooter>
            </CModal>
        </CContainer >
    );
}

export default AddUserForm;