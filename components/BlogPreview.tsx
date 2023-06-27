import converter from "@/lib/converter";
import { posts } from "@prisma/client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsShieldCheck } from "react-icons/bs";
type PostProps = { post: posts }
export default function BlogPreview({ post }: PostProps) {
    console.log(post)
    return (<Link href={`/blog/${post.post_id}`}>
    <motion.div initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }} transition={{ duration: 1.0 }} viewport={{ once: true }} className={"flex flex-col mx-auto text-center font-roboto text-2xl text my-20 border dark:border-orange-400 border-orange-700 rounded-3xl w-fit max-w-md p-4 hover:scale-105 transition-all"}>
    <h1 className={"text-2xl max-sm:text-4xl font-montserrat text-primary"}>{post.post_name}</h1>
    <p className={"block font-roboto text-xl my-2 break-words"}>{post.post_description}</p>
    <p className={"flex flex-row font-roboto justify-center text-lg dark:text-gray-400 text-gray-600 my-1 gap-1"}>{new Date(post.post_date_unix || Date.now()).toISOString().split('T')[0]} • <span className={"flex flex-row justify-center items-center gap-1"}><BsShieldCheck/> {post.posted_by}</span></p>
    </motion.div>
    </Link>)
}