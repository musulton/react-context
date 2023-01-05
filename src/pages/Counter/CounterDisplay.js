import React from "react";
import CounterOutput from "./components/CounterOutput";
import CounterControl from "./components/CounterControl";

import {CounterContext, CounterProvider} from "../../context/Counter";

const CounterControlContext = () => {
    const {increment, decrement} = React.useContext(CounterContext);

    return (
        <>
            <CounterControl label="Increment" onClick={increment} />
            <CounterControl label="Decrement" onClick={decrement} />
        </>
    )
}

const CounterDisplay = () => {
    return (
        <CounterProvider>
            <CounterOutput />
            <CounterControlContext />
        </CounterProvider>
    )
}

export default CounterDisplay;
