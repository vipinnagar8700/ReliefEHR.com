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
import { ADDClinicShedule, AddSecurityGroup, AddThankuPage, DeleteCLinicShedule, GEtSingleCliniocShedule, GetAllUSers, GetBilling, GetBillingCancel, GetClinicShedule, GetEmployess, GettSecurityData, UPdateCLincicShedule, UpdateSecurity, deleteSecurity, editSecurityData } from '@components/Api/AllApi';
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

    const [contentA, setContentA] = useState(false);
    //    console.log(contentA)
    console.log(contentA, "9999999999999999999999999999999999999999")

    const [content, setContent] = useState(''); // State to hold the content value
    let id = contentA?.id;



    // Function to handle form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Call the API to add the Thank You Page content
        try {
            const response = await AddThankuPage(content);

            if (response.status === "success") {
                // Handle success for adding content
                console.log(response);
                alert('Content added successfully');
            } else if (response.status === "exists") {
                // Content already exists, update it
                const updateResponse = await UPdateCLincicShedule(content,id);
                console.log(updateResponse);
                if (updateResponse.status === "Succes") {
                    // Handle success for updating content
                    alert('Content updated successfully');
                } else {
                    // Handle error for updating content
                    console.error('Failed to update content');
                }
            } else {
                // Handle other error cases, e.g., show an error message
                console.error('Failed to add/update content');
            }

        } catch (error) {
            // Handle any network or API call errors
            console.error('API call error:', error);
        }
    };

    useEffect(() => {
        // Call the API to get Thank You Page content and update the state
        const fetchData = async () => {
            try {
                const response = await GetClinicShedule();
                if (response) {
                    // Update the content state with the fetched data
                    setContentA(response?.result)
                    setContent(response?.result?.content);
                    console.log(response?.result, 'Content getes successfully');
                } else {
                    // Handle error, e.g., show an error message
                    console.error('Failed to fetch content');
                }
            } catch (error) {
                // Handle any network or API call erroxrs
                console.error('API call error:', error);
            }
        };

        fetchData(); // Fetch data when the component mounts
    }, []);













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
                                            <form onSubmit={handleFormSubmit}>
                                                <InputLabel htmlFor="name"> Content </InputLabel>
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    margin="normal"
                                                    size='small'
                                                    row={6}
                                                    value={content} // Bind input value to state
                                                    onChange={(e) => setContent(e.target.value)} // Update state on input change
                                                />
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <Stack mt={1}>
                                                            <button
                                                                type="submit"
                                                                p={2}
                                                                style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 400 }}
                                                                variant="contained"
                                                                color="success"
                                                                sx={{ width: '100%' }}
                                                            >
                                                                Save Changes
                                                            </button>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
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
