"use client";
import Image from 'next/image';
import { BsQuestion, BsShieldCheck } from 'react-icons/bs';
import { useQuery } from 'react-query';
type CommentProfileProps = { discord_id: string };

export default function CommentProfile({ discord_id }: CommentProfileProps) {
    const { data: userData } = useQuery(["comment_profile", discord_id], async () => await fetch(`/api/public/profile?discord_id=${discord_id}`).then((data) => data.json()).catch(() => undefined));
    return <span className={"flex flex-row gap-2 text-2xl items-center font-montserrat"}>
    {userData?.admin ? <BsShieldCheck className={"text-4xl"}/> : ""}
    {userData?.image ? 
        <Image
            className={"inline-block rounded-full border-2 dark:border-orange-400 border-orange-600"}
            src={userData.image}
            alt={"Profile image"}
            width={45}
            height={45}
        /> : userData?.admin ? "" : <BsQuestion className={"text-4xl"}/>}
    {userData?.name || "Unknown"}</span>
}