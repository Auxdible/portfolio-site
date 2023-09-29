"use client";
import BlogCard from "@/components/blog/BlogCard";
import { posts } from "@prisma/client";
import { useQuery } from "react-query";

export default function Blog() {
    const { data: posts, status: posts_status, error: posts_error } = useQuery(["posts"], async () => await fetch("/api/public/posts").then(async (data) => await data.json().catch(() => [])).catch((x) => { console.log(x); return [];}));
    return (<main className={"flex min-h-screen flex-col items-center justify-center mx-auto"}>
    <div className={"block mx-auto text-center font-roboto text-2xl text my-32"}>
        <h1 className={"text-6xl max-sm:text-5xl font-montserrat h-16 text-title my-5"}>Blog Posts</h1>
        <p>View all of Auxdible&apos;s blog posts here.</p>
    </div>
    <section className={"grid grid-cols-3 max-md:grid-cols-1 gap-4 w-full mx-auto p-8 max-md:p-2 mb-40"}>
      {posts && !posts_error && posts_status == 'success' ? posts.map((post: posts) => (<BlogCard key={post.postId} post={post} />)) 
      : <p className={"text-xl font-montserrat py-2 text-center text"}>Loading posts...</p>}
    </section>
    </main>)
}