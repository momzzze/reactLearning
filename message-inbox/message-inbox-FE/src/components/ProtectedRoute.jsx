import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/UserContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { user } = useAuth();

    return user ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;