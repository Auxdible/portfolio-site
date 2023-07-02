"use client";

import BlogContent from "@/components/BlogContent";
import Loading from "@/components/Loading";
import { useQuery } from "react-query";
type PostProps = { params: { postId: string } };
export default function BlogPost({ params: { postId } }: PostProps) {
    const {data: post, status, error} = useQuery(["post_fetch"], async () => await fetch(`/api/public/posts?postId=${postId}`).then(async (data) => await data.json().catch(() => null)).catch(() => null))
    if (status == 'loading') return <Loading/>;
    return (<>
    {post && post[0] ? <BlogContent post={post[0]}/> : <main className={"flex min-h-screen flex-col items-center justify-center max-w-lg mx-auto"}><h1 className={"text-5xl max-sm:text-4xl font-montserrat text-primary my-3"}>Post couldn&apos;t be found.</h1></main>}
    </>)
}