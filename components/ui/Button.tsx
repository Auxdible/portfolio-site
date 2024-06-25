import { AnchorHTMLAttributes } from "react";

interface ButtonProps {
    readonly children: JSX.Element | string;
    readonly href?: string;
    readonly className?: string;
}

export function Button({ children, href, className, ...props }: ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
    return <a href={href} {...props} className={"border-2 cursor-pointer border-solid relative border-gray-800 dark:border-gray-200 hover:border-gray-300 dark:hover:border-gray-900 transition-colors px-4 py-2 rounded-full group font-raleway " + className}>
    <div className="absolute inset-0 overflow-hidden rounded-full">
        <div className="absolute group-hover:triangle triangle-reverse rounded-full -inset-5 group-hover:origin-top-right origin-bottom-left scale-0 group-hover:scale-[180%] transition-transform duration-700 ease-in-out bg-gradient-to-bl  group-hover:from-primary from-secondary to-primary from-20% to-50% group-hover:to-secondary"/>
        </div>
    <span className="z-20 relative transition-all duration-700 group-hover:text-white dark:group-hover:text-black select-none group-hover:-translate-y-1">
        {children}
    </span>
    </a>
}