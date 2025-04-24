'use client';
import Card from "@/app/components/card";
import songsData from "@/songs.json";
import { useTheme } from "@/lib/useTheme"

export default function Homepage() {
    const {currentTheme} = useTheme();
    return (
        <div className="flex justify-center w-full">
            <div className="block m-4">
                <div className="bg-red-500 text-green-300">
                    <p>play random song button</p>
                </div>
              
                <div
                    className="flex justify-center px-13 py-3 m-8 rounded-xl"
                    style={{backgroundColor: currentTheme.primary}}
                >
                    <div className="block h-150 w-full overflow-y-auto p-4">
                        {songsData.songs.map((song) => (
                            <Card key={song.id} song={song} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

       