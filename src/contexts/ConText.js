import { createContext, useState} from "react";


export const MyContext = createContext({
    username: null,
    isLogged: false,
    setIsLogged: () => { },
    setUsername: () => { },
});

export const MyContextProvider = ({ children }) => {
    const [username, setUsername] = useState(null);
    const [isLogged, setIsLogged] = useState(false);
    return (
        <MyContext.Provider value={{
            username,
            setUsername,
            isLogged,
            setIsLogged
        }}>
            {children}
        </MyContext.Provider>
    )
}