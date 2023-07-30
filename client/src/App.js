import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Admin, Hospital, Public, Donor } from './config/pages';
import ROUTE from './config/routes';


function App() {
    return (
        <Router>
            <Routes>
                <Route path={ROUTE.PUBLIC.INDEX} element={<Navigate to={ROUTE.PUBLIC.HOME} replace />} />
                <Route path={ROUTE.PUBLIC.HOME} element={<Public.Home />} />
                <Route path={ROUTE.PUBLIC.LOGIN} element={<Public.Login />} />
                <Route path={ROUTE.PUBLIC.ABOUT} element={<Public.About />} />
                <Route path={ROUTE.PUBLIC.FORGOT_PASSWORD} element={<Public.ForgotPassword />} />
                <Route path={ROUTE.PUBLIC.REGISTER} element={<Public.Register />} />
                <Route path={ROUTE.PUBLIC.REGISTER_DONOR} element={<Public.RegisterDonor />} />
                <Route path={ROUTE.PUBLIC.REGISTER_HOSPITAL} element={<Public.RegisterHospital />} />
                <Route path={ROUTE.PUBLIC.PRIVACY} element={<Public.Privacy />} />
                <Route path={ROUTE.PUBLIC.TERMS} element={<Public.Terms />} />
                <Route path={ROUTE.PUBLIC.LOGOUT} element={<Navigate to={ROUTE.PUBLIC.LOGIN} replace />} />

                <Route path={ROUTE.ADMIN.INDEX} element={<Navigate to={ROUTE.ADMIN.DASHBOARD} replace />} />
                <Route path={ROUTE.ADMIN.DASHBOARD} element={<Admin.Dashboard />} />
                <Route path={ROUTE.ADMIN.HISTORY} element={<Admin.History />} />
                <Route path={ROUTE.ADMIN.REQUEST} element={<Admin.Request />} />
                <Route path={ROUTE.ADMIN.REPORTS} element={<Admin.Reports />} />
                <Route path={ROUTE.ADMIN.SETTINGS} element={<Admin.Settings />} />

                <Route path={ROUTE.DONOR.INDEX} element={<Navigate to={ROUTE.DONOR.DASHBOARD} replace />} />
                <Route path={ROUTE.DONOR.DASHBOARD} element={<Donor.Dashboard />} />
                <Route path={ROUTE.DONOR.HISTORY} element={<Donor.History />} />
                <Route path={ROUTE.DONOR.INFORMATION} element={<Donor.Information />} />
                <Route path={ROUTE.DONOR.SCHEDULE} element={<Donor.Schedule />} />
                <Route path={ROUTE.DONOR.SETTINGS} element={<Donor.Settings />} />

                <Route path={ROUTE.HOSPITAL.INDEX} element={<Navigate to={ROUTE.HOSPITAL.DASHBOARD} replace />} />
                <Route path={ROUTE.HOSPITAL.DASHBOARD} element={<Hospital.Dashboard />} />
                <Route path={ROUTE.HOSPITAL.HISTORY} element={<Hospital.History />} />
                <Route path={ROUTE.HOSPITAL.REQUEST} element={<Hospital.Request />} />
                <Route path={ROUTE.HOSPITAL.REPORTS} element={<Hospital.Reports />} />
                <Route path={ROUTE.HOSPITAL.SETTINGS} element={<Hospital.Settings />} />
            </Routes>
        </Router>
    );
}

export default App;
