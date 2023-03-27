import { createContext } from "react";

export const UserContext = createContext()

const UserContextProvider = (props)=>{
    const username = localStorage.getItem('username')

    return (
        <UserContext.Provider value={{username}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider