import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState } from "react";


export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token, foundEmail) => {},
    logout: () => {},
    userEmail: '',
});

export default function AuthContextProvider({children}){
    const [authToken, setAuthToken] = useState();
    const [userEmail, setUserEmail] = useState();
       
    async function authenticate(token, foundEmail) { 
        await setUserEmail(foundEmail)
        await AsyncStorage.setItem("email", foundEmail)
        await setAuthToken(token)
        await AsyncStorage.setItem("token", token)
    }

    async function logout() { 
        setAuthToken(null)
        setUserEmail(null)
        await AsyncStorage.removeItem("token")
        await AsyncStorage.removeItem("email")
    }

     const value = {
        token: authToken,
        userEmail: userEmail,
        // !! laver authToken om til true eller false
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
    