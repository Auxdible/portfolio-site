
import BlogCard from "@/components/blog/BlogCard";
import { BlogPosts } from "@/components/blog/BlogPosts";
import { fetchBlogPosts } from "@/lib/clients/s3";
import { posts } from "@prisma/client";
import { Suspense } from "react";
import { useQuery } from "react-query";

export default function Blog() {

    return (<main className={"flex min-h-screen flex-col items-center justify-center mx-auto"}>
    <div className={"block mx-auto text-center font-roboto text-2xl text my-32"}>
        <h1 className={"text-6xl max-sm:text-5xl font-montserrat h-16 text-title my-5"}>Blog Posts</h1>
        <p>View all of Auxdible&apos;s blog posts here.</p>
    </div>
    <section className={"grid grid-cols-3 max-md:grid-cols-1 gap-4 w-full mx-auto p-8 max-md:p-2 mb-40"}>
      <Suspense fallback={<p className={"text-xl font-montserrat py-2 text-center text"}>Loading posts...</p>}>
        <BlogPosts Component={BlogCard} options={{ limit: 10 }}/>
      </Suspense>
    </section>
    </main>)
}