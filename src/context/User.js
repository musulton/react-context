import React from "react";
import UserReducer from "../reducers/UserReducer";

export const StateContext = React.createContext(null);
export const DispatchContext = React.createContext(null);

const initialState = {
    firstname: "",
    lastname: ""
}

export const UserContextProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(UserReducer, initialState);
    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}
