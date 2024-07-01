import Project from '@/components/home/projects/Project';
import { projects } from '@prisma/client';
import { motion } from 'framer-motion';
import { SiExpress, SiMongodb, SiNextdotjs, SiNodedotjs, SiPassport, SiReact, SiTailwindcss, SiThreedotjs } from 'react-icons/si';
import { useQuery } from 'react-query';

export default function Projects(){
    const { data: projects, status: projects_status, error: projects_error } = useQuery(["projects"], async () => await fetch("/api/public/projects").then(async (data) => await data.json().catch(() => [])).catch(() => []));
    return (<div className={"flex flex-col mt-60 w-full"}>
    <motion.h1 initial={{ opacity: 0, transform: "translateY(-8rem)" }}
  whileInView={{ opacity: 1, transform: "translateY(0)" }} transition={{ duration: 1 }} viewport={{ once: true }} className={"text-7xl max-md:text-5xl text-center font-raleway text-title w-full py-2 font-bold"}>My Projects</motion.h1>
    <section className={"overflow-hidden"}>
      <Project key={1} project={{
        date: "Oct 2022 - Present",
        name: "Auxdibot",
        description: "A multipurpose Discord bot containing a suite of utilities for large communities  . The website includes a responsive dashboard, documentation for users to browse, and basic information about the Discord bot.",
        image_url: "/assets/auxdibot_project.png",
        skills: [
          <><SiNextdotjs/> Next.js</>,
          <><SiTailwindcss/> Tailwind CSS</>,
          <><SiExpress/> Express.js</>,
          <><SiReact/> React</>,
          <><SiMongodb/> MongoDB</>,
          <><SiNodedotjs/> Node.js</>,
          <>Discord.js</>,
          <><SiPassport/> Passport.js</>,
        ],
        source_url: "https://github.com/Auxdibot/auxdibot",
        website_url: "https://bot.auxdible.me",
        project_id: "1"
      }} />
      <Project key={2} project={{
        date: "June 2023 - Present",
        name: "Portfolio Website",
        description: "My portfolio website, built using Next.js, Tailwind CSS, and Three.js.",
        image_url: "/assets/portfolio_project.png",
        skills: [
          <><SiNextdotjs/> Next.js</>,
          <><SiTailwindcss/> Tailwind CSS</>,
          <><SiThreedotjs/> Three.js</>,
          <><SiReact/> React</>,
          <><SiMongodb/> MongoDB</>,
          <><SiNodedotjs/> Node.js</>,
          <>Auth.js</>,
        ],
        source_url: "https://github.com/Auxdible/portfolio-site",
        website_url: "https://auxdible.me",
        project_id: "2"
      }} />
      <Project key={3} project={{
        date: "April 2024",
        name: "Weather App",
        description: "An application users can utilize view weather information for specific geographic regions. Built using Next.js, Tailwind CSS, and shadcn/ui.",
        skills: [
          <><SiNextdotjs/> Next.js</>,
          <><SiTailwindcss/> Tailwind CSS</>,
          <><SiThreedotjs/> Three.js</>,
          <><SiReact/> React</>,
          <><SiNodedotjs/> Node.js</>,
          <>shadcn/ui</>,
        ],
        image_url: "/assets/weather_app_project.png",
        source_url: "https://github.com/Auxdible/weather-app",
        website_url: "https://weather.auxdible.me",
        project_id: "3"
      }} />
      <Project key={4} project={{
        date: "Oct 2023",
        name: "Auxdibible",
        description: "An application users can utilize to browse the Bible. Users can sign in and view their highlighted verses and others highlighted verses. Built using Next.js, Tailwind CSS, MongoDB, and next-auth.",
        skills: [
          <><SiNextdotjs/> Next.js</>,
          <><SiTailwindcss/> Tailwind CSS</>,
          <><SiThreedotjs/> Three.js</>,
          <><SiReact/> React</>,
          <><SiNodedotjs/> Node.js</>,
          <><SiMongodb/> MongoDB</>,
          <>Auth.js</>,
        ],
        image_url: "/assets/auxdibible_project.png",
        source_url: "https://github.com/Auxdible/auxdibible",
        project_id: "4"
      }} />
      
    </section>
    </div>);
}