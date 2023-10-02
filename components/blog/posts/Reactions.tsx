"use client";

import ReactionsData from "@/lib/constants/ReactionsData";
import { Reaction, ReactionPayload, ReactionType, posts } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useState } from 'react';
import { BsHandThumbsUp } from "react-icons/bs";
import qs from 'querystring'; 
import { useQueryClient } from "react-query";
import Link from "next/link";
import { BiLoaderCircle } from "react-icons/bi";
type ReactionsProps = { post: Omit<posts, "reactions"> & { reactions: Reaction[] } }
export default function Reactions({ post }: ReactionsProps) {
    const { data: session } = useSession();
    const [showReactions, setShowReactions] = useState(false);
    const [loading, setLoading] = useState(false);
    const queryClient = useQueryClient();
    function addReaction(type: ReactionType) {
        setLoading(true);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        fetch("/api/public/react", { method: 'POST', headers: myHeaders, body: qs.encode({ reaction_name: type, postId: post.postId }), redirect: 'follow' }).then(() => {
            setLoading(false)
            queryClient.invalidateQueries('post_fetch');
        }).catch(() => {
            setLoading(false)
        })
    }
    if (!post) return <></>;
    return (<span className={"flex flex-row w-full justify-between"}>
        {session ? <span className={"group relative"}><button onClick={() => setShowReactions(!showReactions)} className={"flex font-roboto justify-center items-center gap-2 text-center text-black dark:text-white p-2 border-2 dark:border-orange-400 border-orange-600 border-opacity-40 rounded-2xl"}><BsHandThumbsUp/> React</button>
        <span className={`w-fit bg-gray-200 dark:bg-gray-800 border dark:border-gray-700 border-gray-400 rounded-2xl rounded-bl-none p-3 origin-bottom-left absolute left-0 bottom-12 max-md:bottom-14 ${showReactions ? "animate-expand" : "scale-0 md:group-hover:scale-100 md:hover:scale-100 transition-transform"}`}>
            <ul className={"flex flex-row gap-2"}>
                {Object.keys(ReactionType).map((i) => {
                    const data = ReactionsData[i];
                    const reaction = post.reactions.find((r) => r.type == i);
                    const reacted = session?.user?.discord_profile && reaction && reaction.list.indexOf(session.user.discord_profile.id) != -1;
                    if (!data) return <></>
                    return (<li key={i} className={"flex-1 flex-grow flex-shrink flex flex-col justify-center items-center group"}>
                        <a onClick={() => !loading ? addReaction(ReactionType[i as keyof typeof ReactionType]) : {}} className={`text-2xl ${reacted ? "bg-gradient-to-t from-orange-400 to-red-500" : "dark:bg-gray-600 bg-gray-300"} rounded-full hover:scale-125 transition-all cursor-pointer p-1`}>{!loading ? data.emoji : <BiLoaderCircle className={"text-3xl animate-spin"}/>}</a>
                        <span className={"font-roboto mt-1 hover:text-orange-600 transition-colors cursor-pointer"}>{data.name}</span>
                        </li>);
                })}
            </ul>
        </span></span> : <Link href={'/auth/signin'} className={"flex w-fit font-roboto justify-center items-center gap-2 text-center text-black dark:text-white p-2 border-2 dark:border-orange-400 border-orange-600 border-opacity-40 rounded-2xl"}>Sign in</Link> }
        <span className={"flex flex-row dark:bg-gray-800 bg-gray-300 rounded-full px-2 gap-1"}>
            {Object.keys(ReactionType).map((i) => {
                    const data = ReactionsData[i];
                    
                    if (!data) return <></>
                    return (<li key={i} className={"flex-1 flex-grow flex-shrink flex flex-row justify-center items-center align-middle group"}>
                        <span onClick={() => addReaction(ReactionType[i as keyof typeof ReactionType])} className={"text-lg pointer-events-none"}>{data.emoji}</span>
                        <span className={"font-montserrat text-base"}>{post.reactions.find((r) => r.type == i)?.list.length || 0}</span>

                        </li>);
            })}
        </span>
        </span>)
}