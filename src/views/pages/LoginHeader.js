import React, { useState } from 'react'
import './login/Login.css'
import CIcon from '@coreui/icons-react'
import {
  CContainer, CNavItem, CDropdownDivider, CCol, CCollapse, CDropdownItem, CDropdownMenu,
  CDropdownToggle, CForm, CFormControl, CNavbar, CNavbarNav, CNavbarBrand, CNavbarToggler, CNavLink,
  CDropdown, CButton
} from '@coreui/react'

function LoginHeader(props) {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <CNavbar expand="lg" colorScheme="dark" className="bg-primary">
        <CContainer fluid >
          <CCol className="align-self-start">
            <CNavbarBrand href="#">
              <CIcon className="sidebar-brand-full" name="logo-negative" height={65} />
            </CNavbarBrand>
          </CCol>
          <CCol className="align-items-center justify-content-between">
            <CNavbarToggler onClick={() => setVisible(!visible)} />
            <CCollapse className="navbar-collapse" visible={visible}>
              <CNavbarNav>
                <CNavItem>
                  <CNavLink href="#" active>
                    Home
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CDropdown variant="nav-item" popper={false}>
                  <CDropdownToggle color="secondary">
                    Dropdown button
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNavbarNav>
              <CForm className="d-flex">
                <CFormControl
                  type="search"
                  className="me-2"
                  placeholder="Search"
                />
                <CButton type="submit" color="light" variant="outline">
                  Search
                </CButton>
              </CForm>
            </CCollapse>
          </CCol>
        </CContainer>
      </CNavbar>
    </div>
  )
}

export default LoginHeader
