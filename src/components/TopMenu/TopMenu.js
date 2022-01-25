import React, {useContext} from "react";
import './TopMenu.css';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

function TopMenu() {
    const { isAuth, logOut, isAdmin } = useContext(AuthContext);

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
                    <NavLink to="/userprofilepage" activeClassName="active-link">
                        <li>
                            Profile
                        </li>
                    </NavLink>
                    }

                    {isAdmin &&
                    <NavLink to="/fileupload" activeClassName="active-link">
                        <li>
                            Upload File
                        </li>
                    </NavLink>
                    }

                    <NavLink to="/media" activeClassName="active-link">
                        <li>
                            Media
                        </li>
                    </NavLink>

                    {isAuth &&
                    <NavLink to="/" onClick={logOut}>
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