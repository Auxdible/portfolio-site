import { BiLoaderCircle } from "react-icons/bi";

export default function Loading() {
    return (<main className="flex min-h-screen flex-col items-center justify-center max-w-lg mx-auto">
    <div className={"block mx-auto text-center font-roboto text"}>
        <BiLoaderCircle className={"animate-spin text-8xl mx-auto "}/>
        <h1 className={"text-4xl p-4 text-orange font-montserrat text-primary"}>Loading...</h1>
    </div>
  </main>);
}