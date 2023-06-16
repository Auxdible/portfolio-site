"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeButton from "./ThemeButton";

export default async function Navbar() {
    return (<nav className={"flex flex-row fixed justify-center max-h-32 left-1/2 -translate-x-1/2 align-middle border-2 max-w-4xl w-full"}>
        <div className={"group md:hidden flex flex-1 flex-grow flex-shrink"}>
            Test
        </div>
        <span className={"max-md:hidden justify-center gap-20 items-center flex flex-1 flex-grow flex-shrink text-2xl"}>
            <Link className={"h-fit"} href={"/login"}>Login</Link>
            <Link className={"h-fit"} href={"/blog"}>Blog</Link>
        </span>
        <Link href={"/"}>
            <Image
                src='/icon.png'
                alt="Auxdible's icon."
                width='100'
                height='100'
                priority
            />
        </Link>
        <div className={"group md:hidden flex flex-1 flex-grow flex-shrink"}>
            Test
        </div>
        <div className={"max-md:hidden justify-center gap-20 items-center flex flex-1 flex-grow flex-shrink text-xl"}>
            
            <ThemeButton/>
            <Link href={"/contact-me"}>Contact Me</Link>
        </div>
    </nav>)
}