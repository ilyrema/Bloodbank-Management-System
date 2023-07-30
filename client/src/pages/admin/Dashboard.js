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
            <Sidebar target="Admin" />
            <MainContent>
                Admin Dashboard
            </MainContent>
        </>
    );
};

export { Dashboard as AdminDashboard };