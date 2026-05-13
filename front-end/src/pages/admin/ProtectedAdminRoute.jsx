import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedAdminRoute = ({ children }) => {
    const isLogged = localStorage.getItem('isAdmin');

    if (!isLogged) {
        return <Navigate to="/admin" replace />;
    }
    return children;
};

export default ProtectedAdminRoute;
