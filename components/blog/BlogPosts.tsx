"use server";

import { BlogPostFetchOptions, fetchBlogPosts } from "@/lib/clients/s3";
import BlogPostSkeleton from "./posts/BlogPostSkeleton";
import { useMemo, useState } from "react";
import { BlogCategories } from "./BlogCategories";

interface BlogPostProps {
    readonly options?: BlogPostFetchOptions;
    readonly Component: React.ElementType;
    readonly categories?: string[];
}
export async function BlogPosts({ options, Component, categories }: BlogPostProps) {
    const posts = await fetchBlogPosts(options ?? { limit: 10 });
    
    return <div className="flex flex-col gap-20">
    <BlogCategories posts={posts}/>
    {posts ? posts.filter((i) => categories && categories.length > 0 ? categories.filter((i) => i).every((cat) => i.categories.includes(cat)) : true).map((i, index) => <Component key={index} post={i} />) : ""}
    </div>
    
}