import {memo, useContext} from "react";
import Header from "./Header";
import {DarkModeContext} from "../../../context/Theme";

const Main = memo(function Main() {
    const { isDarkMode } = useContext(DarkModeContext);
    const style = {
        color: isDarkMode ? "white" : "black",
        backgroundColor: isDarkMode ? "black" : "white",
        margin: "-8px",
        minHeight: "100vh",
        boxSizing: "border-box",
    };
    return (
        <main style={style}>
            <Header />
            <h1>Welcome to enigma course!</h1>
        </main>
    );
});

export default Main;
