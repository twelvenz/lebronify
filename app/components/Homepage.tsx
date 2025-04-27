'use client';

import Playlist from "@/app/components/Playlist";
import RandomSongButton from "@/app/components/RandomSongButton";

export default function Homepage() {

    return (
        <div className="flex flex-col items-center w-full">

            <RandomSongButton/>

            <Playlist/>
        </div>
    );
}

       