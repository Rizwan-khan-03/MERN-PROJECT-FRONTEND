import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { routepath } from '../../Router/RouteList';
import Nav from './Nav'

function Layout() {
    return (
        <div>
            <Nav />
            <Routes>
                {routepath.map((i, index) => {

                    return (
                        <Route
                            key={`routes_${index}`}
                            path={i.path}

                            element={<i.Element />}
                        />
                    );

                })}
            </Routes>


        </div>
    )
}

export default Layout