"use client";

import converter from "@/lib/converter";

import { BsShieldCheck } from "react-icons/bs";

import { BlogPostPayload } from "@/lib/types/BlogPostPayload";
import Image from "next/image";
import { CategoryColors } from "@/lib/constants/CategoryColors";

type PostProps = { post: BlogPostPayload & { content: string }, preview?: boolean }
export default function BlogContent({ post, preview }: PostProps) {

    return (<main className={"flex relative flex-row-reverse max-xl:flex-col items-start pt-20 overflow-y-hidden min-h-screen justify-center mx-auto max-md:w-screen p-1"}>
    <div className={"block mx-auto px-8 text-center font-roboto text-2xl text mb-10  max-w-2xl"}>
    {post.image && <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-b from-primary to-secondary"/>
            <img 
            src={post.image}
            width={0}
            height={0}
            sizes="35vw"
            style={{ width: '100%', height: 'auto' }} 
            alt={post.title + " image"} 

            className=" my-5 z-10 relative max-h-96 object-cover bg-black"/>
        </div>}
        
        <h1 className={"text-4xl  font-raleway text-center font-bold tracking-wide text-title py-1"}>{post.title}</h1>  
        <p className={"block w-full font-lato text-2xl my-2 break-words"}>{post.description}</p>
        <ul className='flex flex-wrap justify-center gap-4'>
            {post.categories.map((i, index) => <li key={index} className='flex gap-2'>
                <span className={`flex items-center gap-2 border-2 rounded-2xl px-1 py-0.5 my-2 font-montserrat border-${CategoryColors[i as keyof typeof CategoryColors] ?? 'black dark:border-white'}`}>{i}</span>
                
            </li>)}
        </ul>
        
       
        <p className={"flex flex-row font-roboto justify-center text-xl dark:text-gray-400 text-gray-600 gap-1"}>{new Date(post.date || Date.now()).toISOString().split('T')[0]} • <span className={"flex flex-row justify-center items-center gap-1"}><BsShieldCheck/> {post.author}</span></p>
    </div>
    <div className={"relative max-xl:mx-auto dark:bg-black bg-gray-50 w-full max-md:max-w-full p-1 md:p-4 max-md:py-4 my-5 max-w-5xl "}>
    <div className={"absolute z-10 w-full h-16 bg-gradient-to-b from-gray-50 dark:from-black to-transparent transition-all"}></div>
    <div className={"relative markdown block py-10 xl:h-[calc(100vh-160px)] max-xl:mx-auto  overflow-y-scroll"} id="content" dangerouslySetInnerHTML={{ __html: converter.makeHtml(post.content) }}>
    </div>
    <div className={"absolute z-10 w-full bottom-0 h-16 bg-gradient-to-t from-gray-50 dark:from-black to-transparent transition-all"}></div>
    </div>
    

    </main>)
}