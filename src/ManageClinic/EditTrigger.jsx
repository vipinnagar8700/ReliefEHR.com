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
import { ADDEMAILTES, AddPatientapi, EDITTrigger, GEtEmailSingle, GEtSMSSingle, UPdateEmailTemplate, UPdateSms, UpdateTrigger } from '@components/Api/AllApi';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import { useNavigate, useParams } from 'react-router';






const EditTrigger = ({ type }) => {
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

    const [pro, setpro] = useState(false)

    let { p_id } = useParams()



    const { id, description, delay, notificationType, sms_template_id, triggerName, event } = pro;
    console.log(id, triggerName, description)
    useEffect(() => {

        const EmailData = EDITTrigger(p_id)
        if (EmailData) {
            EmailData.then((data) => {
                console.log(data?.result, "TYUIOIUYTRTYUIOPOUYTRTYUI")
                setpro(data?.result)
            })
        }

    }, [])



    const handleUpdate = (e) => {
        e.preventDefault();

        try {
            console.log(id, description, delay, notificationType, sms_template_id, triggerName, event, "qqqqqqqqqqqqqqqqqqqqqqqq")
            const result = UpdateTrigger(id, description, delay, notificationType, sms_template_id, triggerName, event);

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
            <Page title="Edit Trigger">
                <div key="balance">
                    <Box mt={2}>
                        <Widget >
                            <Container>
                                <Grid container spacing={2} mt={2}>
                                    <div className="wrapper">
                                        <Container>
                                            <form >
                                                <Grid container spacing={2}>


                                                    <Grid item xs={12} md={6} >
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}> Name</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="Last Name" size="small" name="triggerName" placeholder="Name" fullWidth value={triggerName} onChange={(e) => {
                                                            setpro({
                                                                ...pro, triggerName: e.target.value
                                                            })
                                                        }} />
                                                    </Grid>





                                                    <Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Description</InputLabel>
                                                        <TextField id={`${type}ProfileAddress1`} title="EmailContent" name="description" size="small" placeholder="Emaildescription" fullWidth value={description} onChange={(e) => {
                                                            setpro({
                                                                ...pro, description: e.target.value
                                                            })
                                                        }} />


                                                    </Grid>

                                                    <Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Status Changed To (event)</InputLabel>
                                                        <Select value={event} onChange={(e) => {
                                                            setpro({
                                                                ...pro, event: e.target.value
                                                            })
                                                        }} size="small" name="status" fullWidth >
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
                                                        <Select size="small" fullWidth value={notificationType} onChange={(e) => {
                                                            setpro({
                                                                ...pro, notificationType: e.target.value
                                                            })
                                                        }}>
                                                            <MenuItem value="Email">Email</MenuItem>
                                                            <MenuItem value="Text Message">Text Message</MenuItem>
                                                        </Select>


                                                    </Grid><Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Select Template</InputLabel>

                                                        <Select value={sms_template_id} onChange={(e) => {
                                                            setpro({
                                                                ...pro, sms_template_id: e.target.value
                                                            })
                                                        }} size="small" name="Tem" fullWidth >
                                                            <MenuItem>Select a template</MenuItem>
                                                            <MenuItem value="7">Email</MenuItem>
                                                        </Select>

                                                    </Grid>


                                                    <Grid item xs={12} md={6} >
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}> Delay (in minutes)</InputLabel>
                                                        <TextField placeholder="Delay" size="small" type="number" fullWidth value={delay} onChange={(e) => {
                                                            setpro({
                                                                ...pro, delay: e.target.value
                                                            })
                                                        }} />

                                                    </Grid>

                                                    <Grid item xs={12} md={6} mt={2} mb={2}>
                                                        <button style={{ width: '250px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }} handler={notify} type="submit" bgcolor="success" variant="contained" onClick={handleUpdate}>Save Changes</button>
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

EditTrigger.propTypes = {
    type: PropTypes.oneOf(['patient']).isRequired
}

export default EditTrigger;