"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeButton from "./ThemeButton";
import { useState, useEffect, useContext, useRef } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { usePathname } from "next/navigation";
import { CursorContext } from "@/context/CursorContext";
import { hoverable } from "../CursorProvider";
import { BsDiscord, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiX } from "react-icons/si";
export default function Navbar() {
    const [collapse, setCollapse] = useState(false);
    const [previousScrollPos, setScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [mounted, setMounted ] = useState(false);
    const pathname = usePathname();
    const ref = useRef<HTMLDivElement | null>(null);
    const { setHovered } = useContext(CursorContext);

    useEffect(() => {
        if (!mounted) setMounted(true);
    }, [mounted]);
    function changeCollapse() {
        if (collapse) {
            document.body.classList.remove("overflow-y-hidden")
            setCollapse(false);
            if (ref.current) {
                ref.current.animate([{
                    transform: "translateX(0)",
                    opacity: 1,
                }, {
                    transform: "translateX(-100%)",
                    opacity: 0,
                    
                }], {
                    duration: 400,
                    easing: "ease-in-out",
                    fill: "forwards"
                })
            } 
           
        } else {
            document.body.classList.add("overflow-y-hidden")
            setCollapse(true);
            if (ref.current) {
                ref.current.animate([{
                transform: "translateX(-100%)",
                opacity: 0,
            }, {
                transform: "translateX(0)",
                opacity: 1,
            }], {
                duration: 400,
                easing: "ease-in-out",
                fill: "forwards"
            })
         }
        }
    }
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
            <button aria-label={"Navbar Collapse"} onClick={changeCollapse} className={"md:hidden max-md:text-xl text-3xl border dark:border-gray-200 border-gray-700 p-2 focus:p-[10px] transition-all rounded-xl"}>
                <BiMenuAltLeft/>
            </button>
            <span className={"max-md:hidden justify-between items-center flex flex-1 flex-grow flex-shrink text-2xl font-montserrat"}>
                <Link className={"h-fit hover:before:scale-100 before:underline-custom relative  transition-all"} {...hoverable(setHovered)} href={'/'}>Coming Soon</Link>
                <Link className={"h-fit hover:before:scale-100 before:underline-custom relative  transition-all"} {...hoverable(setHovered)} href={"/blog"}>Blog</Link>
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
        <div className={"justify-between max-md:justify-center items-center flex flex-1 flex-grow flex-shrink text-2xl font-montserrat"}>
            <Link className={"max-md:hidden hover:before:scale-100 before:underline-custom relative transition-all"} {...hoverable(setHovered)} href={"/contact-me"}>Contact Me</Link>
            <ThemeButton/>
        </div>
        </div>
        
    </nav>

    <div ref={ref} className={"sticky -z-10 flex flex-col text-2xl transition-transform font-montserrat md:hidden -translate-x-full"}>
        <nav className="h-[calc(100dvh-76px)] w-screen bg-white dark:bg-black flex flex-col items-center justify-center">
            <div className="flex flex-col gap-2 w-full pl-5 mt-auto">
                <Link {...hoverable(setHovered)} className="font-raleway font-bold text-3xl" onClick={changeCollapse} href={"/blog"}>Blog</Link>
                <Link {...hoverable(setHovered)} className="font-raleway font-bold text-3xl" onClick={changeCollapse} href={"/contact-me"}>Contact Me</Link>
                <Link {...hoverable(setHovered)} className="font-raleway font-bold text-3xl" onClick={changeCollapse} href={"/"}>Coming Soon</Link>
            </div>
            <div className="w-full mt-auto flex flex-col gap-2 mb-8">
                <span className="relative">
                <span className="bg-white dark:bg-black z-10 relative px-1 ml-5 text-gray-800 dark:text-gray-200">Contact Me</span>
                <div className="w-screen border-b absolute top-1/2 z-0 dark:border-gray-200 border-gray-800"/>
                </span>
                
                <span  className="flex gap-4 w-full pl-5 text-base items-center">
                <Link href={"https://www.instagram.com/auxdible"}><BsInstagram/></Link>
                <Link href={"https://linkedin.com/in/steven-primeaux"}><BsLinkedin/></Link>
                <Link href={"https://github.com/Auxdible"}><BsGithub/></Link>
                <Link href={"https://x.com/auxdible"}><SiX/></Link>
                <span className="flex items-center font-raleway ml-3 gap-2"><BsDiscord/> auxdible</span>
                </span>
            </div>
            <span className="my-1 text-base text-gray-500 font-bold font-raleway mr-auto pl-1">© 2024 Steven Primeaux</span>
        </nav>
        
    </div>
    
    </div>
    <div className={"max-md:h-[76px]"}></div>
    </>)
}