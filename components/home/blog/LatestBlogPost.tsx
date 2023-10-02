"use client";

import useMetaIAB from "@/lib/hooks/useMetaIAB";
import { posts } from "@prisma/client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsBook, BsShare, BsShieldCheck } from "react-icons/bs";
interface PostProps { 
    readonly post: posts 
}
export default function LatestBlogPost({ post }: PostProps) {
    const [linkCopied, setLinkCopied] = useState(false);
    const [isIAB] = useMetaIAB();
    function copyLink() {
        navigator.clipboard.writeText(`https://auxdible.me/blog/${post.postId}`)
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 3000);
    }
    return (<div className={`relative z-0 mx-auto h-96 max-md:h-48 w-full max-w-2xl mb-64 max-md:mb-96 max-md:px-2${isIAB ? " max-md:mb-[35rem]" : ""} `} >
    {post.image_url ? <Link href={`/blog/${post.postId}`} className={"absolute bg-contain bg-no-repeat bg-center transition-all h-96 max-md:h-48 w-[724px] max-md:w-full object-center -translate-x-1/2 left-1/2 rounded-xl hover:scale-105 dark:bg-gray-900 bg-gray-200"} style={
        {
            backgroundImage: `url(${post.image_url || ""})`,
            backgroundSize: `110%`,
        }
    } /> : ""}
    <motion.div initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }} 
    transition={{ duration: 1.0 }} 
    viewport={{ once: true }} className={`relative translate-y-1/2 max-md:translate-y-1/4${isIAB ? " max-md:translate-y-[10%]" : ""} top-1/2 left-1/2 -translate-x-1/2 shadow-2xl rounded-xl`}>
<div className={"absolute -z-10 -inset-[2px] bg-gradient-to-t max-md:bg-gradient-to-r from-orange-400 to-red-500 rounded-xl"}></div>
    <div
    className={"w-full flex flex-col dark:bg-black bg-white mx-auto font-roboto text-2xl text " +
    "transition-all rounded-xl text-center"}>

    
    
    
    <h1 className={"text-4xl max-sm:text-xl font-montserrat text-title"}>{post.post_name}</h1>
    <p className={"block font-roboto my-2 break-words text-xl"}>{post.post_description}</p>
    <p className={"flex flex-row font-roboto justify-center text-lg dark:text-gray-400 text-gray-600 my-1 gap-1"}>{new Date(post.post_date_unix || Date.now()).toISOString().split('T')[0]} • <span className={"flex flex-row justify-center items-center gap-1"}><BsShieldCheck/> {post.posted_by}</span></p>
    <span className={"flex flex-row gap-4 w-fit mx-auto"}>
    <Link href={`/blog/${post.postId}`} className={"flex group relative z-0 items-center justify-center flex-1 flex-grow flex-shrink mx-auto group p-2 transition-all rounded-lg font-roboto text-lg my-2"}>
       <div className={"absolute inset-0 dark:bg-black bg-white rounded-lg"}></div>
       <div className={"absolute -z-10 -inset-[2px] bg-gradient-to-t from-orange-400 to-red-500 rounded-lg transition-all"}></div>
       <span className={"flex flex-row gap-2 items-center z-10 hover:text-xl hover:text-title transition-all"}><BsBook className={"text"}/> Read More</span></Link>
       {window.isSecureContext ? 
       <button onClick={() => copyLink()} className={"flex w-fit h-fit group relative z-0 items-center justify-center group p-2 transition-all rounded-lg font-roboto text-lg my-2"}>
       <div className={"absolute inset-0 dark:bg-black bg-white rounded-lg"}></div>
       <div className={"absolute -z-10 -inset-[2px] bg-gradient-to-t from-orange-400 to-red-500 rounded-lg transition-all"}></div>
       <span className={"flex flex-row gap-2 items-center z-10 hover:text-xl hover:text-title transition-all"}><BsShare className={`text ${linkCopied ? "fill-green-500" : ""}`}/> {linkCopied ? "Copied!" : "Copy Link"}</span></button> : ""}
       
    </span>
    
    </div>
    </motion.div>
    
    </div>)
}