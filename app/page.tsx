"use client";

import { motion } from "framer-motion"
import Footer from '@/components/Footer';
import { posts, projects } from '@prisma/client';
import { useQuery } from 'react-query';
import Project from '@/components/Project';
import BlogPreview from '@/components/BlogPreview';
import Secret from '@/components/Secret';
import Masthead from '@/components/home/masthead/Masthead';
import Tools from "@/components/home/Tools";
import HoverableTextContent from "@/components/HoverableTextContent";
import Image from "next/image";
import { BsCode } from "react-icons/bs";
import AboutMe from "@/components/home/AboutMe";

export default function Home() {
  
  const { data: projects, status: projects_status, error: projects_error } = useQuery(["projects"], async () => await fetch("/api/public/projects").then(async (data) => await data.json().catch(() => [])).catch(() => []));
  const { data: posts, status: posts_status, error: posts_error } = useQuery(["posts"], async () => await fetch("/api/public/posts?limit=3").then(async (data) => await data.json().catch(() => [])).catch((x) => { console.log(x); return [];}));
  return (<main className={"flex flex-col gap-20"}>
    <Masthead/>
    <AboutMe/>
    <Tools/>
    <div className={"flex flex-col gap-40 w-full my-20"}>
    <motion.h1 initial={{ opacity: 0, transform: "translateY(-8rem)" }}
  whileInView={{ opacity: 1, transform: "translateY(0)" }} transition={{ duration: 1 }} viewport={{ once: true }} className={"text-6xl text-center font-raleway text-primary w-full"}>Latest Posts</motion.h1>
    <section className={"border overflow-hidden dark:border-orange-400 border-orange-700 rounded-3xl max-w-lg mx-auto p-8 mb-40"}>
      {posts && !posts_error && posts_status == 'success' ? posts.map((post: posts) => (<BlogPreview key={post.postId} post={post} />)) 
      : <p className={"text-xl font-montserrat py-2 text-center text"}>Loading posts...</p>}
    </section>
    </div>

    <div className={"flex flex-col gap-40 w-full my-20 "}>
    <motion.h1 initial={{ opacity: 0, transform: "translateY(-8rem)" }}
  whileInView={{ opacity: 1, transform: "translateY(0)" }} transition={{ duration: 1 }} viewport={{ once: true }} className={"text-6xl text-center font-raleway text-primary w-full"}>My Projects</motion.h1>
    <section className={"overflow-hidden"}>
      {projects && !projects_error && projects_status == 'success' ? projects.map((project: projects) => (<Project key={project.project_id} project={project} />)) 
      : <p className={"text-xl font-montserrat py-2 text-center text"}>Loading projects...</p>}
    </section>
    </div>
    <Secret/>
    <Footer/>
  </main>);
    
}
