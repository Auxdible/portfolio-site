"use client";

import { useEffect, useState } from "react";

export default function Titles({ titles, duration }: { titles: string[], duration: number }) {
    const [state, setState] = useState(0);
    useEffect(() => {
        const changeInterval = setInterval(() => {
            setState(state+1 == titles.length ? 0 : state+1);
        }, duration);
        return () => clearInterval(changeInterval);
    }, [duration, state, titles]);

    return (<span className={"overflow-hidden relative w-full block"}>
        <div className={"flex transition-transform overflow-hidden w-[30rem] max-md:w-screen"}>
        {titles.map((i, index) => <p key={index} className={`text-4xl ease-out duration-500 max-md:text-3xl max-sm:text-xl font-montserrat py-2 transition-all flex-grow-0 flex-shrink-0 w-[30rem] max-md:w-screen`} style={{ transform: `translateX(-${state*100}%)`}}>{i}</p>)}
        </div>
    </span>)
}