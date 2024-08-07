import { BlogPostHeader } from "./BlogPostHeader";
import { BlogPostLoader } from "./BlogPostLoader";
import BlogPostSkeleton from "../../blog/posts/BlogPostSkeleton";

export default function BlogPosts() {

    return (<section className="flex flex-col max-2xl:items-center gap-20 py-20">
      <BlogPostHeader/>
      <div className="flex max-2xl:flex-col max-2xl:items-center justify-center gap-14 max-lg:gap-20 max-sm:gap-40 max-lg:px-1">
      <BlogPostLoader/>
      </div>
      
    </section>)
}