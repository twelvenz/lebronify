import Link from "next/link";

export default function Nav() {
    const linkStyle = "p-1 font-bold text-lg hover:underline hover:bg-gray-400";

    return (
        <nav className="p-2">
            <Link href={`/`} className={linkStyle}>Home</Link>
        </nav>
    )
}