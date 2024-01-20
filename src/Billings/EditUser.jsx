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
import countryList from 'react-select-country-list';
import { City } from 'country-state-city';
// hooks
import { useState, useEffect } from 'react';
import useNotistack from '@hooks/useNotistack';
import LabeledFormInput from '@ui/LabeledFormInput';
import Cookies from 'js-cookie';
import Page from '@layout/Page';
import { AddPatientapi, CreateNewUser, GetSingleClinicUser, updateUserData } from '@components/Api/AllApi';
import { useParams } from 'react-router';
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

const EditUser = ({ type }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [selectedMenuItem, setSelectedMenuItem] = useState('');
    const [AA, setAA] = useState(false)

    // const handleChange = (event) => {
    //     setSelectedMenuItem(event.target.value);
    // };

    const { notify } = useNotistack('Your changes have been successfully saved.', 'success');

    let { id, role, username, prefix, name, lname, email, phone, password, security_group, doc_license, signature, state } = AA;
    console.log(id, role, username, prefix, name, lname, email, phone, password, security_group, doc_license, signature, state, "ALLLLLLLLLLLL USER GVCxdfcgvhbjndsedrfctgvhbj")


    const [value, setValue] = useState('1');

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };


    // end of validation



    const HandleClick = (values) => {
        console.log("Data That we Add", values.Username, values.Name, values.Email, values.Phone, values.Password, values.Prefix, values.LastName, values.SecurityGroup, values.DoctorLicense, values.Signature, values.State, values.AppointmentColor, values.SecurityRole);

        let token = Cookies.get('Provider');
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
            Username: '',
            Email: '',
            Phone: '',
            Password: '',
            Name: '',
            LastName: '',
        },
        validationSchema: schema,
        onSubmit: HandleClick,
    });



    let { p_id } = useParams();
    //   alert(p_id)

    useEffect(() => {
        let EditTemplateed = GetSingleClinicUser(p_id);
        console.log(EditTemplateed)
        if (EditTemplateed) {
            EditTemplateed.then((data) => {
                console.log(data.result, "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
                setAA(data.result)
            })
        }
    }, [])


    const handleUpdate = (e) => {
        e.preventDefault();

        try {
            console.log(p_id, username, name, lname, email, phone, password, "qqqqqqqqqqqqqqqqqqqqqqqq")
            const result = updateUserData(p_id, username, name, lname, email, phone, password,);

            result.then((data) => {
                console.log(data, "thtrtrer;ojgsrdbehx");
                // alert("Data Successfully Updated");
                enqueueSnackbar(data.messege, {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
                // Navigate('/dashboard_a')

            })
            console.log(result, "Data Updated Successfully");
        } catch (error) {
            enqueueSnackbar(error, "Something Went Wrong try again!", {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                }
            });
        }
    };


    return (
        <>
            <Sidebar />
            <Panel />
            <Page title="Edit User">
                <div key="balance">
                    <Box mt={2}>
                        <Widget >



                            <Container>
                                <Grid container spacing={2} mt={2}>
                                    <div className="wrapper">
                                        <Container>
                                            <form onSubmit={handleSubmit}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Username</InputLabel>
                                                        <TextField placeholder="User Name" size="small" value={username} onChange={(e) => {
                                                            setAA({
                                                                ...AA, username: e.target.value
                                                            })
                                                        }} fullWidth name="Username" />

                                                    </Grid>


                                                    <Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>First Name</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="First Name" size="small" name="Name" placeholder="First Name" value={name} onChange={(e) => {
                                                            setAA({
                                                                ...AA, name: e.target.value
                                                            })
                                                        }} fullWidth />

                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Last Name</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="Last Name" size="small" name="LastName" placeholder="Last Name" value={lname} onChange={(e) => {
                                                            setAA({
                                                                ...AA, lname: e.target.value
                                                            })
                                                        }} fullWidth />

                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Phone</InputLabel>
                                                        <TextField title="Phone" size="small" name="Phone" placeholder="Phone" value={phone} onChange={(e) => {
                                                            setAA({
                                                                ...AA, phone: e.target.value
                                                            })
                                                        }} fullWidth />

                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Email</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="Email" size="small" name="Email" placeholder="Email" value={email} onChange={(e) => {
                                                            setAA({
                                                                ...AA, email: e.target.value
                                                            })
                                                        }} fullWidth />

                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}> Password</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="Password" size="small" name="Password" placeholder="Password" value={password} onChange={(e) => {
                                                            setAA({
                                                                ...AA, password: e.target.value
                                                            })
                                                        }} fullWidth />

                                                    </Grid>

                                                    <Grid item sx={6} mt={2} mb={2}>
                                                        <button style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }} handler={notify} type="submit" bgcolor="success" onClick={handleUpdate} variant="contained">Save Changes</button>
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

EditUser.propTypes = {
    type: PropTypes.oneOf(['patient']).isRequired
}

export default EditUser;