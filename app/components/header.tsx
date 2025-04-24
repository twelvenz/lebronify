'use client';
import Nav from "@/app/components/nav";
import { useTheme } from '@/lib/useTheme'
import { ThemeSwitcher } from "@/app/components/ThemeSwitcher";

export default function Header() {
    const { currentTheme } = useTheme();

    return (
        <header
            className="flex justify-between items-center h-20 mb-8"
            style={{ backgroundColor: currentTheme.secondary}}
        >
            <h1 className="p-2 m-2 text-2xl font-bold">Lebronify</h1>
            <ThemeSwitcher />
            <Nav/>
        </header>
    )
}