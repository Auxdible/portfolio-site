"use client";

import ReactionsData from "@/lib/constants/ReactionsData";
import { Reaction, ReactionPayload, ReactionType, comments, posts } from "@prisma/client";
import { signIn, useSession } from "next-auth/react";
import { useState } from 'react';
import { BsChatText, BsHandThumbsUp, BsMessenger, BsReply } from "react-icons/bs";
import qs from 'querystring'; 
import { useQueryClient } from "react-query";
import Loading from "../../Loading";
type CommentsProps = { postId: string };
export default function CommentsForm({ postId }: CommentsProps) {
    const { data: session } = useSession();
    const [content, setContent] = useState("");
    const queryClient = useQueryClient();
    function handleSubmit() {
        if (!session) return signIn();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        fetch("/api/public/comment", { method: 'POST', headers: myHeaders, body: qs.encode({ comment_content: content, postId: postId }), redirect: 'follow' }).then(() => {
            queryClient.invalidateQueries('comments');
            queryClient.invalidateQueries('count');
        });
        setContent("");
    }
    return (<div className={"flex flex-col justify-start w-full gap-3"}>  
        <span className={"text-3xl max-sm:text-3xl font-montserrat text-title max-md:flex max-md:flex-col"}>Reply <span className={"text-xl max-sm:text-lg font-roboto dark:text-gray-400 text-gray-600"}>{session?.user ? `(commenting as ${session.user.name})` : "(sign in to reply)"}</span></span>
        <textarea value={content} onInput={(e) => setContent(e.currentTarget.value)} className={"font-roboto p-2 dark:bg-gray-900 bg-gray-300 rounded-2xl resize-none border-2 dark:border-orange-400 border-orange-600 -scroll-my-52"} rows={2} />
        <button onClick={() => handleSubmit()} className={"self-center flex font-roboto justify-center items-center gap-2 text-center text-black dark:text-white p-2 border-2 dark:border-orange-400 border-orange-600 border-opacity-40 rounded-2xl w-fit"}><BsReply/> Reply</button>
    </div>)
}