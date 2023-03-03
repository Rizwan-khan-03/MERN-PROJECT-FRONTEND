import React from 'react';
import { Route, Routes, NavLink } from "react-router-dom";
import Layout from '../component/Layout/Layout';
import Nav from '../component/Layout/Nav';
import Login from '../component/Login';
import PrivetRoutes from './PrivetRoutes';
import { routepath } from './RouteList';

function Router() {
    return (
        <div>
            <Routes>
                <Route path='/'>
                    <Route index element={<Login />} />
                </Route>
                <Route element={<PrivetRoutes />}>
                    <Route path='/*'>
                        <Route index path='*' element={<Layout />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

export default Router