import React, { useState, useEffect, useReducer } from 'react';
import "./MRFform.css"
import { AppContent, AppSidebar, AppFooter, AppHeader2 } from '../../../components/index'
import { IoIosArrowBack } from "react-icons/io";
import {
    CRow, CCol, CButton, CForm, CFormControl, CFormLabel, CFormSelect, CFormCheck, CInputGroup, CInputGroupText
} from '@coreui/react'
import { Link } from 'react-router-dom'
import endPoints from 'src/utils/EndPointApi';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated'


const InitialFormState = {
    positionID: "",
    position_type: "",
    replacement_id: "",
    hierarchyType: "",
    // hierarchyName: "",
    hierarchyID: "",
    skillsRequired: [],
    reporting_manager: "",
    department_head: "",
    sub_dep_head: "",
    branch_location: "",
    branch_name: "",
    budget: "",
    jd_attachment: "",
    age: "",
    rel_exp: "",
    total_exp: "",
    education: "",
    diversity: "",
    start_date: "",
    end_date: "",
    job_type: "",
    status: "inactive",
    requirement: "",
    remarks: ""
}

const formReducer = (formState, action) => {
    switch (action.type) {
        case "POSID_INPUT":
            console.log("inside reducer", action.val)
            return {
                ...formState,
                positionID: action.val
            }
        case "POSTYPE_INPUT":
            return {
                ...formState,
                position_type: action.val
            }
        case "REPID_INPUT":
            return {
                ...formState,
                replacement_id: action.val
            }
        case "HTYPE_INPUT":
            return {
                ...formState,
                hierarchyType: action.val
            }
        case "HNAME_INPUT":
            return {
                ...formState,
                hierarchyID: action.val
            }
        case "SKILLS_INPUT":
            return {
                ...formState,
                skillsRequired: [...action.val]
            }
        case "REPMAN_INPUT":
            return {
                ...formState,
                reporting_manager: action.val
            }
        case "DEPHEAD_INPUT":
            return {
                ...formState,
                department_head: action.val
            }
        case "SUBHEAD_INPUT":
            return {
                ...formState,
                sub_dep_head: action.val
            }
        case "BLOC_INPUT":
            return {
                ...formState,
                branch_location: action.val
            }
        case "BNAME_INPUT":
            return {
                ...formState,
                branch_name: action.val
            }
        case "BUDGET_INPUT":
            return {
                ...formState,
                budget: action.val
            }
        case "JOBDESC_INPUT":
            return {
                ...formState,
                jd_attachment: action.val
            }
        case "AGE_INPUT":
            return {
                ...formState,
                age: action.val
            }
        case "RELEXP_INPUT":
            return {
                ...formState,
                rel_exp: action.val
            }
        case "TOTEXP_INPUT":
            return {
                ...formState,
                total_exp: action.val
            }
        case "EDUCATION_INPUT":
            return {
                ...formState,
                education: action.val
            }
        case "DIVERSITY_INPUT":
            return {
                ...formState,
                diversity: action.val
            }
        case "JTYPE_INPUT":
            return {
                ...formState,
                job_type: action.val
            }
        case "SDATE_INPUT":
            return {
                ...formState,
                start_date: action.val
            }
        case "EDATE_INPUT":
            return {
                ...formState,
                end_date: action.val
            }
        case "STATUS_INPUT":
            return {
                ...formState,
                status: action.val
            }
        case "REMARKS_INPUT":
            return {
                ...formState,
                remarks: action.val
            }
        case "REQ_INPUT":
            return {
                ...formState,
                requirement: action.val
            }
        case "RESET":
            return {
                ...formState,
                InitialFormState,
                hierarchyID: ""
            }
        default: return formState
    }
}


function CreateMRFPage(props) {
    const [formState, dispatchForm] = useReducer(formReducer, InitialFormState)
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJhMWU5N2ViMWE4N2EwZWRjMjYzMjgiLCJlbWFpbCI6InJpc2hhYmhAZ2Vla3NhdHdlYi5jb20iLCJSb2xlIjoiU3VwZXItQWRtaW4iLCJpYXQiOjE2MjU2OTA4MDMsImV4cCI6MTYyNTcyNjgwM30.pjh7vt1uRzrj9SyGU_v-7NmbPiSRvwnZizYX61iBG6E";

    const [userList, setUserList] = useState()
    const [hierarchyList, setHierarchyList] = useState()
    const [branchList, setBranchList] = useState()

    const userNameOptions = []
    {
        userList?.map(user => {
            userNameOptions.push({ label: user.name.firstName + " " + user.name.lastName, value: user._id })
        })
    }
    console.log("userNameOptions", userNameOptions)
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


    console.log('hello0000000000000000000000000000000000000', formState)
    const positionIDChangeHandler = (event) => {
        dispatchForm({ type: "POSID_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const posTypeChangeHandler = (event) => {
        dispatchForm({ type: "POSTYPE_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const ReplacementIDChangeHandler = (event) => {
        dispatchForm({ type: "REPID_INPUT", val: event.value })
        console.log(event.value)
    }
    const hTypeChangeHandler = (event) => {
        dispatchForm({ type: "HTYPE_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const hNameChangeHandler = (event) => {
        dispatchForm({ type: "HNAME_INPUT", val: event.value })
        console.log(event.value)
    }
    const skillsChangeHandler = (event) => {
        console.log("event", event)
        dispatchForm({ type: "SKILLS_INPUT", val: event })
    }
    const repManChangeHandler = (event) => {
        dispatchForm({ type: "REPMAN_INPUT", val: event.value })
        console.log(event.value)
    }
    const depHeadChangeHandler = (event) => {
        dispatchForm({ type: "DEPHEAD_INPUT", val: event.value })
        console.log(event.value)
    }
    const subHeadChangeHandler = (event) => {
        dispatchForm({ type: "SUBHEAD_INPUT", val: event.value })
        console.log(event.value)
    }
    const locationChangeHandler = (event) => {
        dispatchForm({ type: "BLOC_INPUT", val: event.value })
        console.log(event.value)
    }
    const branchNameChangeHandler = (event) => {
        dispatchForm({ type: "BNAME_INPUT", val: event.value })
        console.log(event.value)
    }
    const budgetChangeHandler = (event) => {
        dispatchForm({ type: "BUDGET_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const jDescChangeHandler = (event) => {
        dispatchForm({ type: "JOBDESC_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const ageChangeHandler = (event) => {
        dispatchForm({ type: "AGE_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const hQualChangeHandler = (event) => {
        dispatchForm({ type: "EDUCATION_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const relExpChangeHandler = (event) => {
        dispatchForm({ type: "RELEXP_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const totExpChangeHandler = (event) => {
        dispatchForm({ type: "TOTEXP_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const diversityHandler = (event) => {
        dispatchForm({ type: "DIVERSITY_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const choosenJobTypeHandler = (event) => {
        dispatchForm({ type: "JTYPE_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const sDateChangeHandler = (event) => {
        dispatchForm({ type: "SDATE_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const eDateChangeHandler = (event) => {
        dispatchForm({ type: "EDATE_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const remarksChangeHandler = (event) => {
        dispatchForm({ type: "REMARKS_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const requirementChangeHandler = (event) => {
        dispatchForm({ type: "REQ_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const addMrfHandler = (event) => {
        event.preventDefault()
        const newMRF = {
            designation: {
                positionID: formState.positionID,
                position_type: formState.position_type,
                replacement_id: formState.replacement_id,
            },
            hierarchyID: formState.hierarchyID,
            skillsRequired: formState.skillsRequired,
            reporting_manager: formState.reporting_manager,
            department_head: formState.department_head,
            sub_dep_head: formState.sub_dep_head,
            location: formState.branch_name,
            budget: formState.budget,
            jd_attachment: formState.jd_attachment,
            specifications: {
                age: formState.age,
                rel_exp: formState.rel_exp,
                total_exp: formState.total_exp,
                education: formState.education,
            },
            diversity: formState.diversity,
            start_date: formState.start_date,
            end_date: formState.end_date,
            job_type: formState.job_type,
            status: formState.status,
            candidate: {
                requirement: formState.requirement,
            },
            remarks: formState.remarks,
        }
        console.log(newMRF)
        // dispatchForm({ type: "RESET" })
        // postData(endPoints.addUser, {})
        //     .then(data => setUserList(data))
        event.target.reset()
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
        <div>
            {/* <AppSidebar /> */}
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeader2 />
                <div className="body flex-grow-1 px-3">
                    <CRow className="pt-2 justify-content-between bg-light">
                        <CCol md={6} className="d-flex align-self-start align-items-center"><Link to="/mrf"><CButton color="light"><IoIosArrowBack /></CButton></Link><h3>Create Job Opening</h3></CCol>
                        <CCol md={1} className="align-self-end align-items-center justify-content-center"><CButton color="primary">Save</CButton></CCol>
                    </CRow>
                    <CForm onSubmit={addMrfHandler} className="form bg-white">
                        <h4><b>Position</b></h4>


                        <CRow className="mb-3">
                            <CFormLabel htmlFor="pos_id" className="col-sm-2 col-form-label">Position ID</CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="text"
                                    id="pos_id"
                                    onChange={positionIDChangeHandler}
                                    required
                                />
                            </CCol>

                            <CFormLabel className="col-sm-2 col-form-label" htmlFor="pos_type">Position Type : </CFormLabel>
                            <CCol className="align-items-end">
                                <CFormCheck
                                    inline
                                    type="radio"
                                    name="pos_type"
                                    id="position_type1"
                                    value="New"
                                    label="New"
                                    onChange={posTypeChangeHandler}
                                    required
                                />
                                <CFormCheck
                                    inline
                                    type="radio"
                                    name="pos_type"
                                    id="position_type2"
                                    value="Replacement"
                                    label="Replacement"
                                    onChange={posTypeChangeHandler}
                                    required
                                />
                            </CCol>
                        </CRow>


                        <CRow className="mb-3">
                            <CFormLabel htmlFor="rep_name" className="col-md-2 col-form-label">Replacement for</CFormLabel>
                            <CCol sm="4">
                                <Select
                                    options={userNameOptions}
                                    isSearchable
                                    // isClearable
                                    onChange={ReplacementIDChangeHandler}
                                    required
                                />
                            </CCol>
                            {/* <CCol sm="4">
                                <CFormControl
                                    type="text"
                                    id="rep_name"
                                    onChange={ReplacementIDChangeHandler}
                                    required
                                />
                            </CCol> */}

                        </CRow>


                        <br />
                        <h4><b>Position Details</b></h4>


                        <CRow className="mb-3">
                            <CFormLabel className="col-sm-2 col-form-label" htmlFor="h_type">
                                Hierarchy Type:
                            </CFormLabel>
                            <CCol sm="4">
                                <CFormSelect id="h_type" required onChange={hTypeChangeHandler}>
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
                                <Select
                                    options={hierarchyNameOptions.filter(hierarchy => hierarchy.type == formState.hierarchyType)}
                                    isSearchable
                                    isClearable
                                    onChange={hNameChangeHandler}
                                    required
                                />
                            </CCol>
                            {/* <CCol sm="4">
                                <CFormControl
                                    type="text"
                                    id="h_name"
                                    onChange={hNameChangeHandler}
                                    required
                                />
                            </CCol> */}
                        </CRow>


                        <CRow className="mb-3">
                            <CFormLabel htmlFor="rep_man" className="col-sm-2 col-form-label">Reporting Manager</CFormLabel>
                            <CCol sm="4">
                                <Select
                                    options={userNameOptions}
                                    isSearchable
                                    // isClearable
                                    onChange={repManChangeHandler}
                                    required
                                />
                            </CCol>
                            {/* <CCol sm="4">
                                <CFormControl
                                    type="text"
                                    id="rep_man"
                                    onChange={repManChangeHandler}
                                    required
                                />
                            </CCol> */}

                            <CFormLabel htmlFor="dep_head" className="col-sm-2 col-form-label">Department Head</CFormLabel>
                            <CCol sm="4">
                                <Select
                                    options={userNameOptions}
                                    isSearchable
                                    // isClearable
                                    onChange={depHeadChangeHandler}
                                    required
                                />
                            </CCol>
                            {/* <CCol sm="4">
                                <CFormControl
                                    type="text"
                                    id="dep_head"
                                    onChange={depHeadChangeHandler}
                                    required
                                />
                            </CCol> */}
                        </CRow>


                        <CRow className="mb-3">
                            <CFormLabel htmlFor="sub_head" className="col-md-2 col-form-label">Sub-Deartment Head</CFormLabel>
                            <CCol sm="4">
                                <Select
                                    options={userNameOptions}
                                    isSearchable
                                    // isClearable
                                    onChange={subHeadChangeHandler}
                                    required
                                />
                            </CCol>
                            {/* <CCol sm="4">
                                <CFormControl
                                    type="text"
                                    id="sub_head"
                                    onChange={subHeadChangeHandler}
                                    required
                                />
                            </CCol> */}

                            {/* <CFormLabel htmlFor="location" className="col-md-2 col-form-label">location</CFormLabel>
                            <CCol sm="4">
                                <Select
                                    options={branchLocationOptions}
                                    isSearchable
                                    // isClearable
                                    onChange={locationChangeHandler}
                                    required
                                />
                            </CCol> */}
                            {/* <CCol sm="4">
                                <CFormControl
                                    type="text"
                                    id="location"
                                    onChange={locationChangeHandler}
                                    required
                                />
                            </CCol> */}
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
                                    options={branchNameOptions.filter(branch => branch.location == formState.branch_location)}
                                    isSearchable
                                    // isClearable
                                    onChange={branchNameChangeHandler}
                                />
                            </CCol>

                        </CRow>

                        <br />
                        <h4><b>Job Details</b></h4>
                        <CInputGroup className="mb-2">
                            <CFormLabel className="col-md-2 col-form-label" htmlFor="j_desc">Job Description</CFormLabel>
                            <CFormControl type="file" id="j_desc" onChange={jDescChangeHandler} />
                        </CInputGroup>


                        <CRow className="mb-3">
                            <CFormLabel htmlFor="age" className="col-md-2 col-form-label">Age</CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="number"
                                    id="age"
                                    onChange={ageChangeHandler}
                                    required
                                />
                            </CCol>

                            <CFormLabel htmlFor="h_qual" className="col-md-2 col-form-label">Highest Qualification</CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="text"
                                    id="h_qual"
                                    onChange={hQualChangeHandler}
                                    required
                                />
                            </CCol>
                        </CRow>


                        <CRow classname="mb-3">
                            <CFormLabel htmlFor="skills" className="col-sm-2 col-form-label">Skills required :</CFormLabel>
                            {/* <CCol className="mb-2">
                                <CFormControl
                                    component="textarea"
                                    rows="1"
                                    id="skills"
                                    onChange={skillsChangeHandler}
                                    required
                                />
                            </CCol> */}
                            <CCol className="mb-2">
                                <CreatableSelect
                                    isMulti
                                    onChange={skillsChangeHandler}
                                // options={[]}
                                />
                            </CCol>
                        </CRow>


                        <CRow className="mb-3">
                            <CFormLabel htmlFor="rel_exp" className="col-md-2 col-form-label">Relavant Experience</CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="number"
                                    id="rel_exp"
                                    onChange={relExpChangeHandler}
                                    required
                                />
                            </CCol>

                            <CFormLabel htmlFor="tot_exp" className="col-md-2 col-form-label">Total Experience</CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="number"
                                    id="tot_exp"
                                    onChange={totExpChangeHandler}
                                    required
                                />
                            </CCol>
                        </CRow>


                        <CRow Classname="mb-3">
                            <CFormLabel className="col-sm-2 col-form-label" htmlFor="diversity">Diversity : </CFormLabel>
                            <CCol className="align-items-end">
                                <CFormCheck
                                    inline
                                    type="radio"
                                    name="diversity"
                                    id="diversity1"
                                    value="General"
                                    label="General"
                                    onChange={diversityHandler}
                                    required
                                />
                                <CFormCheck
                                    inline
                                    type="radio"
                                    name="diversity"
                                    id="diversity2"
                                    value="Women"
                                    label="Women"
                                    onChange={diversityHandler}
                                    required
                                />
                                <CFormCheck
                                    inline
                                    type="radio"
                                    name="diversity"
                                    id="diversity3"
                                    value="Physically Challenged"
                                    label="Physically Challenged"
                                    onChange={diversityHandler}
                                    required
                                />
                                <CFormCheck
                                    inline
                                    type="radio"
                                    name="diversity"
                                    id="diversity4"
                                    value="Visually Challenged"
                                    label="Visually Challenged"
                                    onChange={diversityHandler}
                                    required
                                />
                            </CCol>

                            <CFormLabel className="col-sm-2 col-form-label" htmlFor="j_type">Job Type : </CFormLabel>
                            <CCol className="align-items-end">
                                <CFormCheck
                                    inline
                                    type="radio"
                                    name="j_type"
                                    id="job_type1"
                                    value="Internship"
                                    label="Internship"
                                    onChange={choosenJobTypeHandler}
                                    required
                                />
                                <CFormCheck
                                    inline
                                    type="radio"
                                    name="j_type"
                                    id="job_type2"
                                    value="Full-Time"
                                    label="Full-Time"
                                    onChange={choosenJobTypeHandler}
                                    required
                                />
                                <CFormCheck
                                    inline
                                    type="radio"
                                    name="j_type"
                                    id="job_type3"
                                    value="Temporary"
                                    label="Temporary"
                                    onChange={choosenJobTypeHandler}
                                    required
                                />
                            </CCol>
                        </CRow>


                        <CRow className="mb-3">
                            <CFormLabel htmlFor="s_date" className="col-md-2 col-form-label">Start Date</CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="date"
                                    id="s_date"
                                    onChange={sDateChangeHandler}
                                    required
                                />
                            </CCol>
                            <CFormLabel htmlFor="e_date" className="col-md-2 col-form-label">End Date</CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="date"
                                    id="e_date"
                                    onChange={eDateChangeHandler}
                                    required
                                />
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CFormLabel htmlFor="req_cand" className="col-md-2 col-form-label">Candidates Required</CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="number"
                                    id="req_cand"
                                    onChange={requirementChangeHandler}
                                    required
                                />
                            </CCol>
                            <CFormLabel htmlFor="budget" className="col-md-2 col-form-label">Budget</CFormLabel>
                            <CCol sm="4">
                                <CInputGroup className="mb-2">
                                    <CInputGroupText id="basic-addon1">₹</CInputGroupText>
                                    <CFormControl
                                        type="number"
                                        id="budget"
                                        onChange={budgetChangeHandler}
                                        required
                                    />
                                </CInputGroup>
                            </CCol>
                        </CRow>
                        <CRow classname="mb-3">
                            <CFormLabel htmlFor="remarks" className="col-sm-2 col-form-label">Remarks :</CFormLabel>
                            <CCol className="mb-2">
                                <CFormControl
                                    component="textarea"
                                    rows="2"
                                    id="remarks"
                                    onChange={remarksChangeHandler}
                                    required
                                />
                            </CCol>
                        </CRow>

                        <br />
                        <div className="center">
                            <CButton type="submit" >Create MRF</CButton>
                        </div>
                    </CForm>
                </div>
                <AppFooter />
            </div>
        </div >
    );
}

export default CreateMRFPage;