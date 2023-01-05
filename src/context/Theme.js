import { useState, createContext, useMemo } from "react";

export const DarkModeContext = createContext({});

const ThemeProvider = ({children}) => {
    const [isDarkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode((v) => !v);
    const value = useMemo(() => ({ isDarkMode, toggleDarkMode }), [isDarkMode]);

    return (
        <DarkModeContext.Provider value={value}>
            {children}
        </DarkModeContext.Provider>
    );
}

export default ThemeProvider;
