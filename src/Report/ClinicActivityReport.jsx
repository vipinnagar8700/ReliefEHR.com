import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router';
import Page from '@layout/Page';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { InputLabel, TextField, Box, Stack, Grid, MenuItem, Select } from '@mui/material';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import { GetAllUSers, getCertificate } from '@components/Api/AllApi';




const ClinicActivityReport = () => {
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
            name: 'Date',
            selector: row => row.PatientName,
            sortable: true,
        },
        {
            name: 'Employee',
            selector: row => row.certificate_date,
            sortable: true,
        },
        {
            name: 'Event',
            selector: row => row.certificate_expiry
            ,
            sortable: true,
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


    const [use, setUse] = useState(false)


    useEffect(() => {

        const ManageUserData = GetAllUSers()
        if (ManageUserData) {
            ManageUserData.then((data) => {
                console.log(data?.data, "TTTTTTTTTTTTTTTTTTTTTTTTT")
                setUse(data?.data)
            })
        }


    }, [])




    return (
        <>
            <Sidebar />
            <Panel />
            <Page title="Clinic Activity Report">
                <div key="balance">
                    <Card sx={{ minWidth: 1175, '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
                        <CardContent>


                            <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
                                <Grid items sx={6} md={3}>
                                    <InputLabel>Select Date</InputLabel>
                                    <TextField size='small' type='date'  required/>
                                </Grid>
                                <Grid items sx={6} md={3}>
                                    <InputLabel>Select Date</InputLabel>
                                    <TextField size='small' type='date' required/>
                                </Grid>
                                <Grid items sx={6} md={3}>
                                    <InputLabel>Users</InputLabel>
                                    <Select size='small' sx={{minWidth:160,maxWidth:160}}>

                                        {
                                            use && use.map((data, index) => {
                                                return (
                                                    <MenuItem value={data.id} key={index}>
                                                        {data.name}
                                                    </MenuItem>
                                                )
                                            })
                                        }

                                    </Select>
                                </Grid>
                                <Grid items sx={6} md={3}>
                                    <InputLabel>Event</InputLabel>
                                    <Select size='small' sx={{minWidth:160,maxWidth:160}}>

                                        <MenuItem> None
                                        </MenuItem>
                                        <MenuItem value="Created"> Created
                                        </MenuItem>
                                        <MenuItem value="Updated"> Updated
                                        </MenuItem>
                                        <MenuItem value='Deleted'> Deleted
                                        </MenuItem>

                                    </Select>
                                </Grid>

                            </Grid>
                            <div style={{ justifyContent: 'right' }}>
                                <button style={{ backgroundColor: '#31C22C', borderRadius: 8, width: '180px', height: 40, color: 'white', margin: 3 }}>Filter Results</button>

                            </div>

                            <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                        0 total records found
                                    </Typography>
                                    <div className="Order Page">
                                        <DataTableExtensions {...tableData}  print={false}  export={false}>
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

export default ClinicActivityReport;
