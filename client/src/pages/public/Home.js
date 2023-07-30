import { Col, Container, Row } from 'react-bootstrap';
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
const Home = () => {
    return (
        <>
            <NavigationBar />
            <main>
                <div className={`alert alert-${CONTENT.NAV_COLOR} ${CONTENT.NAV_GRADIENT ? 'bg-gradient' : ''} mb-0 rounded-0`}>
                    <Container>
                        <Row>
                            <Col sm={0} md={12} lg={5} className="d-flex d-none d-lg-block justify-content-center align-middle">
                                <img src={logo} className="img-fluids m-3" height={400} alt="..." />
                            </Col>
                            <Col sm={12} md={12} lg={7} className="d-flex align-items-center">
                                <Container className="d-block my-5">
                                    <div className="display-6 mb-4 fw-bold">Empowering Humanity: <br /> Giving Blood, Changing Destinies</div>
                                    <blockquote className="text-justify lh-base mb-4">
                                        In the realm of life-saving generosity, the {CONTENT.NAME.LONG} stands as a bastion of hope. By donating blood, you extend a lifeline to those in need and embody the spirit of compassion. Each donation becomes a heroic act, offering a chance for recovery and renewal. Join us in this noble journey of giving and be a beacon of hope. Together, we can create a world of cherished lives and resilient communities.
                                    </blockquote>
                                    <div className="d-block text-center">
                                        <Link className={`btn text-center btn-${CONTENT.NAV_COLOR} w-100`} to={ROUTE.PUBLIC.REGISTER}>Learn More</Link>
                                        <div className="d-flex justify-content-center mt-2">
                                            <img src={logo} className="img-fluids m-3 d-block" height={75} alt="..." />
                                            <img src={logo} className="img-fluids m-3 d-block" height={75} alt="..." />
                                            <img src={logo} className="img-fluids m-3 d-block" height={75} alt="..." />
                                        </div>
                                    </div>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={`alert alert-light mb-0 rounded-0`}>
                    <Container>
                        <Row>
                            <Col sm={0} md={12} lg={5} className="d-flex d-none d-lg-block justify-content-center align-middle">
                                <img src={logo} className="img-fluids m-3" height={400} alt="..." />
                            </Col>
                            <Col sm={12} md={12} lg={7} className="d-flex align-items-center">
                                <Container className="d-block my-5">
                                    <div className="display-6 mb-4 fw-bold">Empowering Humanity: <br /> Giving Blood, Changing Destinies</div>
                                    <blockquote className="text-justify lh-base mb-4">
                                        In the realm of life-saving generosity, the {CONTENT.NAME.LONG} stands as a bastion of hope. By donating blood, you extend a lifeline to those in need and embody the spirit of compassion. Each donation becomes a heroic act, offering a chance for recovery and renewal. Join us in this noble journey of giving and be a beacon of hope. Together, we can create a world of cherished lives and resilient communities.
                                    </blockquote>
                                    <Link className={`btn text-center btn-${CONTENT.NAV_COLOR} w-50`} to={ROUTE.PUBLIC.REGISTER}>Learn More</Link>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </main>
            <Footer />
        </>
    );
};

export { Home as PublicHome };

