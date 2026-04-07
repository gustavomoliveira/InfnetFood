import { createContext, useState } from "react";
import { usuario } from "../data/usuario";

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const [user, setUser] = useState(usuario);
    const [isAuth, setIsAuth] = useState(false);

    return (
        <UserContext.Provider value={{ user, setUser, isAuth, setIsAuth }}>
            {children}
        </UserContext.Provider>
    );
}