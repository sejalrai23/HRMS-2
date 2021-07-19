import React from 'react'
import '../login/Login.css'
import LoginHeader from '../LoginHeader'
import RegisterCard from "./RegisterCard";
import logo from "../login/logof.jpg";
import { CCol, CContainer, CCardGroup, CRow } from '@coreui/react'

const Register = () => {

  // const [isExistingUser, setIsExistingUser] = useState(false)

  // const existingUserHandler = (status) => {
  //   setIsExistingUser(status)
  // }

  // const newUserHandler = (status2) => {
  //   setIsExistingUser(!status2)
  // }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-start">
      <CContainer fluid className="container-root">
        <CRow>
          <LoginHeader />
        </CRow>
        <CRow className="justify-content-between">



          <CCol md="6" className="align-items-center align-self-start justify-content-center ">
            <img className="login_image" src={logo}
              alt="Random to fill space"
            />

          </CCol>

          <CCol md="6" className=" mr-auto align-self-start align-items-center justify-content-center">
            <CCardGroup >

              {/* {isUser && <LoginCard isNewUser={newUserHandler} />}
              {!isUser && <RegisterCard isExistingUser={existingUserHandler} />*/}

              <RegisterCard />

            </CCardGroup>
          </CCol>

        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
