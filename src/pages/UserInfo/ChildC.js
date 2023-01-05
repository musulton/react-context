import React from "react";

function ChildC({firstname, lastname}) {
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
