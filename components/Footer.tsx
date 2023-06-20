import { BsDiscord, BsGithub, BsTwitch, BsYoutube } from 'react-icons/bs';

export default function Footer() {
    return (
    <footer className={"flex flex-row justify-between w-full dark:bg-gray-900 border-t-2 border-t-gray-700 px-2 h-16 items-center"}>
        <p className={"font-montserrat text"}>© 2023 Steven Primeaux</p>
        <ul className={"flex flex-row gap-3 font-roboto"}>
            <li><a href={"https://github.com/Auxdible"} className={"text-lg transition-all hover:dark:text-orange-400 hover:text-orange-700"}><BsGithub className={"inline-block"}/> <span className={"max-md:hidden"}>GitHub</span></a></li>
            <li><a href={"https://www.youtube.com/channel/UCOE_IxVOdNtejqGqmrdRWZA"} className={"text-lg transition-all hover:dark:text-orange-400 hover:text-orange-700"}><BsYoutube className={"inline-block"}/> <span className={"max-md:hidden"}>YouTube</span></a></li>
            <li><a href={"https://www.twitch.tv/auxdible"} className={"text-lg transition-all hover:dark:text-orange-400 hover:text-orange-700"}><BsTwitch className={"inline-block"}/> <span className={"max-md:hidden"}>Twitch</span></a></li>
            <li><p className={"text-lg"}><BsDiscord className={"md:inline-block max-md:mx-auto"}/> auxdible</p></li>
        </ul>
    </footer>)
}