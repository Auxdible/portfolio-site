"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeButton from "./ThemeButton";
import { useState, useEffect, useContext } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { usePathname } from "next/navigation";
import { CursorContext } from "@/context/CursorContext";
import { hoverable } from "../CursorProvider";
export default function Navbar() {
    const [collapse, setCollapse] = useState(false);
    const [previousScrollPos, setScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [mounted, setMounted ] = useState(false);
    const pathname = usePathname();
    const { setHovered } = useContext(CursorContext);

    useEffect(() => {
        if (!mounted) setMounted(true);
    }, [mounted]);
    
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
      });
    if (!mounted) return <></>;
    function onScroll() {
        const visible = previousScrollPos > window.pageYOffset;
        setScrollPos(window.pageYOffset);
        setVisible(visible);
    }
    return (<>
    <div className={`z-50 fixed left-1/2 top-0 -translate-x-1/2 max-w-4xl ${!visible ? " -translate-y-[110%] " : ""} transition-all w-full`}>
    
    <nav className={"sticky"}>
        <div className={"absolute -z-10 -inset-[1px] bg-gradient-to-t max-md:bg-gradient-to-r from-primary to-secondary md:rounded-bl-3xl md:rounded-br-3xl"}></div>
        <div className={"dark:bg-black bg-gray-100 flex flex-row justify-center max-h-32 max-md:justify-between max-md:p-1 md:gap-20 px-10 align-middle md:rounded-bl-3xl md:rounded-br-3xl"}>
        <div className={"justify-center gap-20 items-center flex flex-1 flex-grow flex-shrink-0 text-xl "}>
            <button aria-label={"Navbar Collapse"} onClick={() => setCollapse(!collapse)} className={"md:hidden max-md:text-xl text-3xl border-2 dark:border-gray-200 border-gray-700 p-2 focus:p-[10px] transition-all rounded-xl"}>
                <BiMenuAltLeft/>
            </button>
            <span className={"max-md:hidden justify-between items-center flex flex-1 flex-grow flex-shrink text-2xl font-montserrat"}>
                <Link className={"h-fit hover:before:scale-100 before:underline-custom relative  transition-all"} {...hoverable(setHovered)} href={"/blog"}>Blog</Link>
                <Link className={"max-md:hidden hover:before:scale-100 before:underline-custom relative transition-all"} {...hoverable(setHovered)} href={"/contact-me"}>Contact Me</Link>
            </span>
        </div>
        
        <Link  {...hoverable(setHovered)} className={"group flex-shrink-0"} href={pathname == "/" ? "#header" : "/"}>
            <Image
                className={"group-hover:scale-110 group-focus:scale-110 transition-all"}
                src='/icon.png'
                alt="Auxdible's icon."
                width='75'
                height='75'
                priority
            />
        </Link>
        <div className={"justify-end max-md:justify-center items-center flex flex-1 flex-grow flex-shrink text-2xl font-montserrat"}>
            
            <ThemeButton/>
            
        </div>
        </div>
        
    </nav>
    {collapse ? 
    <div className={"sticky -z-10 flex flex-col text-2xl dark:bg-gray-900 bg-gray-200 transition-transform animate-navbarCollapse font-montserrat md:hidden"}>
        <Link className={"collapse-element"} {...hoverable(setHovered)} onClick={() => setCollapse(false)} href={"/blog"}>Blog</Link>
        <Link className={"collapse-element"} {...hoverable(setHovered)} onClick={() => setCollapse(false)} href={"/contact-me"}>Contact Me</Link>
    </div> : ""}
    
    </div>
    <div className={"max-md:h-[76px]"}></div>
    </>)
}