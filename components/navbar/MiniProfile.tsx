"use client";
import { DefaultUser } from "next-auth";
import { DiscordProfile } from "next-auth/providers/discord";
import Image from "next/image";
import Link from "next/link";
import { BsShieldCheck } from "react-icons/bs";
type Props = { user: (DefaultUser & {
    discord_profile?: DiscordProfile | undefined;
    admin?: boolean;
}) };
export default function MiniProfile({ user }: Props) {
    return (
    <Link href={user.discord_profile ? "/auth/signout" : "/dashboard"} className={"flex flex-row justify-center items-center gap-2 break-words"}>
        {user.admin ? <BsShieldCheck/> : ""}
        {user.image ? 
            <Image
                className={"inline-block rounded-full"}
                src={user.image + "?size=32"}
                alt={"Profile image"}
                width={32}
                height={32}
                quality="100"
                priority
            /> : ""}
        Sign out
    </Link>)
}