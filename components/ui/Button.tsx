import { CursorContext } from "@/context/CursorContext";
import { AnchorHTMLAttributes, useContext } from "react";
import { hoverable } from "../CursorProvider";

interface ButtonProps {
    readonly children: JSX.Element | (string | JSX.Element)[] | string;
    readonly href?: string;
    readonly className?: string;
    readonly active?: boolean;
    readonly color1?: string;
    readonly color2?: string;
}

export function Button({ children, href, className, active, color1, color2, ...props }: ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
    const { setHovered } = useContext(CursorContext);
    return <a href={href} {...hoverable(setHovered)} {...props} className={`border-2 cursor-pointer border-solid relative ${!active ? "border-gray-800 dark:border-gray-200 hover:border-gray-300 dark:hover:border-gray-900" : "border-gray-300 dark:border-gray-900"} transition-colors px-4 py-2 rounded-full group font-raleway ` + className}>
    <div className="absolute inset-0 overflow-hidden rounded-full">
        <div className={`absolute ${!active ? "group-hover:triangle triangle-reverse" : "triangle" } rounded-full -inset-5 ${!active ? "group-hover:origin-top-right origin-bottom-left" : "origin-top-right" } ${!active ? "group-hover:origin-top-right origin-bottom-left group-hover:scale-[180%] scale-0 " : "origin-top-right scale-[180%]" } transition-transform duration-700 ease-in-out bg-gradient-to-bl  ${!active ? `group-hover:from-${color1 ?? 'primary'} from-${color2 ?? 'secondary'}` : `from-${color1 ?? 'primary'}`} to-${color1 ?? 'primary'} from-20% to-50% ${!active ? `group-hover:to-${color2 ?? 'secondary'}` : `to-${color2 ?? 'secondary'}`}`}/>
        </div>
    <span className={`z-20 relative transition-all duration-700 ${!active ? "group-hover:text-theme group-hover:-translate-y-1" : "-translate-y-1 text-theme"} text-reverse select-none `}>
        {children}
    </span>
    </a>
}