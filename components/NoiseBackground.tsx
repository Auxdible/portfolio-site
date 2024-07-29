"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function NoiseBackground() {
    const [loaded, setLoaded] = useState<boolean>(false);
    const mobile = useMediaQuery({ maxWidth: '720px' });
    useEffect(() => {
        if (!loaded) setLoaded(true);
    }, [loaded]);
    if (!loaded) return <></>
    if (mobile) return <></>
    return <div className='noise dark:noise-dark fixed -z-10 -top-1/2 -right-1/2 -bottom-1/2 -left-1/2 -translate-x-1/2 overflow-hidden w-[200%] md:h-[200vh]'/>;
}