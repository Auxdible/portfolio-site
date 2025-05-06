"use client";

import { SiAmazonaws, SiAmazondynamodb, SiAxios, SiBootstrap, SiChai, SiCsharp, SiCss3, SiD3Dotjs, SiDocker, SiExpress, SiFigma, SiGit, SiGithub, SiGithubactions, SiGitpod, SiGnubash, SiHtml5, SiIntellijidea, SiJavascript, SiJquery, SiKubernetes, SiMocha, SiMongodb, SiMongoose, SiMysql, SiNextdotjs, SiNginx, SiNodedotjs, SiNpm, SiPostgresql, SiPrisma, SiReact, SiRedux, SiSass, SiTailwindcss, SiThreedotjs, SiTypescript, SiVisualstudio, SiVisualstudiocode, SiWebstorm } from 'react-icons/si';
import { FaJava, FaPython } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Category from './Category';
import { BsCode, BsJournalCode, BsTools } from 'react-icons/bs';

export default function Tools() {
    return (<section className={"flex flex-col gap-20 mt-40 " }>
        <motion.h1 className="text-7xl tracking-wide max-md:text-5xl text-title font-raleway font-bold py-1 text-center">My Tools</motion.h1>
        <div className={"grid gap-y-20 gap-x-5 grid-cols-3 max-2xl:grid-cols-2 max-lg:grid-cols-1 xl:px-34 px-4"}>
            <Category Icon={BsCode} 
            title='Languages & Runtimes'
            items={[
                <><SiJavascript/> JavaScript</>,
                <><SiTypescript/> TypeScript</>,
                <><FaPython/> Python</>,
                <><FaJava/> Java</>,
                <><SiCsharp/> C#</>,
                <><SiHtml5/> HTML</>,
                <><SiCss3/> CSS</>,
                <><SiPostgresql/> PostgreSQL</>,
                <><SiAmazondynamodb/> DynamoDB</>,
                <><SiMysql/> MySQL</>,
                <><SiMongodb/> MongoDB</>,
                <><SiNodedotjs/> Node.js</>,
            ]}
            />
            <Category Icon={BsTools} 
            title='Libraries'
            items={[
                <><SiReact/> React</>,
                <><SiSass/> Sass</>,
                <><SiNextdotjs/> Next.js</>,
                <><SiTailwindcss/> Tailwind CSS</>,
                <><SiRedux/> Redux</>,
                <><SiMocha/> Mocha</>,
                <><SiExpress/> Express.js</>,
                <><SiJquery/> jQuery</>,
                <><SiD3Dotjs/> D3.js</>,
                <><SiThreedotjs/> Three.js</>,
                <><SiChai/> Chai</>,
                <><SiMongoose/> Mongoose</>,
                <><SiPrisma/> Prisma</>,
                <><SiBootstrap/> Bootstrap</>,
                
            ]}
            delay={0.5}
            />
            <Category Icon={BsJournalCode} 
            title='Development Tools'
            items={[
                <><SiAmazonaws/> AWS</>,
                <><SiNginx/> Nginx</>,
                <><SiDocker/> Docker</>,
                <><SiKubernetes/> Kubernetes</>,
                <><SiGit/> Git</>,
                <><SiGithub/> GitHub</>,
                <><SiFigma/> Figma</>, 
                <><SiGnubash/> Bash</>,
            ]}
            delay={1}
            />
        
        </div>
    </section>)
}