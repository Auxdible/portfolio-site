import Project from '@/components/home/projects/Project';
import useMetaIAB from '@/lib/hooks/useMetaIAB';
import { projects } from '@prisma/client';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';

export default function Projects(){
    const { data: projects, status: projects_status, error: projects_error } = useQuery(["projects"], async () => await fetch("/api/public/projects").then(async (data) => await data.json().catch(() => [])).catch(() => []));
    return (<div className={"flex flex-col gap-20 w-full"}>
    <motion.h1 initial={{ opacity: 0, transform: "translateY(-8rem)" }}
  whileInView={{ opacity: 1, transform: "translateY(0)" }} transition={{ duration: 1 }} viewport={{ once: true }} className={"text-8xl max-md:text-6xl text-center font-raleway text-title w-full py-2"}>My Projects</motion.h1>
    <section className={"overflow-hidden"}>
      {projects && !projects_error && projects_status == 'success' ? projects.map((project: projects) => (<Project key={project.project_id} project={project} />)) 
      : <p className={"text-xl font-montserrat py-2 text-center text"}>Loading projects...</p>}
    </section>
    </div>);
}