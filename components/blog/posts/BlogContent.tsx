"use client";

import converter from "@/lib/converter";

import { BsShieldCheck } from "react-icons/bs";

import { BlogPostPayload } from "@/lib/types/BlogPostPayload";
import Image from "next/image";
import { CategoryColors } from "@/lib/constants/CategoryColors";

type PostProps = { post: BlogPostPayload & { content: string }, preview?: boolean }
export default function BlogContent({ post, preview }: PostProps) {

    return (<main className={"flex flex-col items-center min-h-screen justify-center mx-auto max-md:w-screen p-1"}>
    <div className={"block mx-auto text-center font-roboto text-2xl text mb-10 mt-40 max-w-4xl"}>
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
        
        <h1 className={"text-5xl max-sm:text-4xl font-raleway font-bold tracking-wide text-title py-1"}>{post.title}</h1>  
        <ul className='flex flex-wrap gap-4 justify-center'>
            {post.categories.map((i, index) => <li key={index} className='flex gap-2'>
                <span className={`flex items-center gap-2 border-2 rounded-2xl px-1 py-0.5 my-2 font-montserrat border-${CategoryColors[i as keyof typeof CategoryColors] ?? 'black dark:border-white'}`}>{i}</span>
                
            </li>)}
        </ul>
        <p className={"block w-full font-lato text-2xl my-4 break-words"}>{post.description}</p>
       
        <p className={"flex flex-row font-roboto justify-center text-xl dark:text-gray-400 text-gray-600 gap-1"}>{new Date(post.date || Date.now()).toISOString().split('T')[0]} • <span className={"flex flex-row justify-center items-center gap-1"}><BsShieldCheck/> {post.author}</span></p>
    </div>
    <div className={"relative dark:bg-black bg-gray-50 rounded-3xl w-full max-md:max-w-full p-1 md:p-4 max-md:py-4 my-5 max-w-5xl"}>
    <div className={"absolute -z-10 -inset-[2px] bg-gradient-to-t from-primary to-secondary rounded-3xl transition-all"}></div>
    <div className={"relative markdown block rounded-3xl"} dangerouslySetInnerHTML={{ __html: converter.makeHtml(post.content) }}>
    </div>
    </div>
    

    </main>)
}