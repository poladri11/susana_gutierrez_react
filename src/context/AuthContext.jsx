"use client";
import { useEffect, useState, useContext, createContext } from "react"
import { usePathname, useRouter } from "next/navigation";

import { PROTECTED_ROUTES, PROTECTED_ROUTES_LOGGED } from "@/app/constants/constants";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState();

    const path = usePathname();
    const router = useRouter();

    const isProtected = () => {
        return PROTECTED_ROUTES.filter((route) => route === path)
    }

    const isProtectedWhenLogged = () => {
        return PROTECTED_ROUTES_LOGGED.filter((route) => route === path)
    }

    useEffect(() => {
        const jwt = localStorage.getItem("JWT");
        const pathProtected = isProtected();
        const pathProtectedWhenLogged = isProtectedWhenLogged();

        if(!jwt) {
            setIsAuth(false);
            console.log(path);
            console.log(PROTECTED_ROUTES);
            if(pathProtected.length != 0) router.push("/");

        } else {
            setIsAuth(jwt);
            if(pathProtectedWhenLogged != 0) router.push("/");
        }
    }, [path]);

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}