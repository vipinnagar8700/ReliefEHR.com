// styled components
import { Container, Grid, Button, TextField, InputLabel, option, Box, Typography } from '@mui/material';
// components\
import { useSnackbar } from 'notistack';

// components
import Widget from '@components/Widget';
// utils
import PropTypes from 'prop-types';
// hooks
import { useState, useEffect } from 'react';
import useNotistack from '@hooks/useNotistack';
import Page from '@layout/Page';
import { EDITTrigger, GEtEmailSingle, GEtSMSSingle, GetSmsTemplate, UPdateEmailTemplate, UPdateSms, UpdateTrigger } from '@components/Api/AllApi';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import { useNavigate, useParams } from 'react-router';






const EditTrigger = ({ type }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [selectedoption, setselectedoption] = useState('');
    const navigate = useNavigate()

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

    const [post, setPost] = useState(false)
    useEffect(() => {
        const GEDAA = GetSmsTemplate()
        if (GEDAA) {
            GEDAA.then((data) => {
                console.log(data, "PPPPPPPPPPPP")
                setPost(data?.result)
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
                // alert(data.messege);
                enqueueSnackbar(data.messege, {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });

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
                                                        <select style={{ padding: '10px', width: '100%', borderRadius: 3 }} value={event} onChange={(e) => {
                                                            setpro({
                                                                ...pro, event: e.target.value
                                                            })
                                                        }} size="small" name="status" fullWidth >
                                                            <option value="Pending">Pending
                                                            </option>
                                                            <option value="New Order">New Order
                                                            </option>
                                                            <option value="Out for Delivery">Out for Delivery
                                                            </option>
                                                            <option value="Completed">Completed
                                                            </option>
                                                            <option value="Cancelled">Cancelled
                                                            </option>
                                                            <option value="Denied">Denied
                                                            </option>

                                                            <option value="Not Yet Eligible">Not Yet Eligible
                                                            </option>
                                                            <option value="Pending Payment">Pending Payment
                                                            </option><option value="Ready for pickup">Ready for pickup
                                                            </option>
                                                        </select>


                                                    </Grid><Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Notification type</InputLabel>
                                                        <select size="small" fullWidth value={notificationType} style={{ padding: '10px', width: '100%', borderRadius: 3 }} onChange={(e) => {
                                                            setpro({
                                                                ...pro, notificationType: e.target.value
                                                            })
                                                        }}>
                                                            <option value="Email">Email</option>
                                                            <option value="Text Message">Text Message</option>
                                                        </select>


                                                    </Grid><Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>select Template</InputLabel>

                                                        <select value={sms_template_id} style={{ padding: '10px', width: '100%', borderRadius: 3 }} onChange={(e) => {
                                                            setpro({
                                                                ...pro, sms_template_id: e.target.value
                                                            })
                                                        }} size="small" name="Tem" fullWidth >
                                                            {
                                                                post && post.map((data, index) => {
                                                                    return (
                                                                        <option value={data.id} key={index}>{data.name}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>

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