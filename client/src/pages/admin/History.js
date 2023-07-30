import { Sidebar, MainContent } from "../../components/Sidebar";

/**
 * 
 * 
 * 
 * 
 **/
const History = () => {


    return (
        <>
            <Sidebar target="Admin" />
            <MainContent>
                Admin History
            </MainContent>
        </>
    );
};

export { History as AdminHistory };