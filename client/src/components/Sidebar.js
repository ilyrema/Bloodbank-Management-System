// import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

import func from '../config/functions';
import NAVIGATION from '../config/navigation';

import '../assets/css/Sidebar.css';
import logo from '../assets/images/logo.svg';


const Sidebar = ({ target, sidebarTheme, sidebarState, toggleTheme, toggleSidebar }) => {

    const location = useLocation();
    const type = target.toString().toLowerCase();
    const nav = type === 'admin' ? NAVIGATION.SIDEBAR.ADMIN : (type === 'hospital' ? NAVIGATION.SIDEBAR.HOSPITAL : []);

    return (
        <header className={`sidebar ${sidebarState}`}>
            <div className="company">
                <img src={logo} className="logo" alt="..." />
                <div className="info">
                    <div className="name">Bloodbank</div>
                    <div className="type">Management System</div>
                </div>
                <i className={`bx bxs-${sidebarState === 'open' ? "left-arrow" : "right-arrow"} btn-sidebar`} onClick={toggleSidebar}></i>
            </div>
            <div className="menu">
                <ul className="nav-list">
                    {
                        nav.map((link) => {
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
                            );
                        })
                    }
                    <SidebarAnchor className="" name={sidebarTheme === 'dark' ? 'Light Mode' : 'Dark Mode'} anchorClass="btn-theme" icon={`bi bi-${sidebarTheme === 'dark' ? 'sun' : 'moon'}-fill`} onClick={toggleTheme} />
                    <SidebarAnchor className="profile" anchorClass="btn-theme">
                        <div className="profile-details">
                            <img className="icon" src={logo} alt="..." />
                            <div className="user-profile">
                                <div className="name fw-bolder">{''}</div>
                                <div className="job">{''}</div>
                            </div>
                            <i className="bx bx-log-out btn-logout" onClick={func.logout}></i>
                        </div>
                    </SidebarAnchor>
                </ul>
            </div>
        </header >
    );
}


const SidebarAnchor = ({ name, icon, href = null, onClick, className = '', anchorClass = '', children }) => {
    return children ? (
        <li className={className} onClick={onClick}>
            {children}
        </li>
    ) : (
        <li className={className} onClick={onClick}>
            <Link to={href} className={anchorClass}>
                <i className={icon}></i>
                <span className="page">{name}</span>
            </Link>
            <span className="tooltip">{name}</span>
        </li>
    )
}


const MainContainer = ({ className = '', children }) => {
    return (
        <main className={`main-container ${className}`}>
            {children}
        </main>
    );
}

const Content = ({ children }) => {
    return (
        <section className="content">
            {children}
        </section>
    );
}


export { Content, MainContainer, Sidebar };

