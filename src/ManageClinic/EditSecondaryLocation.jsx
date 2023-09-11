// styled components
import { StyledForm } from '@widgets/UserSettings/style';
import { Input } from '@ui/Field';
import { Container, Grid, Button, TextField, InputLabel, Select, MenuItem, Box } from '@mui/material';
// components\
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
import countryList from 'react-select-country-list';
import { City } from 'country-state-city';
// hooks
import { useState, useEffect } from 'react';
import useNotistack from '@hooks/useNotistack';
import LabeledFormInput from '@ui/LabeledFormInput';
import Cookies from 'js-cookie';
import Page from '@layout/Page';
import { AddPatientapi, CreateNewUser, GetSingleSecondaryLocation, UpdateSecondaryLocation } from '@components/Api/AllApi';
import { useNavigate, useParams } from 'react-router';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';



const schema = yup.object().shape({
    Username: yup.string().required(),
    Name: yup.string().required(),
    Email: yup.string().required(),
    Phone: yup.string().required(),
    Password: yup.string().required(),
    LastName: yup.string().required(),
    Prefix: yup.string().required(),
    State: yup.string().required(),
    Signature: yup.string().required(),
    DoctorLicense: yup.string().required(),
    SecurityGroup: yup.string().required(),
    AppointmentColor: yup.string().required(),
    SecurityRole: yup.string().required(),
});

const EditSecondaryLoaction = ({ type }) => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('');


    const navigate = useNavigate()
    const { notify } = useNotistack('Your changes have been successfully saved.', 'success');


    const [AA, setAA] = useState(false)

    const [value, setValue] = useState('1');

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };


    // end of validation
    let { p_id } = useParams();
    //   alert(p_id)

    useEffect(() => {
        let EditTemplateed = GetSingleSecondaryLocation(p_id);
        console.log(EditTemplateed)
        if (EditTemplateed) {
            EditTemplateed.then((data) => {
                console.log(data.result, "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
                setAA(data.result)
            })
        }
    }, [])

    console.log(AA, "HHHHHHHHHHHHHHHHHHHHHh")
    const { name, code, description, discount, id, discountType, expiration, patient_uses } = AA;

    const HandleClick = (values) => {
        console.log("Data That we Add", values.LocationName, values.LocationPhoneNumber, values.AddressLine, values.AddressLine1, values.State, values.City, values.PostalCode, values.AdditionalInstructions);

        let token = Cookies.get('clinic');
        console.log(token, "token Mil ga");
        if (token) {
            const PatientAddData = CreateNewUser(values);
            console.log(PatientAddData, "Patient Add Data");

            if (PatientAddData) {
                PatientAddData.then((data) => {
                    console.log(data);
                    alert("User Successfully Added!")
                });
            } else {
                alert("Api's Error OCCUR");
            }
        } else {
            alert("Token is missing");
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
            AdditionalInstructions: '',

        },
        validationSchema: schema,
        onSubmit: HandleClick,
    });


    const handleUpdate = (e) => {
        e.preventDefault();

        try {
            console.log(p_id, name, code, description, discount, id, discountType, expiration, patient_uses, "qqqqqqqqqqqqqqqqqqqqqqqq")
            const result = UpdateSecondaryLocation(p_id, name, code, description, discount, id, discountType, expiration, patient_uses,);

            result.then((data) => {
                console.log(data.messege, "thtrtrer;ojgsrdbehx");
                alert(data.messege);

            })
            console.log(result, "Data Updated Successfully");
        } catch (error) {
            console.error("Error occurred while updating data:", error);
        }
    };


    return (
        <>
            <Sidebar />
            <Panel />
            <Page title="Edit Coupon">
                <div key="balance">
                    <Box mt={2}>
                        <Widget >
                            <Container>
                                <Grid container spacing={2} mt={2} mb={5}>
                                    <div className="wrapper">
                                        <Container>
                                            <form onSubmit={handleSubmit}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Discount Name</InputLabel>
                                                        <TextField placeholder="Name" size="small" value={name} onChange={(e) => {
                                                            setAA({
                                                                ...AA, name: e.target.value
                                                            })
                                                        }} fullWidth name="name" />

                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Discount Code</InputLabel>
                                                        <TextField id={`${type}ProfilePrefix`} title="LocationPhoneNumber" size="small" name="code" value={code} onChange={(e) => {
                                                            setAA({
                                                                ...AA, code: e.target.value
                                                            })
                                                        }} placeholder="LocationPhoneNumber" fullWidth />

                                                    </Grid>

                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Discount Amount</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="AddressLine" size="small" name="discount" value={discount} onChange={(e) => {
                                                            setAA({
                                                                ...AA, discount: e.target.value
                                                            })
                                                        }} placeholder="AddressLine" fullWidth />

                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Description</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="AddressLine1" size="small" name="description" placeholder="description" value={description} onChange={(e) => {
                                                            setAA({
                                                                ...AA, description: e.target.value
                                                            })
                                                        }} fullWidth />

                                                    </Grid>


                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Discount Type</InputLabel>

                                                        <Select id="patient_add_referringDoctorState" labelId="dropdown-label"
                                                            fullWidth value={discountType} onChange={(e) => {
                                                                setAA({
                                                                    ...AA, discountType: e.target.value
                                                                })
                                                            }}
                                                            size='small'
                                                            name="discountType" class="form-control">
                                                            <MenuItem value="Flat Amount">Flat Amount</MenuItem>
                                                            <MenuItem value="% Percentages">% Percentages</MenuItem>
                                                        </Select>



                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Expiration</InputLabel>
                                                        <TextField title="City" size="small" type="date" name="expiration" value={expiration} onChange={(e) => {
                                                            setAA({
                                                                ...AA, expiration: e.target.value
                                                            })
                                                        }} placeholder="expiration" fullWidth />

                                                    </Grid>

                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Patient Uses</InputLabel>

                                                        <TextField id={`${type}ProfileLastName`} title="postalCode" name="patient_uses" size="small" value={patient_uses
                                                        } onChange={(e) => {
                                                            setAA({
                                                                ...AA, patient_uses
                                                                    : e.target.value
                                                            })
                                                        }} placeholder="patient_uses" fullWidth />


                                                    </Grid>

                                                    <Grid item sx={6} mt={2}>
                                                        <button style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }} handler={notify} onClick={handleUpdate} type="submit" bgcolor="success" variant="contained">Save Changes</button>
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

EditSecondaryLoaction.propTypes = {
    type: PropTypes.oneOf(['patient']).isRequired
}

export default EditSecondaryLoaction;