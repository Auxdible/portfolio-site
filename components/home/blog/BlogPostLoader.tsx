"use server";

import { fetchBlogPosts } from "@/lib/clients/s3";
import BlogPreview from "./BlogPreview";
import { BlogPostPayload } from "@/lib/types/BlogPostPayload";
import LatestBlogPost from "./LatestBlogPost";
import { Suspense } from "react";
export async function BlogPostLoader() {
    const posts = await fetchBlogPosts({ limit: 5 });
    return <Suspense fallback={<p className={"text-xl font-montserrat py-2 text-center text"}>Loading posts...</p>}>
    {posts[0] && <LatestBlogPost post={posts[0]}/>}

    <ul className="flex flex-col w-full items-center max-w-4xl gap-5 max-lg:gap-10 2xl:border-l dark:border-gray-800/70 border-gray-400/70">
    {posts.slice(1).map((post: BlogPostPayload) => <BlogPreview key={post.id} post={post} />) }
    </ul>
    
    </Suspense>
}