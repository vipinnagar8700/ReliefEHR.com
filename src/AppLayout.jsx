// utils
import { lazy, Suspense } from 'react';
// components
import ScrollProgress from '@ui/ScrollProgress';
import Panel from '@layout/Panel';
import Sidebar from '@layout/Sidebar';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import BottomMenu from '@layout/BottomMenu';
import WidgetsLoader from '@components/WidgetsLoader';

// hooks
import useWindowSize from '@hooks/useWindowSize';
import usePageIsOverflow from '@hooks/usePageIsOverflow';
import { useRef, useEffect } from 'react';
import ShopOnline from '@components/ShopOnline';
import SingleProductpage from '@components/ShopOnline/SingleProductpage';
import Login from '@components/login';
import { useState } from 'react';
import AllPatient from 'Patient/AllPatient';
import FindPatient from 'Patient/FindPatient';
import AddPatient from 'Patient/AddPatient';
import AppointmentDataList from 'AppointmentTable/AppointmentTableList';
import BillingDataTable from 'Billings/BillingDataTable';
import CreateInvoice from 'Billings/CreateInvoice';
import DocumentBuilder from 'DocumentBuilder/DocumentBuilder';
import CreateTemplate from 'DocumentBuilder/CreateTemplate';
import EditTemplate from 'DocumentBuilder/EditTemplate';
import AllReports from 'Report/AllReports';
import ClininDailyReport from 'Report/ClinicDailyReport';
import CancelAppointmentReport from 'Report/CancelAppointmentReport';
import ClinicActivityReport from 'Report/ClinicActivityReport';
import OrderSurveyReport from 'Report/OrderSurveyReport';
import PatientStatusreport from 'Report/PatientStatusreport';
import NewPatientReport from 'Report/NewPatientReport';
import PatientEmailReport from 'Report/PatientEmailReport';
import ChartsViewedReport from 'Report/ChartsViewedReport';
import PrescriptionReport from 'Report/PrescriptionReport';
import ManageClinic from './ManageClinic';
import CreateUser from 'Billings/CreateUser';
import EditUser from 'Billings/EditUser';
import AddSecondaryLocation from 'ManageClinic/AddSecondaryLocation';
import AddSecondaryLoaction from 'ManageClinic/AddSecondaryLocation';
import EditSecondaryLoaction from 'ManageClinic/EditSecondaryLocation';
import AddAppointmentType from 'ManageClinic/AddAppointmentType';
import EditAppointmentType from 'ManageClinic/EditAppointmentType';
import PatientSinglePage from '@components/SinglePAtieentPage';
import ManageOrder from '@components/SinglePAtieentPage/EDitMAnageOrder';
import PersonalInformation from '@components/SinglePAtieentPage/PersonalInformation';
import HomePage from '@components/HomePage';
import AllOrders from 'Patient/AllOrders';
import FindOrders from 'Patient/FindOrder';
import AllProducts from 'Patient/AllProduct';
import CreateProducts from 'Patient/CreateProducts';
import EditSingleProduct from 'Patient/EditProduct';
import AddEmailTempalets from 'ManageClinic/AddEmailTempaltes';
import EditEmailTempalets from 'ManageClinic/EditEmailTemplates';
import AddSMSTemplate from 'ManageClinic/AddSmSTemplate';
import EditSMSTempalets from 'ManageClinic/EditSMSTEMPLATES';
import AddTriggers from 'ManageClinic/AddTriggers';
import EditTrigger from 'ManageClinic/EditTrigger';
import Providerprotect from 'ProviderRouteProtect';
import MYCalendar from '@components/CustomAppointment.js/Calender';

// pages
const DashboardA = lazy(() => import('@pages/DashboardA'));
const DashboardB = lazy(() => import('@pages/DashboardB'));
const DashboardC = lazy(() => import('@pages/DashboardC'));
const DashboardD = lazy(() => import('@pages/DashboardD'));
const DashboardE = lazy(() => import('@pages/DashboardE'));
const DashboardF = lazy(() => import('@pages/DashboardF'));
const DashboardG = lazy(() => import('@pages/DashboardG'));
const DashboardH = lazy(() => import('@pages/DashboardH'));
const DashboardI = lazy(() => import('@pages/DashboardI'));
const DashboardJ = lazy(() => import('@pages/DashboardJ'));
const DashboardK = lazy(() => import('@pages/DashboardK'));
const DoctorAppointments = lazy(() => import('@pages/DoctorAppointments'));
const PatientAppointments = lazy(() => import('@pages/PatientAppointments'));
const Patients = lazy(() => import('@pages/Patients'));
const Tests = lazy(() => import('@pages/Tests'));
const Doctors = lazy(() => import('@pages/Doctors'));
const StaffList = lazy(() => import('@pages/Staff'));
const DoctorMessenger = lazy(() => import('@pages/DoctorMessenger'));
const PatientMessenger = lazy(() => import('@pages/PatientMessenger'));
const DoctorsReviews = lazy(() => import('@pages/DoctorsReviews'));
const PatientReviews = lazy(() => import('@pages/PatientReviews'));
const Finances = lazy(() => import('@pages/Finances'));
const Settings = lazy(() => import('@pages/Settings'));
const PageNotFound = lazy(() => import('@pages/PageNotFound'));
const Checkout = lazy(() => import('@components/Checkout/Checkout'))
const ChangePassword = lazy(() => import('@pages/ChangePassword'))
const AppLayout = () => {
    const appRef = useRef(null);
    const isOverflow = usePageIsOverflow();
    const { width } = useWindowSize();
    const isMobile = width < 768;
    const location = useLocation();
    const className = location.pathname === '/' || location.pathname === '/Login' ? '' : 'app';

    useEffect(() => {
        if (appRef.current) {
            appRef.current.scrollTo(0, 0);
        }
    }, []);

    return (
        <div className={className} ref={appRef}>
            {isOverflow ? <ScrollProgress /> : null}
            {/* <Sidebar /> */}
            <div className="app_content">
                {/* <Panel /> */}
                <Suspense fallback={<WidgetsLoader />}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/Login" />} />
                        <Route path="/Login" element={<Login />} />
                        {/* Public routes */}
                        {/* <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> */}
                        {/* Add other public routes here */}

                        <Route path="/jhgv" element={<HomePage />} />
                        {/* ,lkjhsgfrdf0 */}
                        {/* <Route path="/" element={<HomePage />} />
                        <Route path="/Login" element={<Navigate to="/Clinic/Login" />} />
                        <Route path="/Clinic/Login" element={<Login />} /> */}
                        {/* mkjhgfcgvbhnm */}

                        <Route path="/Clinic-Dashboardw" element={<Providerprotect><DashboardB /></Providerprotect>} />
                        <Route path="/dashboard_c" element={<Providerprotect><DashboardC /></Providerprotect>} />

                        <Route path="/Provider-Dashboard" element={<Providerprotect><DashboardK /></Providerprotect>} />
                        {/* <Route path="/Provider-Dashboard" element={<DashboardK />} /> */}
                        <Route path="/dashboard_e" element={<Providerprotect><DashboardE /></Providerprotect>} />
                        <Route path="/dashboard_f" element={<Providerprotect><DashboardF /></Providerprotect>} />
                        <Route path="/dashboard_g" element={<Providerprotect><DashboardG /></Providerprotect>} />
                        <Route path="/dashboard_h" element={<Providerprotect><DashboardH /></Providerprotect>} />
                        <Route path="/dashboard_i" element={<Providerprotect><DashboardI /></Providerprotect>} />
                        <Route path="/dashboard_j" element={<Providerprotect><DashboardJ /></Providerprotect>} />
                        <Route path="/dashboard_k" element={<Providerprotect><DashboardK /></Providerprotect>} />
                        <Route path="/doctor_appointments" element={<Providerprotect><DoctorAppointments /></Providerprotect>} />
                        <Route path="/patient_appointments" element={<Providerprotect><PatientAppointments /></Providerprotect>} />
                        <Route path="/patients" element={<Providerprotect><Patients /></Providerprotect>} />
                        <Route path="/tests" element={<Providerprotect><Tests /></Providerprotect>} />
                        <Route path="/doctors" element={<Providerprotect><Doctors /></Providerprotect>} />
                        <Route path="/staff" element={<Providerprotect><StaffList /></Providerprotect>} />
                        <Route path="/doctor_messenger" element={<Providerprotect><DoctorMessenger /></Providerprotect>} />
                        <Route path="/patient_messenger" element={<Providerprotect><PatientMessenger /></Providerprotect>} />
                        <Route path="/document-Builder" element={<Providerprotect><DocumentBuilder /></Providerprotect>} />
                        <Route path="/Create-Template" element={<Providerprotect><CreateTemplate /></Providerprotect>} />
                        <Route path="/Edit-Template/:p_id" element={<Providerprotect><EditTemplate /></Providerprotect>} />
                        <Route path="/All-Reports" element={<Providerprotect><AllReports /></Providerprotect>} />
                        <Route path="/patient_reviews" element={<Providerprotect><PatientReviews /></Providerprotect>} />
                        <Route path="/doctor_reviews" element={<Providerprotect><DoctorsReviews /></Providerprotect>} />
                        <Route path="/Appointment-Data-List" element={<Providerprotect><AppointmentDataList /></Providerprotect>} />
                        <Route path="/Billing-Data-List" element={<Providerprotect><BillingDataTable /></Providerprotect>} />
                        <Route path="/Billing-Data-Invoice" element={<Providerprotect><CreateInvoice /></Providerprotect>} />
                        <Route path="/finances" element={<Providerprotect><Finances /></Providerprotect>} />
                        <Route path="/settings" element={<Providerprotect><Settings /></Providerprotect>} />
                        <Route path="/404" element={<Providerprotect><PageNotFound /></Providerprotect>} />
                        <Route path="*" element={<Providerprotect><Navigate to="/404" replace /></Providerprotect>} />

                        <Route path="/ManageClinic/CreateUser" element={<Providerprotect><CreateUser /></Providerprotect>} />
                        <Route path="/ManageClinic/EditUser/:p_id" element={<Providerprotect><EditUser /></Providerprotect>} />
                        {/* Login Page Routing */}

                        {/* Shop Online Routing */}
                        <Route path="/patients/dashboard/shop/1/products/:p_id" element={<Providerprotect><ShopOnline /></Providerprotect>} />
                        <Route path="/patients/dashboard/shop/1/products/5/view/:p_id" element={<Providerprotect><SingleProductpage /></Providerprotect>} />
                        <Route path="/Checkout" element={<Providerprotect><Checkout /></Providerprotect>} />
                        <Route path="/settings/ChangePassword" element={<Providerprotect><ChangePassword /></Providerprotect>} />

                        <Route path="/Report/ClinicDailyScheduleReport" element={<Providerprotect><ClininDailyReport /></Providerprotect>} />
                        <Route path="/Report/CancelAppointmentScheduleReport" element={<Providerprotect><CancelAppointmentReport /></Providerprotect>} />
                        <Route path="/Report/ClinicActivityReport" element={<Providerprotect><ClinicActivityReport /></Providerprotect>} />
                        <Route path="/Report/OrderSurveyReport" element={<Providerprotect><OrderSurveyReport /></Providerprotect>} />
                        <Route path="/Report/PatientStatusReport" element={<Providerprotect><PatientStatusreport /></Providerprotect>} />
                        <Route path="/Report/NewPatientReport" element={<Providerprotect><NewPatientReport /></Providerprotect>} />
                        <Route path="/Report/PatientEmailReport" element={<Providerprotect><PatientEmailReport /></Providerprotect>} />
                        <Route path="/Report/ChartsViewedReport" element={<Providerprotect><ChartsViewedReport /></Providerprotect>} />
                        <Route path="/Report/PrescriptionReport" element={<Providerprotect><PrescriptionReport /></Providerprotect>} />
                        <Route path="/ManageClinic/Details" element={<Providerprotect><ManageClinic /></Providerprotect>} />
                        <Route path="/ManageClinic/Add-Secoundary-location" element={<Providerprotect><AddSecondaryLoaction /></Providerprotect>} />
                        <Route path="/ManageClinic/Edit-Secoundary-location/:p_id" element={<Providerprotect><EditSecondaryLoaction /></Providerprotect>} />
                        <Route path="/Add-Email-Templates" element={<Providerprotect><AddEmailTempalets /></Providerprotect>} />
                        <Route path="/Edit-Email-Templates/:p_id" element={<Providerprotect><EditEmailTempalets /></Providerprotect>} />
                        <Route path="/Add-Sms-Templates" element={<Providerprotect><AddSMSTemplate /></Providerprotect>} />
                        <Route path="/Edit-SMS-Templates/:p_id" element={<Providerprotect><EditSMSTempalets /></Providerprotect>} />
                        <Route path="/Add-Triggers" element={<Providerprotect><AddTriggers /></Providerprotect>} />
                        <Route path="/Edit-trigger/:p_id" element={<Providerprotect><EditTrigger /></Providerprotect>} />



                        {/* nubcfgsgdzhjxkdx, */}
                        <Route path="/ManageClinic/Add-Appointment-type" element={<Providerprotect><AddAppointmentType /></Providerprotect>} />
                        <Route path="/ManageClinic/Edit-Appointment-type/:p_id" element={<Providerprotect><EditAppointmentType /></Providerprotect>} />
                        <Route path="/All-patient/Patient-Single-Page/:p_id" element={<Providerprotect><PatientSinglePage /></Providerprotect>} />
                        <Route path="/All-patient" element={<Providerprotect><AllPatient /></Providerprotect>} />
                        <Route path="/Find-patient" element={<Providerprotect><FindPatient /></Providerprotect>} />
                        <Route path="/All-Orders" element={<Providerprotect><AllOrders /></Providerprotect>} />
                        <Route path="/Find-Orders" element={<Providerprotect><FindOrders /></Providerprotect>} />
                        <Route path="/All-Products" element={<Providerprotect><AllProducts /></Providerprotect>} />
                        <Route path="/Create-Products" element={<Providerprotect><CreateProducts /></Providerprotect>} />
                        <Route path="/Add-patient" element={<Providerprotect><AddPatient /></Providerprotect>} />
                        <Route path="/Single-Patient-Manage-order/:p_id" element={<Providerprotect><ManageOrder /></Providerprotect>} />
                        <Route path="/Single-Product/:p_id" element={<Providerprotect><EditSingleProduct /></Providerprotect>} />

                        {/* lkoijuhygtfrdftgyhujikol */}
                        <Route path="/SinglePAteintPersonalDetails" element={<Providerprotect><PersonalInformation /></Providerprotect>} />
                        <Route path="/CLA" element={<MYCalendar />} />

                    </Routes>
                </Suspense>
            </div>
            {isMobile ? <BottomMenu /> : null}
        </div>
    )
}

export default AppLayout;