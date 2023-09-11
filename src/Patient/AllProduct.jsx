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
import { useState, useEffect } from 'react';
import { DeleteCLinicShedule, GetAllOrdersData, GetAllPatientData, GetAllProductsData } from '@components/Api/AllApi';
import { Link } from 'react-router-dom';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';

const AllProducts = () => {
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
    const [PatientSData, setPatientSData] = useState([])
    const [count, setCount] = useState(0)

    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedTab('');
    }

    // window.addEventListener('resize', () => {
    //     if (smallScreen) {
    //         hansdleModalClose();
    //     }
    // });


    useEffect(() => {
        const fetchTemplateData = async () => {
            try {
                const data = await GetAllProductsData();
                console.log(data, "This Is all Patinet Data!");
                setPatientSData(data.data || []);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTemplateData();
    }, [count]);



    const handleDelete = (id) => {
        let DeleteData = DeleteCLinicShedule(id)

        if (DeleteData) {
            DeleteData.then((result) => {
                // Handle the result if needed (e.g., show a success message)
                console.log(result.message);
                alert(result.message)
                setCount(count + 1)
            })
                .catch((error) => {
                    // Handle errors (e.g., show an error message)
                    console.error('Error deleting data:', error);
                });
        }

    }

    console.log(PatientSData, "AAAAAAAAAAAAAAAAA")
    const columns = [
        {
            name: 'Product ID',
            selector: (row) => row.id,
            sortable: true,
        },

        {
            name: 'POS ID',
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: 'Thumb',
            selector: (row) => (
                <div style={{ border: '0px solid black', borderRadius: 25, height: 35, width: 35 }}>
                    <img src={`https://medical.studiomyraa.com/public/uploads/images/${row.mname}`} alt={row.mname} />
                </div>
            ),
            sortable: true,
        },
        {
            name: 'Product',
            selector: (row) => row.lname,
            sortable: true,
        },

        {
            name: 'Product Type',
            selector: (row) => row.state,
            sortable: true,
        },
        {
            name: 'Price',
            selector: (row) => row.city,
            sortable: true,
        },
        {
            name: 'Actions',
            sortable: true,
            cell: (row) => (
                <>

                    <button style={{ width: '60px', backgroundColor: '#2BAA27', height: '35px', borderRadius: 4, color: 'white', fontWeight: 600 }} sx={{ fontWeight: 300 }} >
                        <Link to={`/Single-Product/${row.id}`}>
                            Edit
                        </Link>

                    </button>
                    <button style={{ width: '110px', backgroundColor: 'red', height: '35px', borderRadius: 4, color: 'white', fontWeight: 600, marginLeft: 2 }}  >

                        <Link to="#" onClick={e => handleDelete(row.id)}>
                            Delete
                        </Link>

                    </button>

                </>
            ),
            button: true,
            minWidth: '200px',
        },


    ];


    const data = PatientSData.map((item) => ({
        id: item?.id || '',
        name: item?.pos_id || '',
        mname: item?.img || '',
        lname: item?.product_name || '',
        city: item?.amount || '',
        state: item?.product_type || '',
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
            <Page title="All Products">
                <div key="balance">
                    <Card sx={{ minWidth: 1175, '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                                All Products
                            </Typography>


                            <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                        {PatientSData.length}  total Products found
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

export default AllProducts;