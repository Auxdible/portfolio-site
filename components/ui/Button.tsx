
interface ButtonProps {
    readonly children: JSX.Element | string;
    readonly href?: string;
    readonly className?: string;
}

export function Button({ children, href, className }: ButtonProps) {
    return <a href={href} className={"border-2 border-solid relative border-gray-800 dark:border-gray-200 hover:border-gray-300 dark:hover:border-gray-900 transition-colors px-4 py-2 rounded-full group font-raleway " + className}>
    <div className="absolute inset-0 overflow-hidden rounded-full"><div className="absolute group-hover:triangle triangle-reverse rounded-full -inset-5 group-hover:origin-top-right origin-bottom-left group-hover:rotate-0 scale-0 group-hover:scale-[180%] transition-transform duration-700 ease-in-out bg-gradient-to-bl from-orange-500 to-50% to-red-500"/></div>
    <span className="z-50 relative transition-colors duration-700 group-hover:text-white dark:group-hover:text-black select-none">
        {children}
    </span>
    </a>
}