import React from 'react';
import "./DashboardButtons.css"
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { CRow, CContainer, CCol, CWidgetBrand } from '@coreui/react'
import { CIcon } from '@coreui/icons-react';

function DashboardButtons(props) {
    const title = props.title
    return (
        // <CContainer fluid className="mycard align-items-center justify-content-center" >
        //     <Link to={props.path} className="dashboardLink">
        //         <CRow className="circular justify-content-center">
        //             <img className="image" src={props.image} alt="image" />
        //         </CRow>
        //         {/* <CRow className="avatar avatar-lg justify-content-center card_icon">
        //             <CIcon name="cil-speedometer" customClasses="nav-icon" size="xl" />,
        //         </CRow> */}
        //         <CRow className="card_text">{props.title}</CRow>
        //     </Link>
        // </CContainer>

        // <CCol sm="6" lg="3">
        <CCol className="dashboard">
            <Link to={props.path} className="dashboardLink">
                <CWidgetBrand
                    className="mb-4 trial"
                    headerChildren={<CIcon name="cil-speedometer" height="52" className="my-4 text-black" />}
                    values={[[props.title]]}
                    style={{ '--cui-card-cap-bg': '#00aced', }}
                />
            </Link>
        </CCol>
    );
}
DashboardButtons.propTypes = {
    image: PropTypes.string,
    path: PropTypes.string,
    title: PropTypes.string
}
export default DashboardButtons;