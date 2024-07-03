
import { BsDiscord, BsGithub, BsTwitch, BsYoutube } from 'react-icons/bs';
import Secret from './Secret';

export default function Footer() {
    return (<>
    <footer className={"flex flex-row justify-center w-full dark:bg-gray-900 border-t-2 border-t-gray-700 px-2 h-9 items-center"}>
        <p className={"font-montserrat text"}>© 2023 Steven Primeaux</p>
        <Secret/>
    </footer>
    </>
    )
}