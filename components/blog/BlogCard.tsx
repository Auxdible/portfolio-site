"use client";

import { posts } from "@prisma/client";
import { motion } from "framer-motion";
import { useState } from 'react';
import Link from "next/link";
import { BsBook, BsShare, BsShieldCheck } from "react-icons/bs";
import Image from "next/image";
interface PostProps { 
    readonly post: posts 
}
export default function BlogCard({ post }: PostProps) {
    const [linkCopied, setLinkCopied] = useState(false);
    function copyLink() {
        navigator.clipboard.writeText(`https://auxdible.me/blog/${post.postId}`)
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 3000);
    }
    return (<div className={"relative bg-gray-50 dark:bg-black grid-rows-1 grid-cols-1 last-of-type:border-r-0 w-full rounded-xl"}>
    <div className={"absolute -z-10 -inset-[2px] bg-gradient-to-t from-orange-400 to-red-500 rounded-xl transition-all"}></div>
    <div
    className={"w-full overflow-hidden h-[45rem] mx-auto font-roboto text-2xl text " +
    "transition-all relative group flex flex-col"}
    >
    <div className={"h-[20rem]"}>
        {post.image_url ? <img src={post.image_url.toString()} className={"flex-1 rounded-t-xl h-[20rem] object-cover mx-auto"} alt={post.post_name + " image"} /> : ""}
    </div>
    <section className={"flex flex-col h-[15rem] max-md:items-center text-center flex-1"}>
    <span className={"flex-1 flex-grow"}><h1 className={"text-4xl max-sm:text-2xl font-montserrat text-title transition-all"}>{post.post_name}</h1></span>
    <span className={"flex-1 flex-grow"}><p className={"block font-roboto my-2 break-words text-xl transition-all"}>{post.post_description}</p></span>
    <span className={"flex-1 flex-grow mx-auto"}><p className={"flex flex-row font-roboto text-lg dark:text-gray-400 text-gray-600 my-1 gap-1 transition-all"}>{new Date(post.post_date_unix || Date.now()).toISOString().split('T')[0]} • <span className={"flex flex-row justify-center items-center gap-1"}><BsShieldCheck/> {post.posted_by}</span></p></span>
    </section>
    <span className={"flex flex-row gap-4 items-end pb-10 flex-1 mx-auto"}>
    <Link href={`/blog/${post.postId}`} className={"flex w-fit h-fit group relative z-0 items-center justify-center group p-2 transition-all rounded-lg font-roboto text-lg"}>
       <div className={"absolute inset-0 dark:bg-black bg-white rounded-lg"}></div>
       <div className={"absolute -z-10 -inset-[2px] bg-gradient-to-t from-orange-400 to-red-500 rounded-lg transition-all"}></div>
       <span className={"flex flex-row gap-2 items-center z-10 hover:text-xl hover:text-title transition-all"}><BsBook className={"text"}/> Read More</span></Link>
       {window.isSecureContext ? 
       <button onClick={() => copyLink()} className={"flex w-fit h-fit group relative z-0 justify-center group p-2 transition-all rounded-lg font-roboto text-lg"}>
       <div className={"absolute inset-0 dark:bg-black bg-white rounded-lg"}></div>
       <div className={"absolute -z-10 -inset-[2px] bg-gradient-to-t from-orange-400 to-red-500 rounded-lg transition-all"}></div>
       <span className={"flex flex-row gap-2 items-center z-10 hover:text-xl hover:text-title transition-all"}><BsShare className={`text ${linkCopied ? "fill-green-500" : ""}`}/> {linkCopied ? "Copied!" : "Copy Link"}</span></button> : ""}
       
    </span>
    
    </div>
    </div>)
}