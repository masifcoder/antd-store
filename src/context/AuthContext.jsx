

import { createContext, useState } from "react";


// creating store
export const AuthContext = createContext(null);


// provider
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isLogin, setIsLogin]  = useState(true);


    return(
        <AuthContext.Provider value={ { isLogin: isLogin, setIsLogin: setIsLogin} }  >
            {children}
        </AuthContext.Provider>
    )

}