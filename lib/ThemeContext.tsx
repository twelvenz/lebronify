// Runbin
// This file creates a theme provider component using react context to manage and share the current nba team themes the app.
// It lets any component access or change the selected team, so the ui updates with matching theme colors.

'use client'
import { createContext, useState, ReactNode } from 'react';
import { nbaColorThemes } from '@/lib/themes';

// In these interfaces, we define the structure of a team's theme color and the data that the context will provide.
interface TeamTheme {
    primary: string,
    secondary: string,
    tertiary: string,
}

interface ThemeContextType {
    currentTeam: string;
    currentTheme: TeamTheme;
    changeTeam: (team: string) => void;
    availableTeams: string[];
}

// We want to define a default value for the context.
const defaultContextValue: ThemeContextType = {
    currentTeam: "Los-Angeles-Lakers",
    currentTheme: nbaColorThemes["Los-Angeles-Lakers"],
    changeTeam: () => {},
    availableTeams: Object.keys(nbaColorThemes)
};

// Create the theme context object w/ the default value
export const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

// We define the expected props for the ThemeProvider component.
interface ThemeProviderProps {
    children: ReactNode;
    initialTeam?: string;
}

// The ThemeProvider component wraps the app and provides the theme context down to the children.
export function ThemeProvider({
    children,
    initialTeam = "Los-Angeles-Lakers"
}: ThemeProviderProps) {
    const [currentTeam, setCurrentTeam] = useState(initialTeam);
    const currentTheme = nbaColorThemes[currentTeam as keyof typeof nbaColorThemes];

    const changeTeam = (team: string) => {
        if (nbaColorThemes[team as keyof typeof nbaColorThemes]) {
            setCurrentTeam(team);
        }
    }

    const value = {
        currentTeam,
        currentTheme,
        changeTeam,
        availableTeams: Object.keys(nbaColorThemes) 
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
