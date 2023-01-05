import {useContext} from "react";
import Button from "./Button";
import {DarkModeContext} from "../context/Theme";

const ToggleButton = () => {
    const { toggleDarkMode } = useContext(DarkModeContext);

    return <Button onClick={toggleDarkMode}>Toggle mode</Button>;
}

export default ToggleButton;
