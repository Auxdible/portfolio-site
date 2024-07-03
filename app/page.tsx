import Footer from '@/components/Footer';
import Masthead from '@/components/home/masthead/Masthead';
import AboutMe from "@/components/home/AboutMe";
import Projects from "@/components/home/projects/Projects";
import BlogPosts from '@/components/home/blog/BlogPosts';

import Certificates from '@/components/home/certifications/Certifications';
import Tools from '@/components/home/tools/Tools';


export default function Home() {
  return (<main className={`flex flex-col gap-10`}>
    <Masthead/>
    <AboutMe/>
    <Tools/>
    <Certificates/>
    <Projects/>
    <BlogPosts/>
    <Footer/>
    
  </main>);
    
}
