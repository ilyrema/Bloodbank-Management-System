import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Sidebar, MainContainer, Content } from "../../components/Sidebar";
import func from "../../config/functions";

import '../../assets/css/Hospital.css';

/**
 * 
 * 
 * 
 * 
 **/
const Reports = () => {

    func.scroll();
    const { sidebarTheme, sidebarState, toggleSidebar, toggleTheme } = func.sidebar();

    return (
        <>
            <Sidebar target="Hospital" sidebarTheme={sidebarTheme} sidebarState={sidebarState} toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} />
            <MainContainer>
                <Content>
                    <Row className="d-none d-md-flex">
                        <Col sm={12} md={7} lg={9}>
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
                        <Col sm={0} md={5} lg={3}>
                            <Container className="alert bg-transparent py-1 px-1">
                                <Row className="">
                                    <Col sm={0} md={12} lg={12}>
                                        <div className="input-group">
                                            <button className="btn btn-lg btn-danger w-100">
                                                <span className="bi bi-plus float-start"></span>
                                                <div>Make Request</div>
                                            </button>
                                        </div>
                                    </Col>
                                    {/* <Col sm={0} md={2} lg={2}>
                                    <div className="input-group">
                                        <button className="bg-transparent border-0 bx bxs-bell text-danger fs-1 w-100"></button>
                                    </div>
                                </Col> */}
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Content>
            </MainContainer>
        </>
    );
};

export { Reports as HospitalReports };