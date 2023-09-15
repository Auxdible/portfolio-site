"use client";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { BiLoaderCircle } from "react-icons/bi";
export default function ThemeButton() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    useEffect(() => {
      if (!mounted) setMounted(true)
    }, [mounted])
    if (!mounted) {
      return (<button className={"max-md:text-xl text-2xl border-2 dark:border-gray-200 border-gray-700 p-2 rounded-xl animate-pulse "}>
      { <BiLoaderCircle/> }
  </button>)
    }
    return (<button aria-label={"Change Theme"} onClick={() => setTheme(theme == "dark" ? "light" : "dark")} className={"group h-[40px] w-[40px] border-2 dark:border-gray-200 border-gray-700 dark:bg-black bg-white dark:hover:text-orange-400 hover:text-orange-700 relative transition-all rounded-xl"}>
            <div className={"overflow-hidden relative block"}>
              <div className={"flex flex-col items-center transition-transform overflow-hidden h-[39px] rounded-xl"} >
              <span className={`flex items-center text-2xl ease-out max-sm:text-xl flex-grow-0 flex-shrink-0 h-[39px] ${theme == "dark" ? "animate-themeUp" : "animate-themeDown"}`}>
              <FaMoon />
              </span>
              <span className={`flex items-center text-2xl ease-out max-sm:text-xl flex-grow-0 flex-shrink-0 h-[39px] ${theme == "light" ? "animate-theme2Up" : "animate-theme2Down"}`}>
              <FaSun />
              </span>
              </div>
              
            </div>
        </button>)
}