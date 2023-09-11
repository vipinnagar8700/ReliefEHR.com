// styled components
import { StyledForm } from '@widgets/UserSettings/style';
import { Input } from '@ui/Field';
import { Container, Grid, Button, TextField, InputLabel, Select, MenuItem, Box, Stack, } from '@mui/material';
// components
import DropFiles from '@components/DropFiles';
import Btn from '@ui/Btn';
import CustomSelect from '@ui/Select';
import DateInput from '@components/MaskedInputs/Date';
import Phone from '@components/MaskedInputs/Phone';

// utils
import PropTypes from 'prop-types';
import countryList from 'react-select-country-list';
import { City } from 'country-state-city';
// hooks
import { useState, useEffect } from 'react';
import useNotistack from '@hooks/useNotistack';
import { ProfileApi, UpdateProfileData } from '@components/Api/AllApi';
import LabeledFormInput from '@ui/LabeledFormInput';
import { useNavigate } from 'react-router-dom';



const Form = ({ type }) => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [editProfile, setEditProfile] = useState(false);
    const { notify } = useNotistack('Your changes have been successfully saved.', 'success');

    const [selectedCountry, setSelectedCountry] = useState();
    const [selectedCity, setSelectedCity] = useState();
    const [cities, setCities] = useState([]);



    console.log(editProfile, "EditProfileData!");

    let { name, mname, lname, about, email, address, address2, city, dob, gender, id, img, phone, pincode, state, doc_license, signature } = editProfile;
    console.log(name, mname, lname, about, email, address, address2, city, dob, gender, id, img, phone, pincode, state, doc_license, signature, 'EEEEEEEEEEEEEEE')


    useEffect(() => {
        ProfileApi().then((res) => {
            setEditProfile(res.results)
            console.log(res.results, "This Is profileDatas")
        })

    }, [])


    const handleUpdate = (e) => {
        e.preventDefault();

        try {
            let imageDataToUpdate = null;  // Pehle to koi image update nahi karenge

            if (editProfile.img) {
                // Agar nayi image select hui hai, to nayi image ki update karein
                imageDataToUpdate = editProfile.img;
            }
            let SignatureDataToUpdate = null;  // Pehle to koi image update nahi karenge

            if (editProfile.signature) {
                // Agar nayi image select hui hai, to nayi image ki update karein
                SignatureDataToUpdate = editProfile.signature;
            }

            const result = UpdateProfileData(name,  lname, email, address, address2, city, dob, phone, pincode, state,imageDataToUpdate,  about
            );

            result.then((data) => {
                console.log(data, "thtrtrer;ojgsrdbehx");
                alert(data.message);
                // navigate('/Provider-Dashboard')

            })
            console.log(result, "Data Updated Successfully");
            //   history.push("/dashboard_a");
        } catch (error) {
            console.error("Error occurred while updating data:", error);
        }
    };



    return (
        <div className="wrapper">

            <Container>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>First Name</InputLabel>
                        <TextField placeholder="First Name" size="small" value={name} onChange={(e) => {
                            setEditProfile({
                                ...editProfile, name: e.target.value
                            })
                        }} fullWidth />
                    </Grid>
                   
                    <Grid item xs={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Last Name</InputLabel>
                        <TextField id={`${type}ProfileLastName`} title="Last Name" size="small" value={lname} onChange={(e) => {
                            setEditProfile({
                                ...editProfile, lname: e.target.value
                            })
                        }} placeholder="Last Name" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Email</InputLabel>
                        <TextField id={`${type}ProfileLastName`} title="Email" size="small" value={email} onChange={(e) => {
                            setEditProfile({
                                ...editProfile, email: e.target.value
                            })
                        }} placeholder="Email" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>State</InputLabel>

                        <Select id="patient_add_referringDoctorState" labelId="dropdown-label"
                            fullWidth value={state} onChange={(e) => {
                                setEditProfile({
                                    ...editProfile, state: e.target.value
                                })
                            }}
                            size='small'
                            name="state" class="form-control">
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



                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>City</InputLabel>
                        <TextField id={`${type}ProfileLastName`} title="Pincode" size="small" value={city} onChange={(e) => {
                            setEditProfile({
                                ...editProfile, city: e.target.value
                            })
                        }} placeholder="Pincode" fullWidth />

                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Pincode</InputLabel>
                        <TextField id={`${type}ProfileLastName`} title="Pincode" size="small" value={pincode} onChange={(e) => {
                            setEditProfile({
                                ...editProfile, pincode: e.target.value
                            })
                        }} placeholder="Pincode" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Address</InputLabel>
                        <TextField id={`${type}ProfileStreet`} title="Street" size="small" onChange={(e) => {
                            setEditProfile({
                                ...editProfile, address: e.target.value
                            })
                        }} placeholder="Street" value={address} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Address1</InputLabel>
                        <TextField id={`${type}ProfileAddress1`} title="Address Line 1" size="small" onChange={(e) => {
                            setEditProfile({
                                ...editProfile, address2: e.target.value
                            })
                        }} placeholder="Address Line 1" value={address2} fullWidth />
                    </Grid>

                    <Grid item xs={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Date of Birth</InputLabel>
                        <TextField
                            id="profileBirthday"
                            title="Birthday"
                            size="small"
                            placeholder="Birthday"
                            value={dob}  // Convert the format here
                            onChange={(e) =>
                                setEditProfile({
                                    ...editProfile,
                                    dob: e.target.value,  // Update dob directly
                                })
                            }
                            fullWidth
                            type="date"  // Use the type attribute for a date input
                        />

                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>About</InputLabel>
                        <TextField id={`${type}ProfileBirthday`} title="about" size="small" placeholder="about" value={about} onChange={(e) => {
                            setEditProfile({
                                ...editProfile, about
                                    : e.target.value
                            })
                        }} fullWidth />
                    </Grid>
                    
                    <Grid item xs={6}>
                        <InputLabel htmlFor="clinicLogo">My Avatar</InputLabel>

                        <Stack direction='row'>
                            <Box sx={{ border: '1px solid #C4C4C4', borderRadius: 2, padding: 1 }}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setEditProfile({ ...editProfile, img: e.target.files[0] })}
                                />
                            </Box>

                            <Box sx={{ marginLeft:20,width: 40, height: 40 }}>
                                {editProfile.img && (
                                    <img
                                        style={{ borderRadius: 5, width: '100%', height: '100%', objectFit: 'cover' }}
                                        src={`https://medical.studiomyraa.com/public/uploads/images/${editProfile.img}`}
                                        alt="Clinic Logo"
                                    />
                                )}
                            </Box>
                        </Stack>


                    </Grid>
                   

                   
                    {type === 'patient' && (
                        <>

                            <Grid item xs={6}>
                                <InputLabel htmlFor={`${type}ProfileBirthday`}>Phone</InputLabel>
                                <TextField id="patientProfilePhone" title="Phone" onChange={(e) => {
                                    setEditProfile({
                                        ...editProfile, phone: e.target.value
                                    })
                                }} size="small" placeholder="Phone" value={phone} fullWidth customInput={<Phone id="patientProfilePhone" placeholder="+1(000)-000-00-00" />} />
                            </Grid>
                        </>
                    )}
                    <Grid item sx={6}>
                        <button style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }} handler={notify} onClick={handleUpdate} type="submit" bgcolor="success" variant="contained">Save Changes</button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

Form.propTypes = {
    type: PropTypes.oneOf(['patient']).isRequired
}

export default Form;