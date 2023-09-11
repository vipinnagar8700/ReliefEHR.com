import Page from '@layout/Page'
import React from 'react'

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
                alert(data.message);
                setCount(count + 1)
                // navigate('/dashboard_a'); // Make sure to import the 'navigate' function if using React Router or a similar library
            }).catch((error) => {
                console.error("Error occurred while updating data:", error);
            });
        } catch (error) {
            console.error("Error occurred while updating data:", error);
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
                            <TabList onChange={handleChangeTab} aria-label="lab API tabs example" sx={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'scroll' }}>
                                <Tab sx={{ fontSize: 13,minWidth:40,maxWidth:100 }} label="Company Information" value="1" />
                                <Tab sx={{ fontSize: 13,minWidth:40,maxWidth:90 }} label="Manage User" value="2" />
                                <Tab sx={{ fontSize: 13,minWidth:40,maxWidth:100 }} label=" Appointment Type" value="6" />
                                <Tab sx={{ fontSize: 13,minWidth:40,maxWidth:90 }} label=" Delivery Setting" value="7" />
                                <Tab sx={{ fontSize: 13,minWidth:40,maxWidth:120 }} label=" Coupons & Discount" value="8" />
                                <Tab sx={{ fontSize: 13,minWidth:40,maxWidth:110 }} label="Thank You Page" value="9" />
                                <Tab sx={{ fontSize: 13,minWidth:40,maxWidth:140 }} label="Custom Email Template" value="10" />
                                <Tab sx={{ fontSize: 13,minWidth:40,maxWidth:150 }} label="Custom SMS Template" value="11" />
                                <Tab sx={{ fontSize: 13,minWidth:40,maxWidth:90 }} label="Triggers" value="12" />
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
                                                            value={editProfile.timezone}
                                                            onChange={(e) => setEditProfile({ ...editProfile, timezone: e.target.value })}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    {/* <Grid item xs={6}>
                                                    <InputLabel htmlFor="clinicLogo"> Logo</InputLabel>
                                                    <Box sx={{ border: '1px solid #C4C4C4', borderRadius: 2, padding: 3 }}>
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={(e) => setEditProfile({ ...editProfile, img: e.target.files[0] })}
                                                        />
                                                    </Box>
                                                    
                                                </Grid> */}
                                                    <Grid item xs={6}>

                                                        <Box sx={{ width: 140, height: 140 }}>
                                                            {editProfile.img && (
                                                                <img
                                                                    style={{ borderRadius: 5, width: '100%', height: '100%', objectFit: 'cover' }}
                                                                    src={`https://medical.studiomyraa.com/public/uploads/images/${editProfile.img}`}
                                                                    alt="Clinic Logo"
                                                                />
                                                            )}
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={6}>
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