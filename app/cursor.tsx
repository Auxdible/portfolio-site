"use client";
import { CursorContext } from '@/context/CursorContext';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export function CursorContainer() {
    const mobile = useMediaQuery({ query: "(max-width: 1024px)" });
    if (mobile) return <></>;
    return <Cursor/>
}

function Cursor() {
    const [outlinePos, setOutlinePos] = useState({ x: -100, y: -100 });
    const position = useRef({ x: -100, y: -100 });
    const {hovered} = useContext(CursorContext);
    const [outside, setOutside] = useState(false);
    const [mounted, setMounted] = useState(false);
    
    
    useEffect(() => {
        if (!mounted) setMounted(true);
        const handleMouseEnter = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!(target instanceof HTMLHtmlElement)) {
                setOutside(false);
            }
        };

        const handleMouseLeave = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!(target instanceof HTMLHtmlElement)) {
                setOutside(true);
            }
        };
        
        const handleMouseMove = (event: MouseEvent) => {
            position.current = { x: event.clientX - 3.25, y: event.clientY - 3.25 };
        };
        const intervalId = setInterval(() => {
            setOutlinePos(prevPos => ({
                x: prevPos.x + ((position.current.x - prevPos.x) / 4),
                y: prevPos.y + ((position.current.y - prevPos.y) / 4),
            }));
        }, 10);
 
        window.addEventListener("mouseenter", handleMouseEnter);
        window.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener("mouseenter", handleMouseEnter);
            window.removeEventListener("mouseleave", handleMouseLeave);
            clearInterval(intervalId);
        };
    }, [mounted])
    
    if (!mounted) return null;
    return (
        <>
            <div
                id="cursor"
                style={{ transform: `translate(${position.current.x}px, ${position.current.y}px)`, visibility: outside ? "hidden" : "visible" }}
            ></div>
            <div
                id="outline"
                style={{ transform: `translate(${outlinePos.x - 6}px, ${outlinePos.y - 6}px)`, top: hovered ? "-10px" : 0, left: hovered ? "-10px" : 0, height: hovered ? "40px" : "20px", width: hovered ? "40px" : "20px", borderWidth: hovered ? "2px" : "1px", visibility: outside ? "hidden" : "visible" }}
            ></div>
        </>
    );
}