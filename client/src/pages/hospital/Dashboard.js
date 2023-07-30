import { Sidebar, MainContent } from "../../components/Sidebar";

/**
 * 
 * 
 * 
 * 
 **/
const Dashboard = () => {


    return (
        <>
            <Sidebar target="Hospital" />
            <MainContent>
                Hospital Dashboard
            </MainContent>
        </>
    );
};

export { Dashboard as HospitalDashboard };