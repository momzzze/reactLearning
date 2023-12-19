import Layout from '../components/Layout/Layout.jsx'
import {
    Home,
    Dashboard,
    Login,
    Register,
    ForgotPassword
} from '../pages/index.js'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute.jsx'


const Routers = () => {
    return <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
            <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
    </Routes>
}

export default Routers