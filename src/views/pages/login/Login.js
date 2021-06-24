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
        <CRow className="justify-content-between">
          <CCol md="6" className="align-self-start align-items-center justify-content-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIgU-j-IiyYBQTQ_CeyH-kxl9tzBYj2lhPw&usqp=CAU"
              alt="Random to fill space"
            />
          </CCol>
          <CCol md="6" className="align-self-end align-items-center justify-content-center">
            <CCardGroup >

              {/* {isUser && <LoginCard isNewUser={newUserHandler} />}
              {!isUser && <RegisterCard isExistingUser={existingUserHandler} />} */}

              <LoginCard />

            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
