"use client";
import {motion} from 'framer-motion';
import { Jobs } from './Jobs';
import { Button } from '../ui/Button';
import { SiNextdotjs, SiReact } from 'react-icons/si';
import { dancingScript, sourceCodePro } from '@/app/fonts';
import { Marquee } from '../ui/marquee';
export default function AboutMe() {
    return (<section className={`gap-10 flex flex-col items-center relative ${sourceCodePro.variable} ${dancingScript.variable}`}>

      <motion.div className='mx-auto w-full'>
        <div className='max-w-6xl font-lato leading-[3.5rem] text-4xl max-sm:text-3xl line-clamp-5 flex flex-col items-center gap-10 mx-auto mb-6'>
          <span className='text-center'>Hello! My name is <span className='text-title font-raleway'>Steven Primeaux</span>, a Full Stack Developer with three years of experience developing web-based applications using <span className="inline-flex items-center gap-2 align-bottom"><SiNextdotjs/> Next.js</span> and the <span className="inline-flex items-center gap-2 align-bottom"><SiReact/> MERN</span> tech stack.</span>
          <span className='flex flex-col gap-2 items-center mx-auto text-center leading-none'><span>I 
            <span className="font-cursive"> design</span> and 
          <span className="font-code text-gray-900 p-1 dark:text-gray-200  leading-none">&lt;develop/&gt;</span>
        </span>
        
          </span>
        </div>
        <Marquee className={'header text-5xl max-md:text-3xl text-title font-raleway font-bold overflow-y-hidden gap-16 w-fit min-w-0 pr-16 bg-gradient-conic  pb-2'}>
          <span className='whitespace-nowrap'>Discord Bots</span>
          <span className='whitespace-nowrap'>Cloud Applications</span>
          <span className='whitespace-nowrap'>Mods</span>
          <span className='whitespace-nowrap'>Professional Websites</span>
          <span className='whitespace-nowrap'>Plugins</span>
          <span className='whitespace-nowrap'>Community Projects</span>
        </Marquee>
        </motion.div>
      </section>)
}