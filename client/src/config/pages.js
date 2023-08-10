import { AdminDashboard } from '../pages/admin/Dashboard';
import { AdminDonor } from '../pages/admin/Donor';
import { AdminHistory } from '../pages/admin/History';
import { AdminHospital } from '../pages/admin/Hospital';
import { AdminReports } from '../pages/admin/Reports';
import { AdminRequest } from '../pages/admin/Request';
import { AdminSettings } from '../pages/admin/Settings';

import { DonorDashboard } from '../pages/donor/Dashboard';
import { DonorHistory } from '../pages/donor/History';
import { DonorInformation } from '../pages/donor/Information';
import { DonorSchedule } from '../pages/donor/Schedule';
import { DonorSettings } from '../pages/donor/Settings';

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


const Admin = {
    Dashboard: AdminDashboard,
    Donor: AdminDonor,
    Hospital: AdminHospital,
    Request: AdminRequest,
    Reports: AdminReports,
    History: AdminHistory,
    Settings: AdminSettings,
}

const Donor = {
    Dashboard: DonorDashboard,
    History: DonorHistory,
    Information: DonorInformation,
    Schedule: DonorSchedule,
    Settings: DonorSettings,
}

const Hospital = {
    Dashboard: HospitalDashboard,
    Request: HospitalRequest,
    Reports: HospitalReports,
    History: HospitalHistory,
    Settings: HospitalSettings,
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

export { Admin, Donor, Hospital, Public };

