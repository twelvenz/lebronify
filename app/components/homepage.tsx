'use client';

import Playlist from "@/app/components/playlist";

export default function Homepage() {
    return (
        <div className="flex justify-center w-full">
            <div className="block m-4">

                /* replace this with a button to redirect to a random page in the playlist*/
                <div className="bg-red-500 text-green-300">
                    <p>play random song button</p>
                </div>

                <Playlist/>
            </div>
        </div>
    );
}

       