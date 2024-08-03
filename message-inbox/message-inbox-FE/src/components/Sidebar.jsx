import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Adjust the path as needed

const Sidebar = () => (
    <div className="sidebar">
        <nav>
            <ul>
                <li><Link to="/send">Send Message</Link></li>
                <li><Link to="/inbox">Inbox</Link></li>
                <li><Link to="/sent">Sent Messages</Link></li>
            </ul>
        </nav>
    </div>
);

export default Sidebar;