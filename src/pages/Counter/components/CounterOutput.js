import React from "react";
import {CounterContext} from "../../../context/Counter";

const CounterOutput = () => {
    const {counter} = React.useContext(CounterContext);
    return (
        <h3>Current Counter: {counter}</h3>
    )
}

export default CounterOutput;
