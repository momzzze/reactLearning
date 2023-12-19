import { Outlet } from "react-router-dom"
import Nav from "../Header/Nav"
import Footer from "../Footer/Footer"

const Layout = () => {
    return (
        <>
            <Nav />
            <main className="flex justify-center items-center h-screen">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout