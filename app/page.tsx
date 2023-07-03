"use client";

import Image from 'next/image'
import { motion } from "framer-motion"
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import { Glasses } from '@/components/Glasses';
import Footer from '@/components/Footer';
import { posts, projects } from '@prisma/client';
import { useQuery } from 'react-query';
import Project from '@/components/Project';
import BlogPreview from '@/components/BlogPreview';
import { types } from 'util';

export default function Home() {
  const [gradient, setGradient] = useState({ randomColor1: "#fd644f", randomColor2: "#ff9d00"});
  const { data: projects, status: projects_status, error: projects_error } = useQuery(["projects"], async () => await fetch("/api/public/projects").then(async (data) => await data.json().catch(() => [])).catch(() => []));
  const { data: posts, status: posts_status, error: posts_error } = useQuery(["posts"], async () => await fetch("/api/public/posts?limit=3").then(async (data) => await data.json().catch(() => [])).catch((x) => { console.log(x); return [];}));
  const [typeState, setTypeState] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (!mounted) setMounted(true)
    if (mounted && typeState < "Auxdible".length) {
      setTimeout(() => {
        setTypeState(typeState + 1);
      }, 250)
    }
  }, [typeState, mounted]);
  function changeGradient() {
    setGradient({ randomColor1: '#' + Math.floor(Math.random()*16777215).toString(16), randomColor2: '#' + Math.floor(Math.random()*16777215).toString(16) })
  }
  return (<>
  <header className="flex flex-row max-md:flex-col min-h-screen w-full items-center mx-auto max-md:my-16">
      <div className={"flex flex-col justify-center gap-5 flex-1 flex-grow font-roboto text-2xl text"}>
          <section className={"max-md:text-center mx-auto"}>
          <h1 className={"text-9xl max-sm:text-6xl pt-4 font-raleway text-primary"}>{"Auxdible".split("").slice(0, typeState)}{mounted && typeState < "Auxdible".length ? <span className={"animate-blink"}>_</span> : ""}</h1>
          <p className={`text-4xl max-sm:text-3xl font-montserrat py-2 transition-all duration-500 delay-500 ${typeState >= "Auxdible".length ? "opacity-100" : "opacity-0"}`}>Full Stack Developer</p>
          <p className={`text-2xl max-sm:text-xl font-roboto dark:text-gray-400 text-gray-600 italic transition-all duration-500 delay-1000 ${typeState >= "Auxdible".length ? "opacity-100" : "opacity-0"}`}>(a.k.a. Steven Primeaux)</p>
          </section>
          
      </div>
      <div className={"flex flex-1 flex-grow flex-shrink max-md:w-screen md:h-screen"}>
        <div className={"w-full"}>
        { /* I have no idea what this is, how it works, or why it works. I just know it works. 
        That's all you and I need to know. Sure it makes a js pointerId undefined error that anyone can see in the logs. 
        but it doesn't affect the site.
        SO IGNORE IT! */}
        <Canvas ref={(node) => {
          if (node) node.style.setProperty("touch-action", "pan-y", "important")
        }} className={"canvas-wrapper"} style={ { position: "relative"} }>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
          <ambientLight intensity={1} />
          <perspectiveCamera/>
          <Suspense fallback={null}>
            <Glasses frustumCulled={false} rotation={[89,0,0]} {...gradient} />
          </Suspense>
        </Canvas>
        </div>
      </div>
    </header>
    <button onClick={() => changeGradient() } className={"block font-roboto text-3xl text mx-auto w-fit border max-sm:text-xl dark:border-orange-400 border-orange-700 p-2 rounded-lg mb-72"}>Change glasses gradient 😎</button>
    <motion.div initial={{ opacity: 0, transform: "translateY(-8rem)" }}
  whileInView={{ opacity: 1, transform: "translateY(0)" }} transition={{ duration: 2 }} viewport={{ once: true }} className="flex flex-row max-md:flex-col max-w-5xl items-center mx-auto mb-40">
    <h1 className={"text-8xl max-sm:text-5xl pt-4 font-raleway text-primary flex-1 flex-grow flex-shrink max-md:text-center max-md:my-10"}>About<br/>Me</h1>
    <div className={"flex flex-1 flex-grow flex-shrink max-md:w-screen"}>
        <div className={"w-full"}>
          <div className={"text-lg font-montserrat py-2 max-md:text-center text"}>
            <p>Hello! My name is Auxdible. I am a seventeen-year-old Full Stack Developer and student, passionate about crafting innovative, interactive and invigorating experiences on the web! I have been studying Full Stack Development for two years and have learned numerous libraries, frameworks, and languages in my coding journey.</p>
            <br/>
            <p>I am experienced with TypeScript, Java, and numerous JavaScript frameworks, such as Next.js and React. Feel free to reach out on Social Media or Discord with any inquiries!</p>
          </div>
        </div>
      </div>
    </motion.div>

    <div className={"flex flex-col gap-40 w-full my-20"}>
    <motion.h1 initial={{ opacity: 0, transform: "translateY(-8rem)" }}
  whileInView={{ opacity: 1, transform: "translateY(0)" }} transition={{ duration: 2 }} viewport={{ once: true }} className={"text-6xl text-center max-sn:text-4xl font-raleway text-primary w-full"}>Latest Posts</motion.h1>
    <section className={"border dark:border-orange-400 border-orange-700 rounded-3xl max-w-lg mx-auto p-8 mb-40"}>
      {posts && !posts_error && posts_status == 'success' ? posts.map((post: posts) => (<BlogPreview key={post.postId} post={post} />)) 
      : <p className={"text-xl font-montserrat py-2 text-center text"}>Loading posts...</p>}
    </section>
    </div>

    <div className={"flex flex-col gap-40 w-full my-20"}>
    <motion.h1 initial={{ opacity: 0, transform: "translateY(-8rem)" }}
  whileInView={{ opacity: 1, transform: "translateY(0)" }} transition={{ duration: 2 }} viewport={{ once: true }} className={"text-6xl text-center max-sn:text-4xl font-raleway text-primary w-full"}>My Projects</motion.h1>
    <section>
      {projects && !projects_error && projects_status == 'success' ? projects.map((project: projects) => (<Project key={project.project_id} project={project} />)) 
      : <p className={"text-xl font-montserrat py-2 text-center text"}>Loading projects...</p>}
    </section>
    </div>
    <Footer/>
  </>);
    
}
