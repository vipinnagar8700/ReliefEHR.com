import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PersonalInformation from './PersonalInformation';
import DOnotContactList from './DOnotContactList';
import PatientFiles from './PatientFiles';
import PatientIntake from './PatientIntake';
import Examinations from './Examinations';
import Certifications from './Certifications';
import ICDCode from './ICDCode';
import VirtualBillingTerminal from './VirtualBillingTerminal';
import MedicalNecessityLetter from './MedicalNecessityLetter';
import DocumentGenerator from './DocumentGenerator';
import EmailHistory from './EmailHistory';
import DispanseryHistory from './DispanseryHistory';
import InformedConsentDocument from './InformedConsentDocument';
import OMMURegistry from './OMMURegistry';
import AdditionalDocumentation from './AdditionalDocumentation';
import ProductServeys from './ProductServeys';
import PatientSharing from './PatientSharing';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function Charts() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Personal Information" {...a11yProps(0)} />
                <Tab label="Patient Files" {...a11yProps(1)} />
                <Tab label="Order History" {...a11yProps(2)} />

            </Tabs>
            <TabPanel value={value} index={0}>
                <PersonalInformation />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <PatientFiles />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <EmailHistory />
            </TabPanel>

        </Box>
    );
}






