import React, { useState, useReducer, useEffect } from 'react';
import { AppContent, AppSidebar, AppFooter, AppHeader, AppHeader2 } from '../../../components/index'
import {
    CButton, CCol, CForm, CFormControl, CRow, CFormLabel, CFormSelect
} from '@coreui/react';
import endPoints from "../../../utils/EndPointApi";
// import "./ApprovalForm.css";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';







function ApprovalForm(props) {

    const [heirarchy, setHeirarchy] = React.useState("");

    const [isLoading, setIsLoading] = useState();
    const [heirarchyList, setHeirarchyList] = React.useState([]);
    const [BranchData, setBranchData] = React.useState([]);
    const [Approvers, setApprovers] = React.useState([]);


    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJhMWU5N2ViMWE4N2EwZWRjMjYzMjgiLCJlbWFpbCI6InJpc2hhYmhAZ2Vla3NhdHdlYi5jb20iLCJSb2xlIjoiU3VwZXItQWRtaW4iLCJpYXQiOjE2MjU5MTEyMjcsImV4cCI6MTYyNTk0NzIyN30.mu3O8gn5iIyPq7UM2jtqclnrMu80C9Pi1L68R5G9Oec";




    const [position, setPosition] = useState("");
    const [cooling, setCooling] = useState();
    const [tat, setTAT] = useState();
    const [heirarchydata, setHeirarchyData] = useState("");
    const [branch, setBranch] = useState("");
    const [approver, setApprover] = useState("");




    const hierarchyNameOptions = []
    {
        heirarchyList?.map(hierarchy => {
            hierarchyNameOptions.push({ label: hierarchy.name, value: hierarchy._id, type: hierarchy.type })
        })
    }
    // console.log("hierarchyNameOptions", hierarchyNameOptions)

    const branchNameOptions = []
    {
        BranchData?.map(branch => {
            branchNameOptions.push({ label: branch.name, value: branch._id, location: branch.location })
        })
    }
    // console.log("branchNameOptions", branchNameOptions)

    const ApproverNameOptions = []
    {
        Approvers?.map(user => {
            ApproverNameOptions.push({ label: user.name.firstName + " " + user.name.lastName, value: user._id })
        })
    }
    // console.log("ApproverNameOptions", ApproverNameOptions)


    async function showHeirarchyData(url) {
        // console.log("in show data")
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
        // console.log(Data);
        return Data
    }

    async function showBranchData(url) {
        // console.log("in show data")
        setIsLoading(true)
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        });
        const Data1 = await response.json();
        setIsLoading(false)
        // console.log(Data1);
        return Data1
    }

    async function showApprovers(url) {
        // console.log("in show users")
        setIsLoading(true)
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        });
        const Data2 = await response.json();
        setIsLoading(false)
        // console.log(Data2);
        return Data2
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
        const Data3 = await response.json();
        console.log(Data3);
        // setIsLoading(false)
        return Data3
    }

    useEffect(() => {
        showHeirarchyData(endPoints.searchHierarchy).then(Data => setHeirarchyList(Data));
        showBranchData(endPoints.searchBranch).then(Data1 => {
            setBranchData(Data1)
            // console.log(BranchData);
        });
        showApprovers(endPoints.searchUser).then(Data2 => {
            setApprovers(Data2)
            // console.log(Approvers);

        });




    }, [])



    const positionChangeHandler = (event) => {
        setPosition(event.target.value);
    }
    const CoolingPeriodChangeHandler = (event) => {
        setCooling(event.target.value);
    }
    const TATChangeHandler = (event) => {
        setTAT(event.target.value);

    }


    const hiearchyNameChangeHandler = (event) => {
        setHeirarchyData(event.value);

    }
    const BranchChangeHandler = (event) => {
        setBranch(event.value);

    }
    const ApproverChangeHandler = (event) => {
        setApprover(event);

    }
    const approver_id = [];
    for (var i = 0; i < approver.length; i++) {

        approver_id.push({
            _id: approver[i].value
        });
        console.log(approver_id);
    }


    const formSubmitHandler = (event) => {
        event.preventDefault()
        const newEmp = {
            position: position,
            coolingPeriod: parseInt(cooling),
            tat: parseInt(tat),
            hierarchyID: heirarchydata,
            branchID: branch,
            approversID: approver_id,

        }
        // console.log(newEmp.TAT);
        console.log(newEmp)
        // postData(endPoints.addApprovalMatrix, newEmp).then(Data => { console.log(Data) });
        event.target.reset()
    }













    return (
        <div>
            {/* <AppSidebar /> */}
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeader2 />
                <div className="body flex-grow-1 px-3 ml-lg-5 ml-md-5">
                    <CForm onSubmit={formSubmitHandler} >
                        <CRow className="align-items-center ml-5 ">

                            <CRow className="mb-3 col-sm-12">
                                <CCol className="col-sm-2"></CCol>
                                <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                                    Position
                                </CFormLabel>
                                <div className="col-sm-6">
                                    <CFormControl
                                        type="text"
                                        onChange={positionChangeHandler}
                                        required
                                    />
                                </div>
                                <CCol className="col-sm-2"></CCol>
                            </CRow>
                            <CRow className="mb-3">
                                <CCol className="col-sm-2"></CCol>
                                <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                                    Cooling Period
                                </CFormLabel>
                                <div className="col-sm-6">
                                    <CFormControl type="number"
                                        onChange={CoolingPeriodChangeHandler}
                                        required />
                                </div>
                                <CCol className="col-sm-2"></CCol>
                            </CRow>


                            <CRow className="mb-3">
                                <CCol className="col-sm-2"></CCol>
                                <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                                    Turn Around Time
                                </CFormLabel>
                                <div className="col-sm-6">
                                    <CFormControl type="number"
                                        onChange={TATChangeHandler}
                                        required />
                                </div>
                                <CCol className="col-sm-2"></CCol>
                            </CRow>

                            <CRow className="mb-3">
                                <CCol className="col-sm-2"></CCol>
                                <CFormLabel className="col-sm-2 col-form-label" htmlFor="hirearchy_type">
                                    Hierarchy Type
                                </CFormLabel>
                                <CCol className="col-sm-6">
                                    <CFormSelect id="hirearchy_type" required
                                        onChange={(e) => { setHeirarchy(e.target.value); }}>
                                        <option>Choose...</option>
                                        <option value="Department">Department</option>
                                        <option value="Sub-Department">Sub-Department</option>
                                        <option value="Team">Team</option>
                                        <option value="Management">Management</option>
                                    </CFormSelect>
                                </CCol>
                                <CCol className="col-sm-2"></CCol>
                            </CRow>
                            <CRow className="mb-3">
                                <CCol className="col-sm-2"></CCol>
                                <CFormLabel className="col-sm-2 col-form-label" htmlFor="h_name">
                                    Hierarchy Name
                                </CFormLabel>
                                <CCol className="col-sm-6">
                                    <Select
                                        placeholder={heirarchy}
                                        options={hierarchyNameOptions.filter(hierarchy => hierarchy.type == heirarchy)}
                                        isSearchable
                                        // isClearable
                                        onChange={hiearchyNameChangeHandler}
                                    />
                                </CCol>
                                <CCol className="col-sm-2"></CCol>
                            </CRow>


                            <CRow >
                                <CCol className="col-sm-2"></CCol>
                                <CFormLabel className="col-sm-2 col-form-label mb-3" htmlFor="user_type">
                                    Branch:
                                </CFormLabel>
                                <CCol className="col-sm-6">
                                    <Select
                                        options={branchNameOptions}
                                        isSearchable
                                        // isClearable
                                        onChange={BranchChangeHandler}
                                        required
                                    />
                                </CCol>
                                <CCol className="col-sm-2"></CCol>
                            </CRow>



                            <CRow className="mb-3">
                                <CCol className="col-sm-2"></CCol>
                                <CFormLabel className="col-sm-2 col-form-label mb-3" htmlFor="user_type">
                                    Approver:
                                </CFormLabel>
                                <CCol className="mb-2">
                                    <CreatableSelect
                                        isMulti
                                        onChange={ApproverChangeHandler}
                                        options={ApproverNameOptions}
                                        ActionTypes='clear-option'
                                    />
                                </CCol>
                                <CCol className="col-sm-2"></CCol>
                            </CRow>

                            <CRow>
                                <CCol className="col-sm-6"></CCol>
                                <CCol>
                                    <CButton type="submit">Submit</CButton>
                                </CCol>
                                <CCol className="col-sm-4"></CCol>
                            </CRow>


                        </CRow>
                    </CForm>
                </div>
                <AppFooter />
            </div>
        </div>
    );
}
export default ApprovalForm;