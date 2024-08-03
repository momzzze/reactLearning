// TopNav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TopNav.css'; // Adjust the path as needed

const BellIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="bell-icon"
    >
        <path d="M18 15a6 6 0 0 0 1.5-3.75V10a6 6 0 0 0-12 0v1.25A6 6 0 0 0 6 15m12 4a2 2 0 0 1-4 0H6a2 2 0 0 1-4 0H3" />
    </svg>
);

const LogoIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="logo-icon"
    >
        {/* Replace the following path with your logo's SVG path */}
        <path d="M12 2L2 22h20L12 2z" />
    </svg>
);

const TopNav = ({ user, logout }) => (
    <div className="top-nav-wrapper">
        <div className="top-nav">
            <div className="top-nav-left">
                <Link to="/">
                    <LogoIcon />
                </Link>
            </div>
            <div className="top-nav-right">
                {user ? (
                    <>
                        <Link to="/notifications" className="nav-link">
                            <BellIcon />
                        </Link>
                        <button onClick={logout} className="nav-button">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/register" className="nav-link">Register</Link>
                    </>
                )}
            </div>
        </div>
    </div>
);

export default TopNav;
