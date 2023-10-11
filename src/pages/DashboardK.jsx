// components
import Page from '@layout/Page';
import Statistics from '@widgets/Statistics';
import PaymentsHistory from '@widgets/PaymentsHistory';
import RecentTests from '@widgets/RecentTests';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import { Grid } from '@mui/material';
import PatientCalendar from '@widgets/PatientCalendar';
import { useState,useEffect } from 'react';
import PatientsGenderLineChart from '@widgets/PatientsGenderLineChart';
import EventsCompactCalendar from '@widgets/EventsCompactCalendar';
import HealthIndexChart from '@widgets/HealthIndexChart';
import { GetAllOrdersData } from '@components/Api/AllApi';

const DashboardK = () => {

    const [currentView, setView] = useState('day');
    const [PatientSData,setPatientSData] = useState(false)
    useEffect(() => {
        const fetchTemplateData = async () => {
            try {
                const data = await GetAllOrdersData();
                console.log(data, "This Is all Patinet Data!");
                setPatientSData(data?.count);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTemplateData();
    }, []);

    console.log(PatientSData)

    let pageTitle = '';
    switch (currentView) {
        case 'week':
            pageTitle = 'Available Appointments Time';
            break;
        case 'month':
            pageTitle = 'Appointments Schedule';
            break;
        default:
            pageTitle = 'Your appointments';
            break;
    }
    return (
        <>
            <Sidebar />
            <Panel />
            <Page title=" Provider Dashboard">
                <Grid container >
                    
                    <Grid items xs={2} sm={4} md={4}>
                        <div style={{margin:'4px'}} key="stat-cause">
                            <Statistics data={{ type: 'cause', value: PatientSData, text: 'Total Orders' }} />
                        </div>
                    </Grid>
                    <Grid items xs={2} sm={4} md={4}>
                        <div style={{margin:'4px'}} key="stat-teeth">
                            <Statistics data={{ type: 'teeth', value: '0', text: 'Unread Messages' }} />
                        </div>
                    </Grid>
                    <Grid items xs={2} sm={4} md={4}>
                        <div style={{margin:'4px'}} key="stat-heart">
                            <Statistics data={{ type: 'heart', value: PatientSData, text: 'New Order Today' }} />
                        </div>
                    </Grid>
                    

                </Grid>
                <Grid container>
                    <Grid items md={3}>

                        <div style={{margin:'4px'}} key="events-compact">
                            <EventsCompactCalendar />
                        </div>
                    </Grid>
                    <Grid items md={9}>

                        <div style={{margin:'4px'}} key="health-index">
                            <HealthIndexChart PatientSData={PatientSData} variant="both" />
                        </div>
                    </Grid>
                </Grid>

                {/* <div key="payments-history">
                <PaymentsHistory variant="compact"/>
            </div>
            <div key="recent-tests">
                <RecentTests/>
            </div> */}
            </Page>
        </>

    )
}

export default DashboardK;