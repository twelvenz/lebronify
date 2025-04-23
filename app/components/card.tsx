import {PropTypes} from "@/type";
import Link from "next/link";
import Image from "next/image";

export default function Card({post}:{post:PropTypes}) {
    return(
        <>
            <Link href={`/post/${post.id}`}>
                <div className="bg-amber-300 rounded-xl p-4 m-2 w-96">
                    <h4 className="font-bold text-3xl">{post.title}</h4>
                    <Image
                        src={post.img}
                        width={300}
                        height={300}
                        alt={post.title}
                        className="m-auto mb-6 p-5 w-80% h-auto"
                    />
                </div>
            </Link>
        </>
    );
}