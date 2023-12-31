const DOMAIN = true ? "http://localhost:8080" : "";

const ROUTE = {
    PUBLIC: {
        INDEX: '/',

        HOME: '/home',
        LOGIN: '/login',
        REGISTER: '/register',
        REGISTER_DONOR: '/register/donor',
        REGISTER_HOSPITAL: '/register/hospital',
        LOGOUT: '/logout',
        FORGOT_PASSWORD: '/forgot',

        ABOUT: '/about',
        PRIVACY: '/privacy',
        TERMS: '/terms',
    },
    DONOR: {
        INDEX: '/donor',

        DASHBOARD: '/donor/dashboard',
        HISTORY: '/donor/history',
        INFORMATION: '/donor/information',
        SCHEDULE: '/donor/schedule',
        SETTINGS: '/donor/settings',
    },
    ADMIN: {
        INDEX: '/admin',

        DASHBOARD: '/admin/dashboard',
        DONOR: '/admin/donor',
        HOSPITAL: '/admin/hospital',
        HISTORY: '/admin/history',
        REQUEST: '/admin/request',
        REPORTS: '/admin/reports',
        SETTINGS: '/admin/settings',
    },
    HOSPITAL: {
        INDEX: '/hospital',

        DASHBOARD: '/hospital/dashboard',
        HISTORY: '/hospital/history',
        REQUEST: '/hospital/request',
        REPORTS: '/hospital/reports',
        SETTINGS: '/hospital/settings',
    },
    API: {
        AUTH: {
            INDEX: '/auth',
            LOGIN: DOMAIN + '/auth/login',
            REGISTER: DOMAIN + '/auth/register',
            OTP: DOMAIN + '/auth/otp',
            CONTACT: DOMAIN + '/auth/contact',
            ATTEMPT: DOMAIN + '/auth/attempt',
            FORGOT: DOMAIN + '/auth/forgot',
        }
    }
}


export default ROUTE; 