import React from "react";

import ChildC from "./ChildC";

function ChildB({firstname, lastname}) {
    return (
        <>
            This is ChildB Component.
            <br />
            <ChildC firstname={firstname} lastname={lastname}  />
        </>
    );
}

export default ChildB;
