"use client";
import Loading from "@/components/Loading";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { BiBookBookmark, BiBookOpen, BiIdCard, BiImage, BiMessage } from "react-icons/bi";
import { posts, projects } from "@prisma/client";
import { BsDatabaseAdd, BsDatabaseDown, BsDatabaseGear } from "react-icons/bs";
import qs from 'querystring';
import { useRouter } from "next/navigation";
import BlogContent from "@/components/blog/posts/BlogContent";
import BlogCard from "@/components/blog/BlogCard";

export default function ProjectsDashboard() {
    const { data: session, status: session_status } = useSession();
    const router = useRouter();
    const [addPostData, setAddPostData] = useState({ postId: "", post_content: "", post_description: "", post_name: "", image_url: "" })
    const [deletePostData, setDeletePostData] = useState({ postId: "" })
    if (session_status == "loading") return (<Loading/>)
    if (!session?.user?.admin) return <></>;
    async function handleCreatePost(update?: boolean) {
      var headers = new Headers();
      headers.append("Content-Type", "application/x-www-form-urlencoded");
      await fetch(`/api/posts${update ? `?postId=${addPostData.postId}` : ""}`, { method: update ? "PATCH" : "POST", headers: headers, body: qs.encode({ ...addPostData, posted_by: session?.user ? session.user.name : "Auxdible" }), redirect: 'follow' }).then(() => {
        router.push("/");
      }).catch((x) => {
        console.log(x);
        router.push("/")
      })
    }
    async function handleDeletePost() {
      var headers = new Headers();
      headers.append("Content-Type", "application/x-www-form-urlencoded");
      await fetch(`/api/posts?postId=${deletePostData.postId}`, { method: "DELETE", headers: headers, redirect: 'follow' }).then(() => {
        router.push("/");
      }).catch((x) => {
        console.log(x);
        router.push("/")
      })
    }
    return (<main className={"flex min-h-screen flex-col items-center justify-center max-w-screen mx-auto"}>
    <div className={"block mx-auto text-center font-roboto text-2xl text my-20"}>
        <h1 className={"text-6xl max-sm:text-5xl font-montserrat text-primary my-5"}>Blog Dashboard</h1>
    </div>
    <h1 className={"text-4xl max-sm:text-3xl font-montserrat text-primary my-3"}>Add Post</h1>
    <section className={"flex flex-col w-auto max-sm:w-fit h-fit"}>
      <div className={"flex flex-1 flex-grow flex-shrink flex-col gap-3 justify-start mx-auto text-center font-roboto text-2xl border-2 dark:border-orange-400 border-orange-700 rounded-3xl text p-10 my-10"}>
      <span className={"flex max-md:flex-col justify-between gap-2"}><label className={"flex flex-row justify-between max-md:justify-start items-center gap-2"}><BiIdCard/> Post ID</label><input className={"dark:bg-gray-600 bg-gray-300"} type="text" onChange={(e) => setAddPostData({ ...addPostData, postId: e.target.value })} /></span>
      <span className={"flex max-md:flex-col justify-between gap-2"}><label className={"flex flex-row justify-between max-md:justify-start items-center gap-2"}><BiBookBookmark/> Post Name</label><input className={"dark:bg-gray-600 bg-gray-300"} type="text" onChange={(e) => setAddPostData({ ...addPostData, post_name: e.target.value })} /></span>
      <span className={"flex max-md:flex-col justify-between gap-2"}><label className={"flex flex-row justify-between max-md:justify-start items-center gap-2"}><BiMessage/> Post Description</label><input className={"dark:bg-gray-600 bg-gray-300"} type="text" onChange={(e) => setAddPostData({ ...addPostData, post_description: e.target.value })} /></span>
      <span className={"flex max-md:flex-col justify-between gap-2"}><label className={"flex flex-row justify-between max-md:justify-start items-center gap-2"}><BiImage/> Post Image URL</label><input className={"dark:bg-gray-600 bg-gray-300"} type="text" onChange={(e) => setAddPostData({ ...addPostData, image_url: e.target.value })} /></span>
      <div className={"flex flex-col justify-between gap-2"}><label className={"flex flex-row justify-start max-md:justify-start items-center gap-2"}><BiBookOpen/> Post Content</label><textarea className={"text-base dark:bg-gray-600 bg-gray-300"} onChange={(e) => setAddPostData({ ...addPostData, post_content: e.target.value })} /></div>
      
      <button onClick={() => handleCreatePost(false) } className={"flex justify-center mx-auto items-center gap-2 text-center text-black dark:text-white p-2 border-2 dark:border-orange-400 border-orange-700 border-opacity-40 rounded-2xl"}><BsDatabaseAdd/> Create Post</button>
      <button onClick={() => handleCreatePost(true) } className={"flex justify-center mx-auto items-center gap-2 text-center text-black dark:text-white p-2 border-2 dark:border-orange-400 border-orange-700 border-opacity-40 rounded-2xl"}><BsDatabaseGear/> Update Post</button>
      </div>
    </section>
    <h1 className={"text-4xl max-sm:text-3xl font-montserrat text-primary my-3"}>Post Preview</h1>
    <BlogContent post={{...addPostData, posted_by: session?.user?.name || "Auxdible" } as posts} preview/>
    <div className={"max-w-md w-full h-fit"}>
      <BlogCard post={{...addPostData, posted_by: session?.user?.name || "Auxdible" } as posts} />
    </div>
    
    <h1 className={"text-4xl max-sm:text-3xl font-montserrat text-primary my-3 mt-20"}>Delete Post</h1>
    <section className={"flex flex-col max-md:flex-col max-w-lg h-fit"}>
      <div className={"flex flex-1 flex-grow flex-shrink flex-col gap-3 justify-start mx-auto text-center font-roboto text-2xl border-2 dark:border-orange-400 border-orange-700 rounded-3xl text p-10 my-10"}>
      <span className={"flex max-md:flex-col justify-between gap-3"}><label className={"flex flex-row justify-between max-md:justify-start items-center gap-2"}><BiIdCard/> Post ID</label><input className={"dark:bg-gray-600 bg-gray-300"} type="text" onChange={(e) => setDeletePostData({ postId: e.target.value })} /></span>
      <button onClick={() => handleDeletePost() } className={"flex justify-center mx-auto items-center gap-2 text-center text-black dark:text-white p-2 border-2 dark:border-orange-400 border-orange-700 border-opacity-40 rounded-2xl"}><BsDatabaseDown/> Delete Post</button>
      </div>
    </section>
    
    </main>)
}