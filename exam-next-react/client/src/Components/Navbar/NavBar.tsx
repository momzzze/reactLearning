import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import logo from "../../assets/logo.png";
import "./styles.css";

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      {/* Left Side - Logo */}
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Right Side - User Info & Logout */}
      {isAuthenticated && (
        <div className="nav-user">
          <span className="nav-text">Welcome,</span>{" "}
          <span className="nav-text-special">User</span>
          <button className="logout-button" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
