"use client";

import { IconType } from "react-icons/lib";
import { useState } from 'react';
import { useMediaQuery } from "react-responsive";
import { motion } from 'framer-motion';
import Link from "next/link";
import useMetaIAB from "@/lib/hooks/useMetaIAB";
interface CategoryProps {
    readonly Icon: IconType, 
    readonly title: string, 
    readonly items: JSX.Element[],
    readonly delay?: number
}
export default function Category({ Icon, title, items, delay }: CategoryProps) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const xs = useMediaQuery({ query: '(max-width: 280px)' });
    const [toggle, setToggled] = useState(false)
    const [isIAB] = useMetaIAB();
    return (
        <article className="lg:h-80">
        <div onClick={() => setToggled(!toggle)} className={`cursor-pointer relative mx-auto flex flex-col gap-2 text text-lg items-center text-center font-extralight group dark:bg-black bg-white w-full ${toggle ? "h-80 max-sm:h-80" : `h-32 hover:h-80`} transition-all py-2 rounded-xl`}>
        <div className={"absolute -z-10 -inset-[1px] bg-gradient-to-t from-primary to-secondary rounded-xl"}></div>
        <motion.span 
        className={"relative w-12 md:h-12"}
        initial={{ transform: "translateY(-2rem)", opacity: 0 }} 
        viewport={{ once: true }} 
        whileInView={{ transform: "translateY(0px)", opacity: 1 }}  
        transition={{ duration: 0.5, delay: !isMobile ? delay || 0 : 0 }}
        >
        <div className={`absolute -z-10 bg-gradient-radial dark:from-black from-white dark:via-black via-white to-transparent rounded-full w-16 h-16 -translate-x-1/2 left-1/2 md:h-12 ${toggle ? "-translate-y-8 scale-110" : "group-hover:-translate-y-8 group-hover:scale-110"} delay-75 transition-all`}></div>
        <div className={`flex justify-center items-center text-4xl w-12 h-12 text-black border dark:border-gray-200 border-gray-900 rounded-full p-2 dark:text-white ${toggle ? "-translate-y-8 scale-125" : "group-hover:-translate-y-8 group-hover:scale-110"} delay-75 transition-all`}><Icon /></div>
        </motion.span>
        <h1 className={"text-3xl max-2xl:text-2xl max-md:text-2xl font-raleway font-semibold text-title"}>{title}</h1>
        <section className={`flex flex-col gap-2 justify-between items-center flex-grow origin-top ${toggle ? "scale-100 flex-shrink" : "group-hover:scale-100 scale-0 group-hover:flex-shrink flex-shrink-0"} transition-all overflow-hidden`}>
        {items ? <ul className="columns-2 md:gap-20 text-gray-900 dark:text-gray-50">
            {items.map((i, index) => 
            <li key={index} className="flex items-center gap-2 text-xl">
                {i}
            </li>)}
        </ul> : ""}
        </section>
        </div>
        </article>
    )
}