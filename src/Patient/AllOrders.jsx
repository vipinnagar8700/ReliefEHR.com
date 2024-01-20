// components
import Page from '@layout/Page';
import ModalWindow from '@components/ModalWindow';
import Tab from 'react-bootstrap/Tab';
import Content from '@components/Reviews/Content';
import ReviewsRatingList from '@components/Reviews/List';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import { InputLabel, Stack } from '@mui/material';
import Cookies from "js-cookie";
// hooks
import { useState, useEffect } from 'react';
import { GetAllOrdersData, GetAllPatientData } from '@components/Api/AllApi';
import { Link } from 'react-router-dom';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import Url from 'url/Allurl';

const AllOrders = () => {
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
    const [PatientSData, setPatientSData] = useState([])
    const [count, setCount] = useState(0)
    const [showPopup, setShowPopup] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [result, setResult] = useState(null);


    const handleButtonClick = (patientId) => {
        console.log(patientId)
        setResult(patientId)
        setShowPopup(true);
        const selectedPatient = PatientSData.find(patient => patient.id === patientId);
        setSelectedPatient(selectedPatient);

        // Show the popup
        setShowPopup(true);
    };
    console.log(selectedPatient, "OOOOOOO")
    const closePopup = () => {
        setShowPopup(false);
    };
    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedTab('');
    }

    window.addEventListener('resize', () => {
        if (smallScreen) {
            handleModalClose();
        }
    });
    const statusOptions = [
        'Pending',
        'New Order',
        'Out for Delivery',
        'Complete',
        'Cancelled',
        'Denied',
        'Not Yet Eligible',
        'Pending Payment',
        'Ready for Pickup',
    ];

    const [selectedStatus, setSelectedStatus] = useState(statusOptions[0]); // Default status

    const updateOrderStatus = async () => {
        const apiUrl = `${Url}/api/update_order_status`;
        let token = Cookies.get("provider")
        console.log(token, "This Is token for all Api's")
        const myHeaders = new Headers();
        myHeaders.append('Accept', 'application/json');
        myHeaders.append('Authorization', `Bearer ${token}`);

        const formdata = new FormData();
        formdata.append('status', selectedStatus); // Use the selected status
        formdata.append('id', result); // Replace with the actual order ID

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow',
        };

        try {
            const response = await fetch(apiUrl, requestOptions);
            const data = await response.text();
            console.log(data?.messege, "PPPPP")
            alert("Status Successfully Updated!")
            setCount(count + 1)
            closePopup()
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        const fetchTemplateData = async () => {
            try {
                const data = await GetAllOrdersData();
                console.log(data, "This Is all Patinet Data!");
                setPatientSData(data.result || []);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTemplateData();
    }, [count]);

    console.log(PatientSData, "AAAAAAAAAAAAAAAAA")
    const columns = [
        {
            name: 'Order ID',
            selector: (row) => row.order_id,
            sortable: true,
        },

        {
            name: 'Patient Name',
            selector: (row) => row.name + row.namee,
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
        {
            name: 'Actions',
            sortable: true,
            cell: (row) => (
                <>

                    <button onClick={() => handleButtonClick(row.id)} style={{ width: '110px', backgroundColor: '#2BAA27', height: '35px', borderRadius: 4, color: 'white', fontWeight: 600 }} sx={{ fontWeight: 300 }} >
                        <Link to="#">
                            View
                        </Link>

                    </button>

                </>
            ),
            button: true,
            minWidth: '150px',
        },


    ];


    const data = PatientSData.map((item) => ({
        id: item?.id || '',
        order_id: item?.order_id || '',
        name: item?.patient?.name || '',
        namee: item?.patient?.lname || '',
        mname: item?.total_amount || '',
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
        // <Tab.Container transition={true} activeKey={selectedTab} onSelect={setSelectedTab}>
        //     <Page title="My Order">
        <>
            <Sidebar />
            <Panel />
            <Page title="All Orders">
                <div key="balance">
                    {showPopup && selectedPatient && (
                        <div className="popup" style={{ position: 'absolute', backgroundColor: 'white', width: '300px', padding: 15, borderRadius: 7, border: '1px solid gray', top: '50%', left: '50%', zIndex: 999 }}>
                            <div className="popup-content">
                                <Stack sx={{ justifyContent: 'end', alignItems: 'end' }}>
                                    <Typography onClick={closePopup}>x</Typography>
                                </Stack>
                                <InputLabel>Patient Name</InputLabel>
                                <TextField fullWidth size='small' value={`${selectedPatient.patient.name} ${selectedPatient.patient.lname}`} disabled />
                                <InputLabel>Status</InputLabel>
                                <select
                                    style={{ padding: 10, width: '100%' }}
                                    value={selectedStatus}
                                    onChange={(e) => setSelectedStatus(e.target.value)}
                                >
                                    {statusOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                                <Box fullWidth sx={{justifyContent:'center'}}> 
                                <button onClick={updateOrderStatus} style={{ marginTop: 5,  backgroundColor: '#2BAA27', height: '35px', borderRadius: 4, color: 'white', fontWeight: 600,paddingInline:'20px' }} sx={{ fontWeight: 300 }}>Update Status</button>

                                </Box>
                            </div>
                        </div>
                    )}

                    <Card sx={{ minWidth: 1175, '@media screen and (max-width: 1400px)': { minWidth: '100%' } }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                                All Order
                            </Typography>
                            <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1400px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                        {PatientSData.length}  total Orders found
                                    </Typography>
                                    <div className="Order Page">
                                        <DataTableExtensions print={false} export={false}
                                            {...tableData}
                                        >
                                            <DataTable
                                                noHeader
                                                defaultSortField="id"
                                                defaultSortAsc={false}
                                                pagination
                                                highlightOnHover
                                            />
                                        </DataTableExtensions>
                                    </div>

                                </CardContent>

                            </Card>
                        </CardContent>

                    </Card>
                </div>

            </Page>

        </>


    )
}

export default AllOrders;