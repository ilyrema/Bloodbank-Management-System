import { useEffect } from 'react';


const SectionScroll = () => {
    useEffect(() => {
        const section = document.getElementById(window.location.hash.substring(1));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
};

export default SectionScroll;