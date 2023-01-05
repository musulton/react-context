import React from "react";
import CounterOutput from "./components/CounterOutput";
import CounterControl from "./components/CounterControl";

import {CounterContext, CounterProvider} from "../../context/Counter";

const CounterControlContext = () => {
    return (
        <CounterContext.Consumer>
            {(value) => (
                <>
                    <CounterControl label="Increment" onClick={value.increment} />
                    <CounterControl label="Decrement" onClick={value.decrement} />
                </>
            )}
        </CounterContext.Consumer>
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
