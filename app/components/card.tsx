import { PropTypes } from "@/types";
import Link from "next/link";
import Image from "next/image";

export default function Card({ song }: { song: PropTypes }) {
    return (
        <>
            <Link href={`/${song.title}`} className="block w-full bg-black px-6 py-1 my-2 hover:scale-[1.03] hover:bg-gray-800">
                <div className="flex flex-row items-center justify-between">
                    <Image
                        src={song.img}
                        alt={song.title}
                        width={64}
                        height={64}
                        className="object-cover"
                    />
                    <h4 className="font-bold text-xl mx-5 text-[#FDB927]">{song.title}</h4>
                </div>
            </Link>
        </>
    );
}
