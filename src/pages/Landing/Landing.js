import Main from "./components/Main";
import ThemeProvider from "../../context/Theme";
import '../../App.css';

const Landing = () => {
    return (
        <div className="App">
            <ThemeProvider>
                <Main />
            </ThemeProvider>
        </div>
    );
}

export default Landing;
