"use client";
import Loading from "@/components/Loading";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from 'react-query';
import { useState } from 'react';
import { BiBookBookmark, BiCalendar, BiCode, BiIdCard, BiImageAdd, BiMessage, BiWifi } from "react-icons/bi";
import Project from "@/components/Project";
import { projects } from "@prisma/client";
import { BsDatabaseAdd, BsDatabaseDown, BsDatabaseGear } from "react-icons/bs";
import qs from 'querystring';
import { useRouter } from "next/navigation";
export default function ProjectsDashboard() {
    const { data: session, status: session_status } = useSession();
    const router = useRouter();
    const [addProjectData, setAddProjectData] = useState({ project_id: "", project_name: "", project_date: "", project_description: "", project_image_url: "", project_website_url: "", project_source_url: ""} as projects)
    const [deleteProjectData, setDeleteProjectData] = useState({ project_id: ""})
    if (session_status == "loading") return (<Loading/>)

    async function handleCreateProject(update?: boolean) {
      var headers = new Headers();
      headers.append("Content-Type", "application/x-www-form-urlencoded");
      console.log(update);
      await fetch(`/api/projects${update ? `?project_id=${addProjectData.project_id}` : ""}`, { method: update ? "PATCH" : "POST", headers: headers, body: qs.encode(addProjectData), redirect: 'follow' }).then(() => {
        router.push("/");
      }).catch((x) => {
        console.log(x);
        router.push("/")
      })
    }
    async function handleDeleteProject() {
      var headers = new Headers();
      headers.append("Content-Type", "application/x-www-form-urlencoded");
      await fetch(`/api/projects?project_id=${deleteProjectData.project_id}`, { method: "DELETE", headers: headers, redirect: 'follow' }).then(() => {
        router.push("/");
      }).catch((x) => {
        console.log(x);
        router.push("/")
      })
    }
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
        <h1 className={"text-6xl max-sm:text-5xl font-montserrat text-primary my-5"}>Projects Dashboard</h1>
    </div>
    <h1 className={"text-4xl max-sm:text-3xl font-montserrat text-primary my-3"}>Add Project</h1>
    <section className={"flex flex-row max-md:flex-col w-full h-fit"}>
      <div className={"flex flex-1 flex-grow flex-shrink flex-col gap-3 justify-start mx-auto text-center font-roboto text-2xl border-2 dark:border-orange-400 border-orange-700 rounded-3xl text p-10 my-10"}>
      <span className={"flex max-md:flex-col justify-between"}><label className={"flex flex-row justify-between max-md:justify-start items-center gap-2"}><BiIdCard/> Project ID</label><input className={"dark:bg-gray-600 bg-gray-300"} type="text" onChange={(e) => setAddProjectData({ ...addProjectData, project_id: e.target.value })} /></span>
      <span className={"flex max-md:flex-col justify-between"}><label className={"flex flex-row justify-between max-md:justify-start items-center gap-2"}><BiBookBookmark/> Project Name</label><input className={"dark:bg-gray-600 bg-gray-300"} type="text" onChange={(e) => setAddProjectData({ ...addProjectData, project_name: e.target.value })} /></span>
      <div className={"flex max-md:flex-col justify-between"}><label className={"flex flex-row justify-between max-md:justify-start items-center gap-2"}><BiMessage/> Project Description</label><textarea className={"dark:bg-gray-600 bg-gray-300"} onChange={(e) => setAddProjectData({ ...addProjectData, project_description: e.target.value })} /></div>
      <span className={"flex max-md:flex-col justify-between"}><label className={"flex flex-row justify-between max-md:justify-start items-center gap-2"}><BiCalendar/> Project Date</label><input className={"dark:bg-gray-600 bg-gray-300"} type="text" onChange={(e) => setAddProjectData({ ...addProjectData, project_date: e.target.value })} /></span>
      <span className={"flex max-md:flex-col justify-between"}><label className={"flex flex-row justify-between max-md:justify-start items-center gap-2"}><BiImageAdd/> Project Image URL</label><input className={"dark:bg-gray-600 bg-gray-300"} type="url" onChange={(e) => setAddProjectData({ ...addProjectData, project_image_url: e.target.value })} /></span>
      <span className={"flex max-md:flex-col justify-between"}><label className={"flex flex-row justify-between max-md:justify-start items-center gap-2"}><BiWifi/> Project Website URL</label><input className={"dark:bg-gray-600 bg-gray-300"} type="url" onChange={(e) => setAddProjectData({ ...addProjectData, project_website_url: e.target.value })} /></span>
      <span className={"flex max-md:flex-col justify-between"}><label className={"flex flex-row justify-between max-md:justify-start items-center gap-2"}><BiCode/> Project Source URL</label><input className={"dark:bg-gray-600 bg-gray-300"} type="url" onChange={(e) => setAddProjectData({ ...addProjectData, project_source_url: e.target.value })} /></span>
      <button onClick={() => handleCreateProject(false) } className={"flex justify-center mx-auto items-center gap-2 text-center text-black dark:text-white p-2 border-2 dark:border-orange-400 border-orange-700 border-opacity-40 rounded-2xl"}><BsDatabaseAdd/> Add Project</button>
      <button onClick={() => handleCreateProject(true) } className={"flex justify-center mx-auto items-center gap-2 text-center text-black dark:text-white p-2 border-2 dark:border-orange-400 border-orange-700 border-opacity-40 rounded-2xl"}><BsDatabaseGear/> Update Project</button>
      </div>
      <div className={"flex flex-1 flex-grow flex-shrink"}>
        <Project project={addProjectData} />
      </div>
    </section>
    <h1 className={"text-4xl max-sm:text-3xl font-montserrat text-primary my-3"}>Delete Project</h1>
    <section className={"flex flex-row max-md:flex-col max-w-lg h-fit"}>
      <div className={"flex flex-1 flex-grow flex-shrink flex-col gap-3 justify-start mx-auto text-center font-roboto text-2xl border-2 dark:border-orange-400 border-orange-700 rounded-3xl text p-10 my-10"}>
      <span className={"flex max-md:flex-col justify-between gap-3"}><label className={"flex flex-row justify-between max-md:justify-start items-center gap-2"}><BiIdCard/> Project ID</label><input className={"dark:bg-gray-600 bg-gray-300"} type="text" onChange={(e) => setDeleteProjectData({ project_id: e.target.value })} /></span>
      <button onClick={() => handleDeleteProject() } className={"flex justify-center mx-auto items-center gap-2 text-center text-black dark:text-white p-2 border-2 dark:border-orange-400 border-orange-700 border-opacity-40 rounded-2xl"}><BsDatabaseDown/> Delete Project</button>
      </div>
    </section>
    
    </main>)
}