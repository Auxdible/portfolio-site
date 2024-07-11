import { projects } from "@prisma/client";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense } from "react";
import { useSpring } from "react-spring";
import { TVModel } from "./Tv";
import { Button } from "@/components/ui/Button";
import { useMediaQuery } from "react-responsive";
import { PresentationControls } from "@react-three/drei";
import { Precompile } from "../Precompile";


interface ProjectProps { 
  readonly project: {
    project_id: string
    name: string
    date: string
    image_url?: string
    website_url?: string
    source_url?: string
    description?: string
    skills?: JSX.Element[],
  } 
}
export default function Project({ project }: ProjectProps) {
    const mobile = useMediaQuery({ query: "(max-width: 640px)" });
    
    return (<div className={"flex max-xl:flex-col-reverse justify-end items-center text-center mb-40 max-w-7xl mx-auto"}>
      <article className="flex-1 self-stretch flex items-center justify-center">
            <div className="flex flex-col items-start max-xl:text-center text-left max-w-md gap-2">
            <span className="text-gray-500 font-bold font-raleway w-full">{project.date}</span>
            <h1 className="text-title text-5xl font-raleway font-bold w-full">{project.name}</h1>
            <p className="font-lato text-xl">{project.description}</p>
            {project.skills && <ul className="flex gap-2 flex-wrap max-w-4xl my-2 max-md:justify-center">
              {project.skills.map((i, index) => 
              <li key={`${index}`} className="flex gap-2">
                <span className="flex items-center gap-2">{i}</span>
                {index != (project.skills?.length || 0) -1 && "•"}
              </li>)}
            </ul>}
            <span className={`flex items-center ${!project.website_url || !project.source_url ? "justify-center" : "justify-between"} gap-2 max-[270px]:flex-col w-full`}>
              {project.website_url && <Button href={project.website_url}>View Project</Button>}
              {project.source_url && <Button href={project.source_url ?? ""}>View Source</Button>}
            </span>
            </div>
            
      </article>
      <div className="max-xl:h-[500px] min-h-[500px] max-xl:w-full xl:flex-1 xl:self-stretch">
      {project.image_url && <Canvas>
        <pointLight position={[0, 0, 10]} intensity={0.5} />
        <perspectiveCamera/>
        <Suspense fallback={null}>
          {mobile ? 
           <PresentationControls
           global={false}
           cursor={true}
           config={{ mass: 2, tension: 500 }}
           snap={{ mass: 4, tension: 1500 }}
           rotation={[0, 0, 0]}
           polar={[-Math.PI / 3, Math.PI / 3]}
           azimuth={[-Math.PI / 5, Math.PI / 5]}>
           <TVModel imageURL={project.image_url} frustumCulled={false} position={[0, 0, 0]} scale={[0.1, 0.1, 0.1]} noRotate/>
         </PresentationControls> :
         <TVModel imageURL={project.image_url} frustumCulled={false} position={[0, 0, -26.5]} scale={[1, 1, 1]}/>}
        </Suspense>
        <Precompile/>
      </Canvas>}
      </div>    
    </div>)
}