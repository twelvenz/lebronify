// Runbin
// This file creates a theme provider component using react context to manage and share the current nba team themes the app.
// It lets any component access or change the selected team, so the ui updates with matching theme colors.

'use client'
import { createContext, useState, ReactNode } from 'react';
import { nbaColorThemes } from '@/lib/themes';

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

const defaultContextValue: ThemeContextType = {
    currentTeam: "Los-Angeles-Lakers",
    currentTheme: nbaColorThemes["Los-Angeles-Lakers"],
    changeTeam: () => {},
    availableTeams: Object.keys(nbaColorThemes)
};

export const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

interface ThemeProviderProps {
    children: ReactNode;
    initialTeam?: string;
}

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
