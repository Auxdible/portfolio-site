import {motion} from 'framer-motion';
import { Jobs } from './Jobs';
import { Button } from '../ui/Button';
export default function AboutMe() {
    return (<section className='gap-10 flex flex-col items-center relative'>

      <motion.div className='text-4xl max-sm:text-3xl max-w-6xl line-clamp-5 mx-auto font-lato leading-[3.5rem] flex flex-col items-center gap-10'>
        <span className='text-center'>Hello! My name is <span className='text-title font-raleway'>Steven Primeaux</span>, a self-taught Full Stack Developer with three years of experience developing web-based applications.</span>
        <span className='flex flex-col gap-2 items-center mx-auto text-center leading-none'><span>I 
          <span className="font-cursive"> design</span> and 
          <span className="font-code text-gray-900 p-1 dark:text-gray-200  leading-none">&lt;develop/&gt;</span>
        </span><Jobs/></span></motion.div>
        <span className='flex w-full justify-between max-w-xl max-lg:flex-col max-lg:gap-10 max-lg:items-center'>
        <motion.div>
          <Button href='/contact-me' className='text-2xl font-bold'>Contact Me</Button>
        </motion.div>
        <motion.div>
          <Button className='text-2xl font-bold'>My Resume</Button>
        </motion.div>
        </span>
      </section>)
}