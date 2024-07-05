"use client";

import { posts } from "@prisma/client";
import { motion } from "framer-motion";
import { useState } from 'react';
import Link from "next/link";
import { BsBook, BsShare, BsShieldCheck } from "react-icons/bs";
import useMetaIAB from "@/lib/hooks/useMetaIAB";
import { BlogPostPayload } from "@/lib/types/BlogPostPayload";
import { Button } from "@/components/ui/Button";
interface PostProps { 
    readonly post: BlogPostPayload 
}
export default function BlogPreview({ post }: PostProps) {
    const [linkCopied, setLinkCopied] = useState(false);

    const [isIAB] = useMetaIAB();
    function copyLink() {
        navigator.clipboard.writeText(`https://auxdible.me/blog/${post.id}`)
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 3000);
    }
    return (<article className={"flex w-full max-lg:flex-col"}>
        <div className="flex-1 flex justify-center items-center">
            <Link href={`/blog/${post.id}`} className="relative rounded-xl group hover:cursor-pointer">
            <div className={"absolute -inset-[2px] bg-gradient-to-t max-md:bg-gradient-to-r from-primary to-secondary group-hover:scale-110 transition-all rounded-xl"}></div>
            <img src={post.image?.toString() ?? "https://auxdible.me/icon.png"} alt={post.title + " image"} className={"w-96 h-32 object-cover relative group-hover:scale-110 transition-all z-10 bg-white dark:bg-black rounded-xl"} />
            </Link>
            
        </div>
        <div className="flex-1 flex flex-col max-lg:items-center gap-1">
        <span className={"flex flex-row font-roboto text-lg dark:text-gray-400 text-gray-600 my-1 gap-1"}>{new Date(post.date || Date.now()).toISOString().split('T')[0]} • <span className={"flex flex-row justify-center items-center gap-1"}><BsShieldCheck/> {post.author}</span></span>
        <h2 className="text-title text-3xl font-raleway font-bold">{post.title}</h2>
        <p className="font-lato text-lg">{post.description}</p>
        <span className={"flex items-center gap-4 w-fit my-2"}>
            <Button href={`/blog/${post.id}`}><span className="flex gap-2 items-center text-lg font-bold"><BsBook className={"text group-hover:fill-theme fill-reverse duration-700 transition-all"}/> Read More</span></Button>
            {typeof window !== 'undefined' && window.isSecureContext ? 
            <Button onClick={() => copyLink()}><span className="flex gap-2 items-center text-lg font-bold"><BsShare className={`text group-hover:fill-theme fill-reverse duration-700 transition-all`}/> {linkCopied ? "Copied!" : "Copy Link"}</span></Button> : ""}
        </span>
        </div>
    </article>)
}

/*
<div
    className={`w-full overflow-hidden ${!isIAB ? "h-[25rem]" : "h-full"} mx-auto font-roboto text-2xl text " +
    "transition-all relative group p-2 flex flex-col`}
    >
    <div className={"absolute inset-0 bg-cover bg-center blur-sm hover:blur-0 opacity-40 -z-10 group-hover:opacity-80 group-hover:-inset-10 transition-all"}
    style={
        {
            backgroundImage: `url(${post.image?.toString()})`
        }
    }></div>
    <section className={`flex flex-col ${!isIAB ? "h-[15rem]" : "h-fit"} max-md:items-center max-md:text-center`}>
    <span className={"flex-1 flex-grow"}><h1 className={"text-4xl max-sm:text-2xl font-montserrat text-title transition-all"}>{post.title}</h1></span>
    <span className={"flex-1 flex-grow"}><p className={"block font-roboto my-2 break-words text-xl transition-all"}>{post.description ?? ""}</p></span>
    <span className={"flex-1 flex-grow"}><p className={"flex flex-row font-roboto text-lg dark:text-gray-400 text-gray-600 my-1 gap-1 transition-all"}>{new Date(post.date || Date.now()).toISOString().split('T')[0]} • <span className={"flex flex-row justify-center items-center gap-1"}><BsShieldCheck/> {post.author}</span></p></span>
    </section>
    <span className={"flex flex-row gap-4 max-md:justify-center items-center flex-1"}>
    <Link href={`/blog/${post.id}`} className={"flex w-fit h-fit group relative z-0 items-center justify-center group p-2 transition-all rounded-lg font-roboto text-lg my-2"}>
       <div className={"absolute inset-0 dark:bg-black bg-white rounded-lg"}></div>
       <div className={"absolute -z-10 -inset-[2px] bg-gradient-to-t from-orange-400 to-red-500 rounded-lg transition-all"}></div>
       <span className={"flex flex-row gap-2 items-center z-10 hover:text-xl hover:text-title transition-all"}><BsBook className={"text"}/> Read More</span></Link>
       {typeof window !== 'undefined' && window?.isSecureContext ? 
       <button onClick={() => copyLink()} className={"flex w-fit h-fit group relative z-0 items-center justify-center group p-2 transition-all rounded-lg font-roboto text-lg my-2"}>
       <div className={"absolute inset-0 dark:bg-black bg-white rounded-lg"}></div>
       <div className={"absolute -z-10 -inset-[2px] bg-gradient-to-t from-orange-400 to-red-500 rounded-lg transition-all"}></div>
       <span className={"flex flex-row gap-2 items-center z-10 hover:text-xl hover:text-title transition-all"}><BsShare className={`text ${linkCopied ? "fill-green-500" : ""}`}/> {linkCopied ? "Copied!" : "Copy Link"}</span></button> : ""}
       
    </span>
    
    </div> */