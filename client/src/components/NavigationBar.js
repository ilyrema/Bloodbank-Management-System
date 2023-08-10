import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import CONTENT from '../config/content';
import ROUTE from '../config/routes';
import logo from '../assets/images/logo.svg';
import NAVIGATION from '../config/navigation';


const NavigationBar = ({ className = "", onError = false }) => {

    const location = useLocation();

    const background = CONTENT.BACKGROUND.COLOR || 'danger';
    const variant = CONTENT.BACKGROUND.VARIANT || 'dark';
    const gradient = CONTENT.BACKGROUND.GRADIENT || false;

    const nav = NAVIGATION.NAVBAR.PUBLIC;

    return (
        <Navbar bg={background} variant={variant} expand="lg" className={`${className} ${gradient ? 'bg-gradient' : ''}`}>
            <Container className="d-flex justify-content-around">
                <Link to={onError ? null : ROUTE.PUBLIC.HOME}>
                    <img src={logo} height="50" alt="..." />
                </Link>
                <Navbar.Brand className="mx-auto" as={Link} to={onError ? null : ROUTE.PUBLIC.HOME}>
                    <span className="fs-5 d-none d-sm-inline ms-lg-2">{CONTENT.NAME.LONG}</span>
                    <span className="fs-5 text-light d-sm-none d-inline">{CONTENT.NAME.SHORT}</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="d-flex-sm justify-content-end">
                    <Nav className="ms-auto">
                        {
                            nav.map((link) => {

                                const isActive = location.pathname === link.to;

                                const linkProps = {
                                    key: link.key,
                                    as: Link,
                                    to: link.to,
                                    className: (isActive ? 'active' : '') + (link.addedClass ? ('' + link.addedClass) : ''),
                                    disabled: link.disabled,
                                };

                                return (
                                    <Nav.Link {...linkProps}>
                                        {link.label}
                                    </Nav.Link>
                                );
                            })
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavigationBar;