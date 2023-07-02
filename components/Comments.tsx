"use client";

import { comments } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useState } from 'react';

import { useQuery, useQueryClient } from "react-query";
import Loading from "./Loading";
import CommentProfile from "./CommentProfile";
import { BsArrowDown, BsTrash } from "react-icons/bs";
import { BiLoaderCircle } from "react-icons/bi";
type CommentsProps = { postId: string };
export default function Comments({ postId }: CommentsProps) {
    const [maxShown, setMaxShown] = useState(10);
    const queryClient = useQueryClient();
    const [loading, setLoading] = useState(false);
    const { data: session } = useSession();
    async function handleExpand() {
        setMaxShown(maxShown + 10);
        queryClient.removeQueries(["comments", postId]);
        queryClient.removeQueries(["count", postId]);
    }
    const { data: commentsData, status } = useQuery(["comments", postId], async () => await fetch(`/api/public/comment?postId=${postId}&limit=${maxShown}`).then(async (data) => await data.json().catch(() => null)).catch(() => null));
    const { data: countData, status: countStatus } = useQuery(["count", postId], async () => await fetch(`/api/public/comment/count?postId=${postId}`).then(async (data) => await data.json().catch(() => null)).catch(() => null));
    
    if (status == "loading") return <Loading/>;
    if (!commentsData || status == "error") return <p className={"font-roboto text text-xl"}>Couldn&apos;t fetch comments.</p>
    let data = commentsData as comments[];
    let count = countStatus != "loading" && countData == undefined ? 0 : countStatus == "success" && countData ? countData['count'] : "Unknown"; 
    return (<div className={"flex flex-col w-full text-center justify-center my-16"}>
        <span className={"text-3xl max-sm:text-2xl font-montserrat text-primary"}>Comments <span className={"text-xl max-sm:text-lg font-roboto dark:text-gray-400 text-gray-600"}>({count} comments)</span></span>
        <ul className={"flex flex-col gap-8 my-10"}>
            {data.map((i) => {
                console.log(i.discord_id);
            return <li key={i.commentId} className={"flex flex-col justify-start gap-4"}>
                <span className={"flex flex-row justify-between w-full items-center"}>
                    <CommentProfile discord_id={i.discord_id}/>
                    <span className={"text-xl max-sm:text-lg font-roboto dark:text-gray-400 text-gray-600"}>
                        {new Date(i.post_date_unix || Date.now()).toISOString().split('T')[0]} (#{i.commentId})
                    </span>
                </span>
                <p className={"text-left font-roboto text-xl max-md:text-lg"}>{i.comment_content}</p>
                {session?.user?.admin ? <button onClick={() => { fetch(`/api/comments?postId=${postId}&commentId=${i.commentId}`, { method: "DELETE" }).then(() => {queryClient.invalidateQueries(["comments", postId]); queryClient.invalidateQueries(["count", postId]); }).catch((x) => console.log(x) ) } } className={"self-center flex font-roboto justify-center items-center gap-2 text-center text-black dark:text-white p-2 border-2 dark:border-orange-400 border-orange-600 border-opacity-40 rounded-2xl w-fit"}><BsTrash/> Delete</button> : ""} 
            </li>})}
        </ul>
        {loading ? <BiLoaderCircle className={"animate-spin animate-pulse text-2xl mx-auto "}/> : maxShown < count ? <button onClick={() => handleExpand()} className={"self-center flex font-roboto justify-center items-center gap-2 text-center text-black dark:text-white p-2 border-2 dark:border-orange-400 border-orange-600 border-opacity-40 rounded-2xl w-fit"}><BsArrowDown/> More</button> : ""}
    </div>)
}