import React, { useState } from 'react';
import { Navigate } from 'react-router';
import Page from '@layout/Page';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { InputLabel, TextField, Box, Stack } from '@mui/material';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import { getCertificate } from '@components/Api/AllApi';
import { useEffect } from 'react';




const PrescriptionReport = () => {
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
    const [PatientSData, setPatientSData] = useState([])
    const [count, setCount] = useState(0)
    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedTab('');
    };

    window.addEventListener('resize', () => {
        if (smallScreen) {
            handleModalClose();
        }
    });


    useEffect(() => {
        const fetchTemplateData = async () => {
            try {
                const data = await getCertificate();
                console.log(data, "This Is all Billing Data!");
                setPatientSData(data.result || []);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTemplateData();
    }, [count]);
    const columns = [
        {
            name: 'Patient Name',
            selector: row => row.PatientName,
            sortable: true,
        },
        {
            name: 'Certification Date',
            selector: row => row.certificate_date,
            sortable: true,
        },
        {
            name: 'Expires On',
            selector: row => row.certificate_expiry
            ,
            sortable: true,
        },

        {
            name: 'Actions',
            sortable: true,
            cell: (row) => (
                <>


                    <button style={{ width: '170px', backgroundColor: 'skyblue', height: '35px', borderRadius: 4, color: 'white', fontWeight: 600, marginLeft: 2 }}  >

                        <Link to={`/Single-Patient-Manage-order/${row.id}`}  >
                            View
                        </Link>

                    </button>

                </>
            ),
            button: true,
            minWidth: '200px',
        },
    ];


    const data = PatientSData && PatientSData.map(item => ({
        id: item?.id || '',
        certificate_date: item?.certificate_date || '',
        certificate_expiry: item?.certificate_expiry || '',
        PatientName: item?.patient?.[0]?.name || '',
    }));

    const tableData = {
        columns,
        data,
    };


    return (
        <>
            <Sidebar />
            <Panel />
            <Page title="Prescription Report">
                <div key="balance">
                    <Card sx={{ minWidth: 1175, '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                                Prescription Report
                            </Typography>
                            <Stack direction='row' spacing={4} sx={{ alignItems: 'center' }}>
                                <InputLabel>Select Date</InputLabel>
                                <TextField size='small' />
                                <InputLabel>Appointments w/</InputLabel>
                                <TextField size='small' />
                                <button style={{ backgroundColor: '#31C22C', borderRadius: 8, width: '180px', height: 40, color: 'white' }}>Filter Results</button>
                            </Stack>


                            <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                        0 total Prescription Report found
                                    </Typography>
                                    <div className="Order Page">
                                        <DataTableExtensions {...tableData}>
                                            <DataTable noHeader defaultSortField="id" defaultSortAsc={false} pagination highlightOnHover />
                                        </DataTableExtensions>
                                    </div>
                                </CardContent>
                            </Card>
                        </CardContent>
                    </Card>
                </div>
            </Page>
        </>
    );
};

export default PrescriptionReport;
