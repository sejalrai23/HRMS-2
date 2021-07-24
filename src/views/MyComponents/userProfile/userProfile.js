import React, { useState, useEffect } from "react";
import { MDBDataTableV5 } from 'mdbreact';
import { AppFooter, AppHeader2 } from '../../../components/index';
import { CContainer, CRow, CCol, CBadge, CButton, CFormCheck, CFormControl, CModal, CModalHeader, CModalBody, CModalFooter, CModalTitle, CTable, CTableHead, CTableHeaderCell, CTableBody, CTableRow, CTableDataCell, CFormLabel } from '@coreui/react';
import endPoints from "../../../utils/EndPointApi";
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillEyeFill } from 'react-icons/bs';
import "./userProfile.css";
import { useStateValue } from "../../../StateProvider";


function UserProfile() {
    const [reducerState, dispatch] = useStateValue()
    const [visible, setVisible] = useState(false)
    const [visibleOne, setVisibleOne] = useState(false)
    var [showData, setShowData] = useState([]);
    const [Id, setId] = useState();
    const [userRole, setUserRole] = useState();
    const [roles, setRoles] = useState([]);
    const [newRole, setNewRole] = useState("");
    const [accessRoles, setAccessRoles] = useState([]);
    const token = reducerState.token




    async function showDataList(url) {
        // console.log("in show data")
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
        // console.log(Data);
        return Data
    }

    async function patchData(url, data) {
        // console.log("in show data")
        // setIsLoading(true)
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(data)
        });
        const Data = await response.json();
        // setIsLoading(false)
        // console.log(Data);
        return Data
    }

    async function postData(url) {
        // console.log("in show data")
        // setIsLoading(true)
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        });
        const Data = await response.json();
        // setIsLoading(false)
        // console.log(Data);
        return Data
    }


    useEffect(() => {
        showDataList(endPoints.getUserProfile).then(data => setShowData(data));


    }, [])

    const DataRows = []
    {
        showData?.map(data => {
            DataRows.push({
                position: <div className="column">
                    <BsFillPersonFill className="buttons" />
                    <h6 className="title">{data.role}</h6>
                </div>,
                show: <CButton id={data._id} value={data.role}
                    onClick={(event) => {
                        setVisible(!visible);
                        // console.log(event.target.id);
                        // const selectedRole = showData.filter(data => data.role == event.target.id);
                        setId(event.target.id);
                        setUserRole(event.target.value)
                        setRoles(Object.entries(data.access))
                    }
                    } >show</CButton>,


            })
        });

        // console.log(accessRoles);

    }

    const Access = {};
    {
        showData?.filter(data => data.role == "Super-Admin").map(data => Object.assign(Access, data.access));

    }

    const fetchAccessHandler = () => {
        console.log("clicked");
        console.log(Access);
        setAccessRoles(Object.entries(Access));



    }


    const savePermissionHandler = (event) => {
        // console.log(showData);
        showData.map(data => {
            patchData(endPoints.patchUserProfile, { _id: data._id, access: data.access }).then(res => console.log(res));


        })
    }

    const postDataHandler = () => {
        console.log(Access);
    }


    const permissions = {
        columns: [
            {
                label: 'Roles',
                field: 'roles',
                width: 100

            },

        ],
        rows: [
            {
                roles: <div className="column1 ">
                    <h6 className="mx-5">ADD User</h6>
                    <CFormCheck
                        className="mx-5"
                        switch
                        id="formSwitchCheckDefault"
                    /></div>
            }
        ]

    }







    const datatable = {
        columns: [

            {
                label: 'Role',
                field: 'position',
                sort: 'asc',
                width: 100
            },
            {
                label: '',
                field: 'show',
                width: 50

            },
        ],
        rows: DataRows
    }
    // var access = {};
    // var Data = [...showData];

    return (
        <>


            <div className="body flex-grow-1 px-3">
                <CRow className="py-2 justify-content-between">
                    <CCol md={6} className="align-self-start align-items-center justify-content-center"><h2>USER PROFILE</h2></CCol>
                    <CCol md={2} className="align-self-end align-items-center justify-content-center">
                        <CButton onClick={() => { setVisibleOne(!visibleOne); fetchAccessHandler(); }} color="primary">+ CREATE ROLE</CButton></CCol>
                </CRow>
                <hr />
                <CContainer fluid className="justify-content-between">
                    <CRow>
                        <CContainer fluid >
                            <MDBDataTableV5 hover data={datatable} searchBottom={false} searchTop={false} scrollY paging={false} />
                        </CContainer>

                    </CRow>
                </CContainer>

                <CModal visible={visible} onDismiss={() => setVisible(false)}>
                    <CModalHeader onDismiss={() => setVisible(false)}>
                        <CModalTitle>{userRole}-Permissions</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CTable>
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">Roles</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>

                                {roles.map((key, values) => {
                                    {/* console.log(data) */ }

                                    return (
                                        <CTableRow key={values}>
                                            <CTableDataCell  >
                                                <div className="column1 ">
                                                    <h6 className="mx-5">{key}</h6>
                                                    <CFormCheck
                                                        className="mx-5"
                                                        switch
                                                        // id={key}
                                                        
                                                        onChange={(event) => {
                                                            showData = showData.filter(data => data._id == Id).map(data => {
                                                                // console.log(showData);
                                                                // access = { ...data.access };
                                                                if (event.target.checked == false) {
                                                                    data.access[key[0]] = false

                                                                }
                                                                return data;

                                                                // console.log(data.access);

                                                            })

                                                        }}
                                                    />
                                                </div>
                                            </CTableDataCell>
                                        </CTableRow>
                                    );



                                })}

                            </CTableBody>
                        </CTable>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => setVisible(false)}>
                            Close
                        </CButton>
                        <CButton color="primary" onClick={savePermissionHandler}>Save changes</CButton>
                    </CModalFooter>
                </CModal>




                <CModal visible={visibleOne} onDismiss={() => setVisibleOne(false)}>
                    <CModalHeader onDismiss={() => setVisibleOne(false)}>
                        <CModalTitle>ADD NEW ROLE</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CRow className="mb-3">
                            <CFormLabel htmlFor="roleName" className="col-sm-2 col-form-label">
                                Role Title
                            </CFormLabel>
                            <div className="col-sm-10">
                                <CFormControl type="text" onChange={(event) => setNewRole(event.target.value)} />
                            </div>
                        </CRow>
                        <CRow>
                            {accessRoles.map((key, value) => {
                                return (

                                    <CCol className="col-sm-6" key={key} >
                                        <CFormCheck
                                            id="flexCheckDefault"
                                            label={key}
                                            onChange={(event) => {
                                                if (event.target.checked) {
                                                    Access[key[0]] = false;
                                                    console.log(Access);
                                                }
                                                return Access;
                                            }} />

                                    </CCol>

                                );

                            })
                            }
                        </CRow>


                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => setVisibleOne(false)}>
                            Close
                        </CButton>
                        <CButton color="primary" onClick={postDataHandler}> Save changes</CButton>
                    </CModalFooter>
                </CModal>
            </div>


        </>
    );

}

export default UserProfile;
