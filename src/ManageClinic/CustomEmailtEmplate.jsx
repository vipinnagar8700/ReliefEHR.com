import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router';
import Page from '@layout/Page';
import { useSnackbar } from 'notistack';
import useNotistack from '@hooks/useNotistack';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { DeleteEmailTemplate, GetAllUSers, GetBilling, GetBillingCancel, GetEmailTemplate } from '@components/Api/AllApi';





const CustomEmailTemplate = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
    const [PatientSData, setPatientSData] = useState([])
    const [count, setCount] = useState(0)

    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedTab('');
    };

    window.addEventListener('resize', () => {
        if (smallScreen) {
            handleModalClose();
        }
    });

    const handleDelete = (id) => {
        let DeleteData = DeleteEmailTemplate(id)

        if (DeleteData) {
            DeleteData.then((result) => {
                // Handle the result if needed (e.g., show a success message)
                console.log(result);
                // alert("Data Successfully Deleted!")
                enqueueSnackbar("Data Successfully Deleted!", {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
                setCount(count + 1)
            })
                .catch((error) => {
                    // Handle errors (e.g., show an error message)
                    enqueueSnackbar(error, "Something Went Wrong try again!", {
                        variant: 'error',
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'right',
                        }
                    });
                });
        }

    }

    useEffect(() => {
        const fetchTemplateData = async () => {
            try {
                const data = await GetEmailTemplate();
                console.log(data, "This Is all Billing Data!");
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
            name: 'Name',
            selector: row => row.name,
            sortable: true,
            maxWidth:'300px',
        },
        {
            name: 'Subject Line',
            selector: row => row.email,
            sortable: true,
            maxWidth:'300px',
        },


        {
            name: 'Actions',
            sortable: true,
            cell: (row) => (
                <>

                    <button style={{ width: '110px', backgroundColor: '#2BAA27', height: '35px', borderRadius: 4, color: 'white', fontWeight: 600 }} sx={{ fontWeight: 300 }} >
                        <Link to={`/Edit-Email-Templates/${row.id}`}>
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
            minWidth: '150px',
        },
    ];

    const data = PatientSData && PatientSData.map(item => ({
        id: item?.id || '',
        name: item?.name || '',
        email: item?.subject || '',
        role: item?.role || '',
        security_group
            : item?.security_group
            || '',
        status: item?.status || '',
        last_login: item?.last_login || '',
        account_enabled
            : item?.account_enabled
            || '',
        accepts_ppointments: item?.accepts_ppointments,


    }));

    const tableData = {
        columns,
        data,
    };


    const CalnceData = () => {

    }



    return (
        <>
            <Card sx={{ minWidth: 970, marginLeft: '0px', '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
                <CardContent>
                    <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                        Email Templates
                    </Typography>
                    <button style={{ backgroundColor: 'skyblue', height: 40, borderRadius: 8, width: '220px', color: 'white', marginBottom: 4 }} >
                        <Link to="/Add-Email-Templates">Create Email Templates</Link>
                    </button>
                    <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                {PatientSData.length} total Email Templates found
                            </Typography>
                            <div className="Order Page">
                                <DataTableExtensions {...tableData}  print={false}  export={false}>
                                    <DataTable noHeader defaultSortField="id" defaultSortAsc={false} pagination highlightOnHover />
                                </DataTableExtensions>
                            </div>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </>
    );
};

export default CustomEmailTemplate;
