// styled components
import { StyledForm } from '@widgets/UserSettings/style';
import { Input } from '@ui/Field';
import { Container, Grid, Button, TextField, InputLabel, Select, MenuItem, Box, Typography } from '@mui/material';
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
import Cookies from 'js-cookie';
import Page from '@layout/Page';
import { ADDEMAILTES, AddPatientapi, GEtEmailSingle, UPdateEmailTemplate } from '@components/Api/AllApi';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import { useNavigate, useParams } from 'react-router';






const EditEmailTempalets = ({ type }) => {
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

    const [pro, setpro] = useState(false)

    let { p_id } = useParams()



    const { id, name, subject, content } = pro;
    console.log(id, name, subject, content)
    useEffect(() => {

        const EmailData = GEtEmailSingle(p_id)
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
            console.log(id, name, subject, content, "qqqqqqqqqqqqqqqqqqqqqqqq")
            const result = UPdateEmailTemplate(id, name, subject, content);

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
            <Page title="Edit Email Templates">
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
                                                        <TextField id={`${type}ProfileLastName`} title="Last Name" size="small" name="name" placeholder="Name" fullWidth value={name} onChange={(e) => {
                                                            setpro({
                                                                ...pro, name: e.target.value
                                                            })
                                                        }} />
                                                    </Grid>


                                                    <Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Subject</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="Last Name" size="small" name="Subject" placeholder="Subject" fullWidth value={subject} onChange={(e) => {
                                                            setpro({
                                                                ...pro, subject: e.target.value
                                                            })
                                                        }} />

                                                    </Grid>


                                                    <Grid item xs={12} md={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Email  Content</InputLabel>
                                                        <TextField id={`${type}ProfileAddress1`} title="EmailContent" name="EmailContent" size="small" placeholder="EmailContent" fullWidth value={content} onChange={(e) => {
                                                            setpro({
                                                                ...pro, content: e.target.value
                                                            })
                                                        }} />


                                                    </Grid>

                                                    <Grid item xs={12} md={6} mt={2}>
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

EditEmailTempalets.propTypes = {
    type: PropTypes.oneOf(['patient']).isRequired
}

export default EditEmailTempalets;