import {motion} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function Jobs() {
  const names = ["websites", "Discord bots", "cloud applications", "dashboards", "community projects"]

    const [text1, setText1] = useState(0);
    const [text2, setText2] = useState(-1);
    const text1Ref = useRef<HTMLSpanElement | null>(null);
    const text2Ref = useRef<HTMLSpanElement | null>(null)
    useEffect(() => {
        const interval = setInterval(() => {
              if (text2 <= text1) {
                if (text1 >= names.length-1) setTimeout(() => setText1(0), 750);
                setText2((text1+1) > names.length-1 ? 0 : text1+1);
                text2Ref.current?.animate({ opacity: ['0', '1'], transform: ['translateY(-112px)', 'translateY(-48px)'] }, { duration: 400, easing: 'ease-in-out', fill: 'forwards' })
                text1Ref.current?.animate({ opacity: ['1', '0'], transform: ['translateY(0)', 'translateY(56px)'] }, { duration: 400, easing: 'ease-in-out', fill: 'forwards' })
              } else if (text1 <= text2) {
                if (text2 >= names.length-1) setTimeout(() => setText2(0), 750);
                setText1((text2+1) > names.length-1 ? 0 : text2+1);
                text1Ref.current?.animate({ opacity: ['0', '1'], transform: ['translateY(-56px)', 'translateY(0px)'] }, { duration: 400, easing: 'ease-in-out', fill: 'forwards' })
                text2Ref.current?.animate({ opacity: ['1', '0'], transform: ['translateY(-56px)', 'translateY(0px)'] }, { duration: 400, easing: 'ease-in-out', fill: 'forwards' });
            }  
          


          
          
          
          
        }, 2400);
        return () => clearInterval(interval);
    }, [text1, text2]);
    return <div className="flex flex-col overflow-hidden h-14 w-fit text-center">
    <span id="test1" className={"header text-5xl max-sm:text-3xl h-14 overflow-visible text-title font-raleway font-bold pb-1"} ref={text1Ref}>{names[text1]}</span>  
    <span className={"header text-5xl max-sm:text-3xl h-14 text-title font-raleway font-bold max-sm:pt-2 pb-1"} ref={text2Ref}>{names[text2]}</span>
  </div>;
}
export default function AboutMe() {
    return (<section className='gap-10 flex flex-col items-center'>

      <motion.div className='text-4xl max-sm:text-3xl max-w-6xl line-clamp-5 mx-auto font-lato leading-[3.5rem] flex flex-col items-center gap-10'><span className='text-center'>Hello! My name is <span className='text-title font-raleway'>Steven Primeaux</span>, a self-taught Full Stack Developer with three years of experience developing web-based applications.</span><span className='flex flex-col gap-2 items-center mx-auto text-center leading-none'><span>I <span className="font-cursive">design</span> and <span className="font-code text-gray-900 p-1 dark:text-gray-200  leading-none">&lt;develop/&gt;</span></span><Jobs/></span></motion.div>
      </section>)
}