"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { BsDiscord, BsPersonBadge, BsPersonLock, BsShieldCheck } from "react-icons/bs";
import { useState } from "react";
import { BiLoaderCircle, BiLock } from "react-icons/bi";
import { FaWaveSquare } from "react-icons/fa";
import LoadingSpinner from "@/components/Loading";
import Loading from "@/components/Loading";
export default function SignOut() {
    
    let { data: session, status } = useSession();
    const [formData, setFormData] = useState({ username: "", password: "" });
    if (status == "loading") return <Loading/>;
    if (!session) {
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
            <p>You&apos;re not signed in.</p>
            <div className={"flex justify-center gap-10 my-4"}>
            <Link className={"flex-1 transition-color duration-100 hover:text-orange-300 flex-grow flex-shrink"} href="/">Home</Link>
            <Link className={"cursor-pointer transition-color duration-100 hover:text-orange-300 flex-1 flex-grow flex-shrink"} href="/auth/signin">Sign in</Link>
            </div>
        </div>
      </main>)
    }
    return (<main className={"flex min-h-screen flex-col items-center justify-center max-w-lg mx-auto"}>
    <div className={"block mx-auto text-center font-roboto text-2xl text my-10"}>
        <h1 className={"text-6xl max-sm:text-5xl font-montserrat text-primary my-5"}>Sign out</h1>
        <p>Sign out of Auxdible&apos;s Portfolio Site.</p>
    </div>
    <button onClick={() => signOut({ redirect: true, callbackUrl: '/' }) } className={"flex justify-center mx-auto items-center gap-2 text-center text-black dark:text-white p-2 border-2 dark:border-orange-400 border-orange-700 border-opacity-40 rounded-2xl font-roboto text-2xl"}>👋 Sign out</button>
    </main>)
}
