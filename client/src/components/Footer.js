import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ROUTE from '../config/routes';
import CONTENT from '../config/content';


const Footer = ({ className = "" }) => {

    const background = CONTENT.BACKGROUND.COLOR || 'danger';
    const variant = CONTENT.BACKGROUND.VARIANT || 'dark';
    const gradient = CONTENT.BACKGROUND.GRADIENT || false;

    const socialPlatforms = [
        { title: 'Facebook', to: '/', icon: 'bi-facebook' },
        { title: 'Google', to: '/', icon: 'bi-google' },
        { title: 'Instagram', to: '/', icon: 'bi-instagram' },
        { title: 'Tiktok', to: '/', icon: 'bi-tiktok' },
        { title: 'Twitter', to: '/', icon: 'bi-twitter' },
    ];

    const footerLinks = [
        {
            title: 'Useful Links',
            links: [
                { label: 'Home', href: ROUTE.PUBLIC.HOME },
                { label: 'Registration', href: ROUTE.PUBLIC.REGISTER },
                { label: 'Login', href: ROUTE.PUBLIC.LOGIN },
                { label: 'About Us', href: '/about' },
                { label: 'Forgot Password', href: ROUTE.PUBLIC.FORGOT_PASSWORD },
            ],
        },
        {
            title: 'Policies',
            links: [
                { label: 'Terms and Conditions', href: ROUTE.PUBLIC.TERMS },
                { label: 'Privacy Policy', href: ROUTE.PUBLIC.PRIVACY },
                // { label: 'Accessibility Policy', href: '/accessibility' },
                // { label: 'Do Not Sell Information', href: '/do-not-sell' },
            ],
        },
        {
            title: 'About',
            links: [
                { label: CONTENT.ADDRESS, href: null },
                { label: CONTENT.EMAIL, href: null },
                { label: CONTENT.CONTACT, href: null },
                { label: CONTENT.TELEPHONE, href: null },
            ],
        },
    ];

    return (
        <footer id="footer">
            <div className={`bg-${background} ${gradient ? 'bg-gradient' : ''} text-${variant === 'dark' ? 'light' : 'dark'} mb-0 ${className}`}>
                <Container className="py-3 d-flex justify-content-center justify-content-md-center justify-content-lg-between">
                    <div className="text-start fs-6 d-none d-lg-block">Connect with us on our social media platforms</div>
                    <div className="text-end">
                        {
                            socialPlatforms.map((platform) => (
                                <Link key={platform.title} to={platform.to} className={`fs-6 text-decoration-none mx-2 text-light bi ${platform.icon}`} title={platform.title} />
                            ))
                        }
                    </div>
                </Container>
            </div>
            <div className="bg-dark text-light py-4 border-bottom border-1 border-secondary">
                <Container>
                    <Row className="lh-sm">
                        <Col sm={12} lg={6} className="text-justify mb-3 d-none d-sm-block">
                            <div className="fs-4 fw-bold mb-2">{CONTENT.NAME.LONG}</div>
                            <div className="fs-6">
                                The {CONTENT.NAME.LONG} is an advanced and efficient centralized database that streamlines the process of collecting, testing, storing, and distributing blood and its components. This system plays a crucial role in the healthcare industry by ensuring the availability of safe and compatible blood products for patients in need. With its comprehensive features and continuous improvement, the Blood Bank Management System aims to enhance the overall efficiency and effectiveness of blood banks, fostering a healthier and safer community.
                            </div>
                        </Col>
                        {
                            footerLinks.map((section) => (
                                <Col key={section.title} sm={4} lg={2}>
                                    <div className="fs-4 fw-bold mb-2">{section.title}</div>
                                    <div className="fs-6">
                                        {
                                            section.links.map((link) => (
                                                <Link key={link.label} to={link.href} className="d-block text-decoration-none text-light mb-2">
                                                    {link.label}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
            <div className="bg-dark text-light py-3">
                <Container className="text-center">
                    <Link className="fs-6 text-decoration-none text-warning" to={ROUTE.PUBLIC.HOME}>
                        © 2023 Copyright | {CONTENT.URL}
                    </Link>
                </Container>
            </div>
        </footer>
    );
};


export default Footer;