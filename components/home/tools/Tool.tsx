"use client";

import { IconType } from "react-icons/lib";
import { useMediaQuery } from "react-responsive";
import { motion } from 'framer-motion';
import Link from "next/link";
interface ToolProps {
    readonly Icon: IconType, 
    readonly title: string, 
    readonly description: string, 
    readonly certifications?: { Icon: IconType, title: string, link: string }[],
    readonly delay?: number
}
export default function Tool({ Icon, title, description, certifications, delay }: ToolProps) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (
        <div className={"cursor-pointer relative mx-auto flex flex-col gap-2 text text-lg items-center text-center font-extralight group dark:bg-black bg-white w-full h-32 hover:h-72 transition-all py-2 rounded-xl"}>
        <div className={"absolute -z-10 -inset-[1px] bg-gradient-to-t from-orange-400 to-red-500 rounded-xl"}></div>
        <motion.span 
        className={"bg-gradient-radial w-12 h-12 "}
        initial={{ transform: "translateY(-2rem)", opacity: 0 }} 
        viewport={{ once: true }} 
        whileInView={{ transform: "translateY(0px)", opacity: 1 }}  
        transition={{ duration: 0.5, delay: !isMobile ? delay || 0 : 0 }}
        ><div className={"absolute -z-10 bg-gradient-radial dark:from-black from-white dark:via-black via-white to-transparent w-16 -translate-x-1/2 left-1/2 h-12 group-hover:-translate-y-8 group-hover:scale-110 delay-75 transition-all"}></div><Icon className={"text-5xl  text-black dark:text-white group-hover:-translate-y-8 group-hover:scale-110 delay-75 transition-all"}/></motion.span>
        <h1 className={"text-3xl max-md:text-2xl font-montserrat text-title"}>{title}</h1>
        <section className={"flex flex-col gap-2 justify-between items-center flex-grow group-hover:flex-shrink flex-shrink-0 group-hover:scale-100 scale-0 transition-all overflow-hidden"}>
        <p>{description}</p>
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