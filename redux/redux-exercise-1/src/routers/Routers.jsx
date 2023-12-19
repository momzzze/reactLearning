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
import AddProducts from '../admin/AddProducts.jsx'
import AdminNav from '../admin/AdminNav.jsx'
import AllProducts from '../admin/AllProducts.jsx'
import Users from '../admin/Users.jsx'


const Routers = () => {
    return <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path='/*' element={<ProtectedRoute />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="dashboard/add-product" element={<AddProducts />} />
                <Route path="dashboard/all-products" element={<AllProducts />} />
                <Route path="dashboard/users" element={<Users />} />
            </Route>

            {/* <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            /> */}
            <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
    </Routes>
}

export default Routers