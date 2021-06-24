import React, { useState } from 'react';
import {
    CButton, CCol, CForm, CFormControl, CInputGroup,
    CRow, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle,
    CFormFloating, CFormLabel, CFormSelect, CContainer
} from '@coreui/react'

function AddEmployeeForm(props) {
    const [enteredFName, setEnteredFName] = useState("");
    const [enteredLName, setEnteredLName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [enteredRePassword, setEnteredRePassword] = useState("");
    const [isDisabled, SetIsDisabled] = useState(true)

    const fNameChangeHandler = (event) => {
        setEnteredFName(event.target.value);
    };
    const lNameChangeHandler = (event) => {
        setEnteredLName(event.target.value);
    };
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };
    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };
    const rePasswordChangeHandler = (event) => {
        setEnteredRePassword(event.target.value);
    };

    const registerHandler = (event) => {
        event.preventDefault();
        // const registerData = {
        //     name: {
        //         firstName: enteredFName,
        //         lastName: enteredLName
        //     },
        //     email: enteredEmail,
        //     password: enteredPassword
        // };
        // postData("https://crm1728.herokuapp.com/super-admin/add", registerData)
        //     .then(data => {
        //         console.log(data); // JSON data parsed by data.json() call
        //     });
        // console.log(registerData)
        setEnteredFName("");
        setEnteredLName("");
        setEnteredEmail("");
        setEnteredPassword("");
        setEnteredRePassword("");
    };

    return (
        <CForm onSubmit={registerHandler}>
            <CRow>
                <h3>Add Employee</h3>
                {/* <p className="text-medium-emphasis">Create your account</p> */}
            </CRow>
            <CRow>
                <CCol>
                    <CFormFloating className="mb-3" >
                        <CFormControl
                            size="sm"
                            type="text"
                            id="first_name"
                            placeholder="name@example.com"
                            onChange={fNameChangeHandler}
                            value={enteredFName}
                            required
                        />
                        <CFormLabel htmlFor="first_name">First Name</CFormLabel>
                    </CFormFloating>
                </CCol>
                <CCol>
                    <CFormFloating className="mb-3" >
                        <CFormControl
                            size="sm"
                            type="text"
                            id="last_name"
                            placeholder="name@example.com"
                            onChange={lNameChangeHandler}
                            value={enteredLName}
                            required
                        />
                        <CFormLabel htmlFor="last_name">Last Name</CFormLabel>
                    </CFormFloating>
                </CCol>
            </CRow>
            <CRow>
                <CCol>
                    <CFormFloating>
                        <CFormSelect id="user_type">
                            <option >Open this select menu</option>
                            <option value="Admin">Admin</option>
                            <option value="Recruiter">Recruiter</option>
                            <option value="Vendor">Vendor</option>
                            <option value="Employee">Employee</option>
                            <option value="Interviwer">Interviewer</option>
                        </CFormSelect>
                        <CFormLabel htmlFor="user_type">Choose a User Type</CFormLabel>
                    </CFormFloating>
                </CCol>
                <CCol>
                    <CFormFloating>
                        <CFormSelect id="user_role">
                            <option >Open this select menu</option>
                            <option value="Super-Admin">Super-Admin</option>
                            <option value="HR">HR</option>
                            <option value="Special">Special</option>
                            <option value="Interviewer">Interviewer</option>
                        </CFormSelect>
                        <CFormLabel htmlFor="user_role">Choose a User Role</CFormLabel>
                    </CFormFloating>
                </CCol>
            </CRow>
            <hr />
            <CFormLabel>Hierarchy</CFormLabel>
            <CRow>
                <CInputGroup className="mb-3">
                    <CDropdown variant="input-group">
                        <CDropdownToggle color="secondary" variant="outline">
                            Hierarchy Type
                        </CDropdownToggle>
                        <CDropdownMenu>
                            <CDropdownItem href="#">Department</CDropdownItem>
                            <CDropdownItem href="#">Sub-Department</CDropdownItem>
                            <CDropdownItem href="#">Team</CDropdownItem>
                            <CDropdownItem href="#">Management</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                    <CFormControl size="sm" type="text" id="Hierarchy_name" placeholder="Hierarchy name" />
                </CInputGroup>
            </CRow>
            <CRow>
                <CCol>
                    <CFormFloating className="mb-3" >
                        <CFormControl
                            size="sm"
                            type="text"
                            id="designation"
                            placeholder="name@example.com"
                        />
                        <CFormLabel htmlFor="designation">Designation</CFormLabel>
                    </CFormFloating>
                </CCol>
                <CCol>
                    <CFormFloating>
                        <CFormSelect id="job_type" >
                            <option >Open this select menu</option>
                            <option value="3">Genral</option>
                            <option value="2">Female</option>
                            <option value="1">Physically Challenged</option>
                        </CFormSelect>
                        <CFormLabel htmlFor="job_type">Job Type</CFormLabel>
                    </CFormFloating>
                </CCol>
            </CRow>
            <CRow>
                <CCol>
                    <CFormFloating className="mb-3" >
                        <CFormControl
                            size="sm"
                            type="email"
                            id="emailInput"
                            placeholder="name@example.com"
                            onChange={emailChangeHandler}
                            value={enteredEmail}
                            required
                        />
                        <CFormLabel htmlFor="emailInput">Email address</CFormLabel>
                    </CFormFloating>
                </CCol>
                <CCol>
                    <CFormFloating className="mb-3" >
                        <CFormControl
                            size="sm"
                            type="password"
                            id="password"
                            placeholder="name@example.com"
                            onChange={passwordChangeHandler}
                            value={enteredPassword}
                            required
                        />
                        <CFormLabel htmlFor="password">Password</CFormLabel>
                    </CFormFloating>
                </CCol>
            </CRow>

            <CRow>
                <CButton type="submit" color="success" >Add Employee</CButton>
            </CRow>
        </CForm>
    );
}

export default AddEmployeeForm;