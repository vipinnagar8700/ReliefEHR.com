// styled components
import { StyledForm } from '@widgets/UserSettings/style';
import { Input } from '@ui/Field';
import { Container, Grid, Button, TextField, InputLabel, Select, MenuItem, Box } from '@mui/material';
// components\
import { useSnackbar } from 'notistack';
import { useFormik } from "formik";
import * as yup from 'yup';
import DropFiles from '@components/DropFiles';
import Btn from '@ui/Btn';
import CustomSelect from '@ui/Select';
import DateInput from '@components/MaskedInputs/Date';
import Phone from '@components/MaskedInputs/Phone';
// styled components
import { SettingsHeader } from '@widgets/UserSettings/style';
import { Divider } from '@components/Widget/style';

// components
import Widget from '@components/Widget';
import WidgetBody from '@components/Widget/WidgetBody';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// utils
import PropTypes from 'prop-types';
// hooks
import { useState, useEffect } from 'react';
import useNotistack from '@hooks/useNotistack';
import LabeledFormInput from '@ui/LabeledFormInput';
import Cookies from 'js-cookie';
import Page from '@layout/Page';
import { AddPatientapi, AddSecurityLocation, CreateNewUser } from '@components/Api/AllApi';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import { useNavigate } from 'react-router';



const schema = yup.object().shape({
    LocationName: yup.string().required(),
    LocationPhoneNumber: yup.string().required(),
    AddressLine: yup.string().required(),
    AddressLine1: yup.string().required(),
    City: yup.string().required(),
    PostalCode: yup.string().required(),
    State: yup.string().required(),
});

const AddSecondaryLoaction = ({ type }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [selectedMenuItem, setSelectedMenuItem] = useState('');
    const navigate = useNavigate()


    const { notify } = useNotistack('Your changes have been successfully saved.', 'success');




    const [value, setValue] = useState('1');

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };


    // end of validation



    const HandleClick = (values) => {
        console.log("Data That we Add", values.LocationName, values.LocationPhoneNumber, values.AddressLine, values.AddressLine1, values.State, values.City, values.PostalCode);

        const PatientAddData = AddSecurityLocation(values);
        console.log(PatientAddData, "Patient Add Data");

        if (PatientAddData) {
            PatientAddData.then((data) => {
                console.log(data.messege);
                // alert(data.messege)
                enqueueSnackbar(data.messege, {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
                // navigate('/ManageClinic/Details')
            });
        } else {
            enqueueSnackbar("Something Went Wrong try again!", {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                }
            });
        }

    };
    const {
        handleSubmit,
        values,
        handleChange,
        errors,
        handleBlur,
        touched,
        isValid,
        dirty,
    } = useFormik({
        initialValues: {
            LocationName: '',
            LocationPhoneNumber: '',
            AddressLine: '',
            AddressLine1: '',
            State: '',
            City: '',
            PostalCode: '',

        },
        validationSchema: schema,
        onSubmit: HandleClick,
    });



    return (
        <>
            <Sidebar />
            <Panel />
            <Page title="Create Coupons & Discount">
                <div key="balance">
                    <Box mt={2}>
                        <Widget >
                            <Container>
                                <Grid container spacing={2} mt={2} mb={7}>
                                    <div className="wrapper">
                                        <Container>
                                            <form onSubmit={handleSubmit}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Discount Name</InputLabel>
                                                        <TextField placeholder="LocationName" size="small" value={values.LocationName} fullWidth onChange={handleChange} onBlur={handleBlur} name="LocationName" />
                                                        {
                                                            touched.LocationName && errors.LocationName && <div style={{ color: "red" }}>{errors.LocationName}</div>
                                                        }
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Discount Code</InputLabel>
                                                        <TextField id={`${type}ProfilePrefix`} title="LocationPhoneNumber" size="small" name="LocationPhoneNumber" value={values.LocationPhoneNumber} onChange={handleChange} onBlur={handleBlur} placeholder="LocationPhoneNumber" fullWidth />
                                                        {
                                                            touched.LocationPhoneNumber && errors.LocationPhoneNumber && <div style={{ color: "red" }}>{errors.LocationPhoneNumber}</div>
                                                        }
                                                    </Grid>

                                                    <Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Description</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="AddressLine" size="small" name="AddressLine" placeholder="AddressLine" value={values.AddressLine} onChange={handleChange} onBlur={handleBlur} fullWidth />
                                                        {
                                                            touched.AddressLine && errors.AddressLine && <div style={{ color: "red" }}>{errors.AddressLine}</div>
                                                        }
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Discount Amount</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="AddressLine1" size="small" name="AddressLine1" value={values.AddressLine1} placeholder="AddressLine1" onChange={handleChange} onBlur={handleBlur} fullWidth />
                                                        {
                                                            touched.AddressLine1 && errors.AddressLine1 && <div style={{ color: "red" }}>{errors.AddressLine1}</div>
                                                        }
                                                    </Grid>


                                                    <Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Discount Type</InputLabel>

                                                        <Select id="patient_add_referringDoctorState" labelId="dropdown-label"
                                                            fullWidth onChange={handleChange} onBlur={handleBlur}
                                                            value={values.State}
                                                            size='small'
                                                            name="State" class="form-control">
                                                            <MenuItem value="">Choose State</MenuItem>
                                                            <MenuItem value="Flat Amount">Flat Amount</MenuItem>
                                                            <MenuItem value="% Percentages">% Percentages</MenuItem>
                                                        </Select>
                                                        {
                                                            touched.State && errors.State && <div style={{ color: "red" }}>{errors.State}</div>
                                                        }


                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Expires On</InputLabel>
                                                        <TextField title="City" type='date' size="small" name="City" value={values.City} placeholder="City" onChange={handleChange} onBlur={handleBlur} fullWidth />
                                                        {
                                                            touched.City && errors.City && <div style={{ color: "red" }}>{errors.City}</div>
                                                        }
                                                    </Grid>

                                                    <Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}># Uses Per Patient</InputLabel>

                                                        <TextField id={`${type}ProfileLastName`} title="PostalCode" name="PostalCode" size="small" onChange={handleChange} onBlur={handleBlur} placeholder="PostalCode" value={values.PostalCode} fullWidth />
                                                        {
                                                            touched.PostalCode && errors.PostalCode && <div style={{ color: "red" }}>{errors.PostalCode}</div>
                                                        }

                                                    </Grid>

                                                    <Grid item sx={6} mt={2}>
                                                        <button style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }} handler={notify} disabled={!isValid || !dirty} type="submit" bgcolor="success" variant="contained">Save Changes</button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        </Container>
                                    </div>
                                </Grid>
                            </Container>

                        </Widget>
                    </Box>
                </div>

            </Page>
        </>

    )
}

AddSecondaryLoaction.propTypes = {
    type: PropTypes.oneOf(['patient']).isRequired
}

export default AddSecondaryLoaction;