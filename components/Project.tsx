import { projects } from "@prisma/client";
import { motion } from "framer-motion";
type ProjectProps = { project: projects }
export default function Project({ project }: ProjectProps) {
    return (<motion.div initial={{ opacity: 0, transform: "translateY(8rem)" }}
    whileInView={{ opacity: 1, transform: "translateY(0)" }} transition={{ duration: 1.5 }} viewport={{ once: true }} className={"flex flex-col mx-auto justify-center items-center text-center w-full max-w-lg mb-40"}>
          {project.project_image_url ? <img
            src={project.project_image_url}
            alt={"Auxdibot icon"}
            width={200}
            height={200}
          />
          : ""}
          <span className={"flex flex-row justify-center gap-10 w-3/5 my-3"}>
          {project.project_source_url ? <a href={project.project_source_url} className={"flex items-center justify-center flex-1 flex-grow flex-shrink mx-auto border dark:border-orange-400 border-orange-700 p-2 hover:px-3 hover:dark:text-orange-400 hover:text-orange-700 transition-all rounded-lg font-roboto"}><span>View Source</span></a> : ""}
          {project.project_website_url ? <a href={project.project_website_url} className={"flex items-center justify-center flex-1 flex-grow flex-shrink mx-auto border dark:border-orange-400 border-orange-700 p-2 hover:px-3 hover:dark:text-orange-400 hover:text-orange-700 transition-all rounded-lg font-roboto"}><span>View Website</span></a> : ""}
          </span>
          <h1 className={"text-4xl pt-4 font-montserrat text-primary"}>{project.project_name}</h1>
          <p className={"font-roboto text-xl dark:text-gray-400 text-gray-600"}>{project.project_date}</p>
          <p className={"block w-full font-roboto text-xl my-4 break-words"}>{project.project_description}</p>
    </motion.div>)
}