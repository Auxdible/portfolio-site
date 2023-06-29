"use client";
import Loading from "@/components/Loading";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function User() {
    let { data: session, status} = useSession();
    if (status == "loading") return (<Loading/>)
    return (<main className={"flex min-h-screen flex-col items-center justify-center max-w-screen mx-auto"}>
    <div className={"block mx-auto text-center font-roboto text-2xl text my-20"}>
        <h1 className={"text-6xl max-sm:text-5xl font-montserrat text-primary my-5"}>Portfolio Dashboard</h1>
    </div>
    <div className={"flex justify-center max-md:flex-col gap-10 my-4"}>
    <Link href="/dashboard/projects" className={"flex text-lg justify-center items-center gap-2 text-center text-black dark:text-white p-2 border-2 dark:border-orange-400 border-orange-700 border-opacity-40 rounded-2xl font-roboto"}>📁 Projects</Link>
    <Link href="/dashboard/blog" className={"flex text-lg justify-center items-center gap-2 text-center text-black dark:text-white p-2 border-2 dark:border-orange-400 border-orange-700 border-opacity-40 rounded-2xl font-roboto"}>💬 Blog</Link>
    <button onClick={() => signOut({ redirect: true, callbackUrl: '/' }) } className={"flex text-lg justify-center items-center gap-2 text-center text-black dark:text-white p-2 border-2 dark:border-orange-400 border-orange-700 border-opacity-40 rounded-2xl font-roboto"}>👋 Sign out</button>
    </div>
    
    </main>)
}