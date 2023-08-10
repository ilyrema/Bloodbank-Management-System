import { Alert, Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

import { Content, MainContainer, Sidebar } from '../../components/Sidebar';
import func from "../../config/functions";
import SearchBar from '../../components/SearchBar';
import SidebarNav from '../../components/SidebarNav';

/**
 * 
 * 
 * 
 * 
 **/
const History = () => {

    func.scroll();
    const { sidebarTheme, sidebarState, toggleSidebar, toggleTheme } = func.sidebar();

    return (
        <>
            <Sidebar target="Hospital" sidebarTheme={sidebarTheme} sidebarState={sidebarState} toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} />
            <SidebarNav target="Hospital" sidebarTheme={sidebarTheme} toggleTheme={toggleTheme} />
            <MainContainer>
                <SidebarNav target="Hospital" sidebarTheme={sidebarTheme} toggleTheme={toggleTheme} />
                <Content>
                    <Row className="mb-3">
                        <Col sm={12} md={9} lg={9}>
                            <SearchBar target="Hospital" />
                        </Col>
                        <Col sm={12} md={3} lg={3}>
                            <Button variant="danger" type="button" size="lg" className="text-truncate w-100">Make Request</Button>
                        </Col>
                    </Row>
                    Hospital History
                </Content>
            </MainContainer>
        </>
    );
};

export { History as HospitalHistory };
