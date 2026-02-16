

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


// creating store
export const AuthContext = createContext(null);


// provider
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError]     = useState(null);

    // hook
    const navigate = useNavigate();


    // login api call
    const loginUser = (credentials) => {
        setLoading(true);
        setError(null);
        axios.post("https://antd-store-backend.vercel.app/user/login", credentials, {
                headers: {
                    "x-student-id": "masif",
                },
            })
            .then((response) => {
                console.log(response);
                // save token in local storage
                localStorage.setItem("token", response.data.token);
                setUser(response.data.user);
            })
            .catch(() => {
                setError("Login failed. Email or password is incorrect.");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    // logout
    const logout = () => {

        localStorage.removeItem("token");
        setUser(null);
    }


    // check login state and redirects
    useEffect( () => {
        
        let token = localStorage.getItem("token");
        console.log(token)
        if(token !== null && user !== null) {
            return navigate("/dashboard");

        } else {
            return navigate("/");
        }

    }, [user]);


    return (
        <AuthContext.Provider value={{ loginUser: loginUser, logout:logout, user: user, loading: loading, error: error}}  >
            {children}
        </AuthContext.Provider>
    )

}