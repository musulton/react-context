import {useContext} from "react";
import {DarkModeContext} from "../context/Theme";

const Button = ({ children, ...rest }) => {
    const { isDarkMode } = useContext(DarkModeContext);
    const style = {
        backgroundColor: isDarkMode ? "#333" : "#CCC",
        border: "1px solid",
        color: "inherit",
        padding: 10
    };
    return (
        <button style={style} {...rest}>
            {children}
        </button>
    );
}

export default Button;
