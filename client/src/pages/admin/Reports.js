import { Content, MainContainer, Sidebar } from '../../components/Sidebar';
import func from "../../config/functions";
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
            <Sidebar target="Admin" sidebarTheme={sidebarTheme} sidebarState={sidebarState} toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} />
            <MainContainer>
                <Content>
                    Admin Reports
                </Content>
            </MainContainer>
        </>
    );
};

export { Reports as AdminReports };
