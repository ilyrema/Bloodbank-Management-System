import { useState, useEffect } from 'react';

const Sidebar = () => {
    const theme = localStorage.sidebarTheme || 'light';
    const [sidebarTheme, setSidebarTheme] = useState(theme);
    const state = localStorage.sidebarState || 'open';
    const [sidebarState, setSidebarState] = useState(state);

    useEffect(() => {
        if (theme !== sidebarTheme) {
            setSidebarTheme(theme);
        }
        if (state !== sidebarState) {
            setSidebarState(state);
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        localStorage.setItem('sidebarTheme', sidebarTheme);
        localStorage.setItem('sidebarState', sidebarState);
        document.body.className = sidebarTheme;
        // document.body.setAttribute('data-bs-theme', sidebarTheme);
    }, [sidebarTheme, sidebarState]);

    const toggleTheme = () => {
        setSidebarTheme(sidebarTheme === 'dark' ? 'light' : 'dark');
    };

    const toggleSidebar = () => {
        setSidebarState(sidebarState === 'open' ? 'close' : 'open');
    };

    return { sidebarTheme, sidebarState, toggleSidebar, toggleTheme };
};

export default Sidebar;
