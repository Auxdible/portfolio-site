"use client";

import { CursorContext } from "@/context/CursorContext";
import { useState } from "react";
export function CursorProvider({ children }: { children: any }) {
    const [hovered, setHovered] = useState(false);
    return <CursorContext.Provider value={{ hovered, setHovered }}>
        {children}
    </CursorContext.Provider>
}
export const hoverable = (setHovered: React.Dispatch<React.SetStateAction<boolean>> | null) => ({
    onMouseEnter: () => setHovered && setHovered(true),
    onMouseLeave: () => setHovered && setHovered(false),  
})