
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import CONTENT from '../config/content';
import ROUTE from '../config/routes';

import '../assets/css/Sidevar.css';
import logo from '../assets/images/logo.svg';


const Sidevar = ({ sidebarTheme, sidebarState, toggleTheme, toggleSidebar }) => {
    return (
        <header className={`sidevar ${sidebarState}`}>
            <div className="company">
                <img className="logo" src={logo} alt="..." />
                <div className="info">
                    <div className="name">Bloodbank</div>
                    <div className="type">Management System</div>
                </div>
            </div>
            <div className="menu">
                <ul className="nav-list ps-0">
                    <li>
                        <Link to={ROUTE.PUBLIC.HOME}>
                            <i className="bx bxs-grid-alt"></i>
                            <span className="page">Dashboard</span>
                        </Link>
                        <span className="tooltip">Dashboard</span>
                    </li>
                    <li>
                        <Link to={ROUTE.PUBLIC.HOME}>
                            <i className="bx bxs-grid-alt"></i>
                            <span className="page">Dashboard</span>
                        </Link>
                        <span className="tooltip">Dashboard</span>
                    </li>
                    <li>
                        <Link to={ROUTE.PUBLIC.HOME}>
                            <i className="bx bxs-grid-alt"></i>
                            <span className="page">Dashboard</span>
                        </Link>
                        <span className="tooltip">Dashboard</span>
                    </li>

                </ul>
            </div>
        </header>
    );
}

const MainContent = ({ children, navChildren, navClassName = '' }) => {

    return (
        <main className="main-container">
            <Navbar expand="lg" className={`navigation${navClassName !== '' ? ` ${navClassName}` : ''}`}>
                {navChildren}
            </Navbar>
            <section className="content">
                {children}
            </section>
        </main>
    );
}

export { Sidevar, MainContent };