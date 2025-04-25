// basic Nav function.
import Link from "next/link";

export default function Nav() {
    const linkStyle = "p-1 font-bold text-lg hover:scale-[1.03]";

    return (
        <nav className="p-2">
            <Link href={`/`} className={linkStyle}>Home</Link>
        </nav>
    )
}