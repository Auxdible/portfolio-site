import { projects } from "@prisma/client";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";

const calc = (x: number, y: number, yc: number, xc: number, s?: number) => [-(y - yc / 2) / 5, (x - xc / 2) / 5, s || 1]
const trans = (x: number, y: number, s: number) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

interface ProjectProps { 
  readonly project: projects 
}
export default function Project({ project }: ProjectProps) {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 0.8] }));
    
    return (<motion.div initial={{ opacity: 0, transform: "translateY(8rem)" }}
    whileInView={{ opacity: 1, transform: "translateY(0)" }} transition={{ duration: 1.5 }} viewport={{ once: true }} className={"flex flex-col mx-auto justify-center items-center text-center w-full max-w-lg mb-40"}>
          {project.project_image_url ? 
          <animated.div
          className={"inline-block relative cursor-pointer rounded-full"}
          onMouseMove={({clientX: x, clientY: y, currentTarget}) => (set({xys: calc(x, y, currentTarget.getBoundingClientRect().top+currentTarget.getBoundingClientRect().bottom, currentTarget.getBoundingClientRect().right+currentTarget.getBoundingClientRect().left, 1.0)}))}
          onMouseLeave={() => set({xys:[0,0,0.8]})}
          style={{
              transform: props.xys.interpolate(trans)
          }}
          >
          <img
            src={project.project_image_url}
            alt={"Auxdibot icon"}
            className={"object-contain select-none"}
            width={240}
            height={240}
          
          />
          </animated.div>
          
          : ""}
          <span className={"flex flex-row justify-center gap-10 w-3/5 my-3"}>
          {project.project_source_url ? <motion.a initial={{ opacity: 0, transform: "translateX(-8rem)" }}
    whileInView={{ opacity: 1, transform: "translateX(0)" }} transition={{ duration: 1.5 }} viewport={{ once: true }} href={project.project_source_url} className={"flex flex-grow-0 group relative items-center justify-center flex-1 flex-shrink mx-auto p-2 hover:px-3 transition-all font-roboto text-lg"}>
      <div className={"absolute inset-0 dark:bg-black bg-white rounded-lg"}></div>
      <div className={"absolute -z-10 -inset-[1px] bg-gradient-to-t from-orange-400 to-red-500 rounded-lg group-hover:-inset-[2px] transition-all"}></div>
      <span className={"z-10 group-hover:text-title w-max"}>View Source</span></motion.a> : ""}
          {project.project_website_url ? <motion.a initial={{ opacity: 0, transform: "translateX(8rem)" }}
    whileInView={{ opacity: 1, transform: "translateX(0)" }} transition={{ duration: 1.5 }} viewport={{ once: true }} href={project.project_website_url} className={"flex flex-grow-0 group relative z-0 items-center justify-center flex-1 flex-shrink mx-auto  p-2 hover:px-3 transition-all rounded-lg font-roboto text-lg"}>
       <div className={"absolute inset-0 dark:bg-black bg-white rounded-lg"}></div>
       <div className={"absolute -z-10 -inset-[1px] bg-gradient-to-t from-orange-400 to-red-500 rounded-lg group-hover:-inset-[2px] transition-all"}></div>
       <span className={"z-10 group-hover:text-title w-max"}>View Website</span></motion.a> : ""}
          </span>
          <h1 className={"text-5xl pt-4 font-montserrat text-title"}>{project.project_name}</h1>
          <p className={"font-roboto text-2xl dark:text-gray-400 text-gray-600"}>{project.project_date}</p>
          <p className={"block w-full font-roboto text-xl my-4 break-words"}>{project.project_description}</p>
    </motion.div>)
}