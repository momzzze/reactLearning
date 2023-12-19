import { Link, NavLink, useNavigate } from "react-router-dom"
import useAuth from "../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { SearchIcon } from "lucide-react";
import { useState } from "react";



const AdminNav = () => {
    const activeLink = `text-white underline underline-offset-[18px]`;
    const normalLink = '';
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();
    const { currentUser } = useAuth();


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    const logout = () => {
        signOut(auth).then(() => {
            navigate('/')
        })
    }
    return (
        <>
            <header className="flex flex-col md:flex-row items-center px-4 pb-2 bg-slate-800 justify-between p-4">
                <h1 className="flex-grow text-4xl font-bold text-gray-100 hover:text-gray-200">My Exercise</h1>
                <div className="flex flex-grow w-[40%] items-center justify-between border border-gray-300 rounded-lg px-3 py-2 bg-white shadow-md">
                    <input type="text" placeholder="Search..." />
                    <span><SearchIcon className="w-4 h-4" /></span>
                </div>
                <nav className="flex-grow">
                    <div className="flex justify-start pl-6" onClick={toggleMenu}>
                        <img className="w-9 h-9 rounded-full" src={currentUser.photoURL} alt="user avatar" />
                    </div>
                    {menuOpen && (
                        <div className="absolute md:top-15 max-md:right-10 lg:right-60 mt-2 bg-slate-800 text-white shadow-md p-3">
                            <Link onClick={logout} className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                                Logout
                            </Link>
                        </div>
                    )}
                </nav>
            </header>
            <section className="flex z-[-10]">
                <div className="w-full p-4 bg-slate-400">
                    <ul className="flex gap-4 justify-center font-semibold text-3xl text-white">
                        <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to={'/dashboard'}> <p className={`hover:text-black`}>Dashboard</p></NavLink>
                        <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to={'/dashboard/add-product'}><p className={`hover:text-black`}>Add-Product</p></NavLink>
                        <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to={'/dashboard/all-products'}><p className={`hover:text-black`}>All-Products</p></NavLink>
                        <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to={'/dashboard/users'}><p className={`hover:text-black`}>Users</p></NavLink>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default AdminNav