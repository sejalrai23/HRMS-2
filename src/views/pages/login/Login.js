import React from 'react'
import { CCardGroup, CCol, CContainer, CRow } from '@coreui/react'
import './Login.css'
import LoginHeader from '../LoginHeader'
import LoginCard from "./LoginCard"
// import RegisterCard from "../register/RegisterCard"

const Login = () => {
  // const [isUser, setIsUser] = useState(true)

  // const existingUserHandler = (status) => {
  //   setIsUser(status)
  //   console.log(isUser)
  //   console.log("existingUserhandler")
  // }

  // const newUserHandler = (status2) => {
  //   setIsUser(status2)
  //   console.log(isUser)
  // }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-start">
      <CContainer fluid className="container-root">
        <CRow>
          <LoginHeader />
        </CRow>
        <CRow className="loginSection justify-content-between">
          <CCol md="6" className="imageSection align-self-center align-items-center justify-content-center">
            <img className="login_image2 " src="https://image.shutterstock.com/image-photo/human-resources-crm-data-mining-260nw-366555809.jpg"
              alt="Random to fill space"
            />
          </CCol>
          <CCol md="6" className="FormSection align-items-center justify-content-center">
            <CCardGroup >
              <LoginCard />
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
