import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '../App/service';


const PrivetRoutes = () => {
    const token =getToken();
    return token ? <Outlet />:<Navigate to ="/"/>
}

export default PrivetRoutes