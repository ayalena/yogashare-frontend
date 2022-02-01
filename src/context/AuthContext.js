import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";


////create and export context
export const AuthContext = React.createContext({});

//custom provider component
function AuthContextProvider ({ children }) {

    //useState for isAuthenticated
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });

    const history = useHistory();

    const [isAdmin, setIsAdmin] = useState(false)

    //mounting
    useEffect(() => {
        // check if there is a token is local storage
        const token = localStorage.getItem('token');
        // Yes: get user data and put it in state
        if (token) {
            const decoded = jwt_decode(token);
            fetchUserDetails(decoded.sub, token);
            // async function fetchUserDetails() {
            //     try {
            //         const result = await axios(`http://localhost:8081/api/users/${decoded.sub}`,
            //             {
            //                 headers: {
            //                     "Content-Type": "application/json",
            //                     Authorization: `Bearer ${token}`
            //                 }
            //             })
            //         // get user authentication
            //         const userRole = (result.data.roles[0].name)
            //         // if user has admin authentications, setIsAdmin to true
            //         if (userRole === "ROLE_ADMIN") {
            //             setIsAdmin(true)
            //         }
            //         toggleIsAuth({
            //             ...isAuth,
            //             isAuth: true,
            //             user: {
            //                 id: result.data.id,
            //                 email: result.data.email,
            //                 username: result.data.username,
            //                 role: result.data.roles[0].name,
            //             },
            //             status: "done"
            //         })
            //     } catch (e) {
            //         localStorage.clear()
            //         console.error(e)
            //     }
            // }
            // if (token) {
            //     fetchUserDetails()
            // }
        }
        //If not:
        else {
            toggleIsAuth({
                ...isAuth,
                isAuth: false,
                user: null,
                status: 'done',
            });
        }

    }, []);

    async function fetchUserDetails(redirectUrl) {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwt_decode(token);
            try {
                const result = await axios(`http://localhost:8081/api/users/${decoded.sub}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    })
                // get user authentication
                const userRole = (result.data.roles[0].name)
                // if user has admin authentications, setIsAdmin to true
                if (userRole === "ROLE_ADMIN") {
                    setIsAdmin(true)
                }
                toggleIsAuth({
                    ...isAuth,
                    isAuth: true,
                    user: {
                        id: result.data.id,
                        email: result.data.email,
                        username: result.data.username,
                        role: result.data.roles[0].name,
                    },
                    status: "done"
                });
                if (redirectUrl) {
                    history.push(redirectUrl);
                }
            } catch (e) {
                localStorage.clear()
                console.error(e)
                toggleIsAuth({
                    isAuth: false,
                    user: null,
                    status: 'done',
                });
            }
        }
    }
    // if (token) {
    //     fetchUserDetails()
    // }

    async function logIn(jwt) {
        localStorage.setItem("token", jwt)
        const decoded = jwt_decode(jwt)
        //dit hoeft in principe niet per se: gebruikersdata wordt al opgehaald uit backend bij inloggen
        // try {
        //     const result = await axios(`http://localhost:8081/api/users/${decoded.sub}`,
        //         {
        //             headers: {
        //                 "Content-Type": "application/json",
        //                 Authorization: `Bearer ${token}`
        //             }
        //         })
        //     console.log(result.data)
        //     toggleIsAuth({
        //         ...isAuth,
        //         isAuth: true,
        //         user: {
        //             id: result.data.id,
        //             email: result.data.email,
        //             username: result.data.username,
        //         },
        //         status: "done"
        //     })
        //     if (result.data.roles[0].name === "ROLE_ADMIN") {
        //         setIsAdmin(true)
        //     }
        // } catch (e) {
        //     console.error(e)
        // }
        // history.push("/userprofilepage")
        fetchUserDetails('/userprofilepage');
        console.log("User logged in")

    }

    function logOut() {
        //take token out of storage
        localStorage.clear();

        //take data out of state
        toggleIsAuth({
            ...isAuth,
            isAuth: false,
            user: null,
            status: "done"
        });
        setIsAdmin(false)
        console.log("User logged out")
        history.push("/")
    }

    const data = {
        ...isAuth,
        logIn,
        logOut,
        isAdmin,
    }

    //wrap it in a provider, value is the data object
    return (
        <AuthContext.Provider value={data}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;

