import { Content, MainContainer, Sidebar } from '../../components/Sidebar';
import func from "../../config/functions";
/**
 * 
 * 
 * 
 * 
 **/
const Donor = () => {

    func.scroll();
    const { sidebarTheme, sidebarState, toggleSidebar, toggleTheme } = func.sidebar();

    return (
        <>
            <Sidebar target="Admin" sidebarTheme={sidebarTheme} sidebarState={sidebarState} toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} />
            <MainContainer>
                <Content>
                    Admin Donor
                </Content>
            </MainContainer>
        </>
    );
};

export { Donor as AdminDonor };
