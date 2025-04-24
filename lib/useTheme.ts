// useTheme Hook - Runbin
import { useContext } from "react";
import { ThemeContext } from "@/lib/ThemeContext";

export function useTheme() {
    return useContext(ThemeContext);
}