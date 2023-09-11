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
import { AddPatientapi, CreateNewUser, GetEmployess, GettSecurityData } from '@components/Api/AllApi';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import { useNavigate } from 'react-router';



const schema = yup.object().shape({
    Username:yup.string().required('User name is a required field'),
    Name: yup.string().required('Name is a required field'),
    Email: yup.string().required('Email is a required field'),
    Phone: yup.string().required('phone is a required field'),
    Password: yup.string().required('password is a required field'),
    LastName: yup.string().required('Last name is a required field'),
});

const CreateUser = ({ type }) => {
    const navigate = useNavigate()
    const [selectedMenuItem, setSelectedMenuItem] = useState('');

    // const handleChange = (event) => {
    //     setSelectedMenuItem(event.target.value);
    // };

    const { notify } = useNotistack('Your changes have been successfully saved.', 'success');

    const [GetEmpes, setGetEmp] = useState(false)


    const [value, setValue] = useState('1');

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };


    // end of validation



    const HandleClick = (values) => {
        console.log("Data That we Add", values.Username, values.Name, values.Email, values.Password,values.LastName,values.Phone );

        let token = Cookies.get('Provider');
        console.log(token, "token Mil ga");
        if (token) {
            const PatientAddData = CreateNewUser(values);
            console.log(PatientAddData, "Patient Add Data");

            if (PatientAddData) {
                PatientAddData.then((data) => {
                    console.log(data.messege);
                    alert(data.messege)
                    // navigate('/ManageClinic/Details')

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
            Username:'',
            Email: '',
            Phone: '',
            Password: '',
            Name: '',
            LastName: '',
        },
        validationSchema: schema,
        onSubmit: HandleClick,
    });



    useEffect(() => {
        GetEmp()
    }, [])

    const GetEmp = () => {
        let TyoeData = GettSecurityData()
        if (TyoeData) {
            TyoeData.then((data) => {
                console.log(data.result, "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
                setGetEmp(data.result)
            })
        }
    }


    return (
        <>
            <Sidebar />
            <Panel />
            <Page title="Create User">
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
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>User Name</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="User Name" size="small" name="Username" placeholder="User Name" value={values.Username} onChange={handleChange} onBlur={handleBlur} fullWidth />
                                                        {
                                                            touched.Username && errors.Username && <div style={{ color: "red" }}>{errors.Username}</div>
                                                        }
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>First Name</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="First Name" size="small" name="Name" placeholder="First Name" value={values.Name} onChange={handleChange} onBlur={handleBlur} fullWidth />
                                                        {
                                                            touched.Name && errors.Name && <div style={{ color: "red" }}>{errors.Name}</div>
                                                        }
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Last Name</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="Last Name" size="small" name="LastName" value={values.LastName} placeholder="Last Name" onChange={handleChange} onBlur={handleBlur} fullWidth />
                                                        {
                                                            touched.LastName && errors.LastName && <div style={{ color: "red" }}>{errors.LastName}</div>
                                                        }
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Phone</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="Phone" size="small" name="Phone" value={values.Phone} placeholder="Phone" onChange={handleChange} onBlur={handleBlur} fullWidth />
                                                        {
                                                            touched.Phone && errors.Phone && <div style={{ color: "red" }}>{errors.Phone}</div>
                                                        }
                                                    </Grid>
                                                    
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Email</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="Email" size="small" value={values.Email} name="Email" placeholder="Email" fullWidth onChange={handleChange} onBlur={handleBlur} />
                                                        {
                                                            touched.Email && errors.Email && <div style={{ color: "red" }}>{errors.Email}</div>
                                                        }
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}> Password</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="Password" size="small" value={values.Password} name="Password" placeholder="Password" onChange={handleChange} onBlur={handleBlur} fullWidth />
                                                        {
                                                            touched.Password && errors.Password && <div style={{ color: "red" }}>{errors.password}</div>
                                                        }
                                                    </Grid>
                                                    
                                                    

                                                   


                                                   
                                                    {/* <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>State</InputLabel>

                                                        <Select id="patient_add_referringDoctorState" labelId="dropdown-label"
                                                            fullWidth onChange={handleChange} onBlur={handleBlur}
                                                            value={values.State}
                                                            size='small'
                                                            name="State" class="form-control">
                                                            <MenuItem value="">Choose State</MenuItem>
                                                            <MenuItem value="AL">Alabama</MenuItem>
                                                            <MenuItem value="AK">Alaska</MenuItem>
                                                            <MenuItem value="AZ">Arizona</MenuItem>
                                                            <MenuItem value="AR">Arkansas</MenuItem>
                                                            <MenuItem value="CA">California</MenuItem>
                                                            <MenuItem value="CO">Colorado</MenuItem>
                                                            <MenuItem value="CT">Connecticut</MenuItem>
                                                            <MenuItem value="DE">Delaware</MenuItem>
                                                            <MenuItem value="DC">District Of Columbia</MenuItem>
                                                            <MenuItem value="FL">Florida</MenuItem>
                                                            <MenuItem value="GA">Georgia</MenuItem>
                                                            <MenuItem value="HI">Hawaii</MenuItem>
                                                            <MenuItem value="ID">Idaho</MenuItem>
                                                            <MenuItem value="IL">Illinois</MenuItem>
                                                            <MenuItem value="IN">Indiana</MenuItem>
                                                            <MenuItem value="IA">Iowa</MenuItem>
                                                            <MenuItem value="KS">Kansas</MenuItem>
                                                            <MenuItem value="KY">Kentucky</MenuItem>
                                                            <MenuItem value="LA">Louisiana</MenuItem>
                                                            <MenuItem value="ME">Maine</MenuItem>
                                                            <MenuItem value="MD">Maryland</MenuItem>
                                                            <MenuItem value="MA">Massachusetts</MenuItem>
                                                            <MenuItem value="MI">Michigan</MenuItem>
                                                            <MenuItem value="MN">Minnesota</MenuItem>
                                                            <MenuItem value="MS">Mississippi</MenuItem>
                                                            <MenuItem value="MO">Missouri</MenuItem>
                                                            <MenuItem value="MT">Montana</MenuItem>
                                                            <MenuItem value="NE">Nebraska</MenuItem>
                                                            <MenuItem value="NV">Nevada</MenuItem>
                                                            <MenuItem value="NH">New Hampshire</MenuItem>
                                                            <MenuItem value="NJ">New Jersey</MenuItem>
                                                            <MenuItem value="NM">New Mexico</MenuItem>
                                                            <MenuItem value="NY">New York</MenuItem>
                                                            <MenuItem value="NC">North Carolina</MenuItem>
                                                            <MenuItem value="ND">North Dakota</MenuItem>
                                                            <MenuItem value="OH">Ohio</MenuItem>
                                                            <MenuItem value="OK">Oklahoma</MenuItem>
                                                            <MenuItem value="OR">Oregon</MenuItem>
                                                            <MenuItem value="PA">Pennsylvania</MenuItem>
                                                            <MenuItem value="PR">Puerto Rico</MenuItem>
                                                            <MenuItem value="RI">Rhode Island</MenuItem>
                                                            <MenuItem value="SC">South Carolina</MenuItem>
                                                            <MenuItem value="SD">South Dakota</MenuItem>
                                                            <MenuItem value="TN">Tennessee</MenuItem>
                                                            <MenuItem value="TX">Texas</MenuItem>
                                                            <MenuItem value="UT">Utah</MenuItem>
                                                            <MenuItem value="VT">Vermont</MenuItem>
                                                            <MenuItem value="VI">Virgin Islands</MenuItem>
                                                            <MenuItem value="VA">Virginia</MenuItem>
                                                            <MenuItem value="WA">Washington</MenuItem>
                                                            <MenuItem value="WV">West Virginia</MenuItem>
                                                            <MenuItem value="WI">Wisconsin</MenuItem>
                                                            <MenuItem value="WY">Wyoming</MenuItem>
                                                        </Select>
                                                        {
                                                            touched.State && errors.State && <div style={{ color: "red" }}>{errors.State}</div>
                                                        }


                                                    </Grid> */}
                                                    






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

CreateUser.propTypes = {
    type: PropTypes.oneOf(['patient']).isRequired
}

export default CreateUser;