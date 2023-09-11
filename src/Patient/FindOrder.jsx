// styled components
import { StyledForm } from '@widgets/UserSettings/style';
import { Input } from '@ui/Field';
import { Container, Grid, Button, TextField, InputLabel, Select, MenuItem, Box } from '@mui/material';
// components
import DropFiles from '@components/DropFiles';
import Btn from '@ui/Btn';
import CustomSelect from '@ui/Select';
import DateInput from '@components/MaskedInputs/Date';
import Phone from '@components/MaskedInputs/Phone';
// styled components
import { SettingsHeader } from '@widgets/UserSettings/style';
import { Divider } from '@components/Widget/style';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// components
import Widget from '@components/Widget';
import WidgetBody from '@components/Widget/WidgetBody';
import { Tab } from 'react-bootstrap'
// utils
import PropTypes from 'prop-types';
// hooks
import { useState, useEffect } from 'react';
import useNotistack from '@hooks/useNotistack';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { FindOrertyj, FindPatientdataer, GetAllPatientData } from '@components/Api/AllApi';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';



const FindOrders = ({ type }) => {
    const [searchResult, setSearchResult] = useState(null);

    const [searchAttempted, setSearchAttempted] = useState(false); // New
    const { notify } = useNotistack('Your changes have been successfully saved.', 'success');

    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
    const [PatientSData, setPatientSData] = useState([])
    const [count, setCount] = useState(0)

    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedTab('');
    }

    window.addEventListener('resize', () => {
        if (smallScreen) {
            handleModalClose();
        }
    });


    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        order_id: '',
        total_amount: '',
        email: '',
        status: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.first_name && !formData.last_name && !formData.order_id &&  !formData.total_amount && !formData.email && !formData.status ) {
            setSearchAttempted(true); // Set search attempt to true if no search values entered
            return;
        }
        const formdata = new FormData();
        for (const key in formData) {
            formdata.append(key, formData[key]);
        }

        let FilterData = FindOrertyj(formdata);
        if (FilterData) {
            FilterData.then((data) => {
                console.log(data.data, "FilterDtata");
                setPatientSData(data.data || []);
                setCount(data.data.length);
                setSearchAttempted(true); // Set search attempt to true after successful search
            });
        }
    };




    console.log(PatientSData, "AAAAAAAAAAAAAAAAA")
    const columns = [
        {
            name: 'Order ID',
            selector: (row) => row.id,
            sortable: true,
        },

        {
            name: 'Patient Name',
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: 'Amount',
            selector: (row) => row.mname,
            sortable: true,
        },
        {
            name: 'Status',
            selector: (row) => row.lname,
            sortable: true,
        },
        {
            name: 'Created',
            selector: (row) => {
                const createdAt = new Date(row.created_at);
                const options = {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false,
                };
                return createdAt.toLocaleString('en-US', options);
            },
            sortable: true,
        },

        {
            name: 'Updated',
            selector: (row) => {
                const createdAt = new Date(row.updated_at);
                const options = {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false,
                };
                return createdAt.toLocaleString('en-US', options);
            },
            sortable: true,
        },
        


    ];


    const data = PatientSData.map((item) => ({
        id: item?.order_id || '',
        name: item?.patient?.[0]?.name || '',
        mname: item?.total_amount      || '',
        lname: item?.status || '',
        city: item?.city || '',
        state: item?.state || '',
        created_at: item?.created_at || '',
        updated_at: item?.updated_at || '',
    }));


    const tableData = {
        columns,
        data,
    };

    return (
        <>
        <Sidebar/>
        <Panel/>
            <Box mt={4}>
                <Widget >
                    <Tab.Container defaultActiveKey="patient" transition={true}>
                        <SettingsHeader>
                            <div className="wrapper">
                                <h2 className="title">Find Orders</h2>
                            </div>
                            <Divider />
                        </SettingsHeader>
                        <WidgetBody>
                            <Tab.Content>
                                <Tab.Pane eventKey="patient">
                                    <div className="wrapper">

                                        <Container>
                                            <form onSubmit={handleSubmit}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor="name">Patient First Name</InputLabel>
                                                        <TextField
                                                            name="first_name"
                                                            placeholder="First Name"
                                                            size="small"
                                                            fullWidth
                                                            value={formData.first_name}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                    
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor="lname">Patient Last Name</InputLabel>
                                                        <TextField
                                                            name="last_name"
                                                            placeholder="Last Name"
                                                            size="small"
                                                            fullWidth
                                                            value={formData.last_name}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor="email">Patient Email</InputLabel>
                                                        <TextField
                                                            name="email"
                                                            placeholder="Email"
                                                            size="small"
                                                            fullWidth
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor="gender">Order ID</InputLabel>
                                                        <Select
                                                            labelId="dropdown-label"
                                                            name="order_id"
                                                            size="small" fullWidth
                                                            value={formData.order_id}
                                                            onChange={handleChange}
                                                        >
                                                            <MenuItem value="">Status</MenuItem>
                                                            <MenuItem value="Pending">Pending</MenuItem>
                                                            <MenuItem value="New Order">New Order</MenuItem>
                                                            <MenuItem value="Out for delivery">Out for delivery</MenuItem>

                                                            <MenuItem value="Complete">Complete</MenuItem>
                                                            <MenuItem value="Cancelled">Cancelled</MenuItem>

                                                            <MenuItem value="Denied">Denied</MenuItem>
                                                            <MenuItem value="Not yet Eligible">Not yet Eligible</MenuItem>
                                                            <MenuItem value="Pending Payment">Pending Payment</MenuItem>
                                                            <MenuItem value="Ready for pickup">Ready for pickup</MenuItem>

                                                        </Select>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor="phone">Order Total</InputLabel>
                                                        <TextField
                                                            name="total_amount"
                                                            id="patientProfilePhone"
                                                            title="Phone"
                                                            size="small"
                                                            placeholder="Phone"
                                                            fullWidth
                                                            value={formData.total_amount}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                    
                                                    
                                                    
                                                    <Grid item xs={12}>
                                                        <button
                                                            style={{
                                                                width: '150px',
                                                                backgroundColor: '#2BAA27',
                                                                height: '40px',
                                                                borderRadius: 4,
                                                                color: 'white',
                                                                fontWeight: 600
                                                            }}
                                                            type="submit"
                                                            bgcolor="success"
                                                            variant="contained"
                                                        >
                                                            Find Patient
                                                        </button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        </Container>
                                    </div>
                                </Tab.Pane>

                            </Tab.Content>
                        </WidgetBody>

                    </Tab.Container>
                </Widget>
            </Box>
            {searchAttempted && !formData.first_namename && !formData.email && !formData.last_name && (
                <Box mt={2}>
                    <Typography variant="body1" sx={{justifyContent:'center',color:'red',textAlign:'center'}}>Enter values to search for patients.</Typography>
                </Box>
            )}
            {count > 0 ? (
                <Box mt={2}>
                    <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                {count} total Order found
                            </Typography>
                            <div className="Order Page">
                                <DataTableExtensions {...tableData}>
                                    <DataTable noHeader defaultSortField="id" defaultSortAsc={false} pagination highlightOnHover />
                                </DataTableExtensions>
                            </div>
                        </CardContent>
                    </Card>
                </Box>
            ) : (
                <Box mt={2}>
                    <Typography variant="body1">No matching Order found.</Typography>
                </Box>
            )}
            {count === 0 && PatientSData.length > 0 && (
                <Box mt={2}>
                    <Typography variant="body1">No matching Order found with the current search criteria.</Typography>
                </Box>
            )}


        </>

    );
}

FindOrders.propTypes = {
    type: PropTypes.oneOf(['patient']).isRequired
}

export default FindOrders;