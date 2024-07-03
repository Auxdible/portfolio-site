import { motion } from "framer-motion"
import { BlogPostLoader } from "./BlogPostLoader";

export default function BlogPosts() {

    return (<div className={"flex flex-col gap-20 w-full overflow-x-hidden overflow-y-visible"}>
    <section>
    <section className={`flex flex-row max-md:flex-col w-full mb-40 relative`}>
      <div className={"absolute z-0 md:bg-gradient-to-b dark:from-black from-gray-50 from-10% dark:via-transparent via-transparent  dark:to-black to-white to-90% inset-0"}></div>
      <BlogPostLoader/>
    </section>
    </section>
    
    </div>)
}