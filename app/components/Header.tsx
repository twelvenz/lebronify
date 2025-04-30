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
            className="flex justify-between items-center mb-6 h-20 fixed top-0 w-full"
            style={{ backgroundColor: currentTheme.secondary}}
        >
            {/* clicking on the Lebronify logo will return you to home*/}
            <Link href={`/`} className="p-2 m-2 text-2xl font-bold hover:scale-[1.025]">Lebronify</Link>
            <div className="flex items-center">
                <Nav />
                <ThemeSwitcher />
            </div>
        </header>
    )
}