"use client";
import { CursorContext } from '@/context/CursorContext';
import React, { useContext, useEffect, useRef, useState } from 'react';


export function Cursor() {

    const [outlinePos, setOutlinePos] = useState({ x: -100, y: -100 });
    const position = useRef({ x: -100, y: -100 });
    const {hovered} = useContext(CursorContext);
    const [outside, setOutside] = useState(false);
    const [mounted, setMounted] = useState(false);

    
    useEffect(() => {
        if (!mounted) setMounted(true);
        const handleMouseEnter = () => setOutside(false);
        const handleMouseLeave = () => setOutside(true);
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);
        const handleMouseMove = (event: MouseEvent) => {
            position.current = { x: event.clientX - 3.25, y: event.clientY - 3.25 };
        };
        const intervalId = setInterval(() => {
            if (position.current.x === 0 && position.current.y === 0) alert("BUNGUS");
            setOutlinePos(prevPos => ({
                x: prevPos.x + ((position.current.x - prevPos.x) / 6),
                y: prevPos.y + ((position.current.y - prevPos.y) / 6),
            }));
        }, 10);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
            clearInterval(intervalId);
        };
    }, [mounted])
    
    if (!mounted || ("ontouchstart" in window || navigator.maxTouchPoints > 0)) return null;
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