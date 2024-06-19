"use client";

import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Titles({ titles }: { titles: string[], duration: number }) {
    const mobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const [text1, setText1] = useState(0);
    const [text2, setText2] = useState(-1);
    const text1Ref = useRef<HTMLSpanElement | null>(null);
    const text2Ref = useRef<HTMLSpanElement | null>(null)
    useEffect(() => {
        const interval = setInterval(() => {
              if (text2 <= text1) {
                if (text1 >= titles.length-1) setTimeout(() => setText1(0), 750);
                setText2((text1+1) > titles.length-1 ? 0 : text1+1);
                text2Ref.current?.animate({ opacity: ['0', '1'], transform: mobile ? ['translateX(-200%)', 'translateX(-100%)'] : ['translateX(-1000px)', 'translateX(-500px)'] }, { duration: 400, easing: 'ease-in-out', fill: 'forwards' })
                text1Ref.current?.animate({ opacity: ['1', '0'], transform: mobile ? ['translateX(0%)', 'translateX(100%)'] : ['translateX(0)', 'translateX(500px)'] }, { duration: 400, easing: 'ease-in-out', fill: 'forwards' })
              } else if (text1 <= text2) {
                if (text2 >= titles.length-1) setTimeout(() => setText2(0), 750);
                setText1((text2+1) > titles.length-1 ? 0 : text2+1);
                text1Ref.current?.animate({ opacity: ['0', '1'], transform: mobile ? ['translateX(-100%)', 'translateX(0%)'] : ['translateX(-500px)', 'translateX(0px)'] }, { duration: 400, easing: 'ease-in-out', fill: 'forwards' })
                text2Ref.current?.animate({ opacity: ['1', '0'], transform: mobile ? ['translateX(-100%)', 'translateX(0%)'] : ['translateX(-500px)', 'translateX(0px)'] }, { duration: 400, easing: 'ease-in-out', fill: 'forwards' });
            }  
          


          
          
          
          
        }, 2400);
        return () => clearInterval(interval);
    }, [text1, text2, titles, mobile]);

    return <div className="flex overflow-hidden lg:w-[500px] max-lg:w-screen h-16 font-montserrat whitespace-nowrap max-lg:self-center">
    <span id="test1" className={"header text-4xl max-sm:text-2xl max-lg:min-w-[100vw] lg:min-w-[500px]"} ref={text1Ref}>{titles[text1]}</span>
    <span className={"header text-4xl max-sm:text-2xl max-lg:min-w-[100vw] lg:min-w-[500px]"} ref={text2Ref}>{titles[text2]}</span>
  </div>;

}