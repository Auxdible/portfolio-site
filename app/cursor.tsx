"use client";
import React, { useEffect, useRef, useState } from 'react';

export function Cursor() {

    const [outlinePos, setOutlinePos] = useState({ x: 0, y: 0 });
    const position = useRef({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            position.current = { x: event.clientX - 3.25, y: event.clientY - 3.25 };
        };
        const handleLinkMouseOver = () => { setHovered(true) };
        const handleLinkMouseOut = () => { setHovered(false) };
        const links = document.querySelectorAll('a, button, *[onclick], *[href], *[role="button"], *[type="button"], *[type="submit"], *.cursor-pointer');
        Array.from(links).forEach(element => {
            element.addEventListener('mouseover', handleLinkMouseOver);
            element.addEventListener('mouseout', handleLinkMouseOut);
        });
        window.addEventListener('mousemove', handleMouseMove);


        const intervalId = setInterval(() => {
            setOutlinePos(prevPos => ({
                x: prevPos.x + ((position.current.x - prevPos.x) / 6) - (hovered ? 5 : 0),
                y: prevPos.y + ((position.current.y - prevPos.y) / 6) - (hovered ? 5 : 0)
            }));
        }, 10);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            Array.from(links).forEach(link => {
                link.removeEventListener('mouseover', handleLinkMouseOver);
                link.removeEventListener('mouseout', handleLinkMouseOut);
            });
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <div
                id="cursor"
                style={{ transform: `translate(${position.current.x}px, ${position.current.y}px)` }}
            ></div>
            <div
                id="outline"
                style={{ transform: `translate(${outlinePos.x - 6}px, ${outlinePos.y - 6}px)`, top: hovered ? "-5px" : 0, left: hovered ? "-5px" : 0, height: hovered ? "30px" : "20px", width: hovered ? "30px" : "20px", borderWidth: hovered ? "2px" : "1px" }}
            ></div>
        </>
    );
}