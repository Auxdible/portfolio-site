import { BlogPostHeader } from "./BlogPostHeader";
import { BlogPostLoader } from "./BlogPostLoader";
import BlogPostSkeleton from "../../blog/posts/BlogPostSkeleton";

export default function BlogPosts() {

    return (<section className="flex relative flex-col pt-52 max-2xl:items-center w-full gap-20 py-20 max-md:mt-20 bg-white dark:bg-black">
      <div className="absolute w-full h-96 top-0 left-0">
      <div className="absolute w-full h-96 max-md:h-86 max-md:-my-20 top-0 left-0 z-10 bg-zinc-300 dark:bg-zinc-900" style={{
        maskImage: "url(/transition2.svg)",
        maskSize: "100% 100%",
        maskPosition: "0 -50px",
        maskRepeat: "no-repeat",
        WebkitMaskImage: "url(/transition2.svg)",
        WebkitMaskSize: "100% 100%",
        
      }}/>
      <div className="absolute w-full h-96 left-0 max-md:h-86 max-md:-my-20 top-0 bg-gradient-to-r z-0 from-primary to-60% from-15% to-secondary" style={{
        maskImage: "url(/transition2.svg)",
        maskSize: "100% 100%",
        maskPosition: "0 -40px",
        maskRepeat: "no-repeat",
        WebkitMaskImage: "url(/transition2.svg)",
        WebkitMaskSize: "100% 100%",
        
      }}/>
    </div>
      <BlogPostHeader/>
      <div className="flex max-2xl:flex-col max-2xl:items-center justify-center gap-14 max-lg:gap-20 max-sm:gap-40 max-lg:px-1">
      <BlogPostLoader/>
      </div>
      
    </section>)
}