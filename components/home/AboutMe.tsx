import {motion} from 'framer-motion';
import { BsCode } from 'react-icons/bs';
export default function AboutMe() {
    return (<div className="flex flex-row max-lg:flex-col justify-center items-center align-middle mx-auto lg:gap-40 overflow-hidden w-full">
    <motion.h1 initial={{ opacity: 0, transform: "translateX(-8rem)" }}
  whileInView={{ opacity: 1, transform: "translateX(0)" }} transition={{ duration: 1 }} viewport={{ once: true }} className={"text-8xl max-md:text-6xl pt-4 font-raleway text-title max-lg:text-center max-lg:my-10 w-fit"}>About<br/>Me</motion.h1>
    <motion.div initial={{ opacity: 0, transform: "translateX(8rem)" }}
  whileInView={{ opacity: 1, transform: "translateX(0)" }} transition={{ duration: 1 }} viewport={{ once: true }}  className={"text-lg font-montserrat py-2 text-center text lg:w-1/3 m-0"}>
            <p className={"text-2xl max-md:text-xl"}>Hello! My name is <span className={"text-title text-3xl"}>Auxdible</span>, otherwise known as Steven Primeaux. I am a seventeen-year-old <span className={"inline-flex flex-row gap-2 font-code items-center justify-start"}><BsCode/><span>Full Stack Developer</span></span> and <code>&lt;Student/&gt;</code>, passionate about crafting <span className={"font-cursive text-3xl"}>innovative</span>, <span className={"font-cursive text-3xl"}>interactive</span> and <span className={"font-cursive text-3xl"}>invigorating</span> experiences on the web! I have been studying Full Stack Development for two years and have learned numerous libraries, frameworks, and languages in my coding journey.</p>
      </motion.div>
    </div>)
}