"use client";
import { useTheme } from "next-themes";
import { FaArrowCircleDown, FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { BiLoaderCircle } from "react-icons/bi";
export default function ThemeButton() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    console.log(mounted);
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return (<button className={"text-3xl border-2 dark:border-gray-200 border-gray-700 p-2 rounded-xl"}>
      { <BiLoaderCircle/> }
  </button>)
    }
    return (<button onClick={() => setTheme(theme == "dark" ? "light" : "dark")} className={"text-3xl border-2 dark:border-gray-200 border-gray-700 p-2 rounded-xl"}>
            { theme == "dark" ? <FaMoon/> : <FaSun/> }
        </button>)
}