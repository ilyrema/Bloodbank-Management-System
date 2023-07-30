
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import CONTENT from '../config/content';
import ROUTE from '../config/routes';
import '../assets/css/Sidebar.css';

import logo from '../assets/images/logo.svg';


const Sidebar = ({ target, credentials }) => {

    const state = localStorage.sidebarState || 'open';
    const theme = localStorage.sidebarTheme || 'light';
    const [sidebarState, setSidebarState] = useState(state);
    const [sidebarTheme, setSidebarTheme] = useState(theme);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (state !== sidebarState) {
            setSidebarState(state);
        }

        if (theme !== sidebarTheme) {
            setSidebarTheme(theme);
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        localStorage.setItem('sidebarState', sidebarState);
        localStorage.setItem('sidebarTheme', sidebarTheme);
        document.body.className = sidebarTheme;
    }, [sidebarState, sidebarTheme]);

    const navigation = [
        ...((target === 'Hospital')
            ? [
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
            ] : [
                {
                    name: "Dashboard",
                    icon: "bx bxs-grid-alt",
                    href: ROUTE.ADMIN.DASHBOARD,
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
            ])
    ];


    return (
        <div className={`sidebar ${sidebarState} ${sidebarTheme}`}>
            <div className="logo-details">
                <img src={logo} className="icon" alt="..." />
                <div className="logo-name">{CONTENT.NAME.SHORT}</div>
                <i className={`bx bxs-${sidebarState === 'open' ? "left-arrow" : "right-arrow"} btn-sidebar`} onClick={() => { setSidebarState(sidebarState === 'open' ? 'close' : 'open') }}></i>
            </div>
            <div className="menu-bar">
                <ul className="nav-list ps-0">
                    {
                        navigation.map((link) => {
                            const anchorProps = {
                                key: link.name,
                                name: link.name,
                                icon: link.icon,
                                href: link.href,
                                className: link.className,
                                anchorClass: `${link.anchorClass} ${(link.href === location.pathname) ? 'active' : ''}`,
                                onClick: link.onClick,
                            }
                            return (
                                <SidebarAnchor {...anchorProps}>
                                    {link.children}
                                </SidebarAnchor>
                            )
                        })
                    }
                    <SidebarAnchor className="" name={sidebarTheme === 'dark' ? 'Light Mode' : 'Dark Mode'} anchorClass="btn-theme" icon={`bi bi-${sidebarTheme === 'dark' ? 'moon' : 'sun'}-fill`} onClick={() => { setSidebarTheme(sidebarTheme === 'dark' ? 'light' : 'dark') }} />
                    <SidebarAnchor className="profile" anchorClass="btn-theme">
                        <div className="profile-details">
                            <img className="icon" src={logo} alt="..." />
                            <div className="user-profile">
                                <div className="name fw-bolder">{''}</div>
                                <div className="job">{''}</div>
                            </div>
                            <i className="bx bx-log-out btn-logout" onClick={() => { window.location = (ROUTE.PUBLIC.LOGOUT) }}></i>
                        </div>
                    </SidebarAnchor>
                </ul>
            </div>
        </div >
    );
}

const SidebarAnchor = ({ name, icon, href = null, onClick, className = "", anchorClass = "", children }) => {
    return children ? (
        <li className={className} onClick={onClick}>
            {children}
        </li>
    ) : (
        <li className={className} onClick={onClick}>
            <Link to={href} className={anchorClass}>
                <i className={icon}></i>
                <span className="hyperlinks">{name}</span>
            </Link>
            <span className="tooltip">{name}</span>
        </li>
    )
}


const MainContent = ({ children }) => {
    return (
        <main className="home-section">
            <section className="text">
                {children}
            </section>
        </main>
    )
}


export { Sidebar, MainContent };

