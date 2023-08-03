import { Content, MainContainer, Sidebar } from '../../components/Sidebar';
import func from "../../config/functions";

/**
 * 
 * 
 * 
 * 
 **/
const Request = () => {

    func.scroll();
    const { sidebarTheme, sidebarState, toggleSidebar, toggleTheme } = func.sidebar();

    return (
        <>
            <Sidebar target="Hospital" sidebarTheme={sidebarTheme} sidebarState={sidebarState} toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} />
            <MainContainer>
                <Content>
                    Hospital Request
                </Content>
            </MainContainer>
        </>
    );
};

export { Request as HospitalRequest };
