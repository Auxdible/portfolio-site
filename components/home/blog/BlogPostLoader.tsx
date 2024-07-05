"use server";

import { fetchBlogPosts } from "@/lib/clients/s3";
import BlogPreview from "./BlogPreview";
import { BlogPostPayload } from "@/lib/types/BlogPostPayload";
export async function BlogPostLoader() {
    const posts = await fetchBlogPosts({ limit: 10 });
    console.log("POSTS RECEIVED");
    console.log(posts);
    return <>{posts ? posts.map((post: BlogPostPayload, index: number) => <BlogPreview key={post.id} post={post} />) 
    : <p className={"text-xl font-montserrat py-2 text-center text"}>Loading posts...</p>}</>
}