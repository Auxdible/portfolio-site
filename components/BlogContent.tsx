import converter from "@/lib/converter";
import { Reaction, posts } from "@prisma/client";
import { motion } from "framer-motion";
import { BsShieldCheck } from "react-icons/bs";
import Reactions from "./Reactions";
import Comments from "./Comments";
import CommentsForm from "./CommentsForm";
import { useSession } from "next-auth/react";

type PostProps = { post: posts, preview?: boolean }
export default function BlogContent({ post, preview }: PostProps) {
    const { data: session } = useSession();
    return (<main className={"flex flex-col items-center min-h-screen justify-center max-w-7xl w-fit mx-auto"}>
    <div className={"block mx-auto text-center font-roboto text-2xl text my-20"}>
        <h1 className={"text-5xl max-sm:text-4xl font-montserrat text-primary mt-10 mb-3"}>{post.post_name}</h1>
        <p className={"block w-full font-roboto text-2xl my-4 break-words"}>{post.post_description}</p>
        <p className={"flex flex-row font-roboto justify-center text-xl dark:text-gray-400 text-gray-600 my-1 gap-1"}>{new Date(post.post_date_unix || Date.now()).toISOString().split('T')[0]} • <span className={"flex flex-row justify-center items-center gap-1"}><BsShieldCheck/> {post.posted_by}</span></p>
    </div>
    <div className={"markdown block mx-auto border-2 dark:border-orange-400 border-orange-700 rounded-3xl md:p-4 max-md:py-4 p-1 w-fit my-5"} dangerouslySetInnerHTML={{ __html: converter.makeHtml(post.post_content) }}>   
    </div>
    {!preview ? <span className={"flex flex-col max-w-lg w-full justify-between align-middle items-center gap-4"}>
        <Reactions post={post as any}/>
        {session ? <CommentsForm postId={post.postId} /> : ""}
        
        <Comments postId={post.postId} />
    </span> : ""}
    </main>)
}