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
            <Sidebar target="Hospital" sidebarTheme={sidebarTheme} sidebarState={sidebarState} toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} />
            <MainContainer>
                <Content>

                    Hospital Settings
                </Content>
            </MainContainer>
        </>
    );
};

export { Settings as HospitalSettings };
