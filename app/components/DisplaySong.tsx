// Aaron's Component

"use client";

import { PropTypes } from "@/types";
import { useTheme } from '@/lib/useTheme';
import Image from "next/image";
import RandomSongButton from "@/app/components/RandomSongButton";

export default function DisplaySong({ song } : { song: PropTypes }) {
    const { currentTheme } = useTheme();

    const bgColor = {
        background: currentTheme.secondary,
    };

    const textColor = {
        color: currentTheme.tertiary,
    }

    return (
        <div className="flex flex-col items-center justify-center text-center pt-30 pb-23">
            <div className="flex flex-col border border-black rounded-2xl justify-center items-center px-3 p-5 w-100" style = {bgColor}>
                <h2 className="text-4xl font-bold m-2" style = {textColor}>{song.title}</h2>
                <Image
                    src="/legoat.png"
                    alt={song.title}
                    width={144}
                    height={144}
                    className="object-cover mx-auto my-0"
                />
                {/* Audio documentation: https://www.w3schools.com/html/html5_audio.asp */}
                <audio controls loop className="w-90 m-5">
                    <source src={song.link} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                <h3 className="text-3xl font-semibold" style = {textColor}>Cover of: {song.original}</h3>
            </div>
            <div className="flex flex-col justify-center items-center mt-3 p-3">
                <RandomSongButton/>
            </div>
        </div>
    );
}