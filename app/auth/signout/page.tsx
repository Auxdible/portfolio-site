"use client";
import { signOut, useSession } from "next-auth/react";
import Loading from "@/components/Loading";
import AlreadySignedOut from "@/components/signout/AlreadySignedOut";
export default function SignOut() {
    
    let { data: session, status } = useSession();
    if (status == "loading") return <Loading/>;
    if (!session) {
        return (<AlreadySignedOut/>)
    }
    return (<main className={"flex min-h-screen flex-col items-center justify-center max-w-lg mx-auto"}>
    <div className={"block mx-auto text-center font-roboto text-2xl text my-10"}>
        <h1 className={"text-6xl max-sm:text-5xl font-montserrat text-title my-5 py-2"}>Sign out</h1>
        <p>Sign out of Auxdible&apos;s Portfolio Site.</p>
    </div>
    <button onClick={() => signOut({ redirect: true, callbackUrl: '/' }) } className={"flex justify-center mx-auto items-center gap-2 text-center text-black dark:text-white p-2 border-2 dark:border-orange-400 border-orange-700 border-opacity-40 rounded-2xl font-roboto text-2xl"}>👋 Sign out</button>
    </main>)
}
