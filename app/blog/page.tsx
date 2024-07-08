
import { BlogPosts } from "@/components/blog/BlogPosts";
import BlogPostSkeleton from "@/components/blog/posts/BlogPostSkeleton";
import BlogPreview from "@/components/home/blog/BlogPreview";
import { Suspense } from "react";


export default function Blog() {

    return (<main className={"flex min-h-screen flex-col items-center justify-center mx-auto"}>
    <div className={"flex flex-col gap-1 mx-auto text-center font-lato text-2xl text mt-40 mb-10  "}>
        <h1 className={"text-6xl max-sm:text-5xl font-raleway font-bold h-16 text-title"}>Blog Posts</h1>
        <p>View all of Auxdible&apos;s blog posts here.</p>
    </div>
    <section className={"flex flex-col max-w-6xl gap-4 w-full mx-auto p-8 max-md:p-2 mb-40"}>
      <Suspense fallback={<>
        <BlogPostSkeleton/>
        <BlogPostSkeleton/>
        <BlogPostSkeleton/>
        <BlogPostSkeleton/>
        <BlogPostSkeleton/>
        </>}>
        <BlogPosts Component={BlogPreview} options={{ limit: 10 }}/>
      </Suspense>
    </section>
    </main>)
}