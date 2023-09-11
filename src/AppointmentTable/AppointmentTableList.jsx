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
import { Stack } from '@mui/material';

// hooks
import { useState } from 'react';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import { GetAppointmtentREwie } from '@components/Api/AllApi';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AppointmentDataList = () => {
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;

    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedTab('');
    }

    window.addEventListener('resize', () => {
        if (smallScreen) {
            handleModalClose();
        }
    });


    const [post, setPost] = useState([])
    useEffect(() => {
        const ALLAPPOINTMENTREW = GetAppointmtentREwie();

        if (ALLAPPOINTMENTREW) {
            ALLAPPOINTMENTREW.then((data) => {
                console.log(data?.result, "IIIIIIIIIIIIIIIIIIIIIIIIII")
                setPost(data?.result)
            })
        }
    }, [])


    const columns = [
        {
            name: 'Request Date',
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
            name: 'Patient',
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: 'Preferences',
            selector: (row) =>   row.day + row.notes,
            
            sortable: true,
        },
        {
            name: 'Status',
            selector: (row) => row.status,
            sortable: true,
        },

        {
            name: 'Action',
            cell: (row) => (
                <>

                    <button style={{ width: '210px', backgroundColor: '#2BAA27', height: '35px', borderRadius: 4, color: 'white', fontWeight: 600 }} sx={{ fontWeight: 300 }} >
                        <Link to={`/All-patient/Patient-Single-Page/${row.id}`}>
                          Create Appointment
                        </Link>

                    </button>

                </>
            ),
            button: true,
            minWidth: '350px',
            sortable: true,
        },
    ];


    const data = post.map((item) => ({
        id: item?.id || '',
        created_at: item?.created_at || '',
        day: item?.day || '',
        notes: item?.notes || '',
        status: item?.status || '',
        name: item?.patient?.[0]?.name || '',
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
            <Page title="Appointment Requests">
                <div key="balance">
                    <Card sx={{ minWidth: 1175, '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                                Appointment Requests
                            </Typography>
                            <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                        0 total requests found
                                    </Typography>
                                    <div className="Order Page">
                                        <DataTableExtensions
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

export default AppointmentDataList;