import React from "react";

import ChildA from "./ChildA";

function Parent() {
    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const onSetFirstName = (e) => {
        setFirstname(e.target.value)
    }

    const onSetLastName = (e) => {
        setLastname(e.target.value)
    }

    return (
        <>
            <div>This is a Parent component</div>
            <br />

            <form>
                <input placeholder="first name" onChange={onSetFirstName} />
                <input placeholder="last name" onChange={onSetLastName} />
            </form>

            <br />
            <ChildA firstname={firstname} lastname={lastname} />
        </>
    );
}

export default Parent;
