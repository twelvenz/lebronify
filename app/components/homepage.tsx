import Card from "@/app/components/card";
import songsData from "@/songs.json";

export default function Homepage() {
    return (
        <div className="flex justify-center w-full">
            <div className="block">
                <div className="bg-red-500 text-green-300">
                    <p>play random song button</p>
                </div>

                <div className="flex justify-center">
                    <div className="block">
                        {songsData.songs.map((song) => (
                            <Card key={song.id} song={song} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
