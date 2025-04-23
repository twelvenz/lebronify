import { PropTypes } from "@/types";
import Link from "next/link";
import Image from "next/image";

export default function Card({ song }: { song: PropTypes }) {
    return (
        <>
            <Link href={`/${song.id}`} className="block w-full ">
                <div className="flex flex-row items-center justify-between">
                    <Image
                        src={song.img}
                        alt={song.title}
                        width={64}
                        height={64}
                        className="object-cover"
                    />
                    <h4 className="font-bold text-xl mx-3">{song.title}</h4>
                </div>
            </Link>
        </>
    );
}
