import React from "react";

import ChildB from "./ChildB";

function ChildA({firstname, lastname}) {
    return (
        <>
            This is ChildA Component.
            <br />
            <ChildB firstname={firstname} lastname={lastname} />
        </>
    );
}

export default ChildA
