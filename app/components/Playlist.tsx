// Elven's component

import songsData from "@/songs.json";
import Card from "@/app/components/Card";
import { useTheme } from "@/lib/useTheme"

export default function Playlist() {
    const {currentTheme} = useTheme();
    // mapping concept from quiz 6
    return(
        <>
            <div
                className="flex justify-center px-10 py-3 m-6 rounded-xl"
                style={{backgroundColor: currentTheme.secondary}}
            >
                <div className="block h-130 w-full overflow-y-auto p-4">
                    {songsData.songs.map((song) => (
                        <Card key={song.id} song={song} />
                    ))}
                </div>
            </div>
        </>
    );

}