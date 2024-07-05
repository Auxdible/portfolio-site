"use client";

import { hoverable } from "@/components/CursorProvider";
import { Button } from "@/components/ui/Button";
import { CursorContext } from "@/context/CursorContext";
import useMetaIAB from "@/lib/hooks/useMetaIAB";
import { BlogPostPayload } from "@/lib/types/BlogPostPayload";
import { posts } from "@prisma/client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext, useState } from "react";
import { BsBook, BsShare, BsShieldCheck } from "react-icons/bs";
interface PostProps { 
    readonly post: BlogPostPayload;
}
export default function LatestBlogPost({ post }: PostProps) {
    const [linkCopied, setLinkCopied] = useState(false);
    const [isIAB] = useMetaIAB();
    const { setHovered } = useContext(CursorContext);
    function copyLink() {
        navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.id}`)
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 3000);
    }
    return (<div className={`relative z-0 h-96 max-md:h-48 w-full max-w-2xl mb-64 max-md:mb-96 max-md:px-2${isIAB ? " max-md:mb-[35rem]" : ""} `} >
    <motion.h1 className="text-6xl mb-5 tracking-wide max-md:text-5xl text-title font-raleway font-bold py-1 text-center">Featured Post</motion.h1>
    {post.image ? <Link href={`/blog/${post.id}`} {...hoverable(setHovered)} className={"absolute bg-contain bg-no-repeat bg-center transition-all h-96 max-md:h-48 w-[724px] max-md:w-full object-center -translate-x-1/2 left-1/2 rounded-xl hover:scale-105 dark:bg-gray-900 bg-gray-200"} style={
        {
            backgroundImage: `url(${post.image || ""})`,
            backgroundSize: `110%`,
        }
    } /> : ""}
    <motion.div initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }} 
    transition={{ duration: 1.0 }} 
    viewport={{ once: true }} className={`relative translate-y-1/2 max-md:translate-y-1/4${isIAB ? " max-md:translate-y-[10%]" : ""} top-1/2 left-1/2 -translate-x-1/2 shadow-2xl rounded-xl`}>
    <div className={"absolute -z-10 -inset-[2px] bg-gradient-to-t max-md:bg-gradient-to-r from-primary to-secondary rounded-xl"}></div>
    <div
    className={"w-full flex flex-col dark:bg-black bg-white mx-auto font-roboto text-2xl text " +
    "transition-all rounded-xl text-center"}>

    
    
    
    <h1 className={"text-4xl py-1 max-sm:text-3xl font-raleway text-title font-bold"}>{post.title}</h1>
    <p className={"block font-lato my-2 break-words text-2xl"}>{post.description ?? ""}</p>
    <p className={"flex flex-row font-roboto justify-center text-lg dark:text-gray-400 text-gray-600 my-1 gap-1"}>{new Date(post.date || Date.now()).toISOString().split('T')[0]} • <span className={"flex flex-row justify-center items-center gap-1"}><BsShieldCheck/> {post.author}</span></p>
    <span className={"flex items-center gap-4 w-fit mx-auto my-2"}>
       <Button href={`/blog/${post.id}`}><span className="flex gap-2 items-center text-lg font-bold"><BsBook className={"text group-hover:fill-theme fill-reverse duration-700 transition-all"}/> Read More</span></Button>
       {typeof window !== 'undefined' && window.isSecureContext ? 
       <Button onClick={() => copyLink()}><span className="flex gap-2 items-center text-lg font-bold"><BsShare className={`text group-hover:fill-theme fill-reverse duration-700 transition-all`}/> {linkCopied ? "Copied!" : "Copy Link"}</span></Button> : ""}
       
    </span>
    
    </div>
    </motion.div>
    
    </div>)
}