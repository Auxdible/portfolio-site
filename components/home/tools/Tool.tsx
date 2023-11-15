"use client";

import { IconType } from "react-icons/lib";
import { useState } from 'react';
import { useMediaQuery } from "react-responsive";
import { motion } from 'framer-motion';
import Link from "next/link";
import useMetaIAB from "@/lib/hooks/useMetaIAB";
interface ToolProps {
    readonly Icon: IconType, 
    readonly title: string, 
    readonly description: string, 
    readonly certifications?: { Icon: IconType, title: string, link: string }[],
    readonly delay?: number
}
export default function Tool({ Icon, title, description, certifications, delay }: ToolProps) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const xs = useMediaQuery({ query: '(max-width: 280px)' });
    const [toggle, setToggled] = useState(false)
    const [isIAB] = useMetaIAB();
    return (
        <div onClick={() => setToggled(!toggle)} className={`cursor-pointer relative mx-auto flex flex-col gap-2 text text-lg items-center text-center font-extralight group dark:bg-black bg-white w-full ${toggle ? "h-80 max-sm:h-80" : `h-32 hover:h-80`} transition-all py-2 rounded-xl`}>
        <div className={"absolute -z-10 -inset-[1px] bg-gradient-to-t from-orange-400 to-red-500 rounded-xl"}></div>
        <motion.span 
        className={"relative w-12 md:h-12"}
        initial={{ transform: "translateY(-2rem)", opacity: 0 }} 
        viewport={{ once: true }} 
        whileInView={{ transform: "translateY(0px)", opacity: 1 }}  
        transition={{ duration: 0.5, delay: !isMobile ? delay || 0 : 0 }}
        >
        <div className={`absolute -z-10 bg-gradient-radial dark:from-black from-white dark:via-black via-white to-transparent w-16 h-16 -translate-x-1/2 left-1/2 md:h-12 ${toggle ? "-translate-y-8 scale-110" : "group-hover:-translate-y-8 group-hover:scale-110"} delay-75 transition-all`}></div><Icon className={`text-5xl text-black dark:text-white ${toggle ? "-translate-y-8 scale-125" : "group-hover:-translate-y-8 group-hover:scale-110"} delay-75 transition-all`}/></motion.span>
        <h1 className={"text-3xl max-md:text-2xl font-montserrat text-title"}>{title}</h1>
        <section className={`flex flex-col gap-2 justify-between items-center flex-grow origin-top ${toggle ? "scale-100 flex-shrink" : "group-hover:scale-100 scale-0 group-hover:flex-shrink flex-shrink-0"} transition-all overflow-hidden`}>
        <p className={"font-inter px-4"}>{description}</p>
        {certifications ? <ul>
            {certifications.map((i, index) => 
            <li key={index}>
                <span className={"flex flex-row gap-2 items-center"}>
                    • <i.Icon/> 
                    {i.link ? <Link href={i.link}>{i.title}</Link> : i.title }
                    </span>
            </li>)}
        </ul> : ""}
        </section>
        </div>
    )
}