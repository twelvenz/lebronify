// Elven's component

import songsData from "@/songs.json";
import Card from "@/app/components/Card";
import { useTheme } from "@/lib/useTheme"

export default function Playlist() {
    const {currentTheme} = useTheme();
    return(
        <>
            <div
                className="flex justify-center px-13 py-3 m-8 rounded-xl"
                style={{backgroundColor: currentTheme.secondary}}
            >
                <div className="block h-150 w-full overflow-y-auto p-4">
                    {songsData.songs.map((song) => (
                        <Card key={song.id} song={song} />
                    ))}
                </div>
            </div>
        </>
    );

}