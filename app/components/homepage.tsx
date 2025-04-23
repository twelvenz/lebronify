import Card from "@/app/components/card";
import songsData from "@/songs.json";

export default function Homepage() {
    return (
        <div className="flex justify-center w-full">
            <div className="block m-4">
                <div className="bg-red-500 text-green-300">
                    <p>play random song button</p>
                </div>

                <div className="flex justify-center bg-[#FDB927] px-16 py-3 m-8">
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
