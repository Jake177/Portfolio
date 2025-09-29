import { createContext,useContext,useEffect,useState } from "react"

const ThemeContext = createContext();

/*
ThemeProvider component to manage dark mode state and provide toggle functionality
*/
export const ThemeProvider = ({ children }) => {
    const [darkMode,setDarkMode] = useState(() => JSON.parse(localStorage.getItem('darkMode')) || true);

    useEffect(() => {
        const root = window.document.documentElement;

        darkMode ? root.classList.add('dark') : root.classList.remove('dark');
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    },[darkMode])

    const toggleDarkMode = () =>  setDarkMode((prev) => !prev);

    return <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
    </ThemeContext.Provider>
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}