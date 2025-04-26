import DisplaySong from "@/app/components/displaySong";
import getSongByTitle from "@/lib/getSongByTitle";
import { redirect } from "next/navigation";

export default async function FullPostPage({
    params,
}: {
    params: Promise <{ title: string }>;
}) {
    const { title } = await params;
    console.log(title);

    try {
        const song = await getSongByTitle(title);
        if(song === null){
            return redirect("/");
        }
        return <DisplaySong song={song} />;
    } catch (err) {
        console.error(err);
        return redirect("/");
    }
}