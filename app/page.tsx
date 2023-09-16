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

export default function Home() {
  
  const { data: projects, status: projects_status, error: projects_error } = useQuery(["projects"], async () => await fetch("/api/public/projects").then(async (data) => await data.json().catch(() => [])).catch(() => []));
  const { data: posts, status: posts_status, error: posts_error } = useQuery(["posts"], async () => await fetch("/api/public/posts?limit=3").then(async (data) => await data.json().catch(() => [])).catch((x) => { console.log(x); return [];}));
  return (<>
    <Masthead/>
    <div className="flex flex-row max-lg:flex-col justify-center items-center align-middle mx-auto mb-40 lg:gap-40 overflow-hidden w-full">
    <motion.h1 initial={{ opacity: 0, transform: "translateX(-8rem)" }}
  whileInView={{ opacity: 1, transform: "translateX(0)" }} transition={{ duration: 1 }} viewport={{ once: true }} className={"text-8xl max-sm:text-5xl pt-4 font-raleway text-primary max-lg:text-center max-lg:my-10 w-fit"}>About<br/>Me</motion.h1>
    <motion.div initial={{ opacity: 0, transform: "translateX(8rem)" }}
  whileInView={{ opacity: 1, transform: "translateX(0)" }} transition={{ duration: 1 }} viewport={{ once: true }}  className={"text-lg font-montserrat py-2 text-center text lg:w-1/3 m-0"}>
            <p>Hello! My name is Auxdible. I am a seventeen-year-old Full Stack Developer and student, passionate about crafting innovative, interactive and invigorating experiences on the web! I have been studying Full Stack Development for two years and have learned numerous libraries, frameworks, and languages in my coding journey.</p>
            <br/>
            <p>I am experienced with TypeScript, Java, and numerous JavaScript frameworks, such as Next.js and React. Feel free to reach out on Social Media or Discord with any inquiries!</p>
      </motion.div>
    </div>
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
  </>);
    
}
