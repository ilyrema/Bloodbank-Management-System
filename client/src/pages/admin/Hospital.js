import { Content, MainContainer, Sidebar } from '../../components/Sidebar';
import func from "../../config/functions";
/**
 * 
 * 
 * 
 * 
 **/
const Hospital = () => {

    func.scroll();
    const { sidebarTheme, sidebarState, toggleSidebar, toggleTheme } = func.sidebar();

    return (
        <>
            <Sidebar target="Admin" sidebarTheme={sidebarTheme} sidebarState={sidebarState} toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} />
            <MainContainer>
                <Content>
                    Admin Hospital
                </Content>
            </MainContainer>
        </>
    );
};

export { Hospital as AdminHospital };
