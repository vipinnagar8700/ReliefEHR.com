import Page from '@layout/Page';
import { Box, Grid, InputLabel, Stack, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';



const Data = [
    
    {
        id: '1',
        name: ' Activity Report',
        img: '',
        title: 'View a list of all activity by employees of your company.',
        link: '/Report/ClinicActivityReport'
    },
    
]


const AllReports = () => {
    return (
        <div>
            <Sidebar/>
            <Panel/>
            <Page title="Reports">
                <div key="balance">
                    <Card sx={{ minWidth: 1175, '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
                        <CardContent>

                            <Grid container spacing={2}>
                                {Data.map((item, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Link to={item.link}>
                                            <Box
                                                sx={{
                                                    '&:hover': {
                                                        transform: 'translateY(-5px)',
                                                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                                                    },
                                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                                }}
                                            >
                                                <Card>
                                                    <CardContent sx={{ textAlign: 'center' }}>
                                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                            <CalendarMonthIcon sx={{ height: 80, width: 80 }} />
                                                        </Typography>
                                                        <Typography component="div" sx={{ fontSize: 17, fontWeight: 'bold' }}>
                                                            {item.name}
                                                        </Typography>
                                                        <Typography color="text.secondary" sx={{ fontSize: 15, fontWeight: 300 }}>
                                                            {item.title}
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Box>
                                        </Link>

                                    </Grid>
                                ))}
                            </Grid>



                        </CardContent>
                    </Card>

                </div>

            </Page >
        </div >
    )
}

export default AllReports