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
            <Sidebar target="Admin" />
            <MainContent>
                Admin Settings
            </MainContent>
        </>
    );
};

export { Settings as AdminSettings };