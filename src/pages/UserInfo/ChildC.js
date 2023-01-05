import React from "react";
import {UserContext} from "../../context/User";

function ChildC() {
    const {firstname, lastname} = React.useContext(UserContext);
    return (
        <>
            This is ChildC component.
            <br />
            <h3> Data from Parent component is as follows:</h3>
            <h4>{firstname}</h4>
            <h4>{lastname}</h4>
        </>
    );
}

export default ChildC;
