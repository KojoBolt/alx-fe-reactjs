import { createContext, useContext, useState } from "react";

const AuthContext = createContext(); 
export function AuthProvider({children}) {
    const [isAuthenticated, setAuthenticated] = useState(false);

    const login = () => setIsAuthenticated(true);
    const logout = () => setAuthenticated(false)

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>

    );

}

export function useAuth() {
    return useContext(AuthContext);
}