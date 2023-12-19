import { Outlet } from "react-router-dom"
import Nav from "../Header/Nav"
import Footer from "../Footer/Footer"

import AdminNav from "../../admin/AdminNav"
import { useLocation } from "react-router-dom"



const Layout = () => {

    const location=useLocation();

    return (
        <>
            {
                location.pathname.startsWith("/dashboard") ? <AdminNav /> : <Nav />
            }

            {/* <Nav /> */}
            <main className="flex justify-center items-center h-screen">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout