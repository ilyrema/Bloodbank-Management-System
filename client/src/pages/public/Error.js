import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';

/**
 * 
 * 
 * 
 * 
 **/
const Unauthorized = () => {

    return (
        <>
            <NavigationBar />
            Unauthorized
            <Footer />
        </>
    );
}

const Forbidden = () => {

    return (
        <>
            <NavigationBar />
            Forbidden
            <Footer />
        </>
    );
}

const NotFound = () => {

    return (
        <>
            <NavigationBar />
            NotFound
            <Footer />
        </>
    );
}
