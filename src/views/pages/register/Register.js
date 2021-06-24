import React from 'react'
import '../login/Login.css'
import LoginHeader from '../LoginHeader'
import RegisterCard from "./RegisterCard"
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
    <div className="bg-light min-vh-100 d-flex flex-row align-items-start div1">
      <CContainer fluid className="container-root">
        <CRow>
          <LoginHeader />
        </CRow>
        <CRow className="justify-content-between">
          <CCol md="6" className="align-self-start align-items-center justify-content-center division">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIgU-j-IiyYBQTQ_CeyH-kxl9tzBYj2lhPw&usqp=CAU" alt="" />
          </CCol>
          <CCol md="6" className="align-self-end align-items-center justify-content-center division">
            <CCardGroup >

              {/* {isExistingUser && <LoginCard isNewUser={newUserHandler} />}
              {!isExistingUser && <RegisterCard isExistingUser={existingUserHandler} />} */}

              <RegisterCard />

            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
