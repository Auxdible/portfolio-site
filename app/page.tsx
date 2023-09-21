"use client";

import { motion } from "framer-motion"
import Footer from '@/components/Footer';
import { posts } from '@prisma/client';
import { useQuery } from 'react-query';
import BlogPreview from '@/components/home/blog/BlogPreview';
import Secret from '@/components/Secret';
import Masthead from '@/components/home/masthead/Masthead';
import Tools from "@/components/home/tools/Tools";
import AboutMe from "@/components/home/AboutMe";
import Projects from "@/components/home/projects/Projects";
import LatestBlogPost from "@/components/home/blog/LatestBlogPost";

export default function Home() {
  
  const { data: posts, status: posts_status, error: posts_error } = useQuery(["posts"], async () => await fetch("/api/public/posts?limit=4").then(async (data) => await data.json().catch(() => [])).catch((x) => { console.log(x); return [];}));
  return (<main className={"flex flex-col gap-20"}>
    <Masthead/>
    <AboutMe/>
    <Tools/>
    <div className={"flex flex-col w-full mt-20"}>
    <motion.h1 
        initial={{ opacity: 0, transform: "translateY(-8rem)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }} 
        transition={{ duration: 1 }} viewport={{ once: true }} 
        className={"text-8xl max-md:text-6xl text-title font-raleway font-medium w-fit mx-auto mb-20 h-32"}>Blog Posts</motion.h1>
    {posts?.length != 0 && posts ? <LatestBlogPost post={posts[0]} /> : ""}
    <section className={"flex flex-row max-md:flex-col w-full mb-40 relative"}>
      <div className={"absolute z-0 md:bg-gradient-to-b dark:from-black from-gray-50 from-1% dark:via-transparent via-transparent via-2% dark:to-black to-white to-99% inset-0"}></div>
      {posts && !posts_error && posts_status == 'success' ? posts.map((post: posts, index: number) => (index != 0 ? <BlogPreview key={post.postId} post={post} /> : "")) 
      : <p className={"text-xl font-montserrat py-2 text-center text"}>Loading posts...</p>}
    </section>
    </div>
    <Projects/>
    
    <Secret/>
    <Footer/>
  </main>);
    
}
