import { Link, NavLink, useNavigate } from "react-router-dom"
import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useState } from "react";

const Nav = () => {
    const activeLink = `text-gray-400 underline underline-offset-[12px]`;
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
        <header className="flex flex-col md:flex-row items-center px-4 pb-2 bg-slate-800 justify-between p-4">
            <h1 className="flex-grow text-4xl font-bold text-gray-100 hover:text-gray-200">My Exercise</h1>

            <nav className="flex gap-6 text-3xl items-center">
                {!currentUser && <NavLink to="/login" className={({ isActive }) => (isActive ? activeLink : normalLink)} ><p className="font-semibold text-gray-100 hover:text-gray-200">Login</p></NavLink>}
                {!currentUser && <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to="/register"><p className="font-semibold text-gray-100 hover:text-gray-200">Register</p></NavLink>}
                {currentUser && <div className="flex justify-start pl-6" onClick={toggleMenu}>
                    <img className="w-9 h-9 rounded-full" src={currentUser.photoURL} alt="user avatar" />
                </div>}
                {menuOpen && (
                    <div className="absolute md:top-15 max-md:right-10 lg:right-60 mt-2 bg-slate-800 text-white shadow-md p-3">
                        <Link onClick={logout} className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                            Logout
                        </Link>
                    </div>
                )}
            </nav>
        </header>
        // <header className="flex items-center px-4 pb-2 bg-slate-800">
        //     <h1 className="flex-1 text-4xl font-bold text-gray-100 hover:text-gray-200">My Exercise</h1>
        //     <nav className="flex gap-5 text-3xl items-center">
        //         <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to="/"><p className="font-semibold text-gray-100 hover:text-gray-200">Home</p></NavLink>
        //         {!currentUser &&<NavLink to="/login" className={({ isActive }) => (isActive ? activeLink : normalLink)} ><p className="font-semibold text-gray-100 hover:text-gray-200">Login</p></NavLink>}
        //         {!currentUser &&<NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to="/register"><p className="font-semibold text-gray-100 hover:text-gray-200">Register</p></NavLink>}
        //         {currentUser && <button onClick={logout} className="font-semibold text-gray-100 hover:text-gray-200">Logout</button>}
        //         {currentUser && <Link to={'/dashboard'} className="font-semibold text-gray-100 hover:text-gray-200">Dashboard</Link>}
        //     </nav>
        // </header>
    )
}

export default Nav