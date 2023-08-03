import { MainContainer, Content, Sidebar } from '../../components/Sidebar';
import '../../assets/css/Hospital.css';
import func from "../../config/functions";
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
            <MainContainer>
                <Content>
                    Hospital History
                </Content>
            </MainContainer>
        </>
    );
};

export { History as HospitalHistory };