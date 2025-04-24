'use client';

import Playlist from "@/app/components/playlist";

export default function Homepage() {

    return (
        <div className="flex flex-col items-center w-full">

            {/* replace this with a button to redirect to a random page in the playlist*/}
            <div className="bg-red-500 text-green-300">
                <p>play random song button</p>
            </div>

            <Playlist/>
        </div>
    );
}

       