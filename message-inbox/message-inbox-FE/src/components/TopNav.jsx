import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TopNav.css';
import { useSocketContext } from '../context/websocket-provider';

// Notification Bell Icon
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

const TopNav = ({ user, logout }) => {
    const [notifications, setNotifications] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const socket = useSocketContext();
    useEffect(() => {
        if (socket) {
            socket.on('notification', (data) => {
                console.log('Notification received:', data);
                setNotifications((prevNotifications) => [...prevNotifications, data.message]);
            });

            return () => {
                socket.off('notification');
            };
        }
    }, [socket]);


    const handleBellClick = () => {
        setShowDropdown(!showDropdown);
    };

    return (
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
                            <div className="notification-container">
                                <button onClick={handleBellClick} className="nav-button">
                                    <BellIcon />
                                    {notifications.length > 0 && (
                                        <span className="notification-count">{notifications.length}</span>
                                    )}
                                </button>
                                {showDropdown && (
                                    <div className="notification-dropdown">
                                        {notifications.length > 0 ? (
                                            notifications.map((notification) => (
                                                <div key={notification.id} className="notification-item">
                                                    {notification.content}
                                                </div>
                                            ))
                                        ) : (
                                            <div>No notifications</div>
                                        )}
                                    </div>
                                )}
                            </div>
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
};

export default TopNav;


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