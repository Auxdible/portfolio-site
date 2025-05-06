"use client";
import { useScroll, motion, useMotionValueEvent, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";
export default function ScrollBar() {

    const [hookedYPostion, setHookedYPosition] = useState(0 as MotionValue<number> | number);

    useEffect(() => {
        // take scroll position of element with id "content" and set it to hookedYPostion
        const content = document.getElementById("content");
        content?.addEventListener("scroll", (e) => {
            const scrollY = (e.target as HTMLDivElement).scrollTop / ((e.target as HTMLDivElement).scrollHeight - (e.target as HTMLDivElement).clientHeight);
            setHookedYPosition(scrollY);
        });
        return () => {
            content?.removeEventListener("scroll", (e) => {
                const scrollY = (e.target as HTMLDivElement).scrollTop / ((e.target as HTMLDivElement).scrollHeight - (e.target as HTMLDivElement).clientHeight);
                setHookedYPosition(scrollY);
            });
        };
    }, [])

    return <motion.div style={{ scaleX: hookedYPostion }} className={"bg-gradient-to-r z-10 fixed bottom-0 left-0 w-screen from-primary to-secondary h-4"}></motion.div>;
}