import React from 'react';
import './MRFform.css'
import { CContainer, CHeader, CHeaderBrand, CHeaderDivider, CHeaderNav, CHeaderToggler, CNavLink, CNavItem } from '@coreui/react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CIcon from '@coreui/icons-react'
import { AppContent, AppSidebar, AppFooter, AppHeader, AppHeader2 } from '../../../components/index'
// import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from '../../../components/header/index'

function MRFform(props) {
    const dispatch = useDispatch()
    const sidebarShow = useSelector((state) => state.sidebarShow)
    return (
        <div>
            {/* <AppSidebar /> */}
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeader2 />
                <div className="body flex-grow-1 px-3">
                    <h1>hello</h1>
                </div>
                <AppFooter />
            </div>
        </div>
        // <div>
        //     <CHeader position="sticky" className="mb-4">
        //         <CContainer fluid >
        //             <CHeaderToggler
        //                 className="ms-md-3 d-lg-none"
        //                 onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        //             >
        //                 <CIcon name="cil-menu" size="lg" />
        //             </CHeaderToggler>
        //             <CHeaderBrand className="mx-auto d-md-none" to="/">
        //                 <CIcon name="logo" height="48" alt="Logo" />
        //             </CHeaderBrand>
        //             <CHeaderNav className="d-none d-md-flex me-auto">
        //                 <CNavItem>
        //                     <CNavLink to="/dashboard" component={NavLink} activeClassName="active">
        //                         Dashboard
        //                     </CNavLink>
        //                 </CNavItem>
        //                 <CNavItem>
        //                     <CNavLink href="#">Users</CNavLink>
        //                 </CNavItem>
        //             </CHeaderNav>
        //             <CHeaderNav>
        //                 <CNavItem>
        //                     <CNavLink href="#">
        //                         <CIcon name="cil-bell" size="lg" />
        //                     </CNavLink>
        //                 </CNavItem>
        //                 <CNavItem>
        //                     <CNavLink href="#">
        //                         <CIcon name="cil-list" size="lg" />
        //                     </CNavLink>
        //                 </CNavItem>
        //                 <CNavItem>
        //                     <CNavLink href="#">
        //                         <CIcon name="cil-envelope-open" size="lg" />
        //                     </CNavLink>
        //                 </CNavItem>
        //                 <CNavItem>
        //                     <CNavLink href="#">
        //                         <CIcon name="cilSettings" size="lg" />
        //                     </CNavLink>
        //                 </CNavItem>
        //             </CHeaderNav>
        //             <CHeaderNav className="ms-3">
        //                 <AppHeaderDropdown />
        //             </CHeaderNav>
        //         </CContainer>
        //         {/* <CHeaderDivider />
        //         <CContainer fluid>

        //         </CContainer> */}
        //     </CHeader>

        // </div>
    );
}
export default MRFform;