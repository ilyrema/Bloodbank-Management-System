import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Content, MainContainer, Sidebar } from '../../components/Sidebar';
import func from '../../config/functions';
import Prediction from '../../Prediction';

import '../../assets/css/Hospital.css';
/**
 * 
 * 
 * 
 * 
 **/
const Dashboard = () => {

    func.scroll();
    const { sidebarTheme, sidebarState, toggleSidebar, toggleTheme } = func.sidebar();

    return (
        <>
            <Sidebar target="Hospital" sidebarTheme={sidebarTheme} sidebarState={sidebarState} toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} />

            <MainContainer>
                <Navbar expand="lg" className="navigation">
                    <Container fluid={true}>
                        <Navbar.Brand>

                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Nav className="ms-auto">
                                hahaha
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Content>
                    <Row className="d-none d-md-flex">
                        <Col sm={12} md={8} lg={9}>
                            <Container className="alert bg-transparent py-1 px-1">
                                <div className="input-group border-2 border-bottom border-danger search-box">
                                    <span className="input-group-text bg-transparent border-0 bi bi-search fs-3 rounded-0 border-2 text-danger"></span>
                                    <input type="search" placeholder="Search..." className="search-input form-control form-control-lg no-focus-border bg-transparent rounded-0 border-0" />
                                </div>
                                <div className="alert alert-light w-100 position-absolute start-0 search-result fs-6 py-2 d-none">
                                    <div className="dropdown-header">Settings</div>
                                    <Link className="alert alert-light btn btn-danger w-100 text-start my-1 py-2 border-0" to={'/home#footer'}>HAHAHA</Link>
                                    <Link className="alert alert-light btn btn-danger w-100 text-start my-1 py-2 border-0" to={'/home#footer'}>HAHAHA</Link>
                                    <Link className="alert alert-light btn btn-danger w-100 text-start my-1 py-2 border-0" to={'/home#footer'}>HAHAHA</Link>
                                </div>
                            </Container>
                        </Col>
                        <Col sm={0} md={4} lg={3}>
                            <Container className="alert bg-transparent py-1 px-1">
                                <Row className="">
                                    <Col sm={0} md={12} lg={12}>
                                        <div className="input-group">
                                            <button className="btn btn-lg btn-danger w-100">
                                                <span className="bi bi-plus float-start"></span>
                                                <div className="text-truncate">Make Request</div>
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8} md={8} lg={9}>
                            <Container className="alert bg-danger text-light bg-gradient">
                                <Row>
                                    <Col sm={12} md={10} lg={10}>
                                        <div className="fs-5 fw-bold">Hello Jed Terrazola!</div>
                                        <div className="fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit orci ut dui finibus, at consequat eros ultricies.</div>
                                    </Col>
                                    <Col sm={0} md={2} lg={2}>
                                        <div className="bi bi-droplet display-3 text-center"></div>
                                    </Col>
                                </Row>
                            </Container>
                            <Container className="alert alert-light">
                                <Row>
                                    <Col sm={12} md={10} lg={12}>
                                        MONTHLY REQUEST
                                        <Prediction />
                                    </Col>
                                </Row>
                            </Container>
                            <Container className="px-0">
                                <Row>
                                    <Col sm={12} md={6} lg={6}>
                                        <div className="alert alert-light">

                                            BLOOD TYPE
                                            <Prediction />
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6} lg={6}>
                                        <div className="alert alert-light">

                                            BLOODBAG
                                            <Prediction />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col sm={4} md={4} lg={3}>
                            <div className="alert alert-light">
                                <Row>
                                    <Col sm={12} md={12} lg={12}>
                                        <Container className="d-block text-center p-lg-3">
                                            <div className="fs-4">Jed Terrazola</div>
                                            <div className="fs-6">Senior Developer</div>
                                        </Container>
                                    </Col>
                                </Row>
                            </div>
                            <div className="alert alert-light">
                                <Row>
                                    <Col sm={12} md={12} lg={12}>
                                        <Container className="d-block text-center p-lg-3">
                                            <div className="fs-4">Jed Terrazola</div>
                                            <div className="fs-6">Senior Developer</div>
                                        </Container>
                                    </Col>
                                </Row>
                            </div>
                            <div className="alert alert-light">
                                <Row>
                                    <Col sm={12} md={12} lg={12}>
                                        <Container className="d-block text-center p-lg-3">
                                            <div className="fs-4">Jed Terrazola</div>
                                            <div className="fs-6">Senior Developer</div>
                                        </Container>
                                    </Col>
                                </Row>
                            </div>
                            <div className="alert alert-light">
                                <Row>
                                    <Col sm={12} md={12} lg={12}>
                                        <Container className="d-block text-center p-lg-3">
                                            <div className="fs-4">Jed Terrazola</div>
                                            <div className="fs-6">Senior Developer</div>
                                        </Container>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Content>
            </MainContainer>
        </>
    );
};

export { Dashboard as HospitalDashboard };

