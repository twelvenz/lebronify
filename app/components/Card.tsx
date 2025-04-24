import { PropTypes } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/lib/useTheme"

export default function Card({ song }: { song: PropTypes }) {
    const { currentTheme } = useTheme();
    return (
        <>
            <Link href={`/${song.title}`} className="block w-full px-6 py-1 my-2 hover:scale-[1.03] hover:bg-gray-800"
                  style={{backgroundColor: currentTheme.tertiary}}
            >
                <div className="flex flex-row items-center justify-between">
                    <Image
                        src={song.img}
                        alt={song.title}
                        width={80}
                        height={80}
                        className="object-cover"
                    />
                    <h4
                        className="font-bold text-xl mx-5 "
                        style={{color: currentTheme.secondary}}
                    >{song.title}</h4>
                </div>
            </Link>
        </>
    );
}
