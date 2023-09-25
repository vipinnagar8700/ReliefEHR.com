import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router';
import Page from '@layout/Page';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { ADDClinicShedule, AddSecurityGroup, DeleteCLinicShedule, GEtSingleCliniocShedule, GetAllUSers, GetBilling, GetBillingCancel, GetClinicShedule, GetEmployess, GettSecurityData, UPdateCLincicShedule, UpdateSecurity, deleteSecurity, editSecurityData } from '@components/Api/AllApi';
import { Grid, Stack, TextField, InputLabel, Box, MenuItem, Select } from '@mui/material';





const ThankYouPage = () => {
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
    const [selectedName, setSelectedName] = useState('');
    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedTab('');
    };

    window.addEventListener('resize', () => {
        if (smallScreen) {
            handleModalClose();
        }
    });



  







    






    return (
        <>

            <Card sx={{ minWidth: 970, marginLeft: '0px', '@media screen and (max-width: 1400px)': { minWidth: '100%' } }}>
                <CardContent>


                    <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1400px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                        <CardContent>

                            <div className="Order Page">
                                <Box >
                                    <Box sx={{ minWidth: 845, '@media screen and (max-width: 1100px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>

                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Box>Thank You Page</Box>
                                        </Box>

                                        <Box sx={{ mt: 2 }}>
                                            <form>



                                                <InputLabel htmlFor="name"> Content </InputLabel>
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    margin="normal"
                                                    size='small'
                                                    row={6}
                                                // Add any other props you want to customize the TextField
                                                />
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <Stack mt={1}>
                                                            <button p={2} style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 400 }} variant="contained" color="success" sx={{ width: '100%' }}>Save Changes</button>
                                                        </Stack>
                                                    </Grid>

                                                </Grid>


                                                {/* Add more TextField components for other input fields */}
                                            </form>
                                        </Box>

                                    </Box>
                                </Box>
                            </div>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </>
    );
};

export default ThankYouPage;
