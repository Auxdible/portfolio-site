"use client";

import Footer from '@/components/Footer';
import Secret from '@/components/Secret';
import Masthead from '@/components/home/masthead/Masthead';
import Tools from "@/components/home/tools/Tools";
import AboutMe from "@/components/home/AboutMe";
import Projects from "@/components/home/projects/Projects";
import BlogPosts from '@/components/home/blog/BlogPosts';


export default function Home() {
  

  return (<main className={"flex flex-col gap-20"}>
    <Masthead/>
    <AboutMe/>
    <Tools/>
    <BlogPosts/>
    <Projects/>
    
    <Secret/>
    <Footer/>
  </main>);
    
}
