"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { Glasses } from "./Glasses";
import Titles from "./Titles";
import { randColor } from "@/lib/randColor";
import { Button } from "@/components/ui/Button";
const defaultGradient = { randomColor1: "#f97316", randomColor2: "#ef4444"};
export default function Masthead() {
    const [gradient, setGradient] = useState(defaultGradient);
    const [typeState, setTypeState] = useState(0);
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setInterval(() => {
          if (!mounted) setMounted(true)
        }, 3750)
        
        if (mounted && typeState < "Auxdible".length) {
          setTimeout(() => {
            setTypeState(typeState + 1);
          }, 225)
        }
    }, [typeState, mounted]);
    function changeGradient(randomColor1?: string, randomColor2?: string) {
      const color1 = randomColor1?.replace('#', "") || randColor(),
      color2 = randomColor2?.replace('#', "") || randColor();

      setGradient({ randomColor1: '#' + color1, randomColor2: '#' + color2})
      document.documentElement.style.setProperty('--color-primary', '#' + color1.padStart(6, '0'));
      document.documentElement.style.setProperty('--color-secondary', '#' + color2.padStart(6, '0'));
    }
    return (<header className="flex flex-row max-xl:flex-col max-xl:justify-center xl:justify-end min-h-screen w-full items-center mx-auto overflow-hidden">
    <div className={"flex flex-col justify-center gap-5 xl:flex-1 xl:flex-grow font-roboto text-2xl text w-full"}>
        <section className={"flex flex-col gap-2 max-xl:text-center mx-auto w-fit"}>
        <span className={"flex flex-row justify-start gap-0 text-9xl max-md:text-8xl max-sm:text-6xl pt-4 font-raleway w-[7ch] select-none max-xl:justify-center mx-auto"}>
          <h1 onClick={() => changeGradient()} className={"font-extralight cursor-pointer text-title"}>
            {"Auxdible".split("").slice(0, typeState)}
          </h1>
          {mounted && typeState < "Auxdible".length ? <span className={"animate-blink"}>_</span> : ""}
        </span>
        
        <span className={`transition-all duration-500 delay-500 ${typeState >= "Auxdible".length ? "opacity-100 translate-x-0" : "opacity-0 translate-x-32"}`}><Titles duration={2000} titles={["🧑‍💻 Full Stack Developer", "☁️ AWS Cloud Practicioner", "🎨 Web Designer", "☕ Coffee Addict", "🤖 Discord Bot Developer", "🎮 Hobbyist Gamer"]}/></span>
        {gradient.randomColor1 != defaultGradient.randomColor1 || gradient.randomColor2 != defaultGradient.randomColor2 ? 
        <Button onClick={() => changeGradient(defaultGradient.randomColor1, defaultGradient.randomColor2)} className="w-fit text-lg px-1.5 py-0.5 max-xl:mx-auto cursor-pointer">Reset Colors 😔</Button> : ""}
        </section>
    </div>
    <div className={"flex flex-1 xl:flex-grow flex-shrink max-xl:max-h-[500px] max-xl:w-screen xl:h-screen overflow-hidden"}>
      <div className={"w-full"}>
      { /* I have no idea what this is, how it works, or why it works. I just know it works. 
      That's all you and I need to know. Sure it makes a js pointerId undefined error that anyone can see in the logs. 
      but it doesn't affect the site.
      SO IGNORE IT! */}
      <Canvas ref={(node) => {
        if (node) node.style.setProperty("touch-action", "pan-y", "important")
      }} className={"canvas-wrapper"}  style={ { position: "relative"} }>
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