import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState } from "react";


export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token, email) => {},
    logout: () => {},
    email: '',
});

export default function AuthContextProvider({children}){
    const [authToken, setAuthToken] = useState();
    const [email, setEmail] = useState();
       
    function authenticate(token, email) { 
        console.log("authenticating inside the myauth-context.js")
        console.log("hvad er min email,", email)
        setAuthToken(token)
        setEmail(email)
        AsyncStorage.setItem("token", token)
        AsyncStorage.setItem("email", email)    
    }

    function logout() { 
        setAuthToken(null)
        setEmail(null)
        AsyncStorage.removeItem("token")
        AsyncStorage.removeItem("email")
    }

     const value = {
        token: authToken,
        email: email,
        // !! laver authToken om til true eller false
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
    