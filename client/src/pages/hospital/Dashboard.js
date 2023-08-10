import { Alert, Button, Col, Row } from 'react-bootstrap';

import { Content, MainContainer, Sidebar } from '../../components/Sidebar';
import Chart from '../../components/Chart';
import func from "../../config/functions";
import SearchBar from '../../components/SearchBar';
import SidebarNav from '../../components/SidebarNav';

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
                <SidebarNav target="Hospital" sidebarTheme={sidebarTheme} toggleTheme={toggleTheme} />
                <Content>
                    <Row className="mb-3">
                        <Col sm={12} md={8} lg={9}>
                            <SearchBar target="Hospital" />
                        </Col>
                        <Col sm={12} md={4} lg={3}>
                            <Button variant="danger" type="button" size="lg" className="text-truncate w-100 fs-4">Make Request</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={8} lg={9}>
                            <section>
                                <Alert variant="" className="bg-danger text-light bg-gradient">
                                    <div className="fs-4 mb-2">Greetings!</div>
                                    <div className="fs-6">Get insights on blood management with line graphs for blood requests and available blood bags, a pie graph for blood type distribution, and details on blood bags and types.</div>
                                </Alert>
                            </section>
                            <section>
                                <Alert variant="light" className="fs-6">
                                    <div className="fs-5">Line Graph of Blood Request</div>
                                    <Chart />
                                </Alert>
                            </section>
                            <section>
                                <Row>
                                    <Col sm={12} md={12} lg={6}>
                                        <Alert variant="light" className="">
                                            <div className="fs-5">Pie Graph of Blood Type</div>
                                            <Chart />
                                        </Alert>
                                    </Col>
                                    <Col sm={12} md={12} lg={6}>
                                        <Alert variant="light" className="">
                                            <div className="fs-5">Line Graph of Blood Bags</div>
                                            <Chart />
                                        </Alert>
                                    </Col>

                                </Row>
                            </section>
                        </Col>
                        <Col sm={12} md={4} lg={3}>
                            <section>
                                <Alert variant="light" className="">
                                    <div className="fs-5">Blood Bags</div>
                                    <Chart />
                                </Alert>
                            </section>
                            <section>
                                <Alert variant="light" className="">
                                    <div className="fs-5">Blood Types</div>
                                    <Chart />
                                </Alert>
                            </section>
                        </Col>
                    </Row>
                </Content>
            </MainContainer >
        </>
    );
};

export { Dashboard as HospitalDashboard };

