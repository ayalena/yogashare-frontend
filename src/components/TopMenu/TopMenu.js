import React, {useContext} from "react";
import './TopMenu.css';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

function TopMenu() {
    const { isAuth, logOut } = useContext(AuthContext);

    return (
        <>
            <div className="nav-container">
                <ul>
                    <NavLink to="/" exact activeClassName="active-link">
                        <li>
                            Home
                        </li>
                    </NavLink>

                    {!isAuth &&
                    <NavLink to="/signup" activeClassName="active-link">
                        <li>
                            Register
                        </li>
                    </NavLink>
                    }

                    {!isAuth &&
                    <NavLink to="/signin" activeClassName="active-link">
                        <li>
                            Login
                        </li>
                    </NavLink>
                    }

                    {isAuth &&
                    <NavLink to="/userprofile" activeClassName="active-link">
                        <li>
                            Profile
                        </li>
                    </NavLink>
                    }

                    {!isAuth &&
                    <NavLink to="/signin" activeClassName="active-link">
                        <li>
                            Media
                        </li>
                    </NavLink>
                    }
                    {isAuth &&
                    <NavLink to="/media" activeClassName="active-link">
                        <li>
                            Media
                        </li>
                    </NavLink>
                    }

                    {isAuth &&
                    <NavLink to="/" activeClassName="active-link" onClick={logOut}>
                        <li>
                            Log Out
                        </li>
                    </NavLink>
                    }

                </ul>
            </div>
        </>
    );
}

export default TopMenu;