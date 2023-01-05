import React from "react";
import CounterOutput from "./components/CounterOutput";
import CounterControl from "./components/CounterControl";

const CounterDisplay = () => {
    const [counter, setCounter] = React.useState(0);

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);

    return (
        <>
            <CounterOutput value={counter} />
            <CounterControl label="Increment" onClick={increment} />
            <CounterControl label="Decrement" onClick={decrement} />
        </>
    )
}

export default CounterDisplay;
