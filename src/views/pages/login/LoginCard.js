import React, { useState } from 'react';
import "./Login.css"
import { Link } from 'react-router-dom'
import { CButton, CCard, CCardBody, CCol, CForm, CFormControl, CRow, CFormFloating, CFormLabel } from '@coreui/react'
import PropTypes from "prop-types";
import endPoints from 'src/utils/EndPointApi';
import { useStateValue } from "../../../StateProvider"
function LoginCard(props) {

    // const createAccountHandler = (event) => {
    //     props?.isNewUser(false);
    // }
    const [reducerState, dispatch] = useStateValue()
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    // const [errorMessage, seterrorMessage] = useState(null)

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };
    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    const loginHandler = (event) => {
        event.preventDefault();
        const credentials = {
            email: enteredEmail,
            password: enteredPassword,
        };
        console.log(credentials)
        postData(endPoints.loginURL, credentials)
            .then(data => {
                console.log(data);
                dispatch({
                    type: 'USER_LOGIN',
                    token: data.token,
                    userRole: data.role
                }) // JSON data parsed by data.json() call
            });
        event.target.reset()
    };


    async function postData(url, data) {
        const response = await fetch(url, {
            // mode : 'no-cors',
            method: 'POST', // *GET, POST, PUT, DELETE, etvc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)// body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }


    return (
        <CCard className="card_component">
            <CCardBody>
                <CForm onSubmit={loginHandler}>
                    <CRow>
                        <CCol ><h1>Log In To Your Account</h1></CCol>
                        <p className="text-medium-emphasis">Sign In to your account</p>
                    </CRow>
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
                    <CFormFloating className="mb-3" >
                        <CFormControl
                            size="sm"
                            type="password"
                            id="password"
                            placeholder="password"
                            onChange={passwordChangeHandler}
                            value={enteredPassword}
                            required
                        />
                        <CFormLabel htmlFor="password">Password</CFormLabel>
                    </CFormFloating>

                    <CRow>
                        {/* <div className="center">
                            <CButton type="submit" color="primary" className="px-4">Login</CButton>
                        </div> */}
                        <CButton type="submit" color="primary" className="px-4">Login</CButton>
                    </CRow>
                    <CRow className="justify-content-center">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                    </CRow>
                </CForm>
                <hr />
                <CRow className="justify-content-start">
                    <CCol md="2">
                        New User?
                    </CCol>
                    <CCol md="4">
                        <Link to="/register">
                            <CButton color="primary" className="px-4" >Create Account</CButton>
                        </Link>
                        {/* <CButton color="primary" className="px-4" onClick={createAccountHandler}>Create Account</CButton> */}
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    );
}
LoginCard.propTypes = {
    isNewUser: PropTypes.func
}
export default LoginCard;