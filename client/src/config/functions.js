import ROUTE from "./routes";
import SectionScroll from "../functions/SectionScroll";
import Sidebar from "../functions/Sidebar";


const func = {
    logout: () => { window.location = ROUTE.PUBLIC.LOGOUT },
    scroll: SectionScroll,
    sidebar: Sidebar,
}

export default func;