"use client";
import { signIn, useSession } from "next-auth/react";
import { BsDiscord, BsPersonBadge, BsShieldCheck } from "react-icons/bs";
import { useState } from "react";
import { BiLock } from "react-icons/bi";
import Loading from "@/components/Loading";
import { useSearchParams } from "next/navigation";
import AlreadySignedIn from "@/components/signin/AlreadySignedIn";

export default function SignIn() {
    let { data: session, status } = useSession();
    const [formData, setFormData] = useState({ username: "", password: "" });
    const searchParams = useSearchParams();

    if (status == "loading") return <Loading/>;
    if (session) {
        return (<AlreadySignedIn/>)
    }
    return (<main className={"flex min-h-screen flex-col items-center justify-center max-w-lg mx-auto"}>
    <div className={"block mx-auto text-center font-roboto text-2xl text my-20"}>
        <h1 className={"text-6xl max-sm:text-5xl font-montserrat text-title my-5 py-2"}>Sign in</h1>
        <p>Sign in with Discord to comment and react to blog posts! (Comments and Reactions are currently WIP.)</p>
    </div>
    { searchParams.get("error") ? <div className={"bg-red-600 border-2 border-red-400 rounded-2xl p-5 text-xl font-roboto"}>Error: {searchParams.get("error") == "CredentialsSignin" ? "Invalid credentials!" : "There was an error attempting to sign you in."}</div> : ""}
    <div className={"block mx-auto text-center font-roboto text-2xl relative dark:bg-black bg-gray-50 rounded-3xl text p-10 my-10 w-full"}>
    <div className={"absolute -z-10 -inset-[2px] bg-gradient-to-t from-orange-400 to-red-500 rounded-3xl transition-all"}></div>
        <section className={"text-center my-3"}>
        <h1 className={"text-4xl max-sm:text-3xl font-montserrat text-title my-5"}>User</h1>
        <button onClick={() => signIn('discord', { callbackUrl:"/" }) } className={"flex justify-center mx-auto items-center gap-2 text-center bg-discord text-white p-1 border-2 border-gray-400 border-opacity-40 rounded-2xl"}><BsDiscord/> Sign in with Discord</button>
        </section>
        <section className={"text-center my-3"}>
        <h1 className={"text-4xl max-sm:text-3xl font-montserrat text-title my-5"}>Admin</h1>
        <div className={"flex flex-col gap-3 my-10"}>
        <span className={"flex max-md:flex-col justify-between gap-2"}><label className={"flex flex-row justify-between max-md:justify-start items-center gap-2"}><BsPersonBadge/> Username</label><input type="text" className={"dark:bg-gray-600 bg-gray-300"} onChange={(e) => setFormData({ username: e.target.value, password: formData.password })} /></span>
        <span className={"flex max-md:flex-col justify-between gap-2"}><label className={"flex flex-row justify-between max-md:justify-start items-center gap-2"}><BiLock/> Password</label><input className={"dark:bg-gray-600 bg-gray-300"} type="password" onChange={(e) => setFormData({ username: formData.username, password: e.target.value })} /></span>
        </div>
        <button onClick={() => signIn('credentials', { username: formData.username, password: formData.password, redirect:true, callbackUrl:"/" }, ) } className={"flex justify-center mx-auto items-center gap-2 text-center text-black dark:text-white p-2 border-2 dark:border-orange-400 border-orange-700 border-opacity-40 rounded-2xl"}><BsShieldCheck/> Sign in</button>
        </section>
    </div>
    </main>)
}
