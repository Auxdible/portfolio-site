import NotFound from "@/app/not-found";
import BlogContent from "@/components/blog/posts/BlogContent";
import Loading from "@/components/Loading";
import { getPostContent } from "@/lib/clients/s3";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
type PostProps = { params: { postId: string } };
export default async function BlogPost({ params: { postId } }: PostProps) {
    const post = await getPostContent(postId)
    return (<>
    {post ? <BlogContent post={post}/> : <main className={"flex min-h-screen flex-col items-center justify-center max-w-lg mx-auto"}><h1 className={"text-5xl max-sm:text-4xl font-montserrat text-title text-center my-3"}>Post couldn&apos;t be found.</h1></main>}
    </>)
}