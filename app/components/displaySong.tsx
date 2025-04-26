import { PropTypes } from "@/types";

export default function DisplaySong({ song } : { song: PropTypes }) {
    return (
        <div className="p-4 m-2 bg-green-100 flex flex-col items-center">
            <h2 className="text-5xl font-bold text-black">Song Title: {song.title}</h2>
            <div className="flex">
                {/* Audio documentation: https://www.w3schools.com/html/html5_audio.asp */}
                <audio controls>
                    <source src={song.link} type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
            </div>
            <h3 className="text-3xl font-bold text-black">Cover of: {song.original}</h3>
        </div>
    );
}