"use client";
import { motion } from "framer-motion";
import { FaAws, FaFreeCodeCamp, FaMicrosoft } from "react-icons/fa";
import { SiAmazonapigateway, SiAmazoncloudwatch, SiAmazondynamodb, SiAmazonec2, SiAmazonecs, SiAmazoniam, SiAmazonroute53, SiAmazons3, SiAwsamplify, SiAwslambda, SiCsharp, SiCss3, SiD3Dotjs, SiExpress, SiGit, SiGnubash, SiHtml5, SiJavascript, SiJquery, SiJson, SiMocha, SiMongodb, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiRedux, SiSass } from "react-icons/si";
import Certification from "./Certification";

export default function Certificates() {
    return (<section className="gap-20 flex flex-col items-center mt-20">
        <motion.h1 className="text-7xl tracking-wide max-md:text-5xl text-title font-raleway font-bold py-1 text-center">My Certifications</motion.h1>
        <div className="relative border-s max-xl:ml-2 border-gray-400 dark:border-gray-700">
        <Certification
        name="AWS Certified Developer - Associate"
        author={<><FaAws/> Amazon Web Services (AWS)</>}
        date="Dec 2024"
        skills={[
            <><SiAwslambda/> AWS Lambda</>,
            <><SiAmazondynamodb/> Amazon DynamoDB</>,
            <><SiAmazonapigateway/> Amazon API Gateway</>,
            <><SiAmazonec2/> Amazon EC2/EBS</>,
            <><SiAmazons3/> Amazon S3</>,
            <><SiAmazoniam/> Amazon IAM</>,
            <><SiAmazonecs/> Amazon ECS/EKS</>,
            <><SiAmazoncloudwatch/> Amazon CloudWatch</>,
            <><SiAmazonroute53/> Amazon Route 53</>,
            <><SiAwsamplify/> AWS Amplify</>,
            <>Cloud Computing</>,
            <>Software as a Service (SaaS)</>,
            <>Infrastructure as a Service (IaaS)</>,
            <>Platform as a Service (PaaS)</>,
            <><FaAws/> Amazon Web Services (AWS)</>,
            <>Serverless Computing</>,
            <>Cloud Applications</>
        ]}

        certification_url="https://www.credly.com/badges/1b7861b2-87ef-4fed-99a6-ebce7aeca184/"/>
        <Certification
        name="Information Security"
        author={<><FaFreeCodeCamp/> freeCodeCamp</>}
        date="March 2024"
        skills={[
            <>Full-Stack Development</>,
            <><SiJavascript/> JavaScript</>,
            <><SiExpress/> Express.js</>,
            <><SiMongodb/> MongoDB</>,
            <>Quality Assurance</>,
            <><SiHtml5/> HTML</>,
            <><SiNodedotjs/> Node.js</>,
            <>Databases</>,
            <><SiMocha/> Mocha</>,
            <>Back-End Web Development</>,
            <><SiGit/> Git</>
        ]}

        certification_url="https://freecodecamp.org/certification/Auxdible/information-security-v7"/>      
       <Certification
        name="Scientific Computing with Python"
        author={<><FaFreeCodeCamp/> freeCodeCamp</>}
        date="March 2024"
        skills={[
            <><SiPython/> Python</>,
            <>Scientific Computing</>
        ]}

        certification_url="https://freecodecamp.org/certification/Auxdible/scientific-computing-with-python-v7"/>
        <Certification
        name="AWS Certified Cloud Practicioner - Foundational"
        author={<><FaAws/> Amazon Web Services (AWS)</>}
        date="Jan 2024"
        skills={[
            <>Cloud Computing</>,
            <>Software as a Service (SaaS)</>,
            <>Infrastructure as a Service (IaaS)</>,
            <>Platform as a Service (PaaS)</>,
            <><FaAws/> Amazon Web Services (AWS)</>,
            <>Serverless Computing</>,
            <>Cloud Applications</>
        ]}

        certification_url="https://www.credly.com/badges/e33259a7-13a2-405a-9f88-55955affc19d/"/>
        <Certification
        name="Foundational C# with Microsoft"
        author={<><FaFreeCodeCamp/> freeCodeCamp | <FaMicrosoft/> Microsoft</>}
        date="October 2023"
        skills={[
            <><SiCsharp/> C#</>,
        ]}

        certification_url="https://www.freecodecamp.org/certification/Auxdible/foundational-c-sharp-with-microsoft"/>  
        <Certification
        name="Quality Assurance"
        author={<><FaFreeCodeCamp/> freeCodeCamp</>}
        date="July 2023"
        skills={[
            <>Full-Stack Development</>,
            <><SiJavascript/> JavaScript</>,
            <><SiExpress/> Express.js</>,
            <>Quality Assurance</>,
            <><SiHtml5/> HTML</>,
            <><SiNodedotjs/> Node.js</>,
            <><SiMocha/> Mocha</>,
            <>Back-End Web Development</>,
            <><SiGit/> Git</>,
            <>REST APIs</>,

        ]}

        certification_url="https://freecodecamp.org/certification/Auxdible/quality-assurance-v7"/>
        <Certification
        name="Back End Development and APIs"
        author={<><FaFreeCodeCamp/> freeCodeCamp</>}
        date="February 2023"
        skills={[
            <><SiJavascript/> JavaScript</>,
            <><SiExpress/> Express.js</>,
            <><SiMongodb/> MongoDB</>,
            <>Mongoose</>,
            <><SiHtml5/> HTML</>,
            <><SiNodedotjs/> Node.js</>,
            <>Back-End Web Development</>,
            <><SiGit/> Git</>,
            <>REST APIs</>,

        ]}

        certification_url="https://www.freecodecamp.org/certification/Auxdible/back-end-development-and-apis"/>
        <Certification
        name="Relational Database"
        author={<><FaFreeCodeCamp/> freeCodeCamp</>}
        date="February 2023"
        skills={[
            <>Databases</>,
            <><SiGnubash/> Bash</>,
            <><SiGit/> Git</>,
            <><SiPostgresql/> PostgreSQL</>,
            <>SQL</>,

        ]}

        certification_url="https://freecodecamp.org/certification/Auxdible/relational-database-v8"/>
        <Certification
        name="Data Visualization"
        author={<><FaFreeCodeCamp/> freeCodeCamp</>}
        date="January 2023"
        skills={[
            <><SiJavascript/> JavaScript</>,
            <><SiJson/> JSON</>,
            <><SiD3Dotjs/> D3.js</>,
            <>Front-End Development</>,
        ]}

        certification_url="https://freecodecamp.org/certification/Auxdible/data-visualization"/>
        <Certification
        name="Front End Development Libraries"
        author={<><FaFreeCodeCamp/> freeCodeCamp</>}
        date="January 2023"
        skills={[
            <><SiRedux/> Redux.js</>,
            <><SiCss3/> CSS</>,
            <><SiHtml5/> HTML</>,
            <><SiJavascript/> JavaScript</>,
            <><SiJson/> JSON</>,
            <><SiJquery/> jQuery</>,
            <>Web Content</>,
            <><SiReact/> React.js</>,
            <><SiSass/> SASS</>,
            <>Web Design</>,
            <>Front-End Development</>,
        ]}

        certification_url="https://freecodecamp.org/certification/Auxdible/front-end-development-libraries"/>
        <Certification
        name="Responsive Web Design"
        author={<><FaFreeCodeCamp/> freeCodeCamp</>}
        date="November 2022"
        skills={[
            <><SiCss3/> CSS</>,
            <>Web Content</>,
            <><SiHtml5/> HTML</>,
            <>Web Design</>,
            <>Front-End Development</>,
        ]}

        certification_url="https://www.freecodecamp.org/certification/Auxdible/responsive-web-design"/> 
        <Certification
        name="JavaScript Algorithms and Data Structures"
        author={<><FaFreeCodeCamp/> freeCodeCamp</>}
        date="July 2022"
        skills={[
            <><SiJavascript/> JavaScript</>,
            <><SiJson/> JSON</>,
        ]}

        certification_url="https://freecodecamp.org/certification/Auxdible/front-end-development-libraries"/> 
    </div>
        </section>)
}