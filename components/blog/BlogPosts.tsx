"use server";

import { BlogPostFetchOptions, fetchBlogPosts } from "@/lib/clients/s3";
import BlogPostSkeleton from "./posts/BlogPostSkeleton";

interface BlogPostProps {
    readonly options?: BlogPostFetchOptions;
    readonly Component: React.ElementType;
}
export async function BlogPosts({ options, Component }: BlogPostProps) {
    const posts = await fetchBlogPosts(options ?? { limit: 10 });
    return <>{posts ? posts.map((i, index) => <Component key={index} post={i} />) : ""}</>
    
}