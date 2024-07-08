import { Dancing_Script, Inter, Lato, Montserrat, Raleway, Roboto, Source_Code_Pro } from "next/font/google";

export const raleway = Raleway({ 
    subsets: ["latin"],
    variable: "--font-raleway",
});
export const lato = Lato({ 
    subsets: ["latin"],
    variable: "--font-lato",
    weight: "300",
});
export const roboto = Roboto({
    subsets: ["latin"],
    variable: "--font-roboto",
    weight: "300",
});
export const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: "300",
})
export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: "300",
})
export const dancingScript = Dancing_Script({
    subsets: ["latin"],
    variable: "--font-dancing-script",
})
export const sourceCodePro = Source_Code_Pro({
    subsets: ["latin"],
    variable: "--font-source-code-pro",
    weight: "300",
})
