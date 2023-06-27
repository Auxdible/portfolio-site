"use client";
import { useScroll, motion, useMotionValueEvent, MotionValue } from "framer-motion";
import { useState } from "react";
export default function ScrollBar() {
    const { scrollY, scrollYProgress } = useScroll();
    const [hookedYPostion, setHookedYPosition] = useState(0 as MotionValue<number> | number);
    useMotionValueEvent(scrollY, "change", () => {
        setHookedYPosition(scrollYProgress)
    })
    return <motion.div style={{ scaleX: hookedYPostion }} className={"bg-gradient-to-r fixed bottom-0 left-0 w-screen from-orange-400 to-orange-600 h-4"}></motion.div>;
}