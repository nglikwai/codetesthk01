import React, { useContext, useState } from 'react'
import { lightTheme, darkTheme } from '../Theme'

interface AppContextInterface { }
const ThemeContext = React.createContext<AppContextInterface | null>(null)
const ThemeUpdateContext = React.createContext<AppContextInterface | null>(null)

export const useTheme = () => useContext(ThemeContext)
export const useUpdateTheme = () => useContext(ThemeUpdateContext)

type Props = {
    children: React.ReactNode
}

const ThemeProvider = ({ children }: Props) => {


    const [darkMode, setDarkTheme] = useState(false)

    const toggleDarkTheme = () => setDarkTheme(!darkMode)
    return (
        <ThemeContext.Provider value={darkMode ? darkTheme : lightTheme}>
            <ThemeUpdateContext.Provider value={toggleDarkTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider