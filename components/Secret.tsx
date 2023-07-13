"use client";

import { useState } from "react";
import { BiBible, BiExit } from "react-icons/bi";
import { motion } from "framer-motion";
export default function Secret() {
    const [enabled, setEnabled] = useState(false);
    return (<>
    {enabled ? <motion.div initial={{ opacity: 0, top: "100%" }}
  whileInView={{ opacity: 1, top: "0" }} transition={{ duration: 1 }} className={"fixed w-full h-full bg-gray-100 dark:bg-gray-800 z-10"}>
        <motion.div initial={{ opacity: 0, top: "100%" }}
  whileInView={{ opacity: 1, top: "25%" }} transition={{ duration: 1 }} className={"fixed left-1/2 -translate-x-1/2 text-center"}>
            <p className={"text font-roboto text-2xl italic text-center my-4"}>&quot;Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.&quot;</p>
            <h1 className={"dark:text-white text-black font-montserrat text-3xl text-center z-20"}>Colossians 3:23 NIV</h1>
        </motion.div>
        
        <motion.button initial={{ opacity: 0, top: "100%" }}
  whileInView={{ opacity: 1, top: "0.5rem" }} transition={{ duration: 1 }} onClick={() => setEnabled(!enabled) } className={"fixed right-2 w-fit text text-2xl border p-1 rounded-md dark:text-gray-100 text-gray-800 dark:border-orange-400 border-orange-700"}>
            <BiExit/>
        </motion.button>
    </motion.div> : ""}
    <div className={"w-full p-2"}>
    <button onClick={() => setEnabled(!enabled) } className={"w-fit text border p-1 rounded-md ml-1 dark:text-gray-100 text-gray-800 dark:border-orange-400 border-orange-700"}>
        <BiBible/>
    </button>
    </div>
    </>)
}