import { Alert, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CONTENT from '../../config/content';
import Footer from '../../components/Footer';
import NavigationBar from '../../components/NavigationBar';
import ROUTE from '../../config/routes';

import logo from '../../assets/images/logo.svg';

/**
 * 
 * 
 * 
 * 
 **/
const Register = () => {

    const background = CONTENT.BACKGROUND.COLOR || 'danger';

    return (
        <>
            <NavigationBar />
            <main>
                <Alert variant={background} className="mb-0 rounded-0">
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={5} className="d-flex justify-content-center align-middle">
                                <img src={logo} className="img-fluid d-none d-lg-block" alt="..." />
                            </Col>
                            <Col sm={12} md={12} lg={7} className="d-flex align-items-center">
                                <Container className="d-block my-5">
                                    <Alert variant="light" className="position-relative shadow p-3">
                                        <span className={`fs-6 position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${background}`}>Choose</span>
                                        <div className="d-flex justify-content-between">
                                            <div className="fs-4 fw-bold">Registration</div>
                                        </div>
                                        <div className="fs-6 mb-3">Please choose between blood donor and hospital.</div>
                                        <Container>
                                            <Row>
                                                <Col sm={12} md={6} lg={6} className={`btn btn-outline-${background} p-4 p-lg-5 mb-2 border-0 rounded-4`} as={Link} to={ROUTE.PUBLIC.REGISTER_DONOR}>
                                                    <div className="display-1 mb-2">
                                                        <div className="fa-solid fa-person"></div>
                                                        <div className="fs-5 fa-solid fa-droplet"></div>
                                                    </div>
                                                    <div className="fs-5">Blood Donor</div>
                                                </Col>
                                                <Col sm={12} md={6} lg={6} className={`btn btn-outline-${background} p-4 p-lg-5  mb-2 border-0 rounded-4`} as={Link} to={ROUTE.PUBLIC.REGISTER_HOSPITAL}>
                                                    <div className="display-1 fa-solid fa-hospital-user mb-2"></div>
                                                    <div className="fs-5">Hospital</div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Alert>
                                </Container>
                            </Col>
                        </Row>
                    </Container >
                </Alert >
            </main >
            <Footer />
        </>
    );
};

/**
 * 
 * 
 * 
 * 
 **/
const RegisterDonor = () => {


    return (
        <>
            <NavigationBar />
            RegisterDonor
            <Footer />
        </>
    );
};

/**
 * 
 * 
 * 
 * 
 **/
const RegisterHospital = () => {


    return (
        <>
            <NavigationBar />
            RegisterHospital
            <Footer />
        </>
    );
};

export { Register as PublicRegister, RegisterDonor as PublicRegisterDonor, RegisterHospital as PublicRegisterHospital };
