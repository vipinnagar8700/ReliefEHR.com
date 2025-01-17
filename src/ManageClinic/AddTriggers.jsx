// styled components
import { StyledForm } from '@widgets/UserSettings/style';
import { Input } from '@ui/Field';
import { Container, Grid, Button, TextField, InputLabel, Select, MenuItem, Box, Typography } from '@mui/material';
// components\
import { useFormik } from "formik";
import * as yup from 'yup';
import DropFiles from '@components/DropFiles';
import Btn from '@ui/Btn';
import CustomSelect from '@ui/Select';
import { useSnackbar } from 'notistack';
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
import Cookies from 'js-cookie';
import Page from '@layout/Page';
import { ADDEMAILTES, ADDSMSTES, ADDTrigger, AddPatientapi, GetSmsTemplate } from '@components/Api/AllApi';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import { useNavigate } from 'react-router';



const schema = yup.object().shape({
    Name: yup.string(),
    EmailContent: yup.string(),
    status: yup.string(),
    Tem: yup.string().required(),
    Noti: yup.string(),
    Delay: yup.string().required(),
})



const AddTriggers = ({ type }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [selectedMenuItem, setSelectedMenuItem] = useState('');
    const navigate = useNavigate()
    // const handleChange = (event) => {
    //     setSelectedMenuItem(event.target.value);
    // };

    const { notify } = useNotistack('Your changes have been successfully saved.', 'success');




    const [value, setValue] = useState('1');

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };


    // end of validation



    const HandleClick = (values) => {
        console.log("Data That we Add", values.Name, values.EmailContent, values.Delay, values.Tem, values.Noti, values.status);

        const PatientAddData = ADDTrigger(values);
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
        setFieldValue,
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
            Name: "",
            EmailContent: "",
            Delay: "",
            Tem: "",
            status: "",
            Noti: "",
        },
        validationSchema: schema,
        validateOnMount: true,
        onSubmit: HandleClick
    });

    const [post, setPost] = useState(false)
    useEffect(() => {
        const GEDAA = GetSmsTemplate()
        if (GEDAA) {
            GEDAA.then((data) => {
                console.log(data, "PPPPPPPPPPPP")
                setPost(data?.result)
            })
        }
    },[])



    return (
        <>
            <Sidebar />
            <Panel />
            <Page title="Create Triggers">
                <div key="balance">
                    <Box mt={2}>
                        <Widget >
                            <Container>
                                <Grid container spacing={2} mt={2}>
                                    <div className="wrapper">
                                        <Container>
                                            <form onSubmit={handleSubmit}>
                                                <Grid container spacing={2}>


                                                    <Grid item xs={12} md={6} >
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}> Name</InputLabel>
                                                        <TextField placeholder="First Name" size="small" value={values.Name} fullWidth onChange={handleChange} onBlur={handleBlur} name="Name" />
                                                        {
                                                            touched.Name && errors.Name && <div style={{ color: "red" }}>{errors.Name}</div>
                                                        }
                                                    </Grid>





                                                    <Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Description</InputLabel>
                                                        <TextField id={`${type}ProfileAddress1`} title="EmailContent" name="EmailContent" size="small" onChange={handleChange} onBlur={handleBlur} placeholder="SMS Content" fullWidth value={values.EmailContent} />
                                                        {
                                                            touched.EmailContent && errors.EmailContent && <div style={{ color: "red" }}>{errors.EmailContent}</div>
                                                        }


                                                    </Grid>

                                                    <Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Status Changed To (event)</InputLabel>
                                                        <Select onChange={handleChange} onBlur={handleBlur} size="small" name="status" fullWidth value={values.status}>
                                                            <MenuItem value="Pending">Pending
                                                            </MenuItem>
                                                            <MenuItem value="New Order">New Order
                                                            </MenuItem>
                                                            <MenuItem value="Out for Delivery">Out for Delivery
                                                            </MenuItem>
                                                            <MenuItem value="Completed">Completed
                                                            </MenuItem>
                                                            <MenuItem value="Cancelled">Cancelled
                                                            </MenuItem>
                                                            <MenuItem value="Denied">Denied
                                                            </MenuItem>

                                                            <MenuItem value="Not Yet Eligible">Not Yet Eligible
                                                            </MenuItem>
                                                            <MenuItem value="Pending Payment">Pending Payment
                                                            </MenuItem><MenuItem value="Ready for pickup">Ready for pickup
                                                            </MenuItem>
                                                        </Select>


                                                    </Grid><Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Notification type</InputLabel>
                                                        <Select onChange={handleChange} onBlur={handleBlur} name="Noti" size="small" fullWidth value={values.Noti}>
                                                            <MenuItem value="Email">Email</MenuItem>
                                                            <MenuItem value="Text Message">Text Message</MenuItem>
                                                        </Select>


                                                    </Grid><Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Select Template</InputLabel>

                                                        <Select onChange={handleChange} onBlur={handleBlur} size="small" name="Tem" fullWidth value={values.Tem}>
                                                            {
                                                                post && post.map((data, index) => {
                                                                    return (
                                                                        <MenuItem value={data.id} key={index}>{data.name}</MenuItem>
                                                                    )
                                                                })
                                                            }

                                                        </Select>

                                                    </Grid>


                                                    <Grid item xs={12} md={6} >
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}> Delay (in minutes)</InputLabel>
                                                        <TextField placeholder="Delay" size="small" type='number' value={values.Delay} fullWidth onChange={handleChange} onBlur={handleBlur} name="Delay" />
                                                        {
                                                            touched.Delay && errors.Delay && <div style={{ color: "red" }}>{errors.Delay}</div>
                                                        }
                                                    </Grid>

                                                    <Grid item xs={12} md={6} mt={2} mb={2}>
                                                        <button style={{ width: '250px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }} handler={notify} type="submit" bgcolor="success" variant="contained">Create Trigger</button>
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

AddTriggers.propTypes = {
    type: PropTypes.oneOf(['patient']).isRequired
}

export default AddTriggers;