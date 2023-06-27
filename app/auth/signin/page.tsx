"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { BsDiscord, BsPersonBadge, BsPersonLock, BsShieldCheck } from "react-icons/bs";
import { useState } from "react";
import { BiLock } from "react-icons/bi";
import Loading from "@/components/Loading";
export default function SignIn() {
    
    let { data: session, status } = useSession();
    const [formData, setFormData] = useState({ username: "", password: "" });
    if (status == "loading") return <Loading/>;
    if (session) {
        return (<main className="flex min-h-screen flex-col items-center justify-center max-w-lg mx-auto">
        <div className={"block mx-auto text-center font-roboto text-2xl text"}>
            <Image
              className={"mx-auto rounded-full border-2 p-2 border-orange-400"}
              src='/icon.png'
              alt="Auxdible's icon."
              width='150'
              height='150'
            />
            <h1 className={"text-4xl p-4 text-orange font-montserrat text-primary"}>Oops!</h1>
            <p>You&apos;re already signed in.</p>
            <div className={"flex justify-center gap-10 my-4"}>
            <Link className={"flex-1 transition-color duration-100 hover:text-orange-300 flex-grow flex-shrink"} href="/">Home</Link>
            <a className={"cursor-pointer transition-color duration-100 hover:text-orange-300 flex-1 flex-grow flex-shrink"} onClick={() => signOut()}>Sign out</a>
            </div>
        </div>
      </main>)
    }
    return (<main className={"flex min-h-screen flex-col items-center justify-center max-w-lg mx-auto"}>
    <div className={"block mx-auto text-center font-roboto text-2xl text my-20"}>
        <h1 className={"text-6xl max-sm:text-5xl font-montserrat text-primary my-5"}>Sign in</h1>
        <p>Sign in with Discord to comment and react to blog posts!</p>
    </div>
    <div className={"block mx-auto text-center font-roboto text-2xl border-2 dark:border-orange-400 border-orange-700 rounded-3xl text p-10 my-10 w-full"}>
        <section className={"text-center my-3"}>
        <h1 className={"text-4xl max-sm:text-3xl font-montserrat text-primary my-5"}>User</h1>
        <button onClick={() => signIn('discord', { callbackUrl:"/" }) } className={"flex justify-center mx-auto items-center gap-2 text-center bg-discord text-black dark:text-white p-1 border-2 border-gray-400 border-opacity-40 rounded-2xl"}><BsDiscord/> Sign in with Discord</button>
        </section>
        <section className={"text-center my-3"}>
        <h1 className={"text-4xl max-sm:text-3xl font-montserrat text-primary my-5"}>Admin</h1>
        <div className={"flex flex-col gap-3 my-10"}>
        <span className={"flex max-md:flex-col justify-between"}><label className={"flex flex-row justify-between max-md:justify-start items-center gap-2"}><BsPersonBadge/> Username</label><input type="text" className={"dark:bg-gray-600 bg-gray-300"} onChange={(e) => setFormData({ username: e.target.value, password: formData.password })} /></span>
        <span className={"flex max-md:flex-col justify-between"}><label className={"flex flex-row justify-between max-md:justify-start items-center gap-2"}><BiLock/> Password</label><input className={"dark:bg-gray-600 bg-gray-300"} type="password" onChange={(e) => setFormData({ username: formData.username, password: e.target.value })} /></span>
        </div>
        <button onClick={() => signIn('credentials', { username: formData.username, password: formData.password, redirect:true, callbackUrl:"/" }, ) } className={"flex justify-center mx-auto items-center gap-2 text-center text-black dark:text-white p-2 border-2 dark:border-orange-400 border-orange-700 border-opacity-40 rounded-2xl"}><BsShieldCheck/> Sign in</button>
        </section>
    </div>
    </main>)
}
