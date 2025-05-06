import Footer from '@/components/Footer';
import Masthead from '@/components/home/masthead/Masthead';

/*import Projects from "@/components/home/projects/Projects";
import BlogPosts from '@/components/home/blog/BlogPosts';

import Certificates from '@/components/home/certifications/Certifications';
import Tools from '@/components/home/tools/Tools';*/
import { lazy } from 'react';

const AboutMe = lazy(() => import('@/components/home/AboutMe'))
const Projects = lazy(() => import('@/components/home/projects/Projects'))
const BlogPosts = lazy(() => import('@/components/home/blog/BlogPosts'))
const Certificates = lazy(() => import('@/components/home/certifications/Certifications'))
const Tools = lazy(() => import('@/components/home/tools/Tools'))
export default function Home() {
  return (<main className={`flex flex-col bg-zinc-300 dark:bg-zinc-900`}>
    <Masthead/>
    <AboutMe/>
    <Tools/>
    <BlogPosts/>
    <Projects/>
    <Certificates/>
    
    
    <Footer/>
    
  </main>);
    
}
