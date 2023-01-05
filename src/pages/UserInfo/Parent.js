import React from "react";

import ChildA from "./ChildA";
import {UserContextProvider, DispatchContext} from "../../context/User";
import {onSetFirstname, onSetLastname} from "../../reducers/UserReducer";

const Form = () => {
    const dispatch = React.useContext(DispatchContext);

    return (
        <form>
            <input placeholder="first name" onChange={(e) => dispatch(onSetFirstname(e))} />
            <input placeholder="last name" onChange={(e) => dispatch(onSetLastname(e))} />
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
