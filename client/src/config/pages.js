import { AdminDashboard } from '../pages/admin/Dashboard';
import { AdminHistory } from '../pages/admin/History';
import { AdminReports } from '../pages/admin/Reports';
import { AdminRequest } from '../pages/admin/Request';
import { AdminSettings } from '../pages/admin/Settings';

import { HospitalDashboard } from '../pages/hospital/Dashboard';
import { HospitalHistory } from '../pages/hospital/History';
import { HospitalReports } from '../pages/hospital/Reports';
import { HospitalRequest } from '../pages/hospital/Request';
import { HospitalSettings } from '../pages/hospital/Settings';

import { PublicAbout } from '../pages/public/About';
import { PublicForgotPassword } from '../pages/public/Forgot';
import { PublicHome } from '../pages/public/Home';
import { PublicLogin } from '../pages/public/Login';
import { PublicPrivacy } from '../pages/public/Privacy';
import { PublicRegister, PublicRegisterDonor, PublicRegisterHospital } from '../pages/public/Register';
import { PublicTerms } from '../pages/public/Terms';

const Hospital = {
    Dashboard: HospitalDashboard,
    Request: HospitalRequest,
    Reports: HospitalReports,
    History: HospitalHistory,
    Settings: HospitalSettings,
}

const Admin = {
    Dashboard: AdminDashboard,
    Request: AdminRequest,
    Reports: AdminReports,
    History: AdminHistory,
    Settings: AdminSettings,
}

const Public = {
    Home: PublicHome,
    Login: PublicLogin,
    Register: PublicRegister,
    RegisterDonor: PublicRegisterDonor,
    RegisterHospital: PublicRegisterHospital,
    ForgotPassword: PublicForgotPassword,
    About: PublicAbout,
    Privacy: PublicPrivacy,
    Terms: PublicTerms,
}

export { Admin, Hospital, Public };

