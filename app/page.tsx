"use client";

import Image from 'next/image'
import { motion } from "framer-motion"
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useState } from 'react';
import { Glasses } from '@/components/Glasses';
import { useSession } from 'next-auth/react';
import Footer from '@/components/Footer';

export default function Home() {
  const [gradient, setGradient] = useState({ randomColor1: "#fd644f", randomColor2: "#ff9d00"});
  let { data: session } = useSession();
  function changeGradient() {
    setGradient({ randomColor1: '#' + Math.floor(Math.random()*16777215).toString(16), randomColor2: '#' + Math.floor(Math.random()*16777215).toString(16) })
  }
  return (<>
  <header className="flex flex-row max-md:flex-col min-h-screen w-full items-center mx-auto max-md:my-16 max-md:mb-20 mb-12">
      <div className={"flex flex-col justify-center gap-5 flex-1 flex-grow font-roboto text-2xl text"}>
          <section className={"max-md:text-center mx-auto"}>
          <h1 className={"text-8xl max-sm:text-5xl pt-4 font-montserrat text-primary"}>Auxdible</h1>
          <p className={"text-4xl max-sm:text-2xl font-montserrat py-2"}>Full Stack Developer</p>
          </section>
          <button onClick={() => changeGradient() } className={"mx-auto w-fit border max-sm:text-xl dark:border-orange-400 border-orange-700 p-1 rounded-lg"}>Change glasses gradient 😎</button>
      </div>
      <div className={"flex flex-1 flex-grow flex-shrink max-md:w-screen md:h-screen"}>
        <div className={"w-full"}>
        <Canvas style={ { position: "relative" }}>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
          <ambientLight intensity={1} />
          <perspectiveCamera/>
          <Suspense fallback={null}>
            <Glasses frustumCulled={false} rotation={[89,0,0]} {...gradient} />
          </Suspense>
        </Canvas>
        </div>
      </div>
    </header>
    <motion.div initial={{ opacity: 0, transform: "translateY(-8rem)" }}
  whileInView={{ opacity: 1, transform: "translateY(0)" }} transition={{ duration: 2 }} viewport={{ once: true }} className="flex flex-row max-md:flex-col min-h-screen max-w-5xl items-center mx-auto">
    <h1 className={"text-8xl max-sm:text-5xl pt-4 font-montserrat text-primary flex-1 flex-grow flex-shrink max-md:text-center"}>About<br/>Me</h1>
    <div className={"flex flex-1 flex-grow flex-shrink max-md:w-screen"}>
        <div className={"w-full"}>
          <div className={"text-lg font-montserrat py-2 max-md:text-center text"}>
            <p>Hello! My name is Auxdible. I am a seventeen-year-old Full Stack Developer and student, passionate about crafting innovative and entertaining experiences on the web! I have been studying Full Stack Development for two years and have learned numerous libraries, frameworks, and languages in my coding journey.</p>
            <br/>
            <p>I am experienced with TypeScript, Java, and numerous JavaScript frameworks, such as Next.js and React. Feel free to reach out on Social Media or Discord with any inquiries!</p>
          </div>
        </div>
      </div>
    </motion.div>
    <div className={"flex flex-col gap-40 w-full my-20"}>
    <motion.h1 initial={{ opacity: 0, transform: "translateY(-8rem)" }}
  whileInView={{ opacity: 1, transform: "translateY(0)" }} transition={{ duration: 2 }} viewport={{ once: true }} className={"text-6xl text-center max-sn:text-4xl font-montserrat text-primary"}>My Projects</motion.h1>
    <section>
      {/*TEMPLATE PROJECT!!
      <motion.div initial={{ opacity: 0, transform: "translateY(8rem)" }}
  whileInView={{ opacity: 1, transform: "translateY(0)" }} transition={{ duration: 1.5 }} viewport={{ once: true }} className={"flex flex-col mx-auto justify-center items-center text-center max-w-lg"}>
        <Image
          src={"/auxdibot-icon.png"}
          alt={"Auxdibot icon"}
          width={200}
          height={200}
        />
        <span className={"flex flex-row justify-center gap-10 w-3/5 my-3"}>
        <a href={"https://bot.auxdible.me"} className={"flex items-center justify-center flex-1 flex-grow flex-shrink mx-auto border dark:border-orange-400 border-orange-700 p-2 hover:px-3 hover:dark:text-orange-400 hover:text-orange-700 transition-all rounded-lg font-roboto"}><span>View Site</span></a>
        <a href={"https://github.com/Auxdibot/auxdibot"} className={"flex items-center justify-center flex-1 flex-grow flex-shrink mx-auto border dark:border-orange-400 border-orange-700 p-2 hover:px-3 hover:dark:text-orange-400 hover:text-orange-700 transition-all rounded-lg font-roboto"}><span>View Source</span></a>
        </span>
        <h1 className={"text-4xl pt-4 font-montserrat text-primary"}>Auxdibot</h1>
        <p className={"font-roboto text-xl dark:text-gray-400 text-gray-600"}>10/17/22 - Present</p>
        <p className={"font-roboto text-xl my-4"}>Auxdibot is a multipurpose Discord utility bot created to take your server to the next level. Utilizing much-wanted features like Levels, Suggestions, and Starboard, Auxdibot is a perfect fit for every Discord server!</p>
  </motion.div>*/}
    </section>
    </div>
    <Footer/>
  </>);
    
}
