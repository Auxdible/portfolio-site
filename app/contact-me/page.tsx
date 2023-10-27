import Link from "next/link";
import { BsDiscord, BsEnvelope, BsGithub, BsInstagram, BsLinkedin, BsSteam, BsTwitch, BsYoutube } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

export default function ContactMe() {
    return (<main className={"flex min-h-screen flex-col items-center justify-center mx-auto"}>
    <div className={"block mx-auto text-center font-roboto text-2xl text my-32 max-w-lg"}>
        <h1 className={"text-6xl max-sm:text-5xl font-montserrat text-title my-5"}>Contact Me</h1>
        <p>Here you can find my email for business inquiries, my GitHub profile containing all my public repositiories, and my socials!</p>
    </div>
    <section className={"flex flex-col w-auto max-sm:w-fit h-fit"}>
      <div className={"relative dark:bg-black bg-gray-50 flex flex-1 flex-grow flex-shrink flex-col gap-3 justify-start mx-auto text-center font-roboto text-2xl max-sm:text-xl rounded-3xl text my-10"}>
      <div className={"absolute -z-10 -inset-[2px] bg-gradient-to-t from-orange-400 to-red-500 rounded-3xl transition-all"}></div>
        <div className={"grid items-center grid-cols-2 max-md:grid-cols-1 grid-flow-row-dense gap-3 overflow-hidden p-8"}>
        <span className={"flex justify-center mx-auto items-center gap-2 text-center bg-discord text-white p-1.5 border-2 border-gray-400 border-opacity-40 opacity-0 animate-fadeLeft rounded-2xl"}><BsDiscord/> auxdible</span>
        <span className={"flex justify-center mx-auto items-center gap-2 text-center dark:bg-gray-900 bg-gray-200 text-black dark:text-white p-1.5 border border-gray-400 border-opacity-40 opacity-0 animate-fadeRight rounded-2xl"}><BsEnvelope className={"text-orange-400"}/> auxdible@gmail.com</span>
        <Link href={"https://www.linkedin.com/in/steven-primeaux/"} className={"flex justify-center mx-auto items-center gap-2 text-center bg-linkedin text-white p-1.5 fade-left opacity-0 animate-fadeLeftDelay1 rounded-2xl"}><BsLinkedin/> Steven Primeaux</Link>
        <Link href={"https://github.com/Auxdible"} className={"flex justify-center mx-auto items-center gap-2 text-center bg-gray-900 text-white p-1.5 border border-gray-400 border-opacity-40 opacity-0 animate-fadeRightDelay1 rounded-2xl"}><BsGithub/> Auxdible</Link>
        <Link href={"https://www.youtube.com/channel/UCOE_IxVOdNtejqGqmrdRWZA"} className={"flex justify-center mx-auto items-center gap-2 text-center bg-youtube text-white p-1.5 opacity-0 animate-fadeLeftDelay2 rounded-2xl"}><BsYoutube/> @Auxdible</Link>
        <Link href={"https://www.twitch.tv/auxdible"} className={"flex justify-center mx-auto items-center gap-2 text-center bg-twitch text-white p-1.5 opacity-0 animate-fadeRightDelay2 rounded-2xl"}><BsTwitch/> auxdible</Link>
        <Link href={"https://www.instagram.com/auxdible/"} className={"flex justify-center mx-auto items-center gap-2 text-center bg-gradient-to-r from-instagram1 via-instagram2 to-instagram3 text-white p-1.5 fade-left opacity-0 animate-fadeLeftDelay3 rounded-2xl"}><BsInstagram/> auxdible</Link>
        <Link href={"https://leetcode.com/Auxdible/"} className={"flex justify-center mx-auto items-center gap-2 text-center bg-amber-500 text-white p-1.5 fade-left opacity-0 animate-fadeRightDelay3 rounded-2xl"}><SiLeetcode/> Auxdible</Link>
        </div>
      </div>
    </section>
    </main>)
}