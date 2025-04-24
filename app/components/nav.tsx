import Link from "next/link";

export default function Nav() {
    const linkStyle = "p-1 m-2 text-xl hover:underline hover:bg-gray-400";

    return (
        <nav className="p-2 m-4">
            <Link href={`/`} className={linkStyle}>Home</Link>
        </nav>
    )
}