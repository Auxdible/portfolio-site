"use server";

import { latestBlogPosts } from "@/lib/clients/s3";
import BlogPreview from "./BlogPreview";
import { BlogPostPayload } from "@/lib/types/BlogPostPayload";
export async function BlogPostLoader() {
    const posts = await latestBlogPosts();
    console.log("POSTS RECEIVED");
    console.log(posts);
    return <>{posts ? posts.map((post: BlogPostPayload, index: number) => <BlogPreview key={post.id} post={post} />) 
    : <p className={"text-xl font-montserrat py-2 text-center text"}>Loading posts...</p>}</>
}