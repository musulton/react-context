import React from "react";

export const UserContext = React.createContext(null);
export const UserDispatchContext = React.createContext(null);

export const UserContextProvider = ({children}) => {
    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastname] = React.useState("");

    const onSetFirstname = (e) => setFirstname(e.target.value);
    const onSetLastname = (e) => setLastname(e.target.value);

    return (
        <UserContext.Provider value={{ firstname, lastname }}>
            <UserDispatchContext.Provider value={{ onSetLastname, onSetFirstname }}>
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    )
}
