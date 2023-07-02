"use client";
import Loading from "@/components/Loading";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiIdCard } from "react-icons/bi";
import { BsFilePerson, BsHammer } from "react-icons/bs";
import qs from 'querystring';

export default function User() {
    let { data: session, status} = useSession();
    const router = useRouter();
    const [banUserData, setBanUserData] = useState({ discord_id: "", discord_name: ""})
    if (status == "loading") return (<Loading/>)
    if (!session?.user?.admin) return <></>;

    async function handleBanUser() {
      var headers = new Headers();
      headers.append("Content-Type", "application/x-www-form-urlencoded");
      await fetch("/api/ban", { method: "POST", headers: headers, body: qs.encode(banUserData), redirect: 'follow' }).then(() => {
        router.push("/");
      }).catch((x) => {
        console.log(x);
        router.push("/")
      })
    }

    return (<main className={"flex min-h-screen flex-col items-center justify-center max-w-screen mx-auto"}>
    <div className={"block mx-auto text-center font-roboto text-2xl text my-20"}>
        <h1 className={"text-6xl max-sm:text-5xl font-montserrat text-primary my-5"}>Portfolio Dashboard</h1>
    </div>
    <div className={"flex justify-center max-md:flex-col gap-10 my-4"}>
    <Link href="/dashboard/projects" className={"flex text-lg justify-center items-center gap-2 text-center text-black dark:text-white p-2 border-2 dark:border-orange-400 border-orange-700 border-opacity-40 rounded-2xl font-roboto"}>📁 Projects</Link>
    <Link href="/dashboard/blog" className={"flex text-lg justify-center items-center gap-2 text-center text-black dark:text-white p-2 border-2 dark:border-orange-400 border-orange-700 border-opacity-40 rounded-2xl font-roboto"}>💬 Blog</Link>
    <button onClick={() => signOut({ redirect: true, callbackUrl: '/' }) } className={"flex text-lg justify-center items-center gap-2 text-center text-black dark:text-white p-2 border-2 dark:border-orange-400 border-orange-700 border-opacity-40 rounded-2xl font-roboto"}>👋 Sign out</button>
    </div>
    <div className={"flex flex-row max-md:flex-col max-w-lg h-fit"}>
      <div className={"flex flex-1 flex-grow flex-shrink flex-col gap-5 justify-start mx-auto text-center font-roboto text-2xl border-2 dark:border-orange-400 border-orange-700 rounded-3xl text p-10 my-10"}>
      <span className={"flex max-md:flex-col justify-between gap-3"}><label className={"flex flex-row justify-between max-md:justify-start items-center gap-2"}><BiIdCard/> ID</label><input className={"dark:bg-gray-600 bg-gray-300"} type="text" onChange={(e) => setBanUserData({ discord_id: e.target.value, discord_name: banUserData.discord_name })} /></span>
      <span className={"flex max-md:flex-col justify-between gap-3"}><label className={"flex flex-row justify-between max-md:justify-start items-center gap-2"}><BsFilePerson/> OR Name</label><input className={"dark:bg-gray-600 bg-gray-300"} type="text" onChange={(e) => setBanUserData({ discord_id: banUserData.discord_id, discord_name: e.target.value })} /></span>
      <button onClick={() => handleBanUser() } className={"flex justify-center mx-auto items-center gap-2 text-center text-black dark:text-white p-2 border-2 dark:border-orange-400 border-orange-700 border-opacity-40 rounded-2xl"}><BsHammer/> Ban/Unban User</button>
      </div>
    </div>
    </main>)
}