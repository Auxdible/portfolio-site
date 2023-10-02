import Image from "next/image";
import { BiLoaderCircle } from "react-icons/bi";

interface LoadingScreen {
    readonly loaded: boolean;
}

export default function LoadingScreen({ loaded }: LoadingScreen) {
    
    return (<main className={`flex flex-col items-center justify-center absolute top-0 left-0 z-50 dark:bg-black bg-gray-50 w-screen h-screen overflow-hidden ${loaded ? 'animate-loaded' : ""}`}>
            <span className={"flex max-sm:flex-col items-center gap-2 text-6xl max-sm:text-5xl text-title font-raleway"}>
                <Image
                    src={"/icon.png"}
                    alt={"Auxdible's icon"}
                    width={125}
                    height={125}
                />
                Auxdible
            </span>
            
    </main>)
}