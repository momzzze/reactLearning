import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../../services/AuthService'
import { AuthContext } from '../../../contexts/authContext';

const Logout = () => {
    const navigate = useNavigate();
    const { user, userLogout } = useContext(AuthContext);
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                userLogout();
                navigate('/');
            }).catch(() => {
                navigate('/');
            })
    }, [])

    return null;
}

export default Logout