"use client";

import Footer from '@/components/Footer';
import Secret from '@/components/Secret';
import Masthead from '@/components/home/masthead/Masthead';
import Tools from "@/components/home/tools/Tools";
import AboutMe from "@/components/home/AboutMe";
import Projects from "@/components/home/projects/Projects";
import BlogPosts from '@/components/home/blog/BlogPosts';
import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/home/LoadingScreen';


export default function Home() {
  
  const [loaded, setLoaded] = useState<"none" | "animation" | "done">("none");
  useEffect(() => {
    if (loaded == "none") {
      setLoaded("animation");
      setTimeout(() => {
        setLoaded("done");
      }, 1000);
    }
  }, [loaded]);

  return (<main className={`flex flex-col gap-20 ${loaded != "done" ? "h-screen w-screen overflow-hidden" : ""}`}>
    {loaded != "done" ? <LoadingScreen loaded={loaded != "none"}/> : ""}
    <Masthead/>
    <AboutMe/>
    <Tools/>
    <BlogPosts/>
    <Projects/>
    <Footer/>
  </main>);
    
}
