import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
    
    const [authUser, setAuthUser] = useState(JSON.parse(sessionStorage.getItem("SecureAuth_v2_srr8i9rto34zx_AuthUser_Mechanics")) || null);

    return (
        <AuthContext.Provider value={{authUser, setAuthUser}}>
            {children}
        </AuthContext.Provider>
    )
}