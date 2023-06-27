"use client";
import { DefaultUser } from "next-auth";
import { DiscordProfile } from "next-auth/providers/discord";
import Image from "next/image";
import Link from "next/link";
import { BsShieldCheck } from "react-icons/bs";
type Props = { user: (DefaultUser & {
    discord_profile?: DiscordProfile | undefined;
}) };
export default function MiniProfile({ user }: Props) {
    console.log(user);
    
    return (
    <Link href={user.discord_profile ? "/auth/signout" : "/dashboard"} className={"flex flex-row justify-center items-center gap-2"}>
        {!user.discord_profile ? <BsShieldCheck/> : ""}
        {user.image ? 
            <Image
                className={"inline-block rounded-full"}
                src={user.image}
                alt={"Profile image"}
                width={30}
                height={30}
            /> : ""}
        {user.name}
    </Link>)
}