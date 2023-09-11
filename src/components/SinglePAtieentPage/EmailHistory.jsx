import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router';
import Page from '@layout/Page';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { ADDPatientFiles, AddSecurityGroup, GetAllPatientFiles, GetBilling, GetBillingCancel, GetSinglePAtient, GettSecurityData, UpdateSecurity, deleteSecurity, editSecurityData } from '@components/Api/AllApi';
import { Grid, Stack, TextField, InputLabel, Box, Avatar, FormControlLabel, Checkbox } from '@mui/material';
import PaymentHistory from './PaymentHostory';
import MostRecentAppointment from './MostRecentAppointment';




const Style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 600,
  minWidth: 800,
  bgcolor: 'background.paper',
  border: '1px solid #f3f3f3',
  boxShadow: 24,
  p: 4,
  backgroundColor: "red",
  maxWidth: "100%",
  minWidth: "500px",
};



const EmailHistory = () => {
  const [Sec, setSec] = useState(false)
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


  useEffect(() => {
    handleDeleteInvoice()
  }, [])

  const handleDeleteInvoice = (id) => {
    setshowpau(true);
    let EditData = editSecurityData(id);
    console.log(EditData)
    if (EditData) {
      EditData.then((data) => {
        console.log(data.result?.[0], "HHHHHHHHHHHHHHHHHHHHHHHHHHH")
        setSec(data.result?.[0])
      })
    }
  };
  console.log(Sec, "AHGFSXDCFVGBHJNKMLJHGFDSDFGVHBNJ")

  let name = Sec && Sec?.name;
  console.log(name, "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKk")
  let id = Sec && Sec?.id;


  useEffect(() => {
    const fetchTemplateData = async () => {
      try {
        const data = await GetAllPatientFiles();
        console.log(data, "This Is all Billing Data!");
        setPatientSData(data.result || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTemplateData();
  }, [count]);

  console.log(PatientSData, "PatientFiles")

  let { p_id } = useParams()
  // alert(p_id)
  const [AS, setSA] = useState(false)

  useEffect(() => {

    const SinglePAtientDta = GetSinglePAtient(p_id);
    if (SinglePAtientDta) {
      SinglePAtientDta.then((data) => {
        console.log(data.result, "KJHGFDSDFGHJKL")
        setSA(data.result)
      })
    }
  }, [])


  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Date Added',
      selector: row => row.created_at,
      sortable: true,
    },



    {
      name: 'Actions',
      sortable: true,
      cell: (row) => (
        <>


          <button style={{ width: '70px', backgroundColor: 'skyblue', height: '35px', borderRadius: 4, color: 'white', fontWeight: 600, marginLeft: 2 }}  >

            <Link to="#" onClick={() => handleDeleteInvoice(row.id)}    >
              Edit
            </Link>

          </button>
          <button style={{ width: '70px', backgroundColor: 'red', height: '35px', borderRadius: 4, color: 'white', fontWeight: 600, marginLeft: 2 }}  >

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

  const data = PatientSData && PatientSData.map(item => ({
    id: item?.id || '',
    name: item?.name || '',
    created_at: item?.created_at || '',
  }));

  const tableData = {
    columns,
    data,
  };


  const CalnceData = () => {

  }
  const [open, setOpen] = useState(false);

  const [showpa, setshowpa] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloses = () => {
    setshowpa(false);
  };


  const [openu, setOpenu] = useState(false);

  const [showpau, setshowpau] = useState(false)

  const handleOpenu = () => {
    setOpenu(true);
  };
  const handleClosesu = () => {
    setshowpau(false);
  };


  const [subject, setSubject] = useState('');

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };


  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState(null);
  const [isVisibleToPatient, setIsVisibleToPatient] = useState(false);

  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleVisibilityChange = (event) => {
    setIsVisibleToPatient(event.target.checked);
  };


  const handleSendMessage = (event) => {
    event.preventDefault(); // Prevent the default form submission
    ADDPatientFiles(fileName, file, isVisibleToPatient)
      .then((result) => {
        console.log('API response:', result);
        alert(result.message);
        // Reset the form fields after successful submission if needed
        setFileName('');
        setFile(null);
        setIsVisibleToPatient(false);
        handleCloses()
      })
      .catch((error) => console.log('error', error));
  };
  


  const handleDelete = (id) => {
    let DeleteData = deleteSecurity(id)

    if (DeleteData) {
      DeleteData.then((result) => {
        // Handle the result if needed (e.g., show a success message)
        console.log(result);
        alert("Data Successfully Deleted!")
        setCount(count + 1)
      })
        .catch((error) => {
          // Handle errors (e.g., show an error message)
          console.error('Error deleting data:', error);
        });
    }

  }

  const handleUpdate = (e) => {

    e.preventDefault();

    try {
      console.log(id, name, "qqqqqqqqqqqqqqqqqqqqqqqq")
      const result = UpdateSecurity(id, name
      );

      result.then((data) => {
        console.log(data, "thtrtrer;ojgsrdbehx");
        alert(data.messege);
        setCount(count + 1)
        // Navigate('/dashboard_a')
        setshowpau(false);

      })
      console.log(result, "Data Updated Successfully");
    } catch (error) {
      console.error("Error occurred while updating data:", error);
    }
  };



  return (
    <>
     
    
      <Grid container>

        <Grid items xs={12}>

          <Card sx={{ minWidth: 770, marginLeft: '0px', '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
            <CardContent>
              <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                Order History
              </Typography>
              
              <Card sx={{ minWidth: 845, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                    {PatientSData.length} total  Order History found
                  </Typography>
                  <div className="Order Page">
                    <DataTableExtensions {...tableData}>
                      <DataTable noHeader defaultSortField="id" defaultSortAsc={false} pagination highlightOnHover />
                    </DataTableExtensions>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </>
  );
};






export default EmailHistory