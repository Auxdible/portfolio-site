"use client";

import { useEffect, useRef, useState } from 'react';

const names = ["websites", "Discord bots", "plugins", "cloud applications", "dashboards", "mods", "community projects"];

export function Jobs() {


  const [text1, setText1] = useState(0);
  const [text2, setText2] = useState(-1);
  const text1Ref = useRef<HTMLSpanElement | null>(null);
  const text2Ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (text2 <= text1) {
        if (text1 >= names.length - 1) setTimeout(() => setText1(0), 750);
        setText2((text1 + 1) > names.length - 1 ? 0 : text1 + 1);
        text2Ref.current?.animate({ opacity: [0, 1], transform: ['translateY(-112px)', 'translateY(-48px)'] }, { duration: 400, easing: 'ease-in-out', fill: 'forwards' });
        text1Ref.current?.animate({ opacity: [1, 0], transform: ['translateY(0)', 'translateY(56px)'] }, { duration: 400, easing: 'ease-in-out', fill: 'forwards' });
      } else if (text1 <= text2) {
        if (text2 >= names.length - 1) setTimeout(() => setText2(0), 750);
        setText1((text2 + 1) > names.length - 1 ? 0 : text2 + 1);
        text1Ref.current?.animate({ opacity: [0, 1], transform: ['translateY(-56px)', 'translateY(0px)'] }, { duration: 400, easing: 'ease-in-out', fill: 'forwards' });
        text2Ref.current?.animate({ opacity: [1, 0], transform: ['translateY(-56px)', 'translateY(0px)'] }, { duration: 400, easing: 'ease-in-out', fill: 'forwards' });
      }
    }, 2400);
    return () => clearInterval(interval);
  }, [text1, text2]);
  return <div className="flex flex-col h-14 overflow-hidden relative w-fit text-center">
    <span className={"header text-5xl max-sm:text-3xl h-14 text-title font-raleway font-bold pb-1"} ref={text1Ref}>{names[text1]}</span>
    <span className={"header text-5xl max-sm:text-3xl h-14 text-title font-raleway font-bold max-sm:pt-3 pb-1"} ref={text2Ref}>{names[text2]}</span>
  </div>;
}
