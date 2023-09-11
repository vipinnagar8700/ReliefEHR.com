// styled components
import { Input } from '@ui/Field';
import { Container, Grid, Button, TextField, InputLabel, Select, MenuItem, Box, Stack } from '@mui/material';
// components\
import { useFormik } from "formik";
import * as yup from 'yup';
import DateInput from '@components/MaskedInputs/Date';
import Phone from '@components/MaskedInputs/Phone';
// styled components

import PropTypes from 'prop-types';
// hooks
import { useState, useEffect } from 'react';
import useNotistack from '@hooks/useNotistack';
import Cookies from 'js-cookie';
import { AddPatientapi, GetSinglePAtient, UpdatePatientData, UpdateProfileData } from '@components/Api/AllApi';
import { useParams } from 'react-router';



const PersonalInformation = ({ type }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('');

  // const handleChange = (event) => {
  //     setSelectedMenuItem(event.target.value);
  // };

  const { notify } = useNotistack('Your changes have been successfully saved.', 'success');




  const [value, setValue] = useState('1');

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };


  let { p_id } = useParams()

  // end of validation



  const [pre, setpre] = useState(false)


  const {id, name, lname, mname, prefername, email, registry_id, gender, pincode, address, address2, city, state, dob, phone, social_security,img } = pre;
  console.log(name, lname, mname, prefername, email, registry_id, gender, pincode, address, address2, city, state, dob, phone, social_security,img)
  useEffect(() => {


    const GEtSigPat = GetSinglePAtient(p_id)
    if (GEtSigPat) {
      GEtSigPat.then((data) => {
        console.log(data?.result, "PatientData")
        setpre(data?.result)
      })
    }
  }, [])





  const handleUpdate = (e) => {
    e.preventDefault();

    try {


      const result = UpdatePatientData(id,name, lname, mname, prefername, email, registry_id, gender, pincode, address, address2, city, state, dob, phone, social_security,img
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




    <Container>
      <Grid container spacing={2} mt={2}>
        <div className="wrapper">
          <Container>
            <form >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>First Name</InputLabel>
                  <TextField placeholder="First Name" size="small" fullWidth name="name" value={name} onChange={(e) => {
                    setpre({
                      ...pre, name: e.target.value
                    })
                  }} />

                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Middle Name</InputLabel>
                  <TextField id={`${type}ProfileMiddleName`} title="Middle Name" size="small" name="mname" value={mname} onChange={(e) => {
                    setpre({
                      ...pre, mname: e.target.value
                    })
                  }} fullWidth />

                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Last Name</InputLabel>
                  <TextField id={`${type}ProfileLastName`} title="Last Name" size="small" name="lname" value={lname} onChange={(e) => {
                    setpre({
                      ...pre, lname: e.target.value
                    })
                  }} placeholder="Last Name" fullWidth />

                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Preferred Name</InputLabel>
                  <TextField id={`${type}ProfileLastName`} title="Last Name" size="small" name="prefername" value={prefername} onChange={(e) => {
                    setpre({
                      ...pre, prefername: e.target.value
                    })
                  }} placeholder="Preferred Name" fullWidth />

                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Email</InputLabel>
                  <TextField id={`${type}ProfileLastName`} title="Email" size="small" name="email" value={email} onChange={(e) => {
                    setpre({
                      ...pre, email: e.target.value
                    })
                  }} placeholder="Email" fullWidth />

                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>OMMU Registry ID</InputLabel>
                  <TextField id={`${type}ProfileLastName`} title="Password" size="small" name="registry_id" value={registry_id} onChange={(e) => {
                    setpre({
                      ...pre, registry_id: e.target.value
                    })
                  }} placeholder="Registry Id" fullWidth />

                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Gender</InputLabel>

                  <Select
                    labelId="dropdown-label"
                    fullWidth
                    name="gender" value={gender} onChange={(e) => {
                      setpre({
                        ...pre, gender: e.target.value
                      })
                    }}
                    size='small'

                  ><MenuItem value="">Choose Gender</MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>


                </Grid>

                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Pincode</InputLabel>
                  <TextField id={`${type}ProfileLastName`} title="Pincode" name="pincode" value={pincode} onChange={(e) => {
                    setpre({
                      ...pre, pincode: e.target.value
                    })
                  }} size="small" placeholder="Pincode" fullWidth />

                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Address</InputLabel>
                  <TextField id={`${type}ProfileStreet`} title="Street" name="address" value={address} onChange={(e) => {
                    setpre({
                      ...pre, address: e.target.value
                    })
                  }} size="small" placeholder="Street" fullWidth />

                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Address2</InputLabel>
                  <TextField id={`${type}ProfileAddress1`} title="Address Line 1" name="address2" value={address2} onChange={(e) => {
                    setpre({
                      ...pre, address2: e.target.value
                    })
                  }} size="small" placeholder="Address Line 1" fullWidth />

                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>City</InputLabel>
                  <TextField id={`${type}ProfileAddress1`} title="City" name="city" value={city} onChange={(e) => {
                    setpre({
                      ...pre, city: e.target.value
                    })
                  }} size="small" placeholder="City" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>State</InputLabel>

                  <Select id="patient_add_referringDoctorState" labelId="dropdown-label"
                    fullWidth
                    name="state" value={state} onChange={(e) => {
                      setpre({
                        ...pre, state: e.target.value
                      })
                    }}
                    size='small'
                    class="form-control">
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

                </Grid>

                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>
                    Social Security</InputLabel>
                  <TextField id={`${type}ProfileAddress2`} title="OMMU Registry ID" size="small" value={social_security} onChange={(e) => {
                    setpre({
                      ...pre, social_security: e.target.value
                    })
                  }} fullWidth name="social_security" />

                </Grid>

                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Birth Date</InputLabel>
                  <TextField id={`${type}ProfileBirthday`} title="Birthday" size="small" placeholder="Birth Date" name="dob" value={dob} onChange={(e) => {
                    setpre({
                      ...pre, dob: e.target.value
                    })
                  }} fullWidth customInput={<Input as={DateInput} id={`${type}ProfileBirthday`} />} />
                </Grid>


                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Phone</InputLabel>
                  <TextField id="patientProfilePhone" title="Phone" size="small" placeholder="Phone" name="phone" value={phone} onChange={(e) => {
                    setpre({
                      ...pre, phone: e.target.value
                    })
                  }} fullWidth customInput={<Phone id="patientProfilePhone" placeholder="+1(000)-000-00-00" />} />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor="clinicLogo">My Avatar</InputLabel>

                  <Stack direction='row'>
                    <Box sx={{ border: '1px solid #C4C4C4', borderRadius: 2, padding: 1 }}>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setpre({ ...pre, img: e.target.files[0] })}
                      />
                    </Box>

                    <Box sx={{ marginLeft: 20, width: 40, height: 40 }}>
                      {pre.img && (
                        <img
                          style={{ borderRadius: 5, width: '100%', height: '100%', objectFit: 'cover' }}
                          src={`https://medical.studiomyraa.com/public/uploads/images/${pre.img}`}
                          alt="Clinic Logo"
                        />
                      )}
                    </Box>
                  </Stack>


                </Grid>

                <Grid item sx={6} mt={2}>
                  <button style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }} handler={notify} type="submit"  onClick={handleUpdate} bgcolor="success" variant="contained">Save Patient</button>
                </Grid>
              </Grid>
            </form>
          </Container>
        </div>
      </Grid>
    </Container>
  )
}

PersonalInformation.propTypes = {
  type: PropTypes.oneOf(['patient']).isRequired
}

export default PersonalInformation;
