import useMetaIAB from "@/lib/hooks/useMetaIAB";
import Image from "next/image";

interface LoadingScreen {
    readonly loaded: boolean;
}

export default function LoadingScreen({ loaded }: LoadingScreen) {
    //const [isIAB] = useMetaIAB();
    return (<section className={`flex flex-col items-center justify-center absolute top-0 left-0 z-50 dark:bg-black bg-gray-50 w-screen h-[100vh] overflow-hidden ${loaded ? 'animate-loaded' : ""}`}>
            <span className={`flex items-center font-extralight gap-2 text-6xl`}>
                <div className="h-32 w-32 overflow-hidden z-[100] bg-gray-50 dark:bg-black"><Image
                    src={"/icon.png"}
                    alt={"Auxdible's icon"}
                    width={128}
                    height={128}
                    className="image-load"
                /></div>
                <span className="text-load text-title font-raleway z-[90]">Auxdible</span>
            </span>
            
    </section>)
}