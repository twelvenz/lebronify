// Elven's component

'use client';
import Nav from "@/app/components/Nav";
import { useTheme } from '@/lib/useTheme'
import {ThemeSwitcher} from "@/app/components/ThemeSwitcher";
import Link from "next/link";

export default function Header() {
    const { currentTheme } = useTheme();

    return (
        <header
            className="flex justify-between items-center h-20 mb-6"
            style={{ backgroundColor: currentTheme.secondary}}
        >
            <Link href={`/`} className="p-2 m-2 text-2xl font-bold hover:scale-[1.025]">Lebronify</Link>
            <div className="flex items-center">
                <Nav />
                <ThemeSwitcher />
            </div>
        </header>
    )
}