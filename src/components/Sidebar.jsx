import AppNav from "./AppNav"
import Logo from "./Logo"
import styles from "./Sidebar.module.css"
import SidebarFooter from "../components/SidebarFooter"
import { Outlet } from "react-router-dom"

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo/>
            <AppNav/>

            <Outlet/>

            <SidebarFooter />
            
        </div>
    )
}

export default Sidebar
