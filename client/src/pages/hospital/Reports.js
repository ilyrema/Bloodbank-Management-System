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
            <Sidebar target="Hospital" />
            <MainContent>
                Hospital Reports
            </MainContent>
        </>
    );
};

export { Reports as HospitalReports };