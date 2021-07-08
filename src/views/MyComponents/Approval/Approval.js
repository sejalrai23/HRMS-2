import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { MDBDataTableV5 } from 'mdbreact';
import { CButton } from '@coreui/react';

function Approval(props) {
    const [title, setTitle] = React.useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => setTitle(data.message))

    }, [])

    const [datatable, setDatatable] = React.useState({
        columns: [
            {
                label: 'Position',
                field: 'position',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Heirarchy ID',
                field: 'heirarchyId',
                sort: 'asc',
                width: 50
            },
            {
                label: 'Branch ID',
                field: 'branchId',
                sort: 'asc',
                width: 50
            },
            {
                label: 'Cooling Period',
                field: 'date',
                sort: 'asc',
                width: 50
            },
            {
                label: 'Verified',
                field: 'verificationstatus',
                sort: 'asc',
                width: 100
            },
            {
                label: 'TAT',
                field: 'date',
                sort: 'asc',
                width: 50
            },
            {
                label: 'Approver',
                field: 'text',
                sort: 'asc',
                width: 100
            },
            {
                label: '',
                field: 'id',
                sort: 'asc',
                width: 100
            },
        ],
        rows: [
            {
                name: 'Tiger Nixon',
                position: 'System Architect',
                office: 'Edinburgh',
                age: '61',
                date: '2011/04/25',
                salary: '$320',
                id: <Link to="/approvalform"><CButton>
                    open
                </CButton>
                </Link>
            },
            {
                name: 'Garrett Winters',
                position: 'Accountant',
                office: 'Tokyo',
                age: '63',
                date: '2011/07/25',
                salary: '$170',
            },
            {
                name: 'Tiger Nixon',
                position: 'System Architect',
                office: 'Edinburgh',
                age: '61',
                date: '2011/04/25',
                salary: '$320',
            },
            {
                name: 'Garrett Winters',
                position: 'Accountant',
                office: 'Tokyo',
                age: '63',
                date: '2011/07/25',
                salary: '$170',
            },
            {
                name: 'Tiger Nixon',
                position: 'System Architect',
                office: 'Edinburgh',
                age: '61',
                date: '2011/04/25',
                salary: '$320',
            },
            {
                name: 'Garrett Winters',
                position: 'Accountant',
                office: 'Tokyo',
                age: '63',
                date: '2011/07/25',
                salary: '$170',
            },

        ],
    });

    return (
        <>
            <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />
        </>
    );
}
export default Approval;