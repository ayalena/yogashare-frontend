import React from "react";
import './TopMenu.css';
import {NavLink} from "react-router-dom";

function TopMenu() {

    return (
        <>
            <div className="nav-container">
                <ul>
                    <NavLink to="/" exact activeClassName="active-link">
                        <li>
                            Home
                        </li>
                    </NavLink>
                    <NavLink to="/signup" activeClassName="active-link">
                        <li>
                            Register
                        </li>
                    </NavLink>
                    <NavLink to="/signin" activeClassName="active-link">
                        <li>
                            Login
                        </li>
                    </NavLink>
                </ul>
            </div>
        </>
    );
}

export default TopMenu;