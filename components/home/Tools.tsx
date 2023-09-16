import { SiChai, SiCss3, SiExpress, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiRedux, SiSass, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { FaFreeCodeCamp } from 'react-icons/fa';
import Link from 'next/link';
import { IconType } from 'react-icons/lib';
import { motion } from 'framer-motion';
import {useMediaQuery} from 'react-responsive';
export function Tool({ Icon, title, description, certifications, delay }: { 
    Icon: IconType, 
    title: string, 
    description: string, 
    certifications?: { Icon: IconType, title: string, link: string }[],
    delay?: number
}) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (<div className={"flex flex-col gap-2 text text-lg items-center text-center font-extralight"}>
    <section className={"flex flex-col gap-2 items-center flex-1 flex-grow flex-shrink"}>
    <motion.span 
    initial={{ transform: "translateY(-2rem)", opacity: 0 }} 
    viewport={{ once: true }} 
    whileInView={{ transform: "translateY(0px)", opacity: 1 }}  
    transition={{ duration: 0.5, delay: !isMobile ? delay || 0 : 0 }}
    ><Icon className={"text-5xl text-black dark:text-white"}/></motion.span>
    <h1 className={"text-3xl max-md:text-2xl font-montserrat text-title"}>{title}</h1>
    </section>
    <section className={"flex flex-col gap-2 justify-between items-center flex-grow flex-shrink-0"}>
    <p>{description}</p>
    {certifications ? <ul>
        {certifications.map((i, index) => 
        <li key={index}>
            <span className={"flex flex-row gap-2 items-center"}>
                • <i.Icon/> 
                {i.link ? <Link href={i.link}>{i.title}</Link> : i.title }
                </span>
        </li>)}
    </ul> : ""}
    </section>
    </div>)
}
export default function Tools() {
    return (<div>
        <h1 className={"text-8xl max-md:text-6xl text-title font-raleway font-medium my-20 w-fit mx-auto"}>My Skills</h1>
        <div className={"grid gap-y-20 gap-x-5 px-5 grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1"}>
            <Tool Icon={SiJavascript} 
            title='JavaScript'
            description='Seasoned in Algorithms and Data Structures, RegEx, Debugging, and Functional Programming.'
            certifications={[
                { 
                    Icon: FaFreeCodeCamp, 
                    title: 'JavaScript Algorithms and Data Structures', 
                    link: 'https://www.freecodecamp.org/certification/Auxdible/javascript-algorithms-and-data-structures' 
                }
            ]}
            />
            <Tool Icon={SiHtml5} 
            title='HTML'
            description='Well-versed in Responsive Web Design, various HTML Elements, Forms, and Metadata.'
            certifications={[
                { 
                    Icon: FaFreeCodeCamp, 
                    title: 'Responsive Web Design', 
                    link: 'https://www.freecodecamp.org/certification/Auxdible/responsive-web-design' 
                }
            ]}
            delay={0.5}
            />
            <Tool Icon={SiCss3} 
            title='CSS'
            description='Proficient in stylesheets, selectors, psuedo-classes, Flexbox, Grid, and most CSS properties. Familiar with designing modern, sleek UI/UX.'
            certifications={[
                { 
                    Icon: FaFreeCodeCamp, 
                    title: 'Responsive Web Design', 
                    link: 'https://www.freecodecamp.org/certification/Auxdible/responsive-web-design' 
                }
            ]}
            delay={1}
            />
            <Tool Icon={SiReact} 
            title='React'
            description='Experience with state, class components, functional components, React Hooks, React Context, and various React libraries, such as TanStack react-query, react-hook-form, and react-router.'
            certifications={[
                { 
                    Icon: FaFreeCodeCamp, 
                    title: 'Front End Development Libraries', 
                    link: 'https://www.freecodecamp.org/certification/Auxdible/front-end-development-libraries' 
                }
            ]}
            />
            <Tool Icon={SiRedux} 
            title='Redux'
            description='Experience utilizing the redux-toolkit library and the Redux store system, including Reducers, Actions, and Slices. Capable of building complex stores containing multiple reducers and actions.'
            certifications={[
                { 
                    Icon: FaFreeCodeCamp, 
                    title: 'Front End Development Libraries', 
                    link: 'https://www.freecodecamp.org/certification/Auxdible/front-end-development-libraries' 
                }
            ]}
            delay={0.5}
            />
            <Tool Icon={SiSass} 
            title='Sass'
            description='Familiar with Mixins, nesting, inheritance, operators, variables, partials, and modules.'
            certifications={[
                { 
                    Icon: FaFreeCodeCamp, 
                    title: 'Front End Development Libraries', 
                    link: 'https://www.freecodecamp.org/certification/Auxdible/front-end-development-libraries' 
                }
            ]}
            delay={1}
            />
            <Tool Icon={SiNodedotjs} 
            title='Node.js'
            description='Skillful in building and deploying complex Full Stack applications using Node.js. Knowledge in package managers, such as npm and yarn, and built-in modules.'
            certifications={[
                { 
                    Icon: FaFreeCodeCamp, 
                    title: 'Back End Development and APIs', 
                    link: 'https://www.freecodecamp.org/certification/Auxdible/back-end-development-and-apis' 
                },
                { 
                    Icon: FaFreeCodeCamp, 
                    title: 'Quality Assurance', 
                    link: 'https://www.freecodecamp.org/certification/Auxdible/quality-assurance-v7' 
                }
            ]}
            />
            <Tool Icon={SiExpress} 
            title='express.js'
            description='Seasoned experience in building expansive RESTful APIs, utilizing the Mongoose ODM or Prisma ORM to interact with a database . Familiar with various express.js libraries, including passport, multer, cors, and express-session.'
            certifications={[
                { 
                    Icon: FaFreeCodeCamp, 
                    title: 'Back End Development and APIs', 
                    link: 'https://www.freecodecamp.org/certification/Auxdible/back-end-development-and-apis' 
                },
                { 
                    Icon: FaFreeCodeCamp, 
                    title: 'Quality Assurance', 
                    link: 'https://www.freecodecamp.org/certification/Auxdible/quality-assurance-v7' 
                }
            ]}
            delay={0.5}
            />
            
            <Tool Icon={SiChai} 
            title='Mocha & Chai'
            description='Experience in creating sophisticated test suites using the Mocha testing framework and Chai assertion library, assisting in developing reliable web applications.'
            certifications={[
                { 
                    Icon: FaFreeCodeCamp, 
                    title: 'Quality Assurance', 
                    link: 'https://www.freecodecamp.org/certification/Auxdible/quality-assurance-v7' 
                }
            ]}
            delay={1}
            />
            <Tool Icon={SiMongodb} 
            title='MongoDB'
            description='Proficient in MongoDB and the MongoDB shell tool, as well as multiple ODMs, such as Prisma and Mongoose, for interacting with databases.'
            certifications={[
                { 
                    Icon: FaFreeCodeCamp, 
                    title: 'Back End Development and APIs', 
                    link: 'https://www.freecodecamp.org/certification/Auxdible/back-end-development-and-apis' 
                },
                { 
                    Icon: FaFreeCodeCamp, 
                    title: 'Quality Assurance', 
                    link: 'https://www.freecodecamp.org/certification/Auxdible/quality-assurance-v7' 
                }
            ]}
            />
            <Tool Icon={SiPostgresql} 
            title='PostgreSQL'
            description='Familiar with PostgreSQL, including basic SQL syntax, queries, table joins, and the command line psql tool.'
            certifications={[
                { 
                    Icon: FaFreeCodeCamp, 
                    title: 'Relational Database', 
                    link: 'https://www.freecodecamp.org/certification/Auxdible/relational-database-v8' 
                }
            ]}
            delay={0.5}
            />
            <Tool Icon={SiGithub} 
            title='Git & GitHub'
            description='Seasoned experience in using the Git VCS and GitHub in developing projects. Familiar with GitHub Actions, Git Stash and rebasing.'
            certifications={[
                { 
                    Icon: FaFreeCodeCamp, 
                    title: 'Relational Database', 
                    link: 'https://www.freecodecamp.org/certification/Auxdible/relational-database-v8' 
                }
            ]}
            delay={1}
            />
            <Tool Icon={SiTypescript} 
            title='TypeScript'
            description='Experience building web applications using TypeScript. Knowledged in Type Unions, Interfaces, Generics, Type Operators and Mapped Types.'
            />
            <Tool Icon={SiNextdotjs} 
            title='Next.js'
            description='Knowledged in building and deploying complex Next.js applications utilizing the Next.js 13 App Router, Route Handlers, and Server Components.'
            delay={0.5}
            />
            <Tool Icon={SiTailwindcss} 
            title='Tailwind CSS'
            description='Proficient with styling elements using Tailwind CSS&apos;s various utility classes, providing a sleek and modern feel to any web application.'
            delay={1}
            />
        </div>
    </div>)
}