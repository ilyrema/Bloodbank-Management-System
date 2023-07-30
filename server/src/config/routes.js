/**
 * Route configuration object for defining different routes in the application.
 * The `ROUTE` object contains several route paths categorized into different groups, such as `PUBLIC`, `DONOR`, `ADMIN`, and `HOSPITAL`.
 * Each group contains specific route paths for different purposes in the application.
 *
 * @typedef {Object} ROUTE
 * @property {Object} PUBLIC - Contains route paths accessible to the public (non-authenticated users).
 * @property {string} PUBLIC.INDEX - The route path for the index or home page.
 * @property {string} PUBLIC.HOME - The route path for the home page.
 * @property {string} PUBLIC.LOGIN - The route path for the login page.
 * @property {string} PUBLIC.REGISTER - The route path for the registration page.
 * @property {string} PUBLIC.REGISTER_DONOR - The route path for the donor registration page.
 * @property {string} PUBLIC.REGISTER_HOSPITAL - The route path for the hospital registration page.
 * @property {string} PUBLIC.LOGOUT - The route path for the logout action.
 * @property {string} PUBLIC.FORGOT_PASSWORD - The route path for the forgot password page.
 * @property {string} PUBLIC.ABOUT - The route path for the about page.
 * @property {string} PUBLIC.PRIVACY - The route path for the privacy page.
 * @property {string} PUBLIC.TERMS - The route path for the terms and conditions page.
 * @property {Object} DONOR - Contains route paths specific to donors (authenticated donor users).
 * @property {Object} ADMIN - Contains route paths specific to administrators (authenticated admin users).
 * @property {string} ADMIN.INDEX - The route path for the admin dashboard page.
 * @property {string} ADMIN.DASHBOARD - The route path for the admin dashboard page.
 * @property {string} ADMIN.HISTORY - The route path for the admin history page.
 * @property {string} ADMIN.REQUEST - The route path for the admin request page.
 * @property {string} ADMIN.REPORTS - The route path for the admin reports page.
 * @property {string} ADMIN.SETTINGS - The route path for the admin settings page.
 * @property {Object} HOSPITAL - Contains route paths specific to hospitals (authenticated hospital users).
 * @property {string} HOSPITAL.INDEX - The route path for the hospital dashboard page.
 * @property {string} HOSPITAL.DASHBOARD - The route path for the hospital dashboard page.
 * @property {string} HOSPITAL.HISTORY - The route path for the hospital history page.
 * @property {string} HOSPITAL.REQUEST - The route path for the hospital request page.
 * @property {string} HOSPITAL.REPORTS - The route path for the hospital reports page.
 * @property {string} HOSPITAL.SETTINGS - The route path for the hospital settings page.
 */

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

    },
    ADMIN: {
        INDEX: '/admin',

        DASHBOARD: '/admin/dashboard',
        HISTORY: '/admin/history',
        REQUEST: '/admin/request',
        REPORTS: '/admin/reports',
        SETTINGS: '/admin/settings',
    },
    HOSPITAL: {
        INDEX: '/hospital',

        DASHBOARD: '/hospital/dashboard',
        HISTORY: '/hospital/history',
        REQUEST: '/hospitals/request',
        REPORTS: '/hospitals/reports',
        SETTINGS: '/hospital/settings',
    },
}

export { ROUTE };