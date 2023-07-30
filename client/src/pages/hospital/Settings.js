import { Sidebar, MainContent } from "../../components/Sidebar";

/**
 * 
 * 
 * 
 * 
 **/
const Settings = () => {

    return (
        <>
            <Sidebar target="Hospital" />
            <MainContent>
                Hospital Settings
            </MainContent>
        </>
    );
};

export { Settings as HospitalSettings };