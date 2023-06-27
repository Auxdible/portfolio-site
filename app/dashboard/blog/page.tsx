"use client";
import Loading from "@/components/Loading";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function BlogDashboard() {
    let { data: session, status} = useSession();
    if (status == "loading") return (<Loading/>)
    if (!session || !session.user) {
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
      </main>);
    }
    return (<main className={"flex min-h-screen flex-col items-center justify-center max-w-screen mx-auto"}>
    <div className={"block mx-auto text-center font-roboto text-2xl text my-20"}>
        <h1 className={"text-6xl max-sm:text-5xl font-montserrat text-primary my-5"}>Blog Dashboard</h1>
    </div>
    
    </main>)
}