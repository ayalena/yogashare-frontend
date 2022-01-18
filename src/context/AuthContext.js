import React from "react";

//create and export context
export const AuthContext = React.createContext({});

//custom provider component
function AuthContextProvider ({ children }) {


    const data = {

    }
    //wrap it in a provider, value is the data object
    return (
        <AuthContext.Provider value={data}>
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;