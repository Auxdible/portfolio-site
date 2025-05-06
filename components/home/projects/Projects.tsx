"use client";
import Project from '@/components/home/projects/Project';
import { motion } from 'framer-motion';
import { SiAmazons3, SiExpress, SiJquery, SiMongodb, SiNextdotjs, SiNodedotjs, SiPassport, SiReact, SiSquarespace, SiTailwindcss, SiThreedotjs } from 'react-icons/si';

export default function Projects(){
    return (<div className={"flex flex-col pt-60 bg-white dark:bg-black w-full"}>
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
          <><SiAmazons3/> Amazon S3</>,
          <>Auth.js</>,
        ],
        source_url: "https://github.com/Auxdible/portfolio-site",
        website_url: "https://auxdible.me",
        project_id: "2"
      }} />
      <Project key={3} project={{
        date: "February 2024 - July 2024",
        name: "Great Bridge Baptist Church",
        description: "(Contributor) The official website for Great Bridge Baptist Church, built with Squarespace, utilizing complex jQuery scripts to accomplish a mega navigation menu.",
        image_url: "/assets/greatbridgebaptist_project.png",
        skills: [
          <><SiSquarespace/> Squarespace</>,
          <><SiJquery/> jQuery</>,
          <>Church Center</>,
          <>Resi</>,
        ],
        website_url: "https://greatbridge.life",
        project_id: "3"
      }} />
      <Project key={4} project={{
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
        project_id: "4"
      }} />
      <Project key={5} project={{
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
        project_id: "5"
      }} />
      
    </section>
    </div>);
}