import { Link, NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';


export const Header = () => {

    const setNavStyle = ({ isActive }) => {
        return isActive ? styles['active-link'] : undefined
    }

    return (
        <nav className="header">
            <ul >
                <li><NavLink className={setNavStyle} to="/">Home</NavLink></li>
                <li><NavLink className={setNavStyle} to="/about">About</NavLink></li>
                <li><NavLink className={setNavStyle} to="/pricing">Pricing</NavLink></li>
                <li><NavLink className={setNavStyle} to="/contacts">Contacts</NavLink></li>
                <li><NavLink className={setNavStyle} to="/starships">Starships</NavLink></li>
                <li>
                    <NavLink
                        to="/starships/2"
                        // style={({isActive}) => {
                        //     return isActive
                        //         ? { backgroundColor: 'lightblue' }
                        //         :undefined
                        // }}
                        className={setNavStyle}
                    >
                        Starships
                    </NavLink>
                </li>

                <li><NavLink className={setNavStyle} to="/millennium-falcon">Millennium Falcon</NavLink></li>
            </ul>
        </nav>
    );
}