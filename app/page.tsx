"use client";

import Image from 'next/image'
import { motion } from "framer-motion"
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useState } from 'react';
import { Glasses } from '@/components/Glasses';

export default function Home() {
  const [gradient, setGradient] = useState({ randomColor1: "#fd644f", randomColor2: "#ff9d00"});
  function changeGradient() {
    setGradient({ randomColor1: '#' + Math.floor(Math.random()*16777215).toString(16), randomColor2: '#' + Math.floor(Math.random()*16777215).toString(16) })
  }
  return (
    <header className="flex flex-row max-md:flex-col min-h-screen w-full items-center mx-auto max-md:my-16">
      <div className={"flex flex-col content-center gap-5 flex-1 flex-grow font-roboto text-2xl text"}>
          <section className={"max-md:text-center mx-auto"}>
          <h1 className={"text-8xl max-sm:text-5xl pt-4 font-montserrat text-primary"}>Auxdible</h1>
          <p className={"text-4xl max-sm:text-2xl font-montserrat py-2"}>Full Stack Developer</p>
          </section>
          <button onClick={() => changeGradient() } className={"mx-auto w-fit border italic max-sm:text-xl dark:border-orange-400 border-orange-700 p-1 rounded-lg"}>Change glasses gradient 😎</button>
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
  )
}
