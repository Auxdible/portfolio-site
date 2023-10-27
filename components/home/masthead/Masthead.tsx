"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Glasses } from "./Glasses";
import Titles from "./Titles";

export default function Masthead() {
    const [gradient, setGradient] = useState({ randomColor1: "#fd644f", randomColor2: "#ff9d00"});
    const [typeState, setTypeState] = useState(0);
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        if (!mounted) setMounted(true)
        if (mounted && typeState < "Auxdible".length) {
          setTimeout(() => {
            setTypeState(typeState + 1);
          }, 225)
        }
    }, [typeState, mounted]);
    function changeGradient() {
        setGradient({ randomColor1: '#' + Math.floor(Math.random()*16777215).toString(16), randomColor2: '#' + Math.floor(Math.random()*16777215).toString(16) })
    }
    return (<header className="flex flex-row max-lg:flex-col min-h-screen w-full items-center mx-auto max-lg:my-16 overflow-hidden">
    <div className={"flex flex-col justify-center gap-5 flex-1 flex-grow font-roboto text-2xl text w-full"}>
        <section className={"flex flex-col gap-2 max-lg:text-center mx-auto w-fit"}>
        <span className={"flex flex-row justify-start gap-0 text-9xl max-md:text-8xl max-sm:text-6xl pt-4 font-raleway w-[7ch] select-none max-lg:justify-center mx-auto"}>
          <h1 onClick={() => changeGradient()} className={"text-title cursor-pointer"}>
            {"Auxdible".split("").slice(0, typeState)}
          </h1>
          {mounted && typeState < "Auxdible".length ? <span className={"animate-blink"}>_</span> : ""}
        </span>
        <span className={`transition-all duration-500 delay-500 ${typeState >= "Auxdible".length ? "opacity-100 translate-x-0" : "opacity-0 translate-x-32"}`}><Titles duration={2000} titles={["🧑‍💻 Full Stack Developer", "☕ Coffee Addict", "🤖 Discord Bot Developer", "🎮 Hobbyist Gamer"]}/></span>
        </section>
    </div>
    <div className={"flex flex-1 flex-grow flex-shrink max-lg:w-screen lg:h-screen overflow-hidden"}>
      <div className={"w-full"}>
      { /* I have no idea what this is, how it works, or why it works. I just know it works. 
      That's all you and I need to know. Sure it makes a js pointerId undefined error that anyone can see in the logs. 
      but it doesn't affect the site.
      SO IGNORE IT! */}
      <Canvas ref={(node) => {
        if (node) node.style.setProperty("touch-action", "pan-y", "important")
      }} className={"canvas-wrapper"} style={ { position: "relative"} }>
        <OrbitControls enableZoom={false} enableDamping={false} enablePan={false} autoRotate autoRotateSpeed={1} />
        <ambientLight intensity={1} />
        <perspectiveCamera/>
        <Suspense fallback={null}>
          <Glasses frustumCulled={false} rotation={[89,0,0]} {...gradient} />
        </Suspense>
      </Canvas>
      </div>
    </div>
  </header>)
}