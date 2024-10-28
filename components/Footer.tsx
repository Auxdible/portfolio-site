"use client";

import { CursorContext } from "@/context/CursorContext";
import Link from "next/link";
import { useContext } from "react";
import { BsDiscord, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiX } from "react-icons/si";
import { hoverable } from "./CursorProvider";

export default function Footer() {
    const cursor = useContext(CursorContext)
    return (<>
    <footer className={"flex max-md:flex-col justify-between w-full border-t-2 bg-gray-100/50 py-2 border-t-gray-700/50 dark:bg-gray-950/50 px-1 gap-4 items-center"}>
        <p className={"font-raleway font-bold text w-full max-md:text-center"}>© 2024 Steven Primeaux</p>
            <span  className="flex max-sm:gap-2 gap-4 w-full justify-center text-base items-center">
                <Link {...hoverable(cursor.setHovered)} href={"https://www.instagram.com/auxdible"}><BsInstagram/></Link>
                <Link {...hoverable(cursor.setHovered)} href={"https://linkedin.com/in/steven-primeaux"}><BsLinkedin/></Link>
                <Link {...hoverable(cursor.setHovered)} href={"https://github.com/Auxdible"}><BsGithub/></Link>
                <Link {...hoverable(cursor.setHovered)} href={"https://x.com/auxdible"}><SiX/></Link>
                <br/><span className="flex items-center font-raleway ml-3 gap-2"><BsDiscord/> auxdible</span>
                </span>
        <p className={"font-raleway tracking-wide font-bold text w-full text-right max-md:text-center"}>Ecclesiates 9:10</p>
    </footer>
    </>
    )
}