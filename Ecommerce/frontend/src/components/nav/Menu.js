import React from 'react';
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (

        <ul className="nav d-flex justify-content-between shadow-sm mb-2 sticky-top bg-light">
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink className="nav-link" to="/login">
                    Login
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink className="nav-link" to="/register">
                    Register
                </NavLink>
            </li>
        </ul>

    );
};
export default Menu;