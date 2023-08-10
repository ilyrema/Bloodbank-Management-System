import ROUTE from "./routes"

const NAVIGATION = {
    SIDEBAR: {
        ADMIN: [
            {
                name: "Dashboard",
                icon: "bx bxs-grid-alt",
                href: ROUTE.ADMIN.DASHBOARD,
            },
            {
                name: "Donor",
                icon: "fa-solid fa-hospital-user",
                href: ROUTE.ADMIN.DONOR,
            },
            {
                name: "Hospital",
                icon: "fa-solid fa-hospital",
                href: ROUTE.ADMIN.HOSPITAL,
            },
            {
                name: "Request",
                icon: "bx bx-transfer",
                href: ROUTE.ADMIN.REQUEST,
            },
            {
                name: "Reports",
                icon: "fa-solid fa-chart-pie",
                href: ROUTE.ADMIN.REPORTS,
            },
            {
                name: "History",
                icon: "fa-solid fa-clock-rotate-left",
                href: ROUTE.ADMIN.HISTORY,
            },
            {
                name: "Settings",
                icon: "fa-solid fa-gear",
                href: ROUTE.ADMIN.SETTINGS,
            },
        ],
        HOSPITAL: [
            {
                name: "Dashboard",
                icon: "bx bxs-grid-alt",
                href: ROUTE.HOSPITAL.DASHBOARD,
            },
            {
                name: "Request",
                icon: "bx bx-transfer",
                href: ROUTE.HOSPITAL.REQUEST,
            },
            {
                name: "Reports",
                icon: "fa-solid fa-chart-pie",
                href: ROUTE.HOSPITAL.REPORTS,
            },
            {
                name: "History",
                icon: "fa-solid fa-clock-rotate-left",
                href: ROUTE.HOSPITAL.HISTORY,
            },
            {
                name: "Settings",
                icon: "fa-solid fa-gear",
                href: ROUTE.HOSPITAL.SETTINGS,
            },
        ],
    },
    NAVBAR: {
        PUBLIC:
            [
                {
                    label: 'Home',
                    to: ROUTE.PUBLIC.HOME,
                    key: 'home'
                },
                {
                    label: 'About Us',
                    to: ROUTE.PUBLIC.ABOUT,
                    key: 'about'
                },
                {
                    label: '|',
                    disabled: true,
                    key: 'separator',
                    addedClass: 'd-none d-lg-block'
                },
                {
                    label: 'Login',
                    to: ROUTE.PUBLIC.LOGIN,
                    key: 'login'
                },
                {
                    label: 'Register',
                    to: ROUTE.PUBLIC.REGISTER,
                    key: 'register'
                },
            ],
    },
    SEARCHBAR: {
        ADMIN: {
            Settings: [
                {
                    title: 'Personal Settings',
                    subtitle: 'Manage your personal information and preferences. Update your profile details, change passwords, and customize your account settings easily.',
                    href: '/settings-link-2',
                },
                {
                    title: 'Security Settings',
                    subtitle: 'Safeguard your account and data. Set up two-factor authentication, manage password options, and control access for enhanced protection.',
                    href: '/settings-link-3',
                },
                {
                    title: 'Notification Settings',
                    subtitle: 'Stay in control of your updates. Choose when and how you receive notifications and stay informed on your terms.',
                    href: '/settings-link-3',
                },
            ],
        },
        HOSPITAL: {
            Settings: [
                {
                    title: 'Personal Settings',
                    subtitle: 'Manage your personal information and preferences. Update your profile details, change passwords, and customize your account settings easily.',
                    href: '/settings-link-2',
                },
                {
                    title: 'Security Settings',
                    subtitle: 'Safeguard your account and data. Set up two-factor authentication, manage password options, and control access for enhanced protection.',
                    href: '/settings-link-3',
                },
                {
                    title: 'Notification Settings',
                    subtitle: 'Stay in control of your updates. Choose when and how you receive notifications and stay informed on your terms.',
                    href: '/settings-link-3',
                },
            ],
        },
    }
}

export default NAVIGATION;