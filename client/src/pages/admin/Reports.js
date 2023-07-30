import { Sidebar, MainContent } from "../../components/Sidebar";

/**
 * 
 * 
 * 
 * 
 **/
const Reports = () => {


    return (
        <>
            <Sidebar target="Admin" />
            <MainContent>
                Admin Reports
            </MainContent>
        </>
    );
};

export { Reports as AdminReports };