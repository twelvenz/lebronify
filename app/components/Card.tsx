// Made by Vincent

import { PropTypes } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/lib/useTheme"

// Card function takes in individual song's PropTypes to display it (i.e. create a style structure for the song)
export default function Card({ song }: { song: PropTypes }) {
    // useTheme function from Runbin to change the styling based on the current theme --> Access colors similar to an object
    const { currentTheme } = useTheme();
    return (
        <>
            {/*
                Inline styling for Link + block display for stacking using Tailwind CSS,
                Conditionally/dynamically change the backgroundColor based on the currentTheme
                    Source: https://react.dev/learn#displaying-data + reference from Lab3
            */}
            <Link href={`/${song.title}`} className="block px-3 py-1 my-2 hover:scale-[1.03] rounded-2xl hover:bg-gray-800"
                  style={{backgroundColor: currentTheme.tertiary}}
            >
                {/*Styling the Image and content of the song in each Link*/}
                <div className="flex flex-row items-center justify-between">
                    <Image
                        src={song.img}
                        alt={song.title}
                        width={80}
                        height={80}
                        className="object-cover"
                    />
                    <h4
                        className="font-bold text-lg mx-3 w-full"
                        style={{color: currentTheme.secondary}}
                    >{song.title}</h4>
                </div>
            </Link>
        </>
    );
}
