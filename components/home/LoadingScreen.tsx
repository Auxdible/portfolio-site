import useMetaIAB from "@/lib/hooks/useMetaIAB";
import Image from "next/image";

interface LoadingScreen {
    readonly loaded: boolean;
}

export default function LoadingScreen() {
    return (<section className={`flex flex-col items-center justify-center absolute top-0 left-0 z-[999] dark:bg-black bg-gray-50 w-screen h-[100vh] overflow-hidden`}>
            <span className={`flex items-center font-extralight gap-4 max-md:gap-2 text-5xl animate-pulse`}>
                <div className="h-28 w-28 overflow-hidden z-[100] bg-gray-50 dark:bg-black"><Image
                    src={"/icon.png"}
                    alt={"Auxdible's icon"}
                    width={112}
                    height={112}
                /></div>
                <div className="overflow-hidden relative"><span className="text-title font-raleway z-[90]">Auxdible</span></div>
            </span>
            
    </section>)
}