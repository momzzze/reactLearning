import { Link, NavLink, useNavigate } from "react-router-dom"
import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

const Nav = () => {
    const activeLink = `text-gray-400 underline underline-offset-[12px]`;
    const normalLink = '';
    const navigate = useNavigate();
    const { currentUser } = useAuth();

    const logout = () => {
        signOut(auth).then(() => {
            navigate('/')
        })
    }
    return (
        <header className="flex items-center px-4 pb-2 bg-slate-800">
            <h1 className="flex-1 text-4xl font-bold text-gray-100 hover:text-gray-200">My Exercise</h1>
            <nav className="flex gap-5 text-3xl items-center">
                <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to="/"><p className="font-semibold text-gray-100 hover:text-gray-200">Home</p></NavLink>
                {!currentUser &&<NavLink to="/login" className={({ isActive }) => (isActive ? activeLink : normalLink)} ><p className="font-semibold text-gray-100 hover:text-gray-200">Login</p></NavLink>}
                {!currentUser &&<NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to="/register"><p className="font-semibold text-gray-100 hover:text-gray-200">Register</p></NavLink>}
                {currentUser && <button onClick={logout} className="font-semibold text-gray-100 hover:text-gray-200">Logout</button>}
            </nav>
        </header>
    )
}

export default Nav