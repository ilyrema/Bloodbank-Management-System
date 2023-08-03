import { Content, MainContainer, Sidebar } from '../../components/Sidebar';
import func from "../../config/functions";
/**
 * 
 * 
 * 
 * 
 **/
const Settings = () => {

    func.scroll();
    const { sidebarTheme, sidebarState, toggleSidebar, toggleTheme } = func.sidebar();

    return (
        <>
            <Sidebar target="Admin" sidebarTheme={sidebarTheme} sidebarState={sidebarState} toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} />
            <MainContainer>
                <Content>
                    Admin Settings
                </Content>
            </MainContainer>
        </>
    );
};

export { Settings as AdminSettings };
