//Cody's component

import randomize from "@/lib/randomize";
import {useTheme} from "@/lib/useTheme";

export default function RandomSongButton() {
    const { currentTheme } = useTheme();

    return (
        <button className="font-bold hover:scale-[1.15] p-3 border border-amber-500 rounded-2xl"
                style={{ backgroundColor: currentTheme.secondary}}
                onClick={randomize}>Random Song</button>
    )
}