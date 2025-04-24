// Runbin
// This file is responsible for creating a custom useTheme hook using the useContext hook from react
// along with theme context that is imported.

import { useContext } from "react";
import { ThemeContext } from "@/lib/ThemeContext";

export function useTheme() {
    return useContext(ThemeContext);
}