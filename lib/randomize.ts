//Cody

import songsData from "@/songs.json";
import {redirect} from "next/navigation";

export default function randomize(){
    /*
        generate random element from list of all titles in songsData
        redirect user to /[songsData.title]
     */
    // find max index based on length so we don't have to adjust this function if new songs are added
    const maxNum = songsData.songs.length;
    const random = Math.floor(Math.random() * (maxNum));
    // get element of songsData songs object based on scaled random number generator
    const song = songsData.songs[random];

    if (!song) {
        console.error("Song not found!");
        return null;
    }

    console.log(`Redirecting to song ${song.title}`);
    return redirect(`/${song.title}`);
}