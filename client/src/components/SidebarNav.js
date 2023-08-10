import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

import CONTENT from '../config/content';
import func from '../config/functions';
import NAVIGATION from '../config/navigation';
import logo from '../assets/images/logo.svg';

const SidebarNav = ({ target, sidebarTheme, toggleTheme }) => {

    const location = useLocation();
    const [navState, setNavState] = useState(localStorage.navState || false);
    const type = target.toString().toLowerCase();
    const nav = type === 'admin' ? NAVIGATION.SIDEBAR.ADMIN : (type === 'hospital' ? NAVIGATION.SIDEBAR.HOSPITAL : []);
    const background = CONTENT.BACKGROUND.COLOR || 'danger';

    return (
        <Navbar expand="lg" variant={sidebarTheme} className="bg-transparent d-block d-xl-none">
            <Container>
                <img src={logo} alt="" height={50} />
                <Navbar.Brand as={Link} to="#" className="d-block d-xl-none">
                    <span className="fs-3 d-inline ps-lg-3">{CONTENT.NAME.SHORT}</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="d-lg-flex justify-content-end">
                    <Nav>
                        {
                            nav.map((link) => {

                                return (
                                    <Nav.Item key={link.name}>
                                        <Nav.Link as={Link} className={location.pathname === link.href ? 'active fs-4' : 'fs-4'} to={link.href}>{link.name}</Nav.Link>
                                    </Nav.Item>
                                );
                            })

                        }
                        <Nav.Item>
                            <Link className="nav-link fs-4" onClick={toggleTheme}>
                                <span className="d-block d-lg-none">{sidebarTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                                <Badge pill bg={background} className={`d-none d-lg-block bi bi-${sidebarTheme === 'dark' ? 'sun' : 'moon'}-fill p-2`}>{sidebarTheme === 'dark' ? ' Light Mode' : ' Dark Mode'}</Badge>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link fs-4" onClick={func.logout}>Logout</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>


            </Container>
        </Navbar >
    );
}

export default SidebarNav;