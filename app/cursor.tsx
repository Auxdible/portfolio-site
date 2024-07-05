"use client";
import { CursorContext } from '@/context/CursorContext';
import React, { useContext, useEffect, useRef, useState } from 'react';


export function Cursor() {

    const [outlinePos, setOutlinePos] = useState({ x: -100, y: -100 });
    const position = useRef({ x: -100, y: -100 });
    const {hovered} = useContext(CursorContext);
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            position.current = { x: event.clientX - 3.25, y: event.clientY - 3.25 };
        };
        const intervalId = setInterval(() => {

            setOutlinePos(prevPos => ({
                x: prevPos.x + ((position.current.x - prevPos.x) / 6),
                y: prevPos.y + ((position.current.y - prevPos.y) / 6),
            }));
        }, 10);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(intervalId);
        };
    })
    

    return (
        <>
            <div
                id="cursor"
                style={{ transform: `translate(${position.current.x}px, ${position.current.y}px)` }}
            ></div>
            <div
                id="outline"
                style={{ transform: `translate(${outlinePos.x - 6}px, ${outlinePos.y - 6}px)`, top: hovered ? "-10px" : 0, left: hovered ? "-10px" : 0, height: hovered ? "40px" : "20px", width: hovered ? "40px" : "20px", borderWidth: hovered ? "2px" : "1px" }}
            ></div>
        </>
    );
}