import React from 'react';
import { NavLink } from 'react-router-dom'
import { clearStorage } from '../../App/service';

function Nav() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/product">Product</NavLink>
                </li>
                <li>
                    <NavLink to="/add">Add Product</NavLink>
                </li>
                <li>
                    <NavLink to="/update">Update Product</NavLink>
                </li>
                <li>
                    <NavLink to="/" onClick={()=>clearStorage()}>Logout</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav