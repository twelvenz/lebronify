// Aaron

import {PropTypes} from "@/types";
import songsData from "@/songs.json";

export default async function getSongByTitle(
    title: string,
): Promise<PropTypes | null> {
    /* decodeURI Documentation: https://www.w3schools.com/jsref/jsref_decodeuri.asp */
    const song = songsData.songs.find((song) => song.title === decodeURI(title));

    if (!song){
        return null;
    }

    return {
        id: song.id,
        title: song.title,
        original: song.original,
        lyrics: song.lyrics,
        link: song.link,
        img: song.img,
    };
}
