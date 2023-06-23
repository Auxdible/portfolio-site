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
    return (<button aria-label={"Change Theme"} onClick={() => setTheme(theme == "dark" ? "light" : "dark")} className={"max-md:text-xl text-2xl border-2 dark:border-gray-200 border-gray-700 p-2 hover:dark:text-orange-400 hover:text-orange-600 transition-all rounded-xl"}>
            { theme == "dark" ? <FaMoon/> : <FaSun/> }
        </button>)
}