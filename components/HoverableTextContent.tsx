import { ReactNode } from "react";

export default function HoverableTextContent({ className, children, hoverContent, hoverClass }: { className?: string, children: ReactNode, hoverContent: ReactNode, hoverClass?: string }) {
    return <span className={`group relative ${className}`}><span className={`group-hover:scale-100 scale-0 ${hoverClass}`}>{hoverContent}</span>{children}</span>
}