import Nav from "@/app/components/nav";

export default function Header() {
    return (
        <header className="flex justify-between items-center h-20 bg-white mb-8">
            <h1 className="p-1 m-2 text-2xl font-bold">Lebronify</h1>
            <Nav/>
        </header>
    )
}