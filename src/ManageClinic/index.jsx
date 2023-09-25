import Page from '@layout/Page'
import React from 'react'
import { useSnackbar } from 'notistack';
// components
import Widget from '@components/Widget';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Container, Grid, Button, TextField, InputLabel, Select, MenuItem, Typography, Tab, } from '@mui/material';
// components

// hooks
import { useState, useEffect } from 'react';
import { ProfileApi, UpdateManageClinicProfile, UpdateProfileData } from '@components/Api/AllApi';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import ClinicUser from './ClinicUser';
import SecurityGroups from './SecurityGroups';
import SecurityLocation from './SecondaryLocation';
import AppointmentType from './AppoitnmentType';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import ClinicUserAvalibility from './ClinicUserAvalibility';
import ThankYouPage from './ThankYouPage';
import CustomEmailTemplate from './CustomEmailtEmplate';
import SmsTemplate from './SmsTemplates';
import Trigger from './Trigger';



const ManageClinic = ({ type }) => {
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const [value, setValue] = useState('1');
    const [count, setCount] = useState(0)

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };



    const [editProfile, setEditProfile] = useState(false);



    console.log(editProfile, "EditProfileData!");

    let { company_name, email, phone, timezone, address, postal_code, state } = editProfile;
    console.log(company_name, email, phone, timezone, address, postal_code, state, 'EEEEEEEEEEEEEEE')



    useEffect(() => {
        ProfileApi().then((res) => {
            setEditProfile(res.results?.company?.[0])
            console.log(res.results?.company?.[0], "This Is profileDatas")
        })

    }, [count])

    const handleUpdate = (e) => {
        e.preventDefault();
        try {
            const result = UpdateManageClinicProfile(
                editProfile.company_name,
                editProfile.state,
                editProfile.postal_code,
                editProfile.address,
                editProfile.email,
                editProfile.phone,
                editProfile.timezone,
            );

            result.then((data) => {
                console.log(data, "Data Updated Successfully");
                // alert(data.message);
                enqueueSnackbar(data.message, {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
                setCount(count + 1)
                // navigate('/dashboard_a'); // Make sure to import the 'navigate' function if using React Router or a similar library
            }).catch((error) => {
                enqueueSnackbar(error, "Something Went Wrong try again!", {
                    variant: 'error',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    }
                });;
            });
        } catch (error) {
            enqueueSnackbar(error, "Something Went Wrong try again!", {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                }
            });;
        }
    };


    return (
        <>
            <Sidebar />
            <Panel />
            <Page title="Manage Clinic">
                <Widget >

                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', overflow: 'scroll' }}>
                            <TabList value={value}
                                variant="scrollable"
                                scrollButtons
                                allowScrollButtonsMobile
                                aria-label="scrollable force tabs example" onChange={handleChangeTab} aria-label="lab API tabs example" sx={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'scroll' }}>
                                <Tab sx={{ fontSize: 13,fontWeight:600,fontWeight:600 }} label="Company Information" value="1" />
                                <Tab sx={{ fontSize: 13,fontWeight:600 }} label="Manage User" value="2" />
                                <Tab sx={{ fontSize: 13,fontWeight:600}} label=" Appointment Type" value="6" />
                                <Tab sx={{ fontSize: 13,fontWeight:600 }} label=" Delivery Setting" value="7" />
                                <Tab sx={{ fontSize: 13,fontWeight:600 }} label=" Coupons & Discount" value="8" />
                                <Tab sx={{ fontSize: 13,fontWeight:600 }} label="Thank You Page" value="9" />
                                <Tab sx={{ fontSize: 13,fontWeight:600}} label="Custom Email Template" value="10" />
                                <Tab sx={{ fontSize: 13,fontWeight:600 }} label="Custom SMS Template" value="11" />
                                <Tab sx={{ fontSize: 13,fontWeight:600 }} label="Triggers" value="12" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Container>
                                <Grid container spacing={2} mt={2}>
                                    <div className="wrapper">
                                        <Container>
                                            <form onSubmit={handleUpdate}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor="clinicName"> Company Name</InputLabel>
                                                        <TextField
                                                            id="clinicName"
                                                            size="small"
                                                            value={editProfile.company_name}
                                                            onChange={(e) => setEditProfile({ ...editProfile, company_name: e.target.value })}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor="clinicEmail">Email Address</InputLabel>
                                                        <TextField
                                                            id="clinicEmail"
                                                            size="small"
                                                            value={editProfile.email}
                                                            onChange={(e) => setEditProfile({ ...editProfile, email: e.target.value })}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor="clinicEmail">Address</InputLabel>
                                                        <TextField
                                                            id="clinicEmail"
                                                            size="small"
                                                            value={editProfile.address}
                                                            onChange={(e) => setEditProfile({ ...editProfile, address: e.target.value })}
                                                            fullWidth
                                                        />
                                                    </Grid>

                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor="clinicEmail">Postal Code</InputLabel>
                                                        <TextField
                                                            id="clinicEmail"
                                                            size="small"
                                                            value={editProfile.postal_code}
                                                            onChange={(e) => setEditProfile({ ...editProfile, postal_code: e.target.value })}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor="clinicEmail">State</InputLabel>
                                                        <TextField
                                                            id="clinicEmail"
                                                            size="small"
                                                            value={editProfile.state}
                                                            onChange={(e) => setEditProfile({ ...editProfile, state: e.target.value })}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor="clinicPhone"> Phone Number</InputLabel>
                                                        <TextField
                                                            id="clinicPhone"
                                                            size="small"
                                                            type='phone'
                                                            value={editProfile.phone}
                                                            onChange={(e) => setEditProfile({ ...editProfile, phone: e.target.value })}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor="clinicTimezone">Default Timezone</InputLabel>
                                                        <TextField
                                                            id="clinicTimezone"
                                                            size="small"
                                                            type="date"
                                                            value={editProfile.timezone}
                                                            onChange={(e) => setEditProfile({ ...editProfile, timezone: e.target.value })}
                                                            fullWidth
                                                        />
                                                    </Grid>


                                                    <Grid item xs={6} mt={2.7}>
                                                        <button
                                                            style={{
                                                                width: '150px',
                                                                backgroundColor: '#2BAA27',
                                                                height: '40px',
                                                                borderRadius: 4,
                                                                color: 'white',
                                                                fontWeight: 600
                                                            }}
                                                            type="submit"
                                                            bgcolor="success"
                                                            variant="contained"
                                                        >
                                                            Save Changes
                                                        </button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        </Container>
                                    </div>
                                </Grid>
                            </Container>
                        </TabPanel>
                        <TabPanel value="2">
                            <Grid container spacing={2}>
                                <ClinicUser />
                            </Grid>
                        </TabPanel>
                        <TabPanel value="10">
                            <Grid container spacing={2}>
                                <CustomEmailTemplate />
                            </Grid>
                        </TabPanel>
                        <TabPanel value="11">
                            <Grid container spacing={2}>
                                <SmsTemplate />
                            </Grid>
                        </TabPanel>
                        <TabPanel value="12">
                            <Grid container spacing={2}>
                                <Trigger />
                            </Grid>
                        </TabPanel>
                        <TabPanel value="6">
                            <Grid container spacing={2}>
                                <AppointmentType />
                            </Grid>
                        </TabPanel>
                        <TabPanel value="7">
                            <Grid container spacing={2}>
                                <SecurityGroups />
                            </Grid>
                        </TabPanel>
                        <TabPanel value="8">
                            <Grid container spacing={2}>
                                <SecurityLocation />
                            </Grid>
                        </TabPanel>
                        <TabPanel value="9">
                            <Grid container spacing={2}>
                                <ThankYouPage />
                            </Grid>
                        </TabPanel>
                    </TabContext>
                </Widget>
            </Page>
        </>

    )
}





export default ManageClinic