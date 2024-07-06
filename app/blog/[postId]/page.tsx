import BlogContent from "@/components/blog/posts/BlogContent";
import { getPostContent } from "@/lib/clients/s3";

type PostProps = { params: { postId: string } };
export default async function BlogPost({ params: { postId } }: PostProps) {
    const post = await getPostContent(postId);
    return (<>
    {post ? <BlogContent post={post}/> : <main className={"flex min-h-screen flex-col items-center justify-center max-w-lg mx-auto"}><h1 className={"text-5xl max-sm:text-4xl font-montserrat text-title text-center my-3"}>Post couldn&apos;t be found.</h1></main>}
    </>)
}