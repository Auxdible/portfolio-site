"use client";

import Footer from '@/components/Footer';
import Masthead from '@/components/home/masthead/Masthead';
import AboutMe from "@/components/home/AboutMe";
import Projects from "@/components/home/projects/Projects";
import BlogPosts from '@/components/home/blog/BlogPosts';
import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/home/LoadingScreen';
import Certificates from '@/components/home/certifications/Certifications';


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
    <Certificates/>
    <BlogPosts/>
    <Projects/>
    <Footer/>
  </main>);
    
}
