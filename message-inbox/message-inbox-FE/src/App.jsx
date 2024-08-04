import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import SendMessage from './components/SendMessage';
import Inbox from './components/Inbox';
import SentMessages from './components/SentMessages';
import Login from './components/Login';
import Register from './components/Register';
import MessageDetails from './components/MessageDetails';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import { useAuth } from './context/UserContext';

const App = () => {
  const { user, logout } = useAuth();


  return (
    <div className="App">
      <TopNav user={user} logout={logout} />
      <div className="layout">
        <Sidebar />
        <div className="main-content">
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route path="/send" element={<ProtectedRoute component={SendMessage} />} />
            <Route path="/inbox" element={<ProtectedRoute component={Inbox} />} />
            <Route path="/sent" element={<ProtectedRoute component={SentMessages} />} />
            <Route path="/message/:messageId" element={<ProtectedRoute component={MessageDetails} />} />

            {/* Redirect for root path */}
            <Route path="/" element={user ? <Navigate to="/inbox" /> : <Navigate to="/login" />} />

            {/* Catch-all route */}
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
