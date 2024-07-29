"use client";

import { useContext, useEffect, useState } from 'react';
import Link from "next/link";
import { BsBook, BsShare, BsShieldCheck } from "react-icons/bs";
import { BlogPostPayload } from "@/lib/types/BlogPostPayload";
import { Button } from "@/components/ui/Button";
import { CursorContext } from "@/context/CursorContext";
import { hoverable } from "@/components/CursorProvider";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
interface PostProps { 
    readonly post: BlogPostPayload 
}
export default function BlogPreview({ post }: PostProps) {
    const [linkCopied, setLinkCopied] = useState(false);
    const { setHovered } = useContext(CursorContext);
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    useEffect(() => {
        if (!mounted) setMounted(true)
        }, [mounted]);
    function copyLink() {
        navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.id}`)
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 3000);
    }
    return (<article className={"flex w-full max-lg:flex-col"}>
        <div className="flex-1 flex justify-center items-center">
            <div {...hoverable(setHovered)} onClick={() => {
                if (setHovered) setHovered(false) 
                router.push(`/blog/${post.id}`)
            }} className="relative rounded-xl group hover:cursor-pointer md:w-96 max-md:w-screen h-32">
            <div className={"absolute -inset-[2px] bg-gradient-to-t max-md:bg-gradient-to-r from-primary to-secondary group-hover:scale-110 transition-all rounded-xl"}></div>
            <Image src={post.image?.toString() ?? `${process.env.NEXT_PUBLIC_SITE_URL}/icon.png`} alt={post.title + " image"}  fill style={{ objectFit: "cover" }} className={"object-cover relative group-hover:scale-110 transition-all z-10 bg-white dark:bg-black rounded-xl"} />
            </div>
            
        </div>
        <div className="flex-1 flex flex-col max-lg:items-center gap-1">
        <span className={"flex flex-row font-roboto text-lg dark:text-gray-400 text-gray-600 my-1 gap-1"}>{new Date(post.date || Date.now()).toISOString().split('T')[0]} • <span className={"flex flex-row justify-center items-center gap-1"}><BsShieldCheck/> {post.author}</span></span>
        <h2 className="text-title text-3xl font-raleway font-bold max-lg:text-center">{post.title}</h2>
        <p className="font-lato text-lg max-lg:text-center">{post.description}</p>
        <span className={"flex items-center gap-4 w-fit my-2"}>
            <Button href={`/blog/${post.id}`}><span className="flex gap-2 items-center text-lg font-bold"><BsBook className={"text group-hover:fill-theme fill-reverse duration-700 transition-all"}/> Read More</span></Button>
            {mounted && window.isSecureContext ? 
            <Button onClick={() => copyLink()}><span className="flex gap-2 items-center text-lg font-bold"><BsShare className={`text group-hover:fill-theme fill-reverse duration-700 transition-all`}/> {linkCopied ? "Copied!" : "Copy Link"}</span></Button> : ""}
        </span>
        </div>
    </article>)
}
