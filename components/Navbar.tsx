"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeButton from "./ThemeButton";
import { useState } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { useScroll } from 'framer-motion';
export default function Navbar() {
    const [collapse, setCollapse] = useState(false);
    const { scrollY } = useScroll();
    return (<>
    <div className={`z-10 fixed left-1/2 -translate-x-1/2 max-w-4xl w-full`}>
    <nav className={"sticky dark:bg-black bg-gray-100 flex flex-row justify-center max-h-32 align-middle border border-t-0 dark:border-orange-400 border-orange-700 md:rounded-bl-3xl  md:rounded-br-3xl"}>
        <div className={"justify-center gap-20 items-center flex flex-1 flex-grow flex-shrink text-xl"}>
            <button onClick={() => setCollapse(!collapse)} className={"md:hidden max-md:text-xl text-3xl border-2 dark:border-gray-200 border-gray-700 p-2 focus:p-[10px] transition-all rounded-xl"}>
                <BiMenuAltLeft/>
            </button>
            <span className={"max-md:hidden justify-center gap-20 items-center flex flex-1 flex-grow flex-shrink text-2xl font-montserrat"}>
                <Link className={"h-fit hover:text-orange-500 hover:translate-y-1 transition-all"} href={"/login"}>Login</Link>
                <Link className={"h-fit hover:text-orange-500 hover:translate-y-1 transition-all"} href={"/blog"}>Blog</Link>
            </span>
        </div>
        
        <Link className={"group"} href={"/"}>
            <Image
                className={"group-hover:scale-110 group-focus:scale-110 transition-all"}
                src='/icon.png'
                alt="Auxdible's icon."
                width='75'
                height='75'
                priority
            />
        </Link>
        <div className={"justify-center gap-20 items-center flex flex-1 flex-grow flex-shrink text-2xl font-montserrat"}>
            <Link className={"max-md:hidden hover:text-orange-500 hover:translate-y-1 transition-all"} href={"/contact-me"}>Contact Me</Link>
            <ThemeButton/>
            
        </div>
    </nav>
    {collapse ? 
    <div className={"sticky -z-10 flex flex-col text-2xl dark:bg-gray-900 bg-gray-200 transition-transform animate-navbarCollapse font-montserrat"}>
        <Link className={"collapse-element"} href={"/login"}>Login</Link>
        <Link className={"collapse-element"} href={"/blog"}>Blog</Link>
        <Link className={"collapse-element"} href={"/contact-me"}>Contact Me</Link>
    </div> : ""}
    
    </div>
    <div className={"max-md:h-[76px]"}></div>
    </>)
}