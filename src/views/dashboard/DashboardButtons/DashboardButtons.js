import React from 'react';
import "./DashboardButtons.css"
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { CRow, CContainer } from '@coreui/react'
// import { CIcon } from '@coreui/icons-react';

function DashboardButtons(props) {
    return (
        <CContainer fluid className="mycard align-items-center justify-content-center" >
            <Link to={props.path}>
                <CRow className="circular justify-content-center">
                    <img className="image" src={props.image} alt="image" />
                </CRow>
                {/* <CRow className="avatar avatar-lg justify-content-center card_icon">
                    <CIcon name="cil-speedometer" customClasses="nav-icon" size="xl" />,
                </CRow> */}
                <CRow className="card_text">{props.title}</CRow>
            </Link>
        </CContainer>
    );
}
DashboardButtons.propTypes = {
    image: PropTypes.string,
    path: PropTypes.string,
    title: PropTypes.string
}
export default DashboardButtons;