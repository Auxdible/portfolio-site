"use client";
import {motion} from 'framer-motion';

export function BlogPostHeader() {
    return (<div>
        <motion.h1 className="text-7xl tracking-wide max-md:text-5xl text-title font-raleway font-bold py-1 text-center">Blog Posts</motion.h1>
    </div>)
}