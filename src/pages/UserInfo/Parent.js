import React from "react";

import ChildA from "./ChildA";
import {UserContextProvider, UserDispatchContext} from "../../context/User";

const Form = () => {
    const {onSetFirstname, onSetLastname} = React.useContext(UserDispatchContext);

    return (
        <form>
            <input placeholder="first name" onChange={onSetFirstname} />
            <input placeholder="last name" onChange={onSetLastname} />
        </form>
    )
}

function Parent() {
    return (
        <UserContextProvider>
            <div>This is a Parent component</div>
            <br />
            <Form />
            <br />
            <ChildA />
        </UserContextProvider>
    );
}

export default Parent;
