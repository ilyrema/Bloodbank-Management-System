import { Col, Row } from 'react-bootstrap';

import { Content, MainContainer, Sidebar } from "../../components/Sidebar";
import func from '../../config/functions';

import '../../assets/css/Admin.css';

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
            <Sidebar target="Admin" sidebarTheme={sidebarTheme} sidebarState={sidebarState} toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} />
            <MainContainer>
                <Content>
                    <Row>
                        <Col sm={8} md={8} lg={8}>
                            <div className="alert bg-danger text-light bg-gradient">
                                <Row>
                                    <Col sm={12} md={10} lg={10}>
                                        <div className="fs-4 fw-bold">Hello Jed Terrazola!</div>
                                        <div className="fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit orci ut dui finibus, at consequat eros ultricies.</div>
                                    </Col>
                                    <Col sm={0} md={2} lg={2}>
                                        <div className="bi bi-droplet display-1 text-center"></div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="alert alert-light">
                                <Row>
                                    <Col sm={12} md={6} lg={6}>
                                        <figure>
                                            <img className="img-fluid" src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/graph-wiki_ver_1.png" alt="..." />
                                        </figure>
                                    </Col>
                                    <Col sm={12} md={6} lg={6}>
                                        <figure>
                                            <img className="img-fluid" src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/graph-wiki_ver_1.png" alt="..." />
                                        </figure>
                                    </Col>
                                    <Col sm={12} md={12} lg={12}>
                                        <figure>
                                            <img className="img-fluid" src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/graph-wiki_ver_1.png" alt="..." />
                                        </figure>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm={4} md={4} lg={4}>
                            <div className="alert bg-danger text-light bg-gradient">
                                <Row>
                                    <Col sm={12} md={9} lg={9}>
                                        <div className="fs-4 fw-bold">Hello Jed Terrazola!</div>
                                        <div className="fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit orci ut dui finibus, at consequat eros ultricies.</div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="alert alert-light">
                                <Row>
                                    <Col sm={12} md={9} lg={9}>
                                        <figure className="d-block" id="ad">
                                            <img className="img-fluid" src="https://cdn-icons-png.flaticon.com/512/5231/5231019.png" alt="..." />
                                            <figcaption className="fs-5">Position</figcaption>
                                        </figure>
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

export { Dashboard as AdminDashboard };

