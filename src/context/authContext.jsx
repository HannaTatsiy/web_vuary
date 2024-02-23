import {createContext, useState, useContext,} from "react";
import api from "../api/axios.js";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState(null);
    const [token, setToken] = useState(null);

    const getUser = async (token) => {
        await api.get("user", {headers: {"Authorization": `Bearer ${token}`}})
            .then((response) => {
                    if (response.status === 200) {
                        setUser({
                            first_name: response.data.answer.first_name,
                            last_name: response.data.answer.last_name,
                            role: response.data.answer.role,
                            type_of_worker: response.data.answer.type_of_worker
                        });
                    }
                }
            );
    }

    const logout = async () => {
        await api.get("logout", {headers: {"Authorization": `Bearer ${token}`}});

        setUser(null);
        setErrors(null);
        setToken(null);
    }

    return <AuthContext.Provider
        value={{user, getUser, logout, errors, setToken}}>
        {children}
    </AuthContext.Provider>
}

export default function useAuthContext() {
    return useContext(AuthContext);
}