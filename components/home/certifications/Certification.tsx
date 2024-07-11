import { hoverable } from "@/components/CursorProvider";
import { CursorContext } from "@/context/CursorContext";
import { useContext } from "react";
import { BiLinkExternal } from "react-icons/bi";

interface CertificationData {
    readonly name: string;
    readonly author: JSX.Element;
    readonly date: string;
    readonly certification_url?: string;
    readonly skills: JSX.Element[];

}

export default function Certification({ name, author, date, certification_url, skills }: CertificationData) {
    const { setHovered } = useContext(CursorContext);
    return <section className="mb-10 ms-4 flex flex-col flex-grow">
    <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h3>
    <span className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">{author}</span>

    <ul className="flex gap-2 flex-wrap max-w-4xl my-2">
        {skills.map((i, index) => 
        <li key={`${index}`} className="flex gap-2">
            <span className="flex items-center gap-2">{i}</span>
            {index != skills.length-1 && "•"}
        </li>
    )}
    </ul>
    <a {...hoverable(setHovered)} href={certification_url} className="text-gray-600 dark:text-gray-400 flex items-center gap-2 mt-2 underline-offset-4 decoration-dotted underline w-fit">View Credential <BiLinkExternal/></a>
</section>
}