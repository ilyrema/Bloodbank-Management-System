import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';

/**
 * 
 * 
 * 
 * 
 **/
const Register = () => {


    return (
        <>
            <NavigationBar />
            Registration
            <Footer />
        </>
    );
};

/**
 * 
 * 
 * 
 * 
 **/
const RegisterDonor = () => {


    return (
        <>
            <NavigationBar />
            RegisterDonor
            <Footer />
        </>
    );
};

/**
 * 
 * 
 * 
 * 
 **/
const RegisterHospital = () => {


    return (
        <>
            <NavigationBar />
            RegisterHospital
            <Footer />
        </>
    );
};

export { Register as PublicRegister, RegisterDonor as PublicRegisterDonor, RegisterHospital as PublicRegisterHospital };