
import  useAuth  from '../custom-hooks/useAuth'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useAuth()
    return currentUser ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute