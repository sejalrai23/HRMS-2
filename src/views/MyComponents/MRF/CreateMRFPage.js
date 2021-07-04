import React, { useState, useEffect, useReducer } from 'react';
import "./MRFform.css"
import { AppContent, AppSidebar, AppFooter, AppHeader2 } from '../../../components/index'
import { IoIosArrowBack } from "react-icons/io";
import {
    CRow, CCol, CButton, CForm, CFormControl, CFormLabel, CFormSelect, CFormCheck, CInputGroup, CInputGroupText
} from '@coreui/react'
import { Link } from 'react-router-dom'


const InitialFormState = {
    positionID: "",
    position_type: "",
    replacement_id: "",
    hierarchyType: "",
    hierarchyName: "",
    hierarchyID: "",
    skillsRequired: [{}],
    reporting_manager: "",
    department_head: "",
    sub_dep_head: "",
    location: "",
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
    status: "",
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
                hierarchyName: action.val
            }
        case "SKILLS_INPUT":
            return {
                ...formState,
                skillsRequired: action.val
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
        case "LOC_INPUT":
            return {
                ...formState,
                location: action.val
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
        default: return formState
    }
}


function CreateMRFPage(props) {
    const [formState, dispatchForm] = useReducer(formReducer, InitialFormState)

    // const fNameChangeHandler = (event) => {
    //     dispatchForm({ type: "FNAME_INPUT", val: event.target.value })
    //     console.log("inside function", event.target.value)
    // };
    console.log('hello', formState)
    const positionIDChangeHandler = (event) => {
        dispatchForm({ type: "POSID_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const posTypeChangeHandler = (event) => {
        dispatchForm({ type: "POSTYPE_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const ReplacementIDChangeHandler = (event) => {
        dispatchForm({ type: "REPID_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const hTypeChangeHandler = (event) => {
        dispatchForm({ type: "HTYPE_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const hNameChangeHandler = (event) => {
        dispatchForm({ type: "HNAME_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const skillsChangeHandler = (event) => {
        dispatchForm({ type: "SKILLS_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const repManChangeHandler = (event) => {
        dispatchForm({ type: "REPMAN_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const depHeadChangeHandler = (event) => {
        dispatchForm({ type: "DEPHEAD_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const subHeadChangeHandler = (event) => {
        dispatchForm({ type: "SUBHEAD_INPUT", val: event.target.value })
        console.log(event.target.value)
    }
    const locationChangeHandler = (event) => {
        dispatchForm({ type: "LOC_INPUT", val: event.target.value })
        console.log(event.target.value)
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
            hierarchyID: "formState.uType",
            skillsRequired: "formState.uRole",
            reporting_manager: formState.reporting_manager,
            department_head: formState.department_head,
            sub_dep_head: formState.sub_dep_head,
            location: formState.location,
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
        // postData(endPoints.addUser, {})
        //     .then(data => setUserList(data))
        event.target.reset()
    }

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
                        <h4><b>Title 1</b></h4>
                        <CRow className="mb-3">
                            <CFormLabel htmlFor="pos_id" className="col-sm-2 col-form-label">Position ID</CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="text"
                                    id="pos_id"
                                    // placeholder="First Name"
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
                                <CFormControl
                                    type="text"
                                    id="rep_name"
                                    // placeholder="First Name"
                                    onChange={ReplacementIDChangeHandler}
                                    required
                                />
                            </CCol>
                        </CRow>
                        <br />
                        <h4><b>Title 2</b></h4>
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
                                <CFormControl
                                    type="text"
                                    id="h_name"
                                    // placeholder=""
                                    onChange={hNameChangeHandler}
                                    required
                                />
                            </CCol>
                        </CRow>
                        <CRow classname="mb-3">
                            <CFormLabel htmlFor="skills" className="col-sm-2 col-form-label">Skills required :</CFormLabel>
                            <CCol className="mb-2">
                                <CFormControl
                                    component="textarea"
                                    rows="1"
                                    id="skills"
                                    // placeholder="First Name"
                                    onChange={skillsChangeHandler}
                                    required
                                />
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CFormLabel htmlFor="rep_man" className="col-sm-2 col-form-label">Reporting Manager</CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="text"
                                    id="rep_man"
                                    // placeholder="First Name"
                                    onChange={repManChangeHandler}
                                    required
                                />
                            </CCol>
                            <CFormLabel htmlFor="dep_head" className="col-sm-2 col-form-label">Department Head</CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="text"
                                    id="dep_head"
                                    // placeholder="First Name"
                                    onChange={depHeadChangeHandler}
                                    required
                                />
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CFormLabel htmlFor="sub_head" className="col-md-2 col-form-label">Sub-Deartment Head</CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="text"
                                    id="sub_head"
                                    // placeholder="First Name"
                                    onChange={subHeadChangeHandler}
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
                                        // placeholder="First Name"
                                        onChange={budgetChangeHandler}
                                        required
                                    />
                                </CInputGroup>
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CFormLabel htmlFor="location" className="col-md-2 col-form-label">location</CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="text"
                                    id="location"
                                    // placeholder="First Name"
                                    onChange={locationChangeHandler}
                                    required
                                />
                            </CCol>
                        </CRow>
                        <br />
                        <h4><b>Title 3</b></h4>
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
                                    // placeholder="First Name"
                                    onChange={ageChangeHandler}
                                    required
                                />
                            </CCol>
                            <CFormLabel htmlFor="h_qual" className="col-md-2 col-form-label">Highest Qualification</CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="text"
                                    id="h_qual"
                                    // placeholder="First Name"
                                    onChange={hQualChangeHandler}
                                    required
                                />
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CFormLabel htmlFor="rel_exp" className="col-md-2 col-form-label">Relavant Experience</CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="number"
                                    id="rel_exp"
                                    // placeholder="First Name"
                                    onChange={relExpChangeHandler}
                                    required
                                />
                            </CCol>
                            <CFormLabel htmlFor="tot_exp" className="col-md-2 col-form-label">Total Experience</CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="number"
                                    id="tot_exp"
                                    // placeholder="First Name"
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
                                    value="Physically Challenged"
                                    label="Handicaped"
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
                                    // placeholder="First Name"
                                    onChange={sDateChangeHandler}
                                    required
                                />
                            </CCol>
                            <CFormLabel htmlFor="e_date" className="col-md-2 col-form-label">End Date</CFormLabel>
                            <CCol sm="4">
                                <CFormControl
                                    type="date"
                                    id="e_date"
                                    // placeholder="First Name"
                                    onChange={eDateChangeHandler}
                                    required
                                />
                            </CCol>
                        </CRow>
                        <CRow classname="mb-3">
                            <CFormLabel htmlFor="remarks" className="col-sm-2 col-form-label">Remarks :</CFormLabel>
                            <CCol className="mb-2">
                                <CFormControl
                                    component="textarea"
                                    rows="2"
                                    id="remarks"
                                    // placeholder="First Name"
                                    onChange={remarksChangeHandler}
                                    required
                                />
                            </CCol>
                        </CRow>
                        <CRow className="mb-3">
                            <CFormLabel htmlFor="req_cand" className="col-md-2 col-form-label">Candidates Required</CFormLabel>
                            <CCol sm="1">
                                <CFormControl
                                    type="number"
                                    id="req_cand"
                                    // placeholder="First Name"
                                    onChange={requirementChangeHandler}
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